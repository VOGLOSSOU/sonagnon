import { cn } from "@/lib/utils";

interface SectionTitleProps {
  surtitle?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  surtitle,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-10", centered && "text-center")}>
      {surtitle && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-widest mb-2",
            light ? "text-green-300" : "text-green-600"
          )}
        >
          {surtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
