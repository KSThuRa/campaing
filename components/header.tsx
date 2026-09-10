"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Destination", "Near me", "Events", "Blog", "Gallery", "About", "Contact us"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white shadow-lg" aria-label="CampStay home">
          <span className="text-lg">✦</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#" : `#${link.toLowerCase().replaceAll(" ", "-")}`}
              className={`text-[11px] font-medium transition hover:text-coral ${index === 0 ? "text-white" : "text-white/75"}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#contact" className="text-[11px] font-medium text-white">Sign up</a>
          <a href="#contact" className="rounded-full border border-white/45 px-5 py-2 text-[11px] font-medium text-white transition hover:bg-white hover:text-ink">
            Sign in
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-5 right-5 top-[72px] rounded-3xl bg-white p-5 shadow-2xl lg:hidden">
          <nav className="grid gap-1">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink hover:bg-peach"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}