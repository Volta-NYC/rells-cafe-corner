"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { menuCategories, type MenuCategory, type MenuItem as MenuItemType } from "@/lib/menuData";
import { DOORDASH_DELIVERY_URL, DOORDASH_PICKUP_URL } from "@/lib/doordash";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuItem from "./MenuItem";

type Group = { subCategory: string | null; items: MenuItemType[] };

function groupBySubCategory(category: MenuCategory): Group[] {
  const order: string[] = [];
  const map = new Map<string, MenuItemType[]>();
  for (const item of category.items) {
    const key = item.subCategory ?? "__base__";
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key)!.push(item);
  }
  return order.map((key) => ({
    subCategory: key === "__base__" ? null : key,
    items: map.get(key)!,
  }));
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);

  const grouped = useMemo(
    () => menuCategories.map((category) => ({ category, groups: groupBySubCategory(category) })),
    [],
  );

  const activeCategory =
    grouped.find(({ category }) => category.id === activeId) ?? grouped[0];

  return (
    <section id="menu" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase text-cafe-rose">Full Menu</p>
          <h2 className="font-heading text-4xl uppercase leading-none text-cafe-ink sm:text-5xl md:text-7xl">Made Fresh, Built To Crave</h2>
          <p className="mt-6 text-lg leading-8 text-cafe-inkSoft/80">Breakfast, sandwiches, wings, sweets, and drinks with enough room to actually read what you want.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={DOORDASH_DELIVERY_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full bg-cafe-ink px-6 py-3 text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose">
              DoorDash Delivery
            </a>
            <a href={DOORDASH_PICKUP_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-cafe-ink/20 px-6 py-3 text-sm font-extrabold uppercase text-cafe-ink transition hover:border-cafe-rose hover:text-cafe-rose">
              DoorDash Pickup
            </a>
          </div>
        </div>
        <MenuCategoryTabs
          categories={menuCategories}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className="pt-14">
          <motion.section
            key={activeCategory.category.id}
            id="active-menu-category"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="border border-cafe-line border-l-4 border-l-cafe-rose bg-cafe-tintSoft p-6 shadow-card md:p-9"
          >
            <div className="mb-7 flex flex-col justify-between gap-3 border-b border-cafe-ink/15 pb-5 md:flex-row md:items-end">
              <div>
                <h3 className="font-heading text-3xl uppercase text-cafe-ink md:text-5xl">
                  {activeCategory.category.label}
                </h3>
                {activeCategory.category.note && (
                  <p className="mt-3 text-sm uppercase tracking-normal text-cafe-muted">
                    {activeCategory.category.note}
                  </p>
                )}
              </div>
              <p className="text-sm font-bold uppercase text-cafe-rose/85">
                {activeCategory.category.items.length} items
              </p>
            </div>
            {activeCategory.category.banner && (
              <div className="mb-6 rounded-2xl border border-cafe-rose/30 bg-cafe-tint px-5 py-4 text-sm font-bold text-cafe-roseDeep">
                {activeCategory.category.banner}
              </div>
            )}
            <div className="space-y-8">
              {activeCategory.groups.map((group) => (
                <div key={group.subCategory ?? "base"}>
                  {group.subCategory && (
                    <h4 className="mb-3 font-heading text-xl uppercase tracking-wide text-cafe-roseDeep md:text-2xl">
                      {group.subCategory}
                    </h4>
                  )}
                  <ul className="grid gap-x-10 md:grid-cols-2">
                    {group.items.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
