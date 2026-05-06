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
    <section className="bg-cafe-bg py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase text-cafe-rose">Order without the runaround</p>
          <h2 className="font-heading text-4xl uppercase text-cafe-ink sm:text-5xl md:text-6xl">How It Works</h2>
        </div>
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
                className="rounded-2xl border border-cafe-line bg-white p-7 shadow-card"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cafe-tint text-cafe-roseDeep">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading text-2xl uppercase text-cafe-ink">{step.title}</h3>
                <p className="mt-4 leading-7 text-cafe-muted">{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
