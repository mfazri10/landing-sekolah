import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  GraduationCap,
  Palette,
  Calculator,
  Globe,
  Code,
  Microscope,
  Music,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
 
export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
      {/* Hero Section */}
  <section className="bg-primary/90 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Keunggulan Akademik
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80">
              Kurikulum yang ketat dan terstruktur untuk menantang serta
              menginspirasi siswa di setiap jenjang.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
  <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">
              Filosofi Akademik Kami
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Di sekolah kami, kami percaya pendidikan harus menantang dan
              menyenangkan. Program akademik kami dirancang untuk:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-medium">1</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Mengembangkan berpikir kritis
                  </span>
                  melalui pembelajaran berbasis inkuiri dan aktivitas pemecahan masalah.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-medium">2</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Mengembangkan keterampilan komunikasi yang baik
                  </span>
                  melalui menulis, berbicara, dan proyek kolaboratif.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Mendorong kreativitas dan inovasi
                  </span>
                  di semua bidang studi.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-medium">4</span>
                  </div>
                </div>
                <p className="ml-3 text-base text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Mempersiapkan siswa untuk perguruan tinggi dan masa depan
                  </span>
                  dengan pembelajaran yang ketat dan bimbingan personal.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
  <section className="bg-muted/50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Program Akademik Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jelajahi program pendidikan komprehensif yang dirancang untuk
              setiap jenjang perkembangan.
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="elementary" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-full p-1 bg-background rounded-xl">
                <TabsTrigger
                  value="elementary"
                  className={
                    "data-[state=active]:bg-primary data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer rounded-lg"
                  }
                >
                  Sekolah Dasar
                </TabsTrigger>
                <TabsTrigger
                  value="middle"
                  className={
                    "data-[state=active]:bg-primary data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer rounded-lg"
                  }
                >
                  Sekolah Menengah Pertama
                </TabsTrigger>
                <TabsTrigger
                  value="high"
                  className={
                    "data-[state=active]:bg-primary data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer rounded-lg"
                  }
                >
                  Sekolah Menengah Atas
                </TabsTrigger>
              </TabsList>
              <TabsContent value="elementary" className="mt-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative h-80 overflow-hidden rounded-xl bg-background">
                    <Image
                      src="/image/elementary-program.webp"
                      alt="Kelas Sekolah Dasar"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">
                      Sekolah Dasar (Kelas K-5)
                    </h3>
                    <p className="text-muted-foreground">
                      Program sekolah dasar kami berfokus pada membangun fondasi yang kuat
                      di mata pelajaran inti sambil menumbuhkan rasa ingin tahu dan kreativitas.
                      Siswa mengembangkan keterampilan penting dalam membaca, menulis, matematika,
                      ilmu pengetahuan, dan ilmu sosial melalui aktivitas yang menarik dan praktis.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-primary" />
                        <span>Pendekatan literasi terpadu</span>
                      </li>
                      <li className="flex items-center">
                        <Calculator className="mr-2 h-5 w-5 text-primary" />
                        <span>Kurikulum Matematika Singapura</span>
                      </li>
                      <li className="flex items-center">
                        <Palette className="mr-2 h-5 w-5 text-primary" />
                        <span>Program seni terintegrasi</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-primary" />
                        <span>Pengenalan bahasa asing</span>
                      </li>
                    </ul>
                    <Button className="w-fit bg-primary hover:bg-primary/90 cursor-pointer">
                      Pelajari Lebih Lanjut
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="middle" className="mt-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative h-80 overflow-hidden rounded-xl bg-background">
                    <Image
                      src="/image/middle-program.webp"
                      alt="Siswa Sekolah Menengah Pertama"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Sekolah Menengah Pertama (Kelas 6-8)
                    </h3>
                    <p className="text-muted-foreground">
                      Program SMP kami membangun fondasi dari SD sambil membantu siswa
                      mengembangkan kemandirian dan keterampilan berpikir kritis yang lebih baik.
                      Siswa mempelajari materi yang lebih mendalam di semua bidang studi dan mulai
                      menemukan minat serta bakat unik mereka.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-primary" />
                        <span>Studi literatur lanjutan</span>
                      </li>
                      <li className="flex items-center">
                        <Microscope className="mr-2 h-5 w-5 text-primary" />
                        <span>Eksperimen sains langsung</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="mr-2 h-5 w-5 text-primary" />
                        <span>Kursus teknologi dan pemrograman</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-primary" />
                        <span>Pilihan bahasa asing</span>
                      </li>
                    </ul>
                    <Button className="w-fit bg-primary hover:bg-primary/90 cursor-pointer">
                      Pelajari Lebih Lanjut
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="high" className="mt-6">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="relative h-80 overflow-hidden rounded-xl bg-background">
                    <Image
                      src="/image/high-program.webp"
                      alt="Siswa Sekolah Menengah Atas"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Sekolah Menengah Atas (Kelas 9-12)
                    </h3>
                    <p className="text-muted-foreground">
                      Program SMA kami mempersiapkan siswa untuk perguruan tinggi dan masa depan
                      melalui akademik yang ketat, kesempatan kepemimpinan, dan bimbingan personal.
                      Siswa dapat memilih berbagai mata pelajaran, termasuk opsi Advanced Placement,
                      untuk menyesuaikan program sesuai tujuan mereka.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                        <span>Kurikulum persiapan perguruan tinggi</span>
                      </li>
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-primary" />
                        <span>Mata pelajaran Advanced Placement</span>
                      </li>
                      <li className="flex items-center">
                        <Microscope className="mr-2 h-5 w-5 text-primary" />
                        <span>Kesempatan riset</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-primary" />
                        <span>Program studi global</span>
                      </li>
                    </ul>
                    <Button className="w-fit bg-primary hover:bg-primary/90 cursor-pointer">
                      Pelajari Lebih Lanjut
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
  <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Bidang Kurikulum
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kurikulum komprehensif kami memberikan pendidikan yang seimbang
              bagi siswa.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Bahasa & Sastra
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Mengembangkan keterampilan membaca, menulis, berbicara, dan mendengarkan
                    melalui literatur, komposisi, dan komunikasi.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Matematika
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Membangun pemahaman matematika melalui pemecahan masalah, penalaran,
                    dan aplikasi dunia nyata.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Ilmu Pengetahuan
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Mengeksplorasi dunia alam melalui pembelajaran berbasis inkuiri,
                    eksperimen, dan investigasi ilmiah.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Ilmu Pengetahuan Sosial
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Memahami sejarah, geografi, ekonomi, dan kewarganegaraan untuk
                    menjadi warga dunia yang berpengetahuan.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Bahasa Asing
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Mengembangkan kemampuan berbahasa asing dan pemahaman budaya yang beragam.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Seni Visual & Pertunjukan
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Mengekspresikan kreativitas melalui seni, musik, drama, dan program tari.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Teknologi
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Membangun literasi digital dan keterampilan berpikir komputasional
                    untuk dunia modern.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Music className="h-8 w-8 text-primary" />
                  </div>
                    <h3 className="mt-4 text-xl font-bold text-primary">
                    Pendidikan Jasmani
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Mendorong kebugaran jasmani, kesehatan, kerja sama tim, dan kebiasaan hidup sehat.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Support */}
  <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Dukungan Akademik & Pengayaan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami menyediakan sumber daya untuk membantu setiap siswa berhasil
              dan mencapai potensi penuh mereka.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 bg-background rounded-xl">
                  <h3 className="text-xl font-bold text-primary">
                  Layanan Dukungan Pembelajaran
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Spesialis pembelajaran kami menyediakan dukungan individual
                  bagi siswa dengan kebutuhan belajar yang beragam. Layanan
                  meliputi:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Rencana pembelajaran personal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Bimbingan belajar satu-satu</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Pengembangan keterampilan belajar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Akomodasi untuk gaya belajar yang beragam</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 bg-background rounded-xl">
                  <h3 className="text-xl font-bold text-primary">
                  Program Bakat & Berbakat
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Program pengayaan kami menantang siswa berprestasi untuk
                  mengeksplorasi konsep lanjutan dan mengembangkan bakat mereka.
                  Kesempatan meliputi:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Mata pelajaran lanjutan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Proyek riset mandiri</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Kompetisi akademik</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600"></div>
                    <span>Kegiatan pengayaan khusus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="bg-primary py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap untuk Mengetahui Lebih Lanjut?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Jadwalkan pertemuan dengan tim akademik kami untuk membahas bagaimana
              program kami dapat mendukung perjalanan pendidikan anak Anda.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90 cursor-pointer text-base font-bold border border-primary"
              >
                Minta Informasi
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
