"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-cafe-line shadow-soft"
        >
          <Image
            src="/images/chicken-waffles.webp"
            alt="Chicken and waffles"
            fill
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
          <p className="mb-4 text-sm font-extrabold uppercase text-cafe-rose">Cherylles Kitchen LLC</p>
          <h2 className="font-heading text-5xl uppercase text-cafe-ink md:text-7xl">About Us</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cafe-inkSoft/85">
            We know life gets busy, and that&apos;s why we make food easy! Whether you&apos;re on your lunch break, heading home after work, or planning a cozy night in, Cherylles Kitchen LLC in Brooklyn offers a variety of freshly prepared meals that are ready in minutes. From gourmet sandwiches to crispy wings, enjoy top-quality meals without breaking the bank.
          </p>
          <Link
            href="/#menu"
            className="group relative mt-10 inline-flex px-2 py-5 font-heading text-lg uppercase text-cafe-ink"
          >
            <span className="absolute left-0 top-1 h-px w-full bg-cafe-rose transition group-hover:translate-x-4" />
            ORDER NOW
            <span className="absolute bottom-1 right-0 h-px w-full bg-cafe-rose transition group-hover:-translate-x-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
