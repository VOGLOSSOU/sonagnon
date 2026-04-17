"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-sonagnon.webp"
              alt="Logo SONAGNON"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <div className="leading-tight">
              <span className="block font-extrabold text-green-800 text-base tracking-wide">
                SONAGNON
              </span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                Provocateurs de Changement
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors"
            >
              Nous contacter
            </Link>
          </nav>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-green-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm font-medium text-gray-700 hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
