'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

const keseharianData = [
  {
    title: 'Ekstrakurikuler Pramuka',
    date: 'Sabtu, 30 Agustus 2025',
    image: '/image/pramuka.png',
    desc: 'Kegiatan pramuka rutin diadakan setiap Sabtu untuk melatih kemandirian, kepemimpinan, dan kerja sama antar siswa.'
  },
  {
    title: 'Ekstrakurikuler Basket',
    date: 'Jumat, 29 Agustus 2025',
    image: '/image/game_basket.jpg.jpeg',
    desc: 'Siswa mengikuti latihan basket setiap Jumat sore untuk meningkatkan keterampilan olahraga dan sportivitas.'
  },
  {
    title: 'Ekstrakurikuler Seni Tari',
    date: 'Kamis, 28 Agustus 2025',
    image: '/image/classroom.webp',
    desc: 'Kelompok seni tari berlatih rutin untuk persiapan pentas seni sekolah dan lomba antar sekolah.'
  },
  {
    title: 'Ekstrakurikuler Bahasa Inggris',
    date: 'Rabu, 27 Agustus 2025',
    image: '/image/bahasa_inggris.jpg',
    desc: 'Siswa belajar bahasa Inggris secara interaktif melalui games dan presentasi kelompok.'
  },
  {
    title: 'Ekstrakurikuler Paduan Suara',
    date: 'Selasa, 26 Agustus 2025',
    image: '/image/paduan_suara.jpeg',
    desc: 'Paduan suara sekolah berlatih lagu-lagu nasional dan daerah untuk tampil di acara sekolah.'
  },
  {
    title: 'Ekstrakurikuler IT & Robotik',
    date: 'Senin, 25 Agustus 2025',
    image: '/image/it_dan_robotik.jpg',
    desc: 'Siswa belajar dasar-dasar pemrograman dan merakit robot sederhana di laboratorium komputer.'
  },
  {
    title: 'Ekstrakurikuler Voli',
    date: 'Minggu, 24 Agustus 2025',
    image: '/image/voli.jpg',
    desc: 'Latihan voli diadakan setiap minggu pagi untuk membangun kekompakan dan daya tahan fisik.'
  },
  {
    title: 'Ekstrakurikuler Karya Ilmiah Remaja',
    date: 'Sabtu, 23 Agustus 2025',
    image: '/image/labs.webp',
    desc: 'Kelompok KIR melakukan penelitian sederhana dan presentasi hasil karya di depan kelas.'
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
                Kegiatan Keseharian Sekolah
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
