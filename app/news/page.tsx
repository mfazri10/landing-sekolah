'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

const keseharianData = [
  {
    title: 'Senam Pagi Bersama',
    date: 'Jumat, 29 Agustus 2025',
    image: '/image/athletic.webp',
    desc: 'Setiap hari Jumat, seluruh siswa dan guru mengikuti senam pagi di lapangan sekolah untuk menjaga kesehatan dan kebersamaan.'
  },
  {
    title: 'Kegiatan Literasi',
    date: 'Senin, 29 Agustus 2025',
    image: '/image/library.webp',
    desc: 'Siswa membaca buku di perpustakaan setiap pagi sebelum pelajaran dimulai, membangun budaya literasi sejak dini.'
  },
  {
    title: 'Makan Siang Bersama',
    date: 'Rabu, 28 Agustus 2025',
    image: '/image/classroom.webp',
    desc: 'Momen makan siang bersama di kantin sekolah menjadi waktu yang menyenangkan untuk saling berbagi cerita dan pengalaman.'
  },
  {
    title: 'Ekstrakurikuler Pramuka',
    date: 'Sabtu, 26 Agustus 2025',
    image: '/image/athletic.webp',
    desc: 'Kegiatan pramuka rutin diadakan setiap Sabtu untuk melatih kemandirian dan kerja sama.'
  },
  {
    title: 'Kunjungan Perpustakaan',
    date: 'Kamis, 22 Agustus 2025',
    image: '/image/library.webp',
    desc: 'Siswa kelas 5 melakukan kunjungan ke perpustakaan daerah untuk menambah wawasan.'
  },
  {
    title: 'Belajar di Laboratorium',
    date: 'Selasa, 19 Agustus 2025',
    image: '/image/labs.webp',
    desc: 'Siswa melakukan praktikum sains di laboratorium sekolah dengan bimbingan guru.'
  },
  {
    title: 'Kegiatan Kebersihan Lingkungan',
    date: 'Senin, 18 Agustus 2025',
    image: '/image/classroom.webp',
    desc: 'Siswa dan guru bersama-sama membersihkan lingkungan sekolah setiap awal pekan.'
  },
  {
    title: 'Diskusi Kelompok',
    date: 'Jumat, 15 Agustus 2025',
    image: '/image/classroom.webp',
    desc: 'Siswa berdiskusi kelompok untuk menyelesaikan tugas proyek pelajaran.'
  },
];

const PAGE_SIZE = 6;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(keseharianData.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const currentData = keseharianData.slice(startIdx, endIdx);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section className="bg-primary/10 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl mb-4">
                Berita Keseharian Sekolah
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
                Temukan cerita, aktivitas, dan momen menarik dari keseharian siswa dan guru di sekolah kami.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentData.map((item, idx) => (
                <Card key={item.title + item.date + idx}>
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <Image src={item.image} alt={item.title} width={600} height={450} className="w-full h-55 object-cover" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
                    <h2 className="text-xl font-bold text-primary mb-2">{item.title}</h2>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-10 flex justify-center gap-4">
              <button
                className={`px-4 py-2 rounded-lg border font-bold text-primary bg-background hover:bg-primary/10 disabled:opacity-50`}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                &laquo; Sebelumnya
              </button>
              <span className="px-4 py-2 text-muted-foreground">Halaman {page} dari {totalPages}</span>
              <button
                className={`px-4 py-2 rounded-lg border font-bold text-primary bg-background hover:bg-primary/10 disabled:opacity-50`}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Berikutnya &raquo;
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
