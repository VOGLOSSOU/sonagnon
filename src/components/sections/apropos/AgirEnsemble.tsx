"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const partenaires = [
  "Emmaüs International & ses différentes Communautés",
  "Mairie de Soufflenheim",
  "Electriciens Sans Frontières",
  "Enda Tiers Monde",
  "Association française ESPOIR",
  "Centre Médical Saint Joseph de Sô-Tchanhoué",
  "Mairie de Sô-Ava",
  "CEG Vekky",
  "Club Kiwanis",
  "Novéa Energies",
];

function PartenaireTag({ nom, index }: { nom: string; index: number }) {
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
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-700 hover:shadow-sm transition-all duration-200 cursor-default">
        {nom}
      </div>
    </div>
  );
}

export default function AgirEnsemble() {
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
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
            Ensemble, on va plus loin
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Agir{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">ensemble</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded" />
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-green-200 rounded" />
            <div className="h-0.5 w-16 bg-green-500 rounded" />
            <div className="h-0.5 w-8 bg-green-200 rounded" />
          </div>
        </div>

        {/* Image + texte sur la même ligne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-12">

          {/* Image */}
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/a-propos/agir-ensemble.png"
              alt="Village lacustre sur le lac Nokoué"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white italic text-sm leading-relaxed font-medium">
                &ldquo; Tant qu&apos;il reste à faire, rien n&apos;est encore fait.
                La moisson est grande mais les ouvriers sont peu nombreux. &rdquo;
              </p>
              <p className="mt-2 text-green-300 text-xs font-semibold uppercase tracking-widest">
                Proverbe africain
              </p>
            </div>
          </div>

          {/* Texte seul */}
          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              Pour être encore plus performante, l&apos;Association SONAGNON a besoin
              de bénévoles tout au long de l&apos;année. Le lac compte 42 villages mais
              nous ne pouvons intervenir que dans une vingtaine.
            </p>
            <p>
              D&apos;importantes structures et organisations ont détecté l&apos;urgence
              et accepté d&apos;apporter leur pierre à l&apos;édifice. Malgré cela,
              il reste encore beaucoup à faire.
            </p>
            <p className="text-gray-500 italic">
              Nous les remercions de tout cœur pour leur appui généreux qui permet
              aux actions menées par l&apos;ASo d&apos;exister.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            >
              Rejoindre le mouvement <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Structures partenaires en bas, pleine largeur */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5 text-center">
            Structures & organisations partenaires
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {partenaires.map((nom, i) => (
              <PartenaireTag key={nom} nom={nom} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
