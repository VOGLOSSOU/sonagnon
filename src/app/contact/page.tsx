import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessagesSquare } from "lucide-react";
import Link from "next/link";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedin({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'association SONAGNON au Bénin — courrier, téléphone, email, réseaux sociaux.",
};

const coordonnees = [
  {
    icone: MapPin,
    label: "Par courrier",
    valeur: "Association SONAGNON, Boîte postale 794, Abomey-Calavi, Bénin",
    href: null,
  },
  {
    icone: Phone,
    label: "Par téléphone",
    valeur: "(00229) 95 96 03 57\n(00229) 97 09 82 24\n(00229) 21 03 22 97",
    href: "tel:+22995960357",
  },
  {
    icone: Mail,
    label: "Par e-mail",
    valeur: "midofi@yahoo.fr",
    href: "mailto:midofi@yahoo.fr",
  },
  {
    icone: MessagesSquare,
    label: "Par Skype",
    valeur: "@midofi2",
    href: "skype:midofi2?call",
  },
];

const reseaux = [
  {
    icone: IconInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/sonagnon_benin/",
    couleur: "hover:text-pink-600 hover:border-pink-200",
  },
  {
    icone: IconLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/association-sonagnon-benin",
    couleur: "hover:text-blue-600 hover:border-blue-200",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">
            Parlons-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
            Nous contacter
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Une question, un partenariat ou envie de nous rejoindre ?
            Toutes les portes sont ouvertes.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Coordonnées */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-4">
                {coordonnees.map(({ icone: Icon, label, valeur, href }) => (
                  <div
                    key={label}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-gray-800 font-medium hover:text-green-700 transition-colors whitespace-pre-line text-sm leading-relaxed"
                        >
                          {valeur}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium text-sm leading-relaxed">
                          {valeur}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Réseaux sociaux
                </p>
                <div className="flex gap-3">
                  {reseaux.map(({ icone: Icon, label, href, couleur }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 transition-all duration-200 hover:shadow-md ${couleur}`}
                    >
                      <Icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
