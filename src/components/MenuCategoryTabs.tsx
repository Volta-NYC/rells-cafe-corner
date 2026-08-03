"use client";

import { motion } from "framer-motion";
import type { MenuCategory } from "@/lib/menuData";

export default function MenuCategoryTabs({
  categories,
  activeId,
  onSelect,
}: {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="sticky top-20 z-30 -mx-5 overflow-x-auto border-y border-cafe-line bg-white/90 px-5 py-3 backdrop-blur-xl md:-mx-8 md:px-8">
      <div className="mx-auto flex max-w-7xl gap-3">
        {categories.map((category) => (
          <motion.div key={category.id} whileTap={{ scale: 0.96 }}>
            <button
              type="button"
              onClick={() => onSelect(category.id)}
              aria-pressed={activeId === category.id}
              aria-controls="active-menu-category"
              className={`block whitespace-nowrap rounded-full border px-4 py-3 text-xs font-extrabold uppercase transition ${
                activeId === category.id
                  ? "border-cafe-ink bg-cafe-ink text-white"
                  : "border-cafe-line text-cafe-inkSoft hover:border-cafe-rose hover:text-cafe-rose"
              }`}
            >
              {category.label}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
