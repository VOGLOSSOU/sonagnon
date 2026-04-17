"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Users, CalendarDays, Trophy, Lightbulb, Handshake } from "lucide-react";

const strategies = [
  {
    icone: Users,
    mot: "Collaborer",
    resume: "Étroitement avec les aînés et les personnes âgées",
    detail:
      "Lors de tables rondes traitant de sujets d'actualité — par exemple lors d'une réflexion multi-générationnelle sur l'utilisation des filets à mailles fines pour la pêche et l'évolution des activités halieutiques en milieu lacustre.",
  },
  {
    icone: CalendarDays,
    mot: "Organiser",
    resume: "Régulièrement des ateliers ludiques et créatifs",
    detail:
      "Séances de déclamations poétiques, lectures de contes, jeux de Boutou ou courses de pirogues. Et plus assidûment des ateliers d'apprentissage avec une vingtaine de jeunes de Sô-Tchanhoué qui suivent trois fois par semaine des cours d'alphabétisation en soirée.",
  },
  {
    icone: Trophy,
    mot: "Stimuler",
    resume: "La cohésion par des jeux concours et compétitions",
    detail:
      "Depuis trois ans, l'ASo organise chaque année la compétition « Sonagnon Cultural Talents » — un concours multidisciplinaire alliant chorégraphie, interprétation musicale et compositions de chants, challengeant les meilleurs.",
  },
  {
    icone: Lightbulb,
    mot: "Créer",
    resume: "Périodiquement des journées de réflexion sur l'engagement des jeunes",
    detail:
      "La jeunesse native de la cité se concerte sur leur implication communautaire dans le développement du village.",
  },
  {
    icone: Handshake,
    mot: "Coopérer",
    resume: "Avec d'autres ONG luttant contre la violation des droits humains",
    detail:
      "L'éclairage des salles de classe pour les cours nocturnes d'alphabétisation à Sô-Tchanhoué est possible grâce à l'appui technique du Clergé. L'ASo collabore également avec le Centre de Promotion Sociale et le Cadre de Concertation Communal de la Défense des Droits des Femmes et Enfants.",
  },
];

function StrategieItem({ item, index }: { item: typeof strategies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const Icon = item.icone;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-600 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300
          ${open ? "bg-green-700 border-green-700 shadow-lg" : "bg-white border-gray-100 hover:border-green-200 hover:shadow-md"}`}
        >
          {/* Icône */}
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
            ${open ? "bg-white/20" : "bg-green-50 group-hover:bg-green-100"}`}
          >
            <Icon size={20} className={open ? "text-white" : "text-green-700"} />
          </div>

          {/* Texte */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className={`text-xs font-extrabold uppercase tracking-widest transition-colors duration-300
                  ${open ? "text-green-300" : "text-green-600"}`}>
                  {item.mot}
                </span>
                <p className={`font-semibold text-sm mt-0.5 leading-snug transition-colors duration-300
                  ${open ? "text-white" : "text-gray-900"}`}>
                  {item.resume}
                </p>
              </div>
              <span className={`text-lg font-light shrink-0 transition-all duration-300
                ${open ? "text-white rotate-45" : "text-gray-300"}`}>
                +
              </span>
            </div>

            {/* Détail accordéon */}
            <div className={`overflow-hidden transition-all duration-400 ${open ? "max-h-60 mt-3" : "max-h-0"}`}>
              <p className="text-sm text-green-100 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function StrategieApropos() {
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Comment nous travaillons
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Notre{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">stratégie</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-sm mx-auto italic font-medium">
            « Quand l&apos;union fait la force ! »
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image collante */}
          <div className="lg:sticky lg:top-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/a-propos/strategie-oic.jpg"
                alt="Responsable SONAGNON à Ganvié"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg leading-snug">
                  Ganvié — la Venise de l&apos;Afrique
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Au cœur de la zone d&apos;intervention de SONAGNON
                </p>
              </div>
            </div>
          </div>

          {/* Accordéon stratégies */}
          <div className="space-y-3">
            {strategies.map((item, i) => (
              <StrategieItem key={i} item={item} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
