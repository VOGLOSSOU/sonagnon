import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const missions = [
  "Encadrer des groupes de réflexion composés de jeunes et réveiller une prise de conscience sur leurs rôles dans l'avenir de la cité lacustre.",
  "Unir pour lutter contre la violation des droits de l'enfant.",
  "Aider les enfants et surtout les jeunes filles à s'épanouir en les sensibilisant, les informant et les éduquant, dans le respect de la Convention Internationale des Droits de l'Enfant (CIDE).",
  "Collaborer avec l'ensemble de la population au développement constructif de la cité en créant une entraide et une harmonie collective.",
  "Créer des liens d'amitié, de solidarité et de fraternité entre les populations lacustres et plus particulièrement avec celle de Sô-Tchanhoué.",
  "Encourager et accompagner moralement, mais aussi aider matériellement et financièrement les projets initiés par des jeunes souvent démunis.",
];

export default function MissionsApropos() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Ce qui nous anime
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos missions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Liste des missions */}
          <div className="space-y-5">
            {missions.map((mission, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
                  <CheckCircle2 size={16} className="text-green-700 group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-gray-600 text-base leading-relaxed">{mission}</p>
              </div>
            ))}
          </div>

          {/* Galerie 3 images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 h-60 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/a-propos/mission-3.png"
                alt="Vie lacustre à Sô-Ava"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/a-propos/mission-1.png"
                alt="Village lacustre sur pilotis"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/a-propos/mission-2.png"
                alt="Pirogues sur le lac Nokoué"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Citation centrée sous les deux colonnes */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed font-medium">
            &ldquo; L&apos;homme du lac ne connaît ni jurisprudence, l&apos;enfant aucune
            protection sociale et la femme gémit sous le poids de maltraitances en tous
            genres. C&apos;est pour cela et dans une approche à la fois de prévention et
            d&apos;urgence, que l&apos;ASo s&apos;est donnée un rôle bien encré. &rdquo;
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-green-600">
            Antonin-Midofi HOUNGA — Responsable de l&apos;Association SONAGNON
          </p>
        </div>

      </div>
    </section>
  );
}
