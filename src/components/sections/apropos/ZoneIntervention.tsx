"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const zones = [
  {
    image: "/images/a-propos/zone-texte-1.jpg",
    alt: "Femmes en pirogue sur le lac Nokoué",
    texte:
      "Situé au nord de Cotonou, dans la périphérie de la capitale du Bénin, le lac Nokoué est le plus grand lac du pays, de par sa superficie de 26 000 hectares mais aussi ses ressources halieutiques. Bordé par 67 villages, il abrite sur ses terres, facilement inondables par les eaux du fleuve Ouémé, une « cité lacustre » qui recense 130 000 âmes. Celle-ci, très enclavée par sa position géographique éloignée qui la rend à la fois exceptionnelle mais isolée, ne reçoit que de minces aides gouvernementales.",
  },
  {
    image: "/images/a-propos/zone-texte-2.jpg",
    alt: "Village lacustre en période de crue",
    texte:
      "La période d'août à novembre est propice à d'importantes crues qui désorganisent la vie des habitants du lac et placent la plupart des maisons et des terres dans l'eau. Cette conséquence météorologique contraignante oblige les Tofinous (habitants du lac) à se déplacer en pirogue.",
  },
  {
    image: "/images/a-propos/zone-texte-3.jpg",
    alt: "Habitants se déplaçant en pirogues",
    texte:
      "Les plus riches utiliseront la leur et les autres circuleront en barque de fortune — unique mode de transport au cœur de la cité lacustre, souvent inaccessible pour beaucoup. Les villageoises, elles, n'ont pas le choix que de piloter à bout de bras, pendant des heures, des pirogues pour aller vendre leurs poissons et crevettes sur les marchés de Cotonou et aux alentours.",
  },
  {
    image: "/images/a-propos/zone-texte-4.jpg",
    alt: "Pêcheur avec ses filets sur le lac",
    texte:
      "La population lacustre, qui a fait de la pêche sa principale source de revenus, connaît pendant quatre mois consécutifs des conditions de vie très difficiles, voire déplorables pour les plus pauvres. Les Tofinous, déjà impactés le reste de l'année par une situation sociale drastique, observent, impuissants, chaque année, leurs maigres revenus diminuer encore plus en période de crue.",
  },
  {
    image: "/images/a-propos/zone-texte-5.jpg",
    alt: "Pirogues et habitants au bord du lac",
    texte:
      "On dénombre également un analphabétisme important chez les pêcheurs, rendant la formation presque impossible et l'information obsolète. Des femmes, des hommes, des enfants qui s'adaptent comme ils peuvent à l'instabilité du lac face au comblement et à l'envasement de celui-ci et au choix archaïque et rudimentaire des instruments de pêche.",
  },
];

function ZoneBlock({ item, index }: { item: typeof zones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Image — alterne gauche/droite */}
      <div className={`relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        {/* Numéro discret sur l'image */}
        <div className="absolute top-4 left-4 bg-green-700/80 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
          0{index + 1}
        </div>
      </div>

      {/* Texte */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div className="w-10 h-0.5 bg-green-600 mb-5 rounded" />
        <p className="text-gray-600 text-base leading-relaxed">{item.texte}</p>
      </div>
    </div>
  );
}

export default function ZoneIntervention() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Contexte
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Notre zone{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">d&apos;intervention</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Le lac Nokoué et ses villages — une réalité que SONAGNON affronte chaque jour
            aux côtés des Tofinous.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        {/* Blocs alternés */}
        <div className="space-y-20">
          {zones.map((item, i) => (
            <ZoneBlock key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
