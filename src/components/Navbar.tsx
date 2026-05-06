"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-cafe-black/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="#home" className="flex items-center gap-3" aria-label="Rell's Cafe Corner home">
          <Image
            src="https://assets.foodhub.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1758998674phpUEl3iS.jpg"
            alt="Rell's Cafe Corner logo"
            width={56}
            height={56}
            unoptimized
            className="h-12 w-12 rounded-full border-2 border-cafe-gold object-cover shadow-glow"
            priority
          />
          <span className="font-heading text-sm uppercase tracking-normal text-white sm:text-lg">
            Rell's Cafe Corner
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold uppercase text-cafe-cream/82 transition hover:text-cafe-gold">
              {link.label}
            </Link>
          ))}
          <a
            href="https://rellscafecorner.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cafe-gold px-5 py-3 text-sm font-extrabold uppercase text-cafe-black transition hover:bg-cafe-orange"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-cafe-black px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-heading text-lg uppercase text-cafe-cream">
                {link.label}
              </Link>
            ))}
            <a
              href="https://rellscafecorner.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-cafe-gold px-5 py-3 text-center text-sm font-extrabold uppercase text-cafe-black"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
