import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { actions } from "@/data/actions";
import CallToAction from "@/components/sections/CallToAction";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return actions.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const action = actions.find((a) => a.slug === slug);
  if (!action) return {};
  return { title: action.titre, description: action.description };
}

export default async function ActionDetailPage({ params }: Props) {
  const { slug } = await params;
  const action = actions.find((a) => a.slug === slug);
  if (!action) notFound();

  return (
    <>
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0">
          <Image
            src={action.image}
            alt={action.titre}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button href="/actions" variant="ghost" className="text-white hover:bg-white/10 mb-6 text-sm">
            ← Retour aux actions
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{action.titre}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{action.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-600">
            <p>[Contenu détaillé de l&apos;action «{action.titre}» à intégrer ici]</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
