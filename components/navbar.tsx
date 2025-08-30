"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl">Sekolah Unggulan</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Tentang</Link>
          <Link href="/activity" className="hover:text-primary transition-colors">Kegiatan</Link>
          <Link href="/academic" className="hover:text-primary transition-colors">Akademis</Link>
          <Link href="/news" className="hover:text-primary transition-colors">Berita</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Kontak</Link>
        </div>
        <Button>Daftar Sekarang</Button>
      </div>
    </nav>
  )
}
