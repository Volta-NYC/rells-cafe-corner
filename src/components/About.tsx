"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cafe-black py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10"
        >
          <Image
            src="https://assets.touch2success.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1759574097php4ELJbc.jpg"
            alt="Chicken and waffles"
            fill
            unoptimized
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="https://assets.touch2success.com/static/c5da8c3b32b8cc9fc8d76de87e85ec0a/img/1713389031phpTrmw1t.png"
            alt=""
            width={300}
            height={300}
            unoptimized
            className="pointer-events-none absolute -right-8 -top-28 hidden rotate-12 opacity-35 md:block"
          />
          <p className="mb-4 text-sm font-extrabold uppercase text-cafe-gold">Cherylles Kitchen LLC</p>
          <h2 className="font-heading text-5xl uppercase text-white md:text-7xl">About Us</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cafe-cream/82">
            We know life gets busy, and that's why we make food easy! Whether you're on your lunch break, heading home after work, or planning a cozy night in, Cherylles Kitchen LLC in Brooklyn offers a variety of freshly prepared meals that are ready in minutes. From gourmet sandwiches to crispy wings, enjoy top-quality meals without breaking the bank.
          </p>
          <a
            href="https://rellscafecorner.com/"
            target="_blank"
            rel="noreferrer"
            className="group relative mt-10 inline-flex px-2 py-5 font-heading text-lg uppercase text-white"
          >
            <span className="absolute left-0 top-1 h-px w-full bg-cafe-gold transition group-hover:translate-x-4" />
            ORDER NOW
            <span className="absolute bottom-1 right-0 h-px w-full bg-cafe-gold transition group-hover:-translate-x-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
