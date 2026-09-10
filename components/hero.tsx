import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[590px] items-center overflow-hidden rounded-b-[90px] bg-slate-900">
      <img
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=2200&q=90"
        alt="Tent in a mountain landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="container-page relative z-10 pt-16 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Outdoor stays & adventures
        </p>
        <h1 className="mx-auto max-w-2xl font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-white md:text-7xl">
          Find Yourself
          <br />
          Outside.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/80">
          Book unique camping experiences on over 300,000 campsites,
          cabins, RV parks, public parks and more.
        </p>
        <a href="#destinations" className="pill-button mt-8 bg-coral text-white shadow-xl hover:-translate-y-0.5 hover:bg-[#e96f54]">
          Discover <ArrowRight className="ml-2" size={16} />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
    </section>
  );
}