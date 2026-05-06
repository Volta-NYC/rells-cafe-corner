"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="https://assets.touch2success.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1759573816phpEk4WwX.jpg"
        alt="Fresh croissants and pastries"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#000000fa_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.1)_100%)]" />
      <div className="absolute inset-0 bg-cafe-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28"
      >
        <p className="mb-5 inline-flex rounded-full border border-cafe-gold/40 bg-black/35 px-4 py-2 text-xs font-bold uppercase text-cafe-gold">
          276 Chestnut Street, Brooklyn
        </p>
        <h1 className="max-w-5xl font-heading text-4xl uppercase leading-[0.95] text-white sm:text-7xl lg:text-8xl">
          <span className="block">Feeling a little</span>
          <span className="saucy-glow block">saucy?</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-cafe-cream/88 sm:text-2xl">
          Brooklyn&apos;s favorite cafe. Sandwiches, breakfast & more - delivered in 30 minutes.
        </p>
        <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link href="#menu" className="w-full rounded-full bg-cafe-gold px-7 py-4 text-center text-sm font-extrabold uppercase text-cafe-black transition hover:bg-cafe-orange sm:w-auto">
            View Menu
          </Link>
          <a href="https://rellscafecorner.com/" target="_blank" rel="noreferrer" className="w-full rounded-full border border-white/35 px-7 py-4 text-center text-sm font-extrabold uppercase text-white transition hover:border-cafe-gold hover:text-cafe-gold sm:w-auto">
            Order Now
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 z-10 h-10 w-6 -translate-x-1/2 rounded-full border border-white/40 p-1"
        aria-hidden="true"
      >
        <span className="block h-2 w-2 rounded-full bg-cafe-gold" />
      </motion.div>
    </section>
  );
}
