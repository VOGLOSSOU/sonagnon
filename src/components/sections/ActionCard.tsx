import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Action } from "@/types";

interface ActionCardProps {
  action: Action;
}

export default function ActionCard({ action }: ActionCardProps) {
  return (
    <Link
      href={`/actions/${action.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={action.image}
          alt={action.titre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-green-700 transition-colors leading-snug">
          {action.titre}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{action.description}</p>
        <span className="mt-4 text-sm text-green-700 font-semibold inline-flex items-center gap-1">
          En savoir plus <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
