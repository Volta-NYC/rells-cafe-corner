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
    <section className="bg-cafe-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="font-heading text-5xl uppercase text-cafe-ink md:text-7xl">Chef&apos;s Special</h2>
          <p className="max-w-md text-cafe-inkSoft/75">Big flavor, fresh texture, and the cafe favorites worth slowing down for.</p>
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
              className="group rounded-[20px] border border-cafe-line bg-white p-3 shadow-card transition-colors hover:border-cafe-rose/60"
            >
              <div className="relative h-72 overflow-hidden rounded-2xl bg-cafe-tintSoft">
                <Image src={item.image} alt={item.name} fill unoptimized className={`${item.fit} transition duration-500 group-hover:scale-105`} />
              </div>
              <h3 className="mt-5 text-center font-heading text-2xl uppercase text-cafe-ink">{item.name}</h3>
              <p className="mb-2 mt-2 text-center text-sm text-cafe-muted">{item.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
