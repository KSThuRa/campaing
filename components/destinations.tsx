import { Heart, MapPin } from "lucide-react";

const places = [
  ["Trickle Creek Ranch", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85", "$45/night"],
  ["Dragonfly Tiny Cabin", "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85", "$48/night"],
  ["Tiny Cabin In The Mountains", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85", "$52/night"],
  ["The Stuga", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85", "$50/night"],
  ["Luxury Tiny Beach Cabin", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85", "$36/night"],
  ["The Summit Cabin", "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85", "$38/night"],
  ["Kindred Spirits Cabin", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85", "$39/night"],
  ["The Hermitage Cabin", "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85", "$45/night"],
  ["Red Lifeguard Station", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85", "$40/night"],
  ["The Tree House", "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85", "$42/night"],
  ["Barrier Island Elevated Tent", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85", "$48/night"],
  ["Ninovan on the Shore", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85", "$56/night"]
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24">
      <div className="pointer-events-none absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-[#f8c7b7]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 top-[620px] h-[500px] w-[500px] rounded-full bg-[#f5cfc5]/30 blur-3xl" />

      <div className="container-page relative">
        <div className="mx-auto mb-10 max-w-lg text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peach text-coral">
            <MapPin size={25} />
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
            Explore Destinations
            <br />
            & Activities
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Discover unique outdoor stays and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {places.map(([title, image, price]) => (
            <article key={title} className="group rounded-2xl bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="relative h-36 overflow-hidden rounded-xl">
                <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <button aria-label={`Save ${title}`} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-coral shadow">
                  <Heart size={15} />
                </button>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white px-3 py-1 text-[9px] font-semibold text-coral shadow">
                  {price}
                </span>
              </div>

              <div className="px-1 pb-1 pt-5 text-center">
                <h3 className="font-display text-[13px] font-extrabold">{title}</h3>
                <p className="mt-2 min-h-8 text-[10px] leading-4 text-slate-500">
                  Book unique camping experiences on over 300,000 campsites.
                </p>
                <button className="mt-3 rounded-full bg-slate-100 px-5 py-2 text-[10px] font-medium text-slate-500 transition hover:bg-coral hover:text-white">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-full border border-coral/40 px-10 py-2.5 text-xs font-semibold text-coral transition hover:bg-coral hover:text-white">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}