import { Flame, Ticket, FileCheck2, Fish } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Camping & Day Use",
    text: "Return to your favorite spot or discover a new one that's right for you."
  },
  {
    icon: Ticket,
    title: "Tours & Tickets",
    text: "Reserve tours and tickets to participate in events."
  },
  {
    icon: FileCheck2,
    title: "Permits",
    text: "Obtain permits for access to high-demand locations."
  },
  {
    icon: Fish,
    title: "Recreation Activities",
    text: "Find the best spots for hunting, fishing and recreational shooting."
  }
];

export default function FeatureCards() {
  return (
    <section className="container-page relative z-20 -mt-12 md:-mt-16">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {features.map(({ icon: Icon, title, text }) => (
          <article key={title} className="min-h-[154px] rounded-2xl bg-white p-5 text-center shadow-soft transition duration-300 hover:-translate-y-1">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-peach text-coral">
              <Icon size={25} strokeWidth={1.8} />
            </div>
            <h2 className="font-display text-xs font-extrabold md:text-sm">{title}</h2>
            <p className="mt-2 text-[9px] leading-4 text-slate-500 md:text-[10px]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}