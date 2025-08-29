import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">Sekolah Unggulan</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Beranda</a>
            <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
            <a href="#programs" className="hover:text-primary transition-colors">Program</a>
            <a href="#facilities" className="hover:text-primary transition-colors">Fasilitas</a>
            <a href="#contact" className="hover:text-primary transition-colors">Kontak</a>
          </div>
          <Button>Daftar Sekarang</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Masa Depan Gemilang Dimulai{" "}
            <span className="text-primary">Di Sini</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sekolah unggulan dengan pendidikan berkualitas tinggi untuk mencetak generasi penerus yang berkarakter, berprestasi, dan siap menghadapi masa depan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Informasi Pendaftaran
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Sekolah Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sejak 1995, kami telah berkomitmen untuk memberikan pendidikan terbaik yang mengembangkan potensi setiap siswa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Menjadi sekolah unggulan yang menghasilkan lulusan berkarakter, berprestasi, dan mampu bersaing di era global.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Menyelenggarakan pendidikan berkualitas dengan pendekatan holistik yang mengembangkan potensi akademik dan non-akademik.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Nilai</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Integritas, Kreativitas, Kolaborasi, dan Kepedulian menjadi fondasi dalam setiap aktivitas pembelajaran.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Pendidikan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai program unggulan yang dirancang untuk mengembangkan potensi maksimal setiap siswa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>TK & PAUD</CardTitle>
                <CardDescription>Usia 3-6 tahun</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pembelajaran melalui bermain yang menyenangkan dan edukatif.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>SD</CardTitle>
                <CardDescription>Kelas 1-6</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pengembangan dasar akademik dan karakter yang kuat.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>SMP</CardTitle>
                <CardDescription>Kelas 7-9</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Persiapan menuju pendidikan menengah dengan kurikulum terpadu.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tertarik untuk bergabung? Hubungi kami untuk informasi lebih lanjut.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Alamat</h4>
                  <p className="text-muted-foreground">Jl. Pendidikan No. 123, Jakarta</p>
                </div>
                <div>
                  <h4 className="font-semibold">Telepon</h4>
                  <p className="text-muted-foreground">(021) 1234-5678</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">info@sekolahunggulan.sch.id</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Formulir Kontak</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Masukkan email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telepon</Label>
                    <Input id="phone" placeholder="Masukkan nomor telepon" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea id="message" placeholder="Tulis pesan Anda" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sekolah Unggulan</h3>
              <p className="text-primary-foreground/80">
                Membentuk generasi penerus yang berkarakter dan berprestasi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Program</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>TK & PAUD</li>
                <li>Sekolah Dasar</li>
                <li>Sekolah Menengah</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tautan</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Beranda</li>
                <li>Tentang</li>
                <li>Program</li>
                <li>Kontak</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sosial Media</h4>
              <div className="flex space-x-4">
                <span className="text-primary-foreground/80">Facebook</span>
                <span className="text-primary-foreground/80">Instagram</span>
                <span className="text-primary-foreground/80">YouTube</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 Sekolah Unggulan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
