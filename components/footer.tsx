import { ArrowUp, Apple, Play } from "lucide-react";

const columns = [
  {
    title: "Get to Know Us",
    links: ["About Us", "Rules & Reservation Policies", "Accessibility", "Media Center", "Site Map"]
  },
  {
    title: "Plan with Us",
    links: ["Find Trip Inspiration", "Build a Trip", "Buy a Pass", "Enter a Lottery"]
  },
  {
    title: "Let Us Help You",
    links: ["Your Account", "Your Reservations", "Contact Us", "Help Center", "Submit Feedback"]
  }
];

export default function Footer() {
  return (
    <footer className="relative rounded-t-[90px] bg-[#F8DED7] pt-20">
      <div className="container-page pb-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-sm font-extrabold">Hicamp is everywhere you want to camp.</h3>
            <p className="mt-4 max-w-sm text-xs leading-5 text-slate-600">
              Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more.
            </p>
            <p className="mt-6 text-xs font-bold">Download Our App</p>
            <div className="mt-3 flex gap-2">
              <button className="flex items-center gap-2 rounded-md bg-black px-3 py-2 text-white">
                <Apple size={15} />
                <span className="text-[8px] text-left leading-3">Download on the<br /><b>App Store</b></span>
              </button>
              <button className="flex items-center gap-2 rounded-md bg-black px-3 py-2 text-white">
                <Play size={14} fill="currentColor" />
                <span className="text-[8px] text-left leading-3">GET IT ON<br /><b>Google Play</b></span>
              </button>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-extrabold">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-slate-600 transition hover:text-coral">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-black/5 pt-7 text-center text-[10px] text-slate-500">
          © 2026. All rights reserved.
        </div>
      </div>

      <a href="#" aria-label="Back to top" className="absolute -top-5 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-coral shadow-lg">
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}