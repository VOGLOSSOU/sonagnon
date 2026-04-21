"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Users, Globe, Lightbulb, TrendingUp, Cpu } from "lucide-react";

const secteurs = [
  { icone: Leaf, label: "Agriculture & Agroalimentaire" },
  { icone: Globe, label: "Économie verte & circulaire" },
  { icone: Cpu, label: "Numérique & Mobilité" },
  { icone: Users, label: "Industries créatives" },
  { icone: TrendingUp, label: "Finance & Tourisme" },
  { icone: Lightbulb, label: "Innovation environnementale" },
];

const axes = [
  {
    numero: "01",
    titre: "Entrepreneuriat & autonomisation",
    texte:
      "Transformation des groupements féminins en modèles entrepreneuriaux solides. Développement de chaînes de valeur locales : pêche, transformation, commerce.",
  },
  {
    numero: "02",
    titre: "Inclusion numérique & formation",
    texte:
      "Déploiement de relais numériques au cœur des communautés. Formation des jeunes et des femmes aux outils digitaux essentiels.",
  },
  {
    numero: "03",
    titre: "Éducation & insertion des jeunes",
    texte:
      "Construction de parcours d'insertion professionnelle adaptés aux réalités locales. Orientation vers les métiers d'avenir liés à l'environnement et à l'économie bleue.",
  },
  {
    numero: "04",
    titre: "Environnement, climat & énergie",
    texte:
      "Projets d'énergie solaire communautaire. Sensibilisation environnementale ancrée dans les savoirs locaux. Solutions concrètes face aux inondations et à la dégradation du lac.",
  },
  {
    numero: "05",
    titre: "Projets pilotes co-construits",
    texte:
      "Lancement d'initiatives test : incubation locale, projets verts, labs communautaires. Intégration possible dans des programmes internationaux de développement durable.",
  },
];

function AxeItem({ axe, index }: { axe: typeof axes[0]; index: number }) {
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
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`transition-all duration-600 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
    >
      <div className="flex gap-5 items-start p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <span className="text-3xl font-black text-green-100 leading-none shrink-0 select-none">
          {axe.numero}
        </span>
        <div>
          <h4 className="font-bold text-gray-900 text-base mb-1">{axe.titre}</h4>
          <p className="text-sm text-gray-500 leading-relaxed">{axe.texte}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammeGreenHub() {
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

        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Le programme
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            5 axes de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">collaboration</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Un partenariat pensé pour transformer durablement les réalités économiques,
            sociales et environnementales du lac Nokoué.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Axes */}
          <div className="space-y-4">
            {axes.map((axe, i) => (
              <AxeItem key={axe.numero} axe={axe} index={i} />
            ))}
          </div>

          {/* Secteurs ciblés */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-green-800 text-white rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-5">
                Secteurs ciblés
              </p>
              <div className="grid grid-cols-2 gap-3">
                {secteurs.map(({ icone: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                  >
                    <Icon size={16} className="text-green-300 shrink-0" />
                    <span className="text-sm text-white font-medium leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IYBA-SEED encart */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Programme européen associé
              </p>
              <p className="font-bold text-gray-900 text-lg mb-2">IYBA-SEED</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                <em>Investing in Young Businesses in Africa</em> — Initiative Équipe Europe financée
                par l&apos;Union européenne et les gouvernements français, allemand et slovaque.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Bénin", "Kenya", "Sénégal", "Afrique du Sud", "Togo"].map((pays) => (
                  <span
                    key={pays}
                    className="text-xs font-medium bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full"
                  >
                    {pays}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">Agences partenaires</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Expertise France · Enabel · GIZ · SAIDC · SNV
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
