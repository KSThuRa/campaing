"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  }

  return (
    <section id="contact" className="container-page pb-20 pt-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#FAD8CF] px-7 py-10 md:px-12 md:py-12">
        <div className="absolute -left-16 top-0 h-full w-1/2 rounded-full bg-white/45 blur-2xl" />
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Stay inspired</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">Let&apos;s Stay in Touch</h2>
          <p className="mt-3 max-w-md text-xs leading-5 text-slate-600">
            Get travel news, helpful tips, and stories from our visitors delivered right to your inbox.
          </p>

          <form onSubmit={submit} className="mt-6 flex max-w-md items-center rounded-xl bg-white p-1.5 shadow-sm">
            <Mail className="ml-3 text-slate-400" size={16} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email Address"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs outline-none"
            />
            <button aria-label="Subscribe" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-coral text-white transition hover:bg-[#e96f54]">
              <Send size={15} />
            </button>
          </form>

          {sent && <p className="mt-3 text-xs font-semibold text-coral">Thanks! You&apos;re on the list.</p>}
        </div>

        <div className="absolute bottom-0 right-0 hidden h-full w-[42%] md:block">
          <div className="absolute bottom-8 right-20 text-7xl">⛺</div>
          <div className="absolute bottom-7 right-7 text-5xl">🌲</div>
          <div className="absolute bottom-8 right-44 text-4xl">🔥</div>
          <div className="absolute right-20 top-8 text-4xl">☀️</div>
        </div>
      </div>
    </section>
  );
}