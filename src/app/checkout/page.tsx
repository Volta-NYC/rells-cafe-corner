"use client";

import { ArrowLeft, Bike, CreditCard, MapPin, ShoppingBag, Trash2, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCart } from "@/lib/cart";

const SALES_TAX_RATE = 0.08875;
const ORDER_NUMBER = "1197252878";

type Mode = "delivery" | "pickup";

export default function CheckoutPage() {
  const { items, removeItem, subtotal } = useCart();
  const [mode, setMode] = useState<Mode>("delivery");
  const [submitted, setSubmitted] = useState(false);

  const tax = useMemo(() => subtotal * SALES_TAX_RATE, [subtotal]);
  const total = subtotal + tax;
  const hasItems = items.length > 0;

  const handleBuy = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="bg-cafe-bg pb-20 pt-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-[1.4fr_1fr] md:px-8">
          <section className="flex flex-col gap-5 rounded-[28px] border border-cafe-line bg-white p-6 shadow-card md:p-8">
            <Link
              href="/#menu"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cafe-ink transition hover:text-cafe-rose"
            >
              <ArrowLeft size={16} /> Back
            </Link>

            {mode === "delivery" && (
              <div className="rounded-2xl border border-cafe-rose/30 bg-cafe-tint px-5 py-4 text-center text-sm font-bold uppercase text-cafe-roseDeep">
                ▸ Add Address <span className="font-medium normal-case text-cafe-roseDeep/85">to help the driver locate you easily</span>
              </div>
            )}

            <div className="rounded-2xl border border-cafe-rose/30 bg-cafe-tint p-5">
              <p className="font-extrabold text-cafe-ink">Cherylles Kitchen LLC</p>
              <div className="mt-3 flex items-center justify-between gap-3 text-sm text-cafe-roseDeep">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  {mode === "delivery" ? "Delivery Address needed to fulfill the order" : "276 Chestnut Street, Brooklyn"}
                </span>
                <button type="button" className="text-xs font-extrabold uppercase tracking-wide hover:text-cafe-ink">
                  {mode === "delivery" ? "Add Address" : "Change"}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-cafe-line p-5">
              <p className="font-extrabold uppercase text-cafe-ink">Schedule</p>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-bold text-cafe-ink">{mode === "delivery" ? "Deliver ASAP" : "Pickup ASAP"}</p>
                  <p className="mt-1 text-sm text-cafe-muted">
                    (Ready in {mode === "delivery" ? "30" : "15"} mins)
                  </p>
                </div>
                <button type="button" className="text-xs font-extrabold uppercase tracking-wide text-cafe-roseDeep hover:text-cafe-ink">
                  Change
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-cafe-line p-5">
              <p className="font-extrabold uppercase text-cafe-ink">Payment Options</p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-3 rounded-full border border-cafe-line px-3 py-1.5 text-sm font-semibold text-cafe-ink">
                  <CreditCard size={16} className="text-cafe-roseDeep" />
                  Pay on arrival (placeholder)
                </span>
                <button type="button" className="text-xs font-extrabold uppercase tracking-wide text-cafe-roseDeep hover:text-cafe-ink">
                  Change
                </button>
              </div>
              <p className="mt-3 text-xs text-cafe-muted">
                Real payment methods (Google Pay, card processing) aren&apos;t connected yet — this button is a placeholder.
              </p>
            </div>

            <button
              type="button"
              onClick={handleBuy}
              disabled={!hasItems}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cafe-ink px-6 py-5 font-heading text-base uppercase tracking-wide text-white transition hover:bg-cafe-rose disabled:cursor-not-allowed disabled:bg-cafe-line disabled:text-cafe-muted"
            >
              {hasItems ? `Place Order — $${total.toFixed(2)}` : "Cart is empty"}
            </button>

            {submitted && hasItems && (
              <div className="rounded-2xl border border-cafe-sage/40 bg-cafe-sage/10 px-5 py-4 text-sm font-semibold text-cafe-ink">
                ✓ Order placed (demo). When real payment is wired up, this is where checkout would complete.
              </div>
            )}

            <p className="text-center text-xs uppercase tracking-widest text-cafe-muted"># {ORDER_NUMBER}</p>
          </section>

          <aside className="flex flex-col gap-5 rounded-[28px] border border-cafe-line bg-white p-6 shadow-card md:p-7">
            <p className="font-heading text-2xl uppercase text-cafe-ink">Your Cart</p>

            <div className="grid grid-cols-2 rounded-full border border-cafe-line bg-cafe-bg p-1 text-sm font-semibold">
              <button
                type="button"
                onClick={() => setMode("delivery")}
                className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 transition ${
                  mode === "delivery" ? "bg-white text-cafe-ink shadow-card" : "text-cafe-muted hover:text-cafe-ink"
                }`}
              >
                <Bike size={16} />
                <span className="flex flex-col items-start text-left leading-tight">
                  <span>Delivery</span>
                  <span className="text-[10px] font-medium uppercase text-cafe-muted">30 mins</span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMode("pickup")}
                className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 transition ${
                  mode === "pickup" ? "bg-white text-cafe-ink shadow-card" : "text-cafe-muted hover:text-cafe-ink"
                }`}
              >
                <ShoppingBag size={16} />
                <span className="flex flex-col items-start text-left leading-tight">
                  <span>Pickup</span>
                  <span className="text-[10px] font-medium uppercase text-cafe-muted">15 mins</span>
                </span>
              </button>
            </div>

            <button type="button" className="flex w-full items-center gap-2 text-left text-sm font-bold uppercase text-cafe-ink hover:text-cafe-rose">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cafe-line text-cafe-rose">+</span>
              Coupon
            </button>

            <ul className="divide-y divide-cafe-line">
              {hasItems ? (
                items.map((line) => (
                  <li key={line.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-extrabold text-cafe-sage">{line.qty}x</span>
                      <span className="font-semibold text-cafe-ink">{line.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-sm uppercase text-cafe-ink">
                        ${(line.qty * line.unitPrice).toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        className="text-cafe-muted transition hover:text-cafe-rose"
                        aria-label={`Remove ${line.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li className="py-6 text-center text-sm text-cafe-muted">
                  Your cart is empty. <Link href="/#menu" className="font-bold text-cafe-rose hover:underline">Browse the menu</Link>.
                </li>
              )}
            </ul>

            <div>
              <button type="button" className="flex w-full items-center gap-2 text-left text-sm font-bold uppercase text-cafe-ink hover:text-cafe-rose">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cafe-line text-cafe-rose">+</span>
                Add Cooking Instructions
              </button>
              <p className="mt-3 flex items-start gap-2 text-sm text-cafe-muted">
                <TriangleAlert size={16} className="mt-0.5 shrink-0 text-cafe-rose" />
                <span>
                  If you&apos;re allergic or intolerant to any items,{" "}
                  <Link href="/#contact" className="font-bold text-cafe-rose hover:underline">
                    Tap here
                  </Link>
                </span>
              </p>
            </div>

            <div className="mt-2 border-t border-dashed border-cafe-line pt-4">
              <p className="font-heading text-lg uppercase text-cafe-ink">Bill Details</p>
              <dl className="mt-3 space-y-2 text-sm text-cafe-inkSoft">
                <div className="flex justify-between">
                  <dt>Sub Total</dt>
                  <dd>${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sales Tax (8.875%)</dt>
                  <dd>${tax.toFixed(2)}</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-end justify-between border-t border-dashed border-cafe-line pt-4 font-heading text-xl uppercase text-cafe-ink">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
