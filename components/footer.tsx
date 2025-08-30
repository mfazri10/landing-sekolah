import Link from "next/link";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

import { LuFacebook,
  LuTwitter,
  LuInstagram,
  LuYoutube
 } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary-foreground/80" />
              <span className="text-xl font-bold">Sekolah Unggulan</span>
            </div>
            <p className="mt-4 text-primary-foreground/80">
              Membentuk generasi penerus yang berkarakter dan berprestasi.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <LuFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <LuTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <LuInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
                <LuYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Link Terkait</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-teal-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-teal-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-teal-100 hover:text-white"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-teal-100 hover:text-white"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-teal-100 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-teal-100 hover:text-white">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white">
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-teal-100 hover:text-white">
                  Berita & Kegiatan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-teal-300" />
                </div>
                <span className="ml-2">admin@fazschool.ac.id</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-teal-300" />
                </div>
                <span className="ml-2">(022) 123-4567</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-teal-300" />
                </div>
                <address className="ml-2 not-italic">
                  Kp. Cireundeu RT.05 RW.10
                  <br />
                  Kota Cimahi, Jawa Barat, 40532
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-teal-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-teal-300">
              &copy; {new Date().getFullYear()} Faz School. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-teal-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-teal-300 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-teal-300 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}