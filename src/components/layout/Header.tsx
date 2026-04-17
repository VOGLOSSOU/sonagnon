"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { NavItem } from "@/types";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Remplacer par <Image> quand le logo sera disponible */}
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-green-800 text-lg">SONAGNON</span>
              <span className="block text-xs text-gray-500 uppercase tracking-wide">
                Provocateurs de Changement
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
            <Link
              href="/faire-un-don"
              className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Faire un don
            </Link>
          </nav>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1" />
            <span className="block w-6 h-0.5 bg-current mb-1" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-green-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/faire-un-don"
            className="block mt-2 text-center bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Faire un don
          </Link>
        </div>
      )}
    </header>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-gray-700 hover:text-green-700 text-sm font-medium transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-gray-700 hover:text-green-700 text-sm font-medium">
        {item.label}
        <span className="text-xs">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
