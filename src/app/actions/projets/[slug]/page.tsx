import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projets } from "@/data/projets";
import CtaHome from "@/components/sections/home/CtaHome";

function renderParagraphes(paragraphes: string[]) {
  type Group = { type: "text"; text: string; first: boolean } | { type: "list"; items: string[] };
  const groups: Group[] = [];
  let bullets: string[] = [];
  let isFirst = true;

  for (const p of paragraphes) {
    if (p.startsWith("• ")) {
      bullets.push(p.slice(2));
    } else {
      if (bullets.length) { groups.push({ type: "list", items: bullets }); bullets = []; }
      groups.push({ type: "text", text: p, first: isFirst });
      isFirst = false;
    }
  }
  if (bullets.length) groups.push({ type: "list", items: bullets });

  return groups.map((g, i) => {
    if (g.type === "list") {
      return (
        <ul key={i} className="space-y-2 pl-1">
          {g.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-green-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className={`leading-relaxed ${g.first ? "text-gray-900 font-semibold text-lg" : "text-gray-600 text-base"}`}
      >
        {g.text}
      </p>
    );
  });
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) return {};
  return { title: projet.titre, description: projet.resume };
}

export default async function ProjetDetailPage({ params }: Props) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={projet.imageCover}
            alt={projet.titre}
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/actions"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Retour aux actions
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-400 mb-3">
            Projet
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            {projet.titre}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            {projet.resume}
          </p>
        </div>
      </section>

      {/* Blocs alternés */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projet.blocs.map((bloc, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image */}
                  <div className={`relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <Image
                      src={bloc.image}
                      alt={bloc.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Texte */}
                  <div className={`space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="w-10 h-0.5 bg-green-600 rounded" />
                    {renderParagraphes(bloc.paragraphes)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaHome />
    </>
  );
}
