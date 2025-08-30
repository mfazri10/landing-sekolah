import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left: copy */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Masa Depan Gemilang Dimulai{" "}
                <span className="text-primary">Di Sini</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0">
                Sekolah unggulan dengan pendidikan berkualitas tinggi untuk mencetak generasi penerus yang berkarakter, berprestasi, dan siap menghadapi masa depan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8">
                  Informasi Pendaftaran
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Virtual Tour
                </Button>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full max-w-xl">
                <Image
                  src="/happy_lady.png"
                  alt="Siswa bersemangat memulai masa depan gemilang"
                  width={900}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fasilitas Unggulan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fasilitas modern yang mendukung proses belajar mengajar yang optimal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Lab Komputer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fasilitas komputer modern dengan akses internet.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Perpustakaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Koleksi buku lengkap dan ruang baca yang nyaman.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Lapangan Olahraga</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fasilitas olahraga lengkap untuk pengembangan fisik.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Lab Sains</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Peralatan sains modern untuk eksperimen dan penelitian.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Mengapa Memilih Sekolah Kami?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Kami menyediakan lingkungan yang mendukung agar siswa dapat berprestasi secara akademik maupun pribadi.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Keunggulan Akademik
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Kurikulum yang menantang dan inspiratif untuk pertumbuhan dan pencapaian siswa.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Tenaga Pendidik Berdedikasi
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Guru-guru berpengalaman yang fokus pada keberhasilan dan pengembangan setiap siswa.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Persiapan Perguruan Tinggi
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Program terstruktur untuk mempersiapkan siswa masuk ke universitas terbaik.
                </p>
              </CardContent>
            </Card>

            <Card className="group border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <CardContent className="pt-6 px-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kegiatan Ekstrakurikuler
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Beragam klub dan kegiatan untuk mendukung pengembangan siswa secara menyeluruh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
              Program Akademik Kami
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Program pendidikan komprehensif untuk menumbuhkan kecerdasan dan pengembangan pribadi siswa.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-blue-800">
                <Image
                  src="/image/elementary-program.webp"
                  alt="Elementary Program"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-blue-800">
                  SD (Sekolah Dasar)
                </h3>
                <p className="mt-2 text-gray-600">
                  Membangun fondasi kuat melalui pengalaman belajar yang interaktif dan menyenangkan.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Mata pelajaran inti</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Program seni dan musik</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Pendidikan jasmani</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className=" mt-4 cursor-pointer text-blue-700 border-blue-600 hover:bg-blue-50"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-blue-700">
                <Image
                  src="/image/middle-program.webp"
                  alt="Middle School Program"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-blue-800">
                  SMP (Sekolah Menengah Pertama)
                </h3>
                <p className="mt-2 text-gray-600">
                  Mengembangkan keterampilan berpikir kritis dan kemandirian belajar.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Mata pelajaran inti lanjutan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Pengenalan bahasa asing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Teknologi dan pemrograman</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className=" mt-4 cursor-pointer text-blue-700 border-blue-600 hover:bg-blue-50"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="h-48 bg-blue-700">
                <Image
                  src="/image/high-program.webp"
                  alt="High School Program"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-blue-800">
                  SMA (Sekolah Menengah Atas)
                </h3>
                <p className="mt-2 text-gray-600">
                  Mempersiapkan siswa untuk perguruan tinggi dan masa depan melalui program akademik yang unggul.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Kelas lanjutan dan persiapan ujian</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Pembimbingan masuk perguruan tinggi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span>Peluang kepemimpinan</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className=" mt-4 cursor-pointer text-blue-700 border-blue-600 hover:bg-blue-50"
                >
                  Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Kata Komunitas Kami
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Simak pengalaman siswa, orang tua, dan alumni tentang sekolah kami.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                      <Image
                        src="/image/bahasa_inggris.jpg"
                        alt="Parent"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Sarah Johnson
                      </h3>
                      <p className="text-sm text-gray-600">Parent</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;Guru-guru di sekolah ini benar-benar peduli pada keberhasilan setiap siswa. Anak saya berkembang pesat secara akademik dan sosial sejak bersekolah di sini.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                      <Image
                        src="/image/it_dan_robotik.jpg"
                        alt="Student"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Michael Chen
                      </h3>
                      <p className="text-sm text-gray-600">Student, Grade 11</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;Saya mendapat banyak kesempatan untuk mengembangkan minat dan bakat saya. Lingkungan yang mendukung membuat saya tumbuh sebagai siswa dan pribadi.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                      <Image
                        src="/image/athletic.webp"
                        alt="Alumni"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Emily Rodriguez
                      </h3>
                      <p className="text-sm text-gray-600">
                        Alumni, Class of 2020
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    &quot;Pendidikan yang saya terima sangat mempersiapkan saya untuk kuliah. Keterampilan berpikir kritis dan etos kerja yang saya pelajari sangat bermanfaat di perguruan tinggi.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
              Agenda & Kegiatan Mendatang
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Ikuti berbagai agenda dan kegiatan menarik di sekolah kami.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="h-44 w-full">
                <Image
                  src="/image/paduan_suara.jpeg"
                  alt="Festival Seni & Kreasi"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      15 Mei 2025
                    </div>
                    <span className="text-sm text-gray-500">
                      4:00 PM - 6:00 PM
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Festival Seni & Kreasi
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Rayakan kreativitas melalui pertunjukan dan pameran karya siswa.
                  </p>
                  <Button
                    variant="outline"
                    className=" mt-4 cursor-pointer text-blue-700 border-blue-600 hover:bg-blue-50"
                  >
                    Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-44 w-full">
                <Image
                  src="/image/labs.webp"
                  alt="Pameran Sains"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      22 Mei 2025
                    </div>
                    <span className="text-sm text-gray-500">
                      6:30 PM - 8:30 PM
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Pameran Sains
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Temukan proyek inovatif dan eksperimen dari para ilmuwan muda sekolah kami.
                  </p>
                  <Button
                    variant="outline"
                    className=" mt-4 cursor-pointer text-blue-700 border-blue-600 hover:bg-blue-50"
                  >
                    Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-44 w-full">
                <Image
                  src="/image/classroom.webp"
                  alt="Open House"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="px-6">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      5 Juni 2025
                    </div>
                    <span className="text-sm text-gray-500">
                      10:00 AM - 12:00 PM
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    Open House
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Kunjungi kampus, bertemu dengan guru, dan pelajari program sekolah untuk calon siswa dan keluarga.
                  </p>
                  <Button
                    variant="outline"
                    className=" mt-4 cursor-pointer text-blue-700 border-blue-600 hover:bg-blue-50"
                  >
                    Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
              Lihat Semua Agenda
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap Bergabung dengan Komunitas Kami?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Jadwalkan tur kampus atau daftar penerimaan hari ini. Kami siap menyambut Anda ke keluarga besar sekolah kami.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-gray-100 cursor-pointer text-base font-bold"
              >
                Daftar Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-blue-700 cursor-pointer text-base font-bold"
              >
                Jadwalkan Tur
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}