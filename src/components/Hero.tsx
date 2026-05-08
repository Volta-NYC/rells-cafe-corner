"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-pastries.webp"
          alt="Fresh croissants and pastries"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.65)_38%,rgba(255,255,255,0.05)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28"
      >
        <p className="mb-5 inline-flex rounded-full border border-cafe-rose/30 bg-cafe-tint px-4 py-2 text-xs font-bold uppercase text-cafe-roseDeep">
          276 Chestnut Street, Brooklyn
        </p>
        <h1 className="max-w-5xl font-heading text-4xl uppercase leading-[0.95] text-cafe-ink sm:text-7xl lg:text-8xl">
          <span className="block">Feeling a little</span>
          <span className="saucy-glow block">saucy?</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-cafe-inkSoft sm:text-2xl">
          Brooklyn&apos;s favorite cafe. Sandwiches, breakfast & more - delivered in 30 minutes.
        </p>
        <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link href="#menu" className="w-full rounded-full bg-cafe-ink px-7 py-4 text-center text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose sm:w-auto">
            View Menu
          </Link>
          <Link href="#menu" className="w-full rounded-full border border-cafe-ink/20 bg-white/70 px-7 py-4 text-center text-sm font-extrabold uppercase text-cafe-ink transition hover:border-cafe-rose hover:text-cafe-rose sm:w-auto">
            Order Now
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 z-10 h-10 w-6 -translate-x-1/2 rounded-full border border-cafe-ink/30 p-1"
        aria-hidden="true"
      >
        <span className="block h-2 w-2 rounded-full bg-cafe-rose" />
      </motion.div>
    </section>
  );
}
