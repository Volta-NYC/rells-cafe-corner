"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const specials = [
  {
    name: "Salad",
    image: "https://assets.touch2success.com/static/c5da8c3b32b8cc9fc8d76de87e85ec0a/img/1718796543phpF0XrpM.png",
    note: "Fresh greens, bold toppings",
    fit: "object-contain p-8",
  },
  {
    name: "Avocado Toast",
    image: "https://assets.touch2success.com/static/b1cb275a788a9c10f60a93682b1e7039/img/1758984941php76hwJd.jpg",
    note: "Creamy, crisp, breakfast-ready",
    fit: "object-cover",
  },
  {
    name: "Macarons",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80",
    note: "Sweet bites for the table",
    fit: "object-cover",
  },
];

export default function ChefsSpecial() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,#332313_0%,#111_42%,#0A0A0A_100%)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="font-heading text-5xl uppercase text-white md:text-7xl">Chef&apos;s Special</h2>
          <p className="max-w-md text-cafe-cream/70">Big flavor, fresh texture, and the cafe favorites worth slowing down for.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {specials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ rotateX: 4, rotateY: -5, y: -8 }}
              className="group rounded-[20px] border border-white/25 bg-white/[0.04] p-3 shadow-glow transition-colors hover:border-cafe-gold/70"
            >
              <div className="relative h-72 overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#231d15,#111)]">
                <Image src={item.image} alt={item.name} fill unoptimized className={`${item.fit} transition duration-500 group-hover:scale-105`} />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cafe-black/80 to-transparent" />
              </div>
              <h3 className="mt-5 text-center font-heading text-2xl uppercase text-cafe-gold">{item.name}</h3>
              <p className="mb-2 mt-2 text-center text-sm text-cafe-cream/62">{item.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
