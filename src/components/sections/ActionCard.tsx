import Link from "next/link";
import Image from "next/image";
import { Action } from "@/types";

interface ActionCardProps {
  action: Action;
}

export default function ActionCard({ action }: ActionCardProps) {
  return (
    <Link
      href={`/actions/${action.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <Image
          src={action.image}
          alt={action.titre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 text-2xl">{action.icone}</div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-green-700 transition-colors leading-snug">
          {action.titre}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{action.description}</p>
        <span className="mt-4 text-sm text-green-700 font-semibold inline-flex items-center gap-1">
          En savoir plus →
        </span>
      </div>
    </Link>
  );
}
