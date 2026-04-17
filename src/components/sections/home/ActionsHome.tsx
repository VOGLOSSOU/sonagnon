"use client";

import Link from "next/link";
import { ArrowRight, Users, Banknote, Droplets, Sun, BookOpen, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const actions = [
  {
    slug: "enfants-jeunes-pecheurs",
    icone: Users,
    titre: "Enfants et Jeunes Pêcheurs",
    description:
      "Protection des enfants contre la maltraitance, le mariage forcé et la traite. Points d'écoute, formations et accompagnement dans les villages lacustres.",
  },
  {
    slug: "microcredit-feminin",
    icone: Banknote,
    titre: "Micro-crédit & Leadership Féminin",
    description:
      "Crédits de 50 000 à 200 000 FCFA sans garantie, remboursement hebdomadaire. Taux de remboursement de 98 %. Plus de 1 000 ménages touchés.",
  },
  {
    slug: "eau-assainissement",
    icone: Droplets,
    titre: "Eau Potable & Assainissement",
    description:
      "9 villages équipés en forages, châteaux d'eau et bornes fontaines. Toilettes installées grâce au partenariat avec Emmaüs International.",
  },
  {
    slug: "energie-solaire",
    icone: Sun,
    titre: "Énergie Solaire",
    description:
      "4 mini-centrales solaires, 20+ villages électrifiés. Projet ZOGBIN : 250 lampadaires autonomes dans 48 villages avec ESF.",
  },
  {
    slug: "education-insertion",
    icone: BookOpen,
    titre: "Éducation & Insertion",
    description:
      "Parrainage scolaire jusqu'au BEPC pour orphelins et enfants démunis. Formation professionnelle et promotion de l'excellence.",
  },
  {
    slug: "renforcement-economique",
    icone: TrendingUp,
    titre: "Renforcement Économique",
    description:
      "Poissonnerie communautaire et écotourisme solidaire à Ganvié — la Venise de l'Afrique — avec des visiteurs du monde entier.",
  },
];

function ActionCard({ action, index }: { action: typeof actions[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = action.icone;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`transition-all duration-500 h-full ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <Link
        href={`/actions/${action.slug}`}
        className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-300 overflow-hidden
          hover:shadow-[0_8px_30px_rgba(22,163,74,0.15)] hover:-translate-y-1"
      >
        {/* Fond vert qui monte du bas au hover */}
        <div className="absolute inset-x-0 bottom-0 h-0 bg-green-700 group-hover:h-full transition-all duration-400 ease-in-out rounded-2xl z-0" />

        {/* Contenu au-dessus du fond */}
        <div className="relative z-10 flex flex-col gap-4 h-full">
          {/* Icône */}
          <div className="w-11 h-11 bg-green-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-300">
            <Icon size={20} className="text-green-700 group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Texte */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 group-hover:text-white text-base mb-2 leading-snug transition-colors duration-300">
              {action.titre}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-green-100 leading-relaxed transition-colors duration-300">
              {action.description}
            </p>
          </div>

          {/* Lien */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 group-hover:text-white mt-auto transition-colors duration-300">
            En savoir plus
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function ActionsHome() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos domaines d&apos;action
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Depuis 25 ans, SONAGNON agit sur six fronts complémentaires pour transformer
            durablement la vie des populations lacustres du Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {actions.map((action, i) => (
            <ActionCard key={action.slug} action={action} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/actions"
            className="inline-flex items-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
          >
            Voir toutes nos actions <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
