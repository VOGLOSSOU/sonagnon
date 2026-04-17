"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  { mot: "VIVRE", suite: "une immersion sans filtre au cœur de Ganvié." },
  { mot: "PARTIR", suite: "à la rencontre de la population lacustre béninoise." },
  { mot: "DÉCOUVRIR", suite: "la Venise de l'Afrique, un joyau encore préservé." },
  { mot: "PARTAGER", suite: "la vie quotidienne des Tofinous." },
  { mot: "RENCONTRER", suite: "les commerçants du lac." },
  { mot: "DÉGUSTER", suite: "un plat local au sein de la cité." },
];

export default function IntroActions() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête centré */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Écotourisme solidaire
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            UN jour,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">UN voyage</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>{" "}
            sur le lac Nokoué…
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        {/* Image + texte côte à côte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">

          {/* Image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/actions-projets/action-intro.png"
              alt="Voyage guidé sur le lac Nokoué avec SONAGNON"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white font-semibold text-sm leading-snug">
                Ganvié — la Venise de l&apos;Afrique
              </p>
              <p className="text-green-300 text-xs mt-1 uppercase tracking-widest font-medium">
                Lac Nokoué · Bénin
              </p>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base leading-relaxed">
              L&apos;Association SONAGNON propose tout au long de l&apos;année des promenades
              guidées dont <span className="font-semibold text-green-700">100 % des recettes</span> lui
              sont reversées. La générosité des participants vient ainsi soutenir financièrement
              les actions de l&apos;ASo. Vous aussi, venez apporter votre pierre à l&apos;édifice !
            </p>

            <p className="text-gray-500 text-sm leading-relaxed">
              Pour plus de renseignements, merci de nous{" "}
              <Link href="/contact" className="text-green-700 font-semibold hover:underline underline-offset-2">
                contacter ici
              </Link>
              .
            </p>

            {/* Séparateur */}
            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Une action solidaire séquencée d&apos;émotions qui vous permettra de…
              </p>

              <ul className="space-y-3">
                {experiences.map(({ mot, suite }) => (
                  <li key={mot} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-extrabold text-green-700">{mot}</span>{" "}
                      {suite}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            >
              Réserver une promenade <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
