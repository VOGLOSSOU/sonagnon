"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const photos = [
  "/images/green-hub/IMG-20260420-WA0009.jpg", // 10
  "/images/green-hub/IMG-20260420-WA0004.jpg", // 5
  "/images/green-hub/IMG-20260420-WA0005.jpg", // 6
  "/images/green-hub/IMG-20260420-WA0006.jpg", // 7
  "/images/green-hub/IMG-20260420-WA0007.jpg", // 8
  "/images/green-hub/IMG-20260420-WA0008.jpg", // 9
  "/images/green-hub/IMG-20260420-WA0002.jpg", // 3
  "/images/green-hub/IMG-20260420-WA0010.jpg", // 11
];

export default function SignatureGreenHub() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

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

  const maxIndex = photos.length - perPage;
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div
          ref={titleRef}
          className={`flex items-end justify-between mb-10 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-2 block">
              20 avril 2026
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              La signature du partenariat
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-lg leading-relaxed">
              TEERRA AFRICA et SONAGNON officialisent leur engagement commun pour
              les industries vertes et le développement des communautés lacustres.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-sm text-gray-500 font-medium tabular-nums hidden sm:block">
              {current + 1} – {Math.min(current + perPage, photos.length)}{" "}
              <span className="text-gray-600">/ {photos.length}</span>
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                aria-label="Précédent"
                className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-500 hover:text-green-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={current >= maxIndex}
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
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * itemWidth}px)` }}
          >
            {photos.map((src, i) => (
              <div
                key={src}
                className="shrink-0 px-1.5"
                style={{ width: itemWidth || "auto" }}
              >
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{ height: itemWidth ? itemWidth * 0.72 : 280 }}
                >
                  <Image
                    src={src}
                    alt={`Signature du partenariat TEERRA AFRICA × SONAGNON — photo ${i + 1}`}
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
            style={{ width: `${((current + perPage) / photos.length) * 100}%` }}
          />
        </div>

      </div>
    </section>
  );
}
