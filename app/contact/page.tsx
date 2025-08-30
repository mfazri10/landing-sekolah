"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Pesan berhasil dikirim!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrorMessage(null);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.');
      }
    } catch (err) {
      setErrorMessage('Tidak dapat terhubung ke server. Silakan coba beberapa saat lagi.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
                Hubungi Kami
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/80">
                Kami ingin mendengar dari Anda. Hubungi kami dengan pertanyaan
                apa pun tentang program atau proses penerimaan kami.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  Hubungi Kami
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Kami di sini untuk menjawab pertanyaan Anda dan memberikan
                  informasi yang Anda butuhkan tentang sekolah kami.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-foreground">
                        Lokasi Kami
                      </h3>
                      <address className="mt-2 not-italic text-muted-foreground">
                        Kp. Cireundeu RT.05 RW.10
                        <br />
                        Kota Cimahi, Jawa Barat, 40532
                        <br />
                        Indonesia
                      </address>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-foreground">
                        Telepon
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Kantor Utama: (022) 123-4567
                        <br />
                        Penerimaan: (022) 123-4568
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-foreground">
                        Email
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Pertanyaan Umum: admin@fazschool.ac.id
                        <br />
                        Penerimaan: admissions@fazschool.ac.id
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-foreground">
                        Jam Kantor
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Senin - Jumat: 08:00 - 16:30
                        <br />
                        Sabtu: 09:00 - 12:00 (Kantor Penerimaan)
                        <br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Kirim Pesan kepada Kami
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Isi formulir di bawah ini dan kami akan membalas Anda secepat mungkin.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-foreground"
                        >
                          Nama Depan
                        </label>
                        <Input
                          id="first-name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Masukkan nama depan Anda..."
                          type="text"
                          required
                          className="mt-1 h-11"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-foreground"
                        >
                          Nama Belakang
                        </label>
                        <Input
                          id="last-name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Masukkan nama belakang Anda..."
                          type="text"
                          required
                          className="mt-1 h-11"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Masukkan email Anda..."
                        required
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground"
                      >
                        Telepon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(022) 123-4567"
                        type="number"
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground"
                      >
                        Subjek
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        type="text"
                        placeholder="Masukkan subjek..."
                        required
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground"
                      >
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={8}
                        placeholder="Tulis pesan Anda di sini..."
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 py-6 text-base font-bold text-primary-foreground"
                    >
                      Kirim Pesan
                    </Button>
                    {errorMessage && (
                      <div className="mt-2 text-sm text-red-600 text-center">
                        {errorMessage}
                      </div>
                    )}
                  </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-primary/10 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Kunjungi Kampus Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami berlokasi strategis di jantung kota. Datang dan lihat
                kampus kami yang indah secara langsung.
              </p>
            </div>

            <div className="mt-12 aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
              {/* This would be replaced with an actual map component in a real implementation */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.906444258074!2d107.542314774996!3d-6.902192267782773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5f0b1f0a0a1%3A0x2e68e5f0b1f0a0a1!2sKota%20Cimahi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1714558338797!5m2!1sid!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 text-center">
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=Kota+Cimahi,+Jawa+Barat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-base cursor-pointer text-primary-foreground">
                  Dapatkan Petunjuk Arah
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Temukan jawaban cepat untuk pertanyaan umum.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Bagaimana cara menjadwalkan tur kampus?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Anda dapat menjadwalkan tur dengan menghubungi Kantor
                    Penerimaan di (022) 123-4568 atau dengan mengisi formulir di
                    website kami.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Apa jam operasional sekolah?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Hari sekolah kami berlangsung dari pukul 08:30 hingga 15:30,
                    Senin hingga Jumat. Perawatan diperpanjang tersedia dari
                    pukul 07:00 hingga 18:00.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Bagaimana cara mengajukan bantuan keuangan?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Aplikasi bantuan keuangan tersedia melalui Kantor Penerimaan
                    kami. Proses aplikasi terpisah dari proses penerimaan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Apakah Anda menawarkan program musim panas?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Ya, kami menawarkan berbagai program musim panas termasuk
                    pengayaan akademik, kamp olahraga, dan program seni. Detail
                    tersedia di website kami.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 sm:py-24">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Siap Bergabung dengan Komunitas Kami?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
                Jadwalkan tur kampus atau daftar untuk penerimaan hari ini. Kami
                berharap dapat menyambut Anda ke keluarga sekolah kami.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 cursor-pointer text-base font-bold"
                >
                  Daftar Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background text-background bg-primary/20 hover:bg-primary/30 cursor-pointer text-base font-bold"
                >
                  Jadwalkan Tur
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
