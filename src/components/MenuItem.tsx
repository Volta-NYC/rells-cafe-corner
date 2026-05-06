"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { makeItemId, parsePrice, useCart } from "@/lib/cart";
import type { MenuItem as MenuItemType } from "@/lib/menuData";
import MenuItemModal from "./MenuItemModal";

export default function MenuItem({ item }: { item: MenuItemType }) {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const slug = makeItemId(item.name);
  const isPriced = parsePrice(item.price) > 0;

  const inCartQty = items.reduce((sum, line) => {
    if (line.id === slug || line.id.startsWith(`${slug}|`)) return sum + line.qty;
    return sum;
  }, 0);

  return (
    <>
      <button
        type="button"
        onClick={() => isPriced && setOpen(true)}
        disabled={!isPriced}
        aria-label={`Configure ${item.name}`}
        className="group relative w-full overflow-hidden rounded-2xl border border-cafe-line bg-white p-5 text-left shadow-card transition duration-300 hover:-translate-y-1 hover:border-cafe-rose/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-cafe-rose/35 transition group-hover:bg-cafe-rose" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
          <div className="min-w-0 pl-2">
            <h3 className="text-lg font-extrabold leading-snug text-cafe-ink sm:text-xl">{item.name}</h3>
            {item.description && <p className="mt-2 text-sm leading-6 text-cafe-muted">{item.description}</p>}
          </div>
          <p className="w-fit shrink-0 rounded-full border border-cafe-rose/25 bg-cafe-tint px-3 py-1 text-left font-heading text-base uppercase text-cafe-roseDeep sm:text-right sm:text-lg">
            {item.price}
          </p>
        </div>
        {item.addOn && <p className="mt-4 border-t border-cafe-line pt-3 text-xs uppercase text-cafe-muted">{item.addOn}</p>}

        <div className="mt-4 flex items-center justify-between gap-3 pl-2">
          {isPriced ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-cafe-ink px-4 py-2 text-xs font-extrabold uppercase text-white transition group-hover:bg-cafe-rose">
              <Plus size={14} /> Customize
            </span>
          ) : (
            <span className="text-xs uppercase text-cafe-muted">Call to order</span>
          )}
          {inCartQty > 0 && (
            <span className="text-xs font-bold uppercase text-cafe-muted">{inCartQty} in cart</span>
          )}
        </div>
      </button>

      <MenuItemModal item={item} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
