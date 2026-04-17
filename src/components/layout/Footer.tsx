import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Identité */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <span className="block font-bold text-white text-lg">SONAGNON</span>
                <span className="block text-xs text-gray-400 uppercase tracking-wide">
                  Provocateurs de Changement
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Association béninoise à but non lucratif œuvrant pour les populations lacustres
              du lac Nokoué depuis 1998. Membre en probation d&apos;Emmaüs International.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "À propos", href: "/a-propos" },
                { label: "Nos Actions", href: "/actions" },
                { label: "Projets", href: "/projets" },
                { label: "Actualités", href: "/actualites" },
                { label: "Contact", href: "/contact" },
                { label: "Faire un don", href: "/faire-un-don" },
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
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Sô-Tchanhoué, Maison Kossou</li>
              <li>Arrondissement de Vekky</li>
              <li>Commune de Sô-Ava, Bénin</li>
              <li className="pt-2">
                <a href="tel:+22995960357" className="hover:text-green-400">
                  +229 95 96 03 57
                </a>
              </li>
              <li>
                <a href="mailto:midofi@yahoo.fr" className="hover:text-green-400">
                  midofi@yahoo.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Association SONAGNON. Tous droits réservés.</p>
          <p>
            Enregistrement : 2003/0087/DEP-ATL–LITT/SG/SAG-ASSOC · JO n°18 du 15 septembre 2003
          </p>
        </div>
      </div>
    </footer>
  );
}
