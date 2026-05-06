"use client";

import { Minus, Plus } from "lucide-react";
import { makeItemId, parsePrice, useCart } from "@/lib/cart";
import type { MenuItem as MenuItemType } from "@/lib/menuData";

export default function MenuItem({ item }: { item: MenuItemType }) {
  const { items, addItem, setQty, openCart } = useCart();
  const id = makeItemId(item.name);
  const unitPrice = parsePrice(item.price);
  const isPriced = unitPrice > 0;
  const line = items.find((entry) => entry.id === id);
  const qty = line?.qty ?? 0;

  const handleAdd = () => {
    if (!isPriced) return;
    addItem({ id, name: item.name, unitPrice, priceLabel: item.price });
    openCart();
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-cafe-line bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-cafe-rose/50">
      <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-cafe-rose/35 transition group-hover:bg-cafe-rose" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div className="min-w-0 pl-2">
          <h3 className="text-lg font-extrabold leading-snug text-cafe-ink sm:text-xl">{item.name}</h3>
          {item.description && <p className="mt-2 text-sm leading-6 text-cafe-muted">{item.description}</p>}
        </div>
        <p className="w-fit shrink-0 rounded-full border border-cafe-rose/25 bg-cafe-tint px-3 py-1 text-left font-heading text-base uppercase text-cafe-roseDeep sm:text-right sm:text-lg">{item.price}</p>
      </div>
      {item.addOn && <p className="mt-4 border-t border-cafe-line pt-3 text-xs uppercase text-cafe-muted">{item.addOn}</p>}

      <div className="mt-4 flex items-center justify-between gap-3 pl-2">
        {isPriced ? (
          qty > 0 ? (
            <div className="inline-flex items-center gap-1 rounded-full border border-cafe-rose/40 bg-cafe-tint px-1 py-1">
              <button
                type="button"
                onClick={() => setQty(id, qty - 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cafe-roseDeep transition hover:bg-white"
                aria-label={`Decrease ${item.name}`}
              >
                <Minus size={14} />
              </button>
              <span className="min-w-7 text-center text-sm font-extrabold text-cafe-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty(id, qty + 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cafe-roseDeep transition hover:bg-white"
                aria-label={`Increase ${item.name}`}
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center gap-2 rounded-full bg-cafe-ink px-4 py-2 text-xs font-extrabold uppercase text-white transition hover:bg-cafe-rose"
            >
              <Plus size={14} /> Add to Cart
            </button>
          )
        ) : (
          <span className="text-xs uppercase text-cafe-muted">Call to order</span>
        )}
        {qty > 0 && (
          <span className="text-xs font-bold uppercase text-cafe-muted">
            ${(qty * unitPrice).toFixed(2)} in cart
          </span>
        )}
      </div>
    </article>
  );
}
