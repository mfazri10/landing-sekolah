import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Heart, Target } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function about() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
      {/* Hero Section */}
      <section className="bg-primary py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Tentang Sekolah Unggulan
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/80">
              Tradisi keunggulan dalam pendidikan sejak 1997.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Cerita Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Didirikan pada tahun 1997, sekolah kami telah berkembang dari
              sekolah komunitas kecil menjadi lembaga pendidikan terkemuka. Kami
              telah mempertahankan komitmen kami terhadap keunggulan akademik
              dan pengembangan karakter sepanjang sejarah kami.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/image/early-school.webp"
                alt="Sekolah di masa awal"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Awal Mula Kami
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Sekolah kami dimulai dengan visi untuk menyediakan pendidikan
                  berkualitas yang memelihara keunggulan akademik dan
                  pengembangan karakter. Dimulai dengan hanya 50 siswa dan 5
                  guru, kami fokus pada menciptakan lingkungan belajar yang
                  mendukung.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Pertumbuhan dan Pengembangan
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Selama beberapa dekade, kami telah memperluas kampus,
                  meningkatkan kurikulum, dan membangun reputasi yang kuat untuk
                  keunggulan pendidikan. Saat ini, kami melayani lebih dari
                  1.200 siswa dengan fakultas 100 pendidik yang berdedikasi.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Melihat ke Masa Depan
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Saat kami terus berkembang, kami tetap berkomitmen pada
                  prinsip-prinsip pendirian kami sambil merangkul inovasi dalam
                  pendidikan. Tujuan kami adalah mempersiapkan siswa untuk
                  sukses di dunia yang berubah dengan cepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-primary/10 py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Misi & Nilai Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami dipandu oleh misi dan nilai inti yang jelas yang membentuk
              segala sesuatu yang kami lakukan.
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-background p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-center text-foreground">
                Misi Kami
              </h3>
              <p className="mt-4 text-center text-lg text-muted-foreground">
                Menyediakan lingkungan pendidikan yang mendukung dan menantang
                yang memberdayakan siswa untuk menjadi individu yang penuh rasa
                ingin tahu secara intelektual, bertanggung jawab secara sosial,
                dan sadar secara global, siap untuk sukses di perguruan tinggi
                dan seterusnya.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/20 p-3">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      Keunggulan
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Kami berusaha untuk keunggulan dalam semua aspek pendidikan,
                      menantang siswa untuk mencapai potensi tertinggi mereka.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/20 p-3">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      Kasih Sayang
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Kami menumbuhkan empati, kebaikan, dan rasa hormat terhadap
                      orang lain, mendorong siswa untuk memberikan kontribusi
                      positif kepada masyarakat.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/20 p-3">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      Integritas
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Kami menjunjung tinggi standar kejujuran, etika, dan
                      tanggung jawab tertinggi dalam semua tindakan dan keputusan
                      kami.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-background py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Tim Kepemimpinan Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Temui para profesional yang berdedikasi yang memandu visi dan
              operasional sekolah kami.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden p-0">
              <div className="h-64 bg-primary/20">
                <Image
                  src="/image/dr_mfs.png"
                  alt="Kepala Sekolah"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Dr. Muhammad Fazri
                </h3>
                <p className="text-sm text-primary">Kepala Sekolah</p>
                <p className="mt-2 text-muted-foreground">
                  Dengan pengalaman lebih dari 20 tahun di bidang pendidikan,
                  Dr. Muhammad Fazri memimpin sekolah kami dengan visi dan dedikasi.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-64 bg-primary/20">
                <Image
                  src="/image/dr_mf.jpeg"
                  alt="Wakil Kepala Sekolah"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Dr. Fazri Muhammad S
                </h3>
                <p className="text-sm text-primary">Wakil Kepala Sekolah</p>
                <p className="mt-2 text-muted-foreground">
                  Dr. Fazri Muhammad S mengawasi program akademik dan pengembangan siswa
                  dengan keahlian dan kasih sayang.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-64 bg-primary/20">
                <Image
                  src="/image/dr_fazri.png"
                  alt="Dekan Siswa"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Dr. Muhammad Fazri S
                </h3>
                <p className="text-sm text-primary">Dekan Siswa</p>
                <p className="mt-2 text-muted-foreground">
                  Dr. Muhammad Fazri S menciptakan budaya sekolah yang positif dan mendukung
                  kesuksesan dan kesejahteraan siswa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="bg-primary/10 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Fasilitas Kampus Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kampus modern kami menyediakan lingkungan yang ideal untuk belajar
              dan berkembang.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/image/classroom.webp"
                alt="Ruang Kelas Modern"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Ruang Kelas Modern
                </h3>
                <p className="text-white/90">
                  Dilengkapi dengan teknologi terbaru untuk meningkatkan pembelajaran.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/image/labs.webp"
                alt="Laboratorium Sains"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Laboratorium Sains</h3>
                <p className="text-white/90">
                  Fasilitas mutakhir untuk eksplorasi ilmiah secara langsung.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/image/library.webp"
                alt="Perpustakaan & Pusat Media"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Perpustakaan & Pusat Media
                </h3>
                <p className="text-white/90">
                  Sumber daya komprehensif untuk penelitian dan studi mandiri.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/image/athletic.webp"
                alt="Fasilitas Olahraga"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Fasilitas Olahraga
                </h3>
                <p className="text-white/90">
                  Fasilitas olahraga modern yang mendukung pendidikan jasmani
                  dan atletik kompetitif.
                </p>
              </div>
            </div>
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
