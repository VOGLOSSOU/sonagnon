"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projets } from "@/data/projets";

function ProjetCard({ projet, index }: { projet: typeof projets[0]; index: number }) {
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
      className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">

        {/* Image */}
        <div className="relative h-52 overflow-hidden shrink-0">
          <Image
            src={projet.imageCover}
            alt={projet.titre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-3 left-3 bg-green-700/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
            Projet {index + 1}
          </span>
        </div>

        {/* Contenu */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          <h3 className="font-bold text-gray-900 text-lg leading-snug">
            {projet.titre}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">
            {projet.resume}
          </p>
          <Link
            href={`/actions/projets/${projet.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 group/link mt-auto"
          >
            Voir le projet
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function ProjetsActions() {
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
          className={`text-center mb-12 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Sur le terrain
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Nos{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">projets</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, i) => (
            <ProjetCard key={projet.slug} projet={projet} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
