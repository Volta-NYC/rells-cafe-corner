"use client";

import { Clock, Sparkles, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: UtensilsCrossed, title: "Browse the Menu", text: "Check out our full menu of sandwiches, breakfast, salads & more." },
  { icon: Clock, title: "Place Your Order", text: "Order online for delivery in 30 mins or pickup in just 15 mins." },
  { icon: Sparkles, title: "Enjoy!", text: "Freshly prepared, every time. We don't compromise on quality." },
];

export default function HowItWorks() {
  return (
    <section className="bg-cafe-black py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">How It Works</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cafe-gold/12 text-cafe-gold">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading text-2xl uppercase text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-cafe-cream/68">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
