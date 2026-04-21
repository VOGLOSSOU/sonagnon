"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partenaires = [
  {
    nom: "TEERRA AFRICA",
    logo: "/images/green-hub/logo-teerra.png",
    role: "Pilote opérationnel",
    description:
      "Organisation française engagée dans l'accompagnement entrepreneurial, l'innovation environnementale et le développement durable en Afrique.",
    representant: "Charlie OLAKUNLE — Coordonnateur",
  },
  {
    nom: "Association SONAGNON",
    logo: "/images/green-hub/logo-sonagnon-partenariat.png",
    role: "Point focal terrain",
    description:
      "ONG béninoise enracinée dans les communautés lacustres du lac Nokoué depuis 1998. Acteur de terrain irremplaçable.",
    representant: "Mme Prisca Théodora ZANCLAN — Présidente",
  },
];

const agences = [
  "Expertise France",
  "Enabel (Belgique)",
  "GIZ (Allemagne)",
  "SAIDC (Slovaquie)",
  "SNV (Pays-Bas)",
];

export default function PartenairesGreenHub() {
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

        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Les acteurs
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Nos{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">partenaires</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        {/* Les deux partenaires principaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {partenaires.map((p) => (
            <div
              key={p.nom}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="relative h-16 w-40">
                <Image
                  src={p.logo}
                  alt={`Logo ${p.nom}`}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-2">
                  {p.role}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.nom}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.description}</p>
                <p className="text-xs font-medium text-gray-400 border-t border-gray-200 pt-3">
                  {p.representant}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Agences IYBA-SEED */}
        <div className="border-t border-gray-100 pt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Agences de mise en œuvre — programme IYBA-SEED
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {agences.map((a) => (
              <span
                key={a}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-green-300 hover:text-green-700 transition-all duration-200"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Financé par l&apos;Union européenne · gouvernements français, allemand et slovaque
          </p>
        </div>

      </div>
    </section>
  );
}
