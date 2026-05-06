"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { menuCategories } from "@/lib/menuData";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);

  useEffect(() => {
    const observers = menuCategories.map((category) => {
      const element = document.getElementById(category.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(category.id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <section id="menu" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase text-cafe-rose">Full Menu</p>
          <h2 className="font-heading text-4xl uppercase leading-none text-cafe-ink sm:text-5xl md:text-7xl">Made Fresh, Built To Crave</h2>
          <p className="mt-6 text-lg leading-8 text-cafe-inkSoft/80">Breakfast, sandwiches, wings, sweets, and drinks with enough room to actually read what you want.</p>
        </div>
        <MenuCategoryTabs categories={menuCategories} activeId={activeId} />

        <div className="space-y-20 pt-14">
          {menuCategories.map((category) => (
            <motion.section
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-40"
            >
              <div className="mb-7 flex flex-col justify-between gap-3 border-b border-cafe-line pb-5 md:flex-row md:items-end">
                <div>
                  <h3 className="font-heading text-3xl uppercase text-cafe-ink md:text-5xl">{category.label}</h3>
                  {category.note && <p className="mt-3 text-sm uppercase tracking-normal text-cafe-muted">{category.note}</p>}
                </div>
                <p className="text-sm font-bold uppercase text-cafe-rose/85">{category.items.length} items</p>
              </div>
              {category.banner && (
                <div className="mb-6 rounded-2xl border border-cafe-rose/30 bg-cafe-tint px-5 py-4 text-sm font-bold text-cafe-roseDeep">
                  {category.banner}
                </div>
              )}
              <div className="grid gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
