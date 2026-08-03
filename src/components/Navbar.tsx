"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DOORDASH_DELIVERY_URL, DOORDASH_PICKUP_URL } from "@/lib/doordash";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/#menu" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cafe-line bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/#home" className="flex min-w-0 items-center gap-3" aria-label="Rell's Cafe Corner home">
          <Image
            src="/images/logo.jpg"
            alt="Rell's Cafe Corner logo"
            width={56}
            height={56}
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
          <a
            href={DOORDASH_DELIVERY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold uppercase text-cafe-inkSoft transition hover:text-cafe-rose"
          >
            Delivery
          </a>
          <a
            href={DOORDASH_PICKUP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cafe-ink px-5 py-3 text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose"
          >
            Pickup
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
            <a
              href={DOORDASH_DELIVERY_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-cafe-ink px-5 py-3 text-center text-sm font-extrabold uppercase text-white"
            >
              DoorDash Delivery
            </a>
            <a
              href={DOORDASH_PICKUP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cafe-ink/20 px-5 py-3 text-center text-sm font-extrabold uppercase text-cafe-ink"
            >
              DoorDash Pickup
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
