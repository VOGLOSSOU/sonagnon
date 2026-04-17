import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ReadMore from "@/components/ui/ReadMore";

const valeurs = [
  "Leadership féminin au cœur de la gouvernance",
  "Solidarité internationale avec Emmaüs",
  "Actions alignées sur les ODD",
  "6 salariés permanents, 30+ bénévoles",
];

export default function AboutHome() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/images/accueil/acceuil-3.jpg"
              alt="Femmes sur une pirogue dans les villages lacustres"
              fill
              className="object-cover"
            />
            {/* Badge flottant */}
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Fondée en</p>
              <p className="text-2xl font-extrabold text-green-700">1998</p>
            </div>
          </div>

          {/* Texte */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
              Qui sommes-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Une ONG enracinée dans les villages du lac Nokoué
            </h2>

            <ReadMore
              text="Créée en 1998 par 15 membres volontaires — 8 femmes et 7 hommes — l'association SONAGNON est une ONG béninoise à but non lucratif, régie par la loi 1901 et enregistrée en 2003. Elle siège à Sô-Tchanhoué, dans la commune de Sô-Ava, au cœur de la zone lacustre du lac Nokoué. Membre en probation d'Emmaüs International, SONAGNON intervient depuis plus de 25 ans aux côtés des Tofinous — les populations lacustres — pour améliorer leurs conditions de vie, défendre les droits des enfants et des femmes, et faciliter l'accès aux services essentiels dans 69 villages isolés."
              maxChars={280}
              className="text-gray-600 leading-relaxed text-base"
            />

            <ul className="mt-6 space-y-2.5">
              {valeurs.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle size={17} className="text-green-600 mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <Link
              href="/a-propos"
              className="mt-8 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            >
              En savoir plus <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
