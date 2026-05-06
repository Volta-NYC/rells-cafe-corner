"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";

const SALES_TAX_RATE = 0.08875;

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQty, removeItem, subtotal } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  const tax = subtotal * SALES_TAX_RATE;
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cafe-ink/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.32 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-cafe-line bg-white text-cafe-ink shadow-2xl"
            role="dialog"
            aria-label="Your cart"
          >
            <div className="flex items-center justify-between border-b border-cafe-line px-6 py-5">
              <h2 className="font-heading text-xl uppercase text-cafe-ink">Your Cart</h2>
              <button
                type="button"
                onClick={closeCart}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cafe-line text-cafe-ink transition hover:border-cafe-rose hover:text-cafe-rose"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-heading text-2xl uppercase text-cafe-ink">Cart&apos;s empty</p>
                  <p className="mt-3 text-sm text-cafe-muted">Add a sandwich, a coffee, anything — your saucy moment is one tap away.</p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-6 rounded-full bg-cafe-ink px-5 py-3 text-xs font-extrabold uppercase text-white transition hover:bg-cafe-rose"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((line) => (
                    <li key={line.id} className="rounded-2xl border border-cafe-line bg-white p-4 shadow-card">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-semibold leading-snug text-cafe-ink">{line.name}</p>
                          {line.options && line.options.length > 0 && (
                            <p className="mt-1 text-xs leading-5 text-cafe-muted">{line.options.join(", ")}</p>
                          )}
                          <p className="mt-1 text-xs uppercase text-cafe-muted">${line.unitPrice.toFixed(2)} each</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.id)}
                          className="text-cafe-muted transition hover:text-cafe-rose"
                          aria-label={`Remove ${line.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1 rounded-full border border-cafe-line px-1 py-1">
                          <button
                            type="button"
                            onClick={() => setQty(line.id, line.qty - 1)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-cafe-ink transition hover:bg-cafe-bg"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-6 text-center text-sm font-bold text-cafe-ink">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.id, line.qty + 1)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full text-cafe-ink transition hover:bg-cafe-bg"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-heading text-base uppercase text-cafe-roseDeep">
                          ${(line.qty * line.unitPrice).toFixed(2)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-cafe-line px-6 py-5">
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between text-cafe-inkSoft">
                    <dt>Sub Total</dt>
                    <dd>${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="flex justify-between text-cafe-inkSoft">
                    <dt>Sales Tax (8.875%)</dt>
                    <dd>${tax.toFixed(2)}</dd>
                  </div>
                  <div className="mt-3 flex justify-between border-t border-cafe-line pt-3 font-heading text-lg uppercase text-cafe-ink">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </dl>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="mt-5 flex w-full items-center justify-center rounded-full bg-cafe-ink px-6 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
