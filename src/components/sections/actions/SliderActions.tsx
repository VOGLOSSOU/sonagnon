"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const images = [
  "actions-intro1.webp",
  "actions-intro-2.webp",
  "actions-intro-3.webp",
  "actions-intro-4.webp",
  "actions-intro5.webp",
  "actions-intro-6.webp",
  "actions-intro-7.webp",
  "actions-intro-8.webp",
  "actions-intro-9.webp",
  "actions-intro-10.webp",
  "actions-intro-11.webp",
  "actions-intro-12.webp",
  "actions-intro-13.webp",
  "actions-intro-14.webp",
  "actions-intro-15.webp",
  "actions-intro-16.webp",
  "actions-intro-17.webp",
];

export default function SliderActions() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const pp = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    setPerPage(pp);
    setItemWidth(w / pp);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const maxIndex = images.length - perPage;
  const canPrev = current > 0;
  const canNext = current < maxIndex;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-2 block">
              Galerie
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Le lac en images
            </h3>
          </div>

          {/* Compteur + flèches */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 font-medium tabular-nums hidden sm:block">
              {current + 1} – {Math.min(current + perPage, images.length)}{" "}
              <span className="text-gray-600">/ {images.length}</span>
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                aria-label="Précédent"
                className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-500 hover:text-green-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                aria-label="Suivant"
                className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-500 hover:text-green-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div ref={containerRef} className="overflow-hidden rounded-2xl">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * itemWidth}px)` }}
          >
            {images.map((img, i) => (
              <div
                key={img}
                className="shrink-0 px-1.5"
                style={{ width: itemWidth || "auto" }}
              >
                <div className="relative rounded-xl overflow-hidden"
                  style={{ height: itemWidth ? itemWidth * 0.7 : 280 }}
                >
                  <Image
                    src={`/images/actions-projets/${img}`}
                    alt={`Voyage sur le lac Nokoué — photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mt-5 h-0.5 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${((current + perPage) / images.length) * 100}%` }}
          />
        </div>

      </div>
    </section>
  );
}
