"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MenuCategory } from "@/lib/menuData";

export default function MenuCategoryTabs({
  categories,
  activeId,
}: {
  categories: MenuCategory[];
  activeId: string;
}) {
  return (
    <div className="sticky top-20 z-30 -mx-5 overflow-x-auto border-y border-white/10 bg-cafe-black/88 px-5 py-3 backdrop-blur-xl md:-mx-8 md:px-8">
      <div className="mx-auto flex max-w-7xl gap-3">
        {categories.map((category) => (
          <motion.div key={category.id} whileTap={{ scale: 0.96 }}>
            <Link
              href={`#${category.id}`}
              className={`block whitespace-nowrap rounded-full border px-4 py-3 text-xs font-extrabold uppercase transition ${
                activeId === category.id
                  ? "border-cafe-gold bg-cafe-gold text-cafe-black"
                  : "border-white/12 text-cafe-cream/82 hover:border-cafe-gold hover:bg-cafe-gold hover:text-cafe-black"
              }`}
            >
              {category.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
