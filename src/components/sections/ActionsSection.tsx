import { actions } from "@/data/actions";
import ActionCard from "./ActionCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function ActionsSection() {
  const featured = actions.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          surtitle="Ce que nous faisons"
          title="Nos domaines d'action"
          subtitle="7 axes d'intervention pour transformer durablement les conditions de vie des populations lacustres du lac Nokoué."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((action) => (
            <ActionCard key={action.slug} action={action} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/actions" variant="outline">
            Voir toutes nos actions
          </Button>
        </div>
      </div>
    </section>
  );
}
