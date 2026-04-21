import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Identité */}
          <div>
            <div className="mb-4">
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Association béninoise à but non lucratif œuvrant pour les populations lacustres
              du lac Nokoué depuis 1998. Membre en probation d&apos;Emmaüs International.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Nos Actions", href: "/actions" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2.5">
                <MapPin size={15} className="text-green-500 mt-0.5 shrink-0" />
                <span>Sô-Tchanhoué, Maison Kossou — Arrondissement de Vekky, Commune de Sô-Ava, Bénin</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={15} className="text-green-500 mt-0.5 shrink-0" />
                <a href="tel:+22995960357" className="hover:text-green-400">
                  +229 95 96 03 57
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={15} className="text-green-500 mt-0.5 shrink-0" />
                <a href="mailto:midofi@yahoo.fr" className="hover:text-green-400">
                  midofi@yahoo.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Association SONAGNON. Tous droits réservés.</p>
          <p>Enregistrement : 2003/0087/DEP-ATL–LITT/SG/SAG-ASSOC · JO n°18 du 15 sept. 2003</p>
        </div>
      </div>
    </footer>
  );
}
