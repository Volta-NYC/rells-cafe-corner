"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/#menu" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cafe-line bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/#home" className="flex min-w-0 items-center gap-3" aria-label="Rell's Cafe Corner home">
          <Image
            src="https://assets.foodhub.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1758998674phpUEl3iS.jpg"
            alt="Rell's Cafe Corner logo"
            width={56}
            height={56}
            unoptimized
            className="h-12 w-12 rounded-full border-2 border-cafe-rose object-cover"
            priority
          />
          <span className="max-w-[13rem] truncate font-heading text-sm uppercase tracking-normal text-cafe-ink sm:max-w-none sm:text-lg">
            Rell&apos;s Cafe Corner
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold uppercase text-cafe-inkSoft transition hover:text-cafe-rose">
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-cafe-line text-cafe-ink transition hover:border-cafe-rose hover:text-cafe-rose"
            aria-label={`Open cart${count ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cafe-rose px-1 text-[10px] font-extrabold text-white">
                {count}
              </span>
            )}
          </button>
          <Link
            href="/#menu"
            className="rounded-full bg-cafe-ink px-5 py-3 text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose"
          >
            Order Now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-cafe-line text-cafe-ink"
            aria-label={`Open cart${count ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cafe-rose px-1 text-[10px] font-extrabold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cafe-line text-cafe-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-cafe-line bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-heading text-lg uppercase text-cafe-ink">
                {link.label}
              </Link>
            ))}
            <Link
              href="/#menu"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-cafe-ink px-5 py-3 text-center text-sm font-extrabold uppercase text-white"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
