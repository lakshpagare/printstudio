import Link from "next/link";
import Container from "@/components/common/Container";
import {
//   Instagram,
//   Linkedin,
//   GithubIcon,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              PrintStudio
            </h2>

            <p className="mt-5 leading-7">
              Design premium custom products using our
              Canva-style editor.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/products">Products</Link></li>

              <li><Link href="/design-studio">Design Studio</Link></li>

              <li><Link href="/about">About</Link></li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3">

              <li>T-Shirts</li>

              <li>Hoodies</li>

              <li>Mugs</li>

              <li>Posters</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Pune, Maharashtra
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@printstudio.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 9876543210
              </div>

            </div>

            <div className="mt-6 flex gap-4">

              {/* <Instagram className="cursor-pointer hover:text-white" />

              <Linkedin className="cursor-pointer hover:text-white" />

              <GithubIcon className="cursor-pointer hover:text-white" /> */}

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm">

          © 2026 PrintStudio. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}