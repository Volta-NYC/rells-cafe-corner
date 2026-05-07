"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { makeItemId, parsePrice, useCart } from "@/lib/cart";
import type { MenuItem, OptionGroup } from "@/lib/menuData";

type Selections = Record<string, string[]>;

function emptySelections(options: OptionGroup[] | undefined): Selections {
  const result: Selections = {};
  options?.forEach((group) => {
    result[group.id] = [];
  });
  return result;
}

export default function MenuItemModal({
  item,
  open,
  onClose,
}: {
  item: MenuItem;
  open: boolean;
  onClose: () => void;
}) {
  const { addItem, openCart } = useCart();
  const basePrice = parsePrice(item.price);
  const [selections, setSelections] = useState<Selections>(() => emptySelections(item.options));
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (open) {
      setSelections(emptySelections(item.options));
      setQty(1);
    }
  }, [open, item.options]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const requiredMissing = useMemo(() => {
    return (item.options ?? []).some(
      (group) => group.required && (selections[group.id]?.length ?? 0) === 0,
    );
  }, [item.options, selections]);

  const extrasTotal = useMemo(() => {
    let extra = 0;
    (item.options ?? []).forEach((group) => {
      const picked = selections[group.id] ?? [];
      group.choices.forEach((choice) => {
        if (picked.includes(choice.name) && choice.price) extra += choice.price;
      });
    });
    return extra;
  }, [item.options, selections]);

  const unitPrice = basePrice + extrasTotal;
  const lineTotal = unitPrice * qty;

  const toggleChoice = (group: OptionGroup, choiceName: string) => {
    setSelections((prev) => {
      const current = prev[group.id] ?? [];
      if (group.type === "single") {
        return { ...prev, [group.id]: current[0] === choiceName ? [] : [choiceName] };
      }
      const next = current.includes(choiceName)
        ? current.filter((n) => n !== choiceName)
        : [...current, choiceName];
      return { ...prev, [group.id]: next };
    });
  };

  const handleAdd = () => {
    if (requiredMissing || basePrice <= 0) return;
    const flatOptions = (item.options ?? []).flatMap((group) => selections[group.id] ?? []);
    const sig = flatOptions.length ? "|" + [...flatOptions].sort().join(",") : "";
    const id = makeItemId(item.name) + sig;
    addItem(
      {
        id,
        name: item.name,
        unitPrice,
        priceLabel: item.price,
        options: flatOptions.length ? flatOptions : undefined,
      },
      qty,
    );
    onClose();
    openCart();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4">
          <motion.button
            type="button"
            aria-label="Close"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cafe-ink/50 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.name}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-t-3xl border border-cafe-line bg-white text-cafe-ink shadow-2xl sm:rounded-3xl"
          >
            <div className="relative px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cafe-bg text-cafe-ink transition hover:bg-cafe-line"
              >
                <X size={18} />
              </button>
              <div className="flex items-start justify-between gap-4 pr-12">
                <h2 className="font-heading text-2xl font-extrabold uppercase text-cafe-ink sm:text-3xl">{item.name}</h2>
                <span className="font-heading text-2xl font-extrabold text-cafe-ink sm:text-3xl">
                  {basePrice > 0 ? basePrice.toFixed(2) : item.price}
                </span>
              </div>
              {item.description && <p className="mt-3 text-sm leading-6 text-cafe-muted sm:text-base">{item.description}</p>}
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-4 sm:px-8">
              {(item.options ?? []).map((group) => {
                const picked = selections[group.id] ?? [];
                return (
                  <div key={group.id} className="border-t border-cafe-line py-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-heading text-lg font-extrabold text-cafe-ink">{group.label}</h3>
                      <span className="text-sm text-cafe-muted">{group.required ? "Required" : "Optional"}</span>
                    </div>
                    {group.type === "single" && <p className="mt-1 text-sm text-cafe-muted">Choose 1</p>}
                    <ul className="mt-3 space-y-3">
                      {group.choices.map((choice) => {
                        const checked = picked.includes(choice.name);
                        const inputId = `${group.id}-${choice.name}`;
                        return (
                          <li key={choice.name}>
                            <label
                              htmlFor={inputId}
                              className="flex cursor-pointer items-center justify-between gap-4 text-base text-cafe-ink"
                            >
                              <span className="flex items-center gap-3">
                                <input
                                  id={inputId}
                                  type={group.type === "single" ? "radio" : "checkbox"}
                                  name={group.id}
                                  checked={checked}
                                  onChange={() => toggleChoice(group, choice.name)}
                                  className="peer sr-only"
                                />
                                <span
                                  className={
                                    group.type === "single"
                                      ? `inline-flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${
                                          checked ? "border-cafe-ink" : "border-cafe-line"
                                        }`
                                      : `inline-flex h-5 w-5 items-center justify-center rounded-md border-2 transition ${
                                          checked ? "border-cafe-ink bg-cafe-ink text-white" : "border-cafe-line"
                                        }`
                                  }
                                  aria-hidden="true"
                                >
                                  {group.type === "single" && checked && (
                                    <span className="h-2.5 w-2.5 rounded-full bg-cafe-ink" />
                                  )}
                                  {group.type === "multi" && checked && (
                                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M3 8.5l3.5 3.5L13 4.5" />
                                    </svg>
                                  )}
                                </span>
                                <span>{choice.name}</span>
                              </span>
                              {choice.price ? (
                                <span className="font-medium text-cafe-ink">{choice.price.toFixed(2)}</span>
                              ) : null}
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              {item.addOn && (item.options ?? []).length === 0 && (
                <p className="border-t border-cafe-line py-5 text-sm text-cafe-muted">{item.addOn}</p>
              )}
            </div>

            <div className="flex items-center gap-3 border-t border-cafe-line bg-white px-6 py-4 sm:px-8">
              <div className="inline-flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQty((v) => Math.max(1, v - 1))}
                  disabled={qty <= 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-cafe-line text-cafe-ink transition hover:border-cafe-ink disabled:opacity-40"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-6 text-center text-base font-extrabold text-cafe-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((v) => v + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-cafe-line text-cafe-ink transition hover:border-cafe-ink"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                disabled={requiredMissing || basePrice <= 0}
                className="ml-auto flex flex-1 items-center justify-between rounded-2xl bg-cafe-ink px-5 py-4 font-heading text-base font-extrabold uppercase text-white transition hover:bg-cafe-rose disabled:cursor-not-allowed disabled:bg-cafe-line disabled:text-cafe-muted"
              >
                <span>{basePrice > 0 ? "Add" : "Unavailable"}</span>
                {basePrice > 0 && <span>{lineTotal.toFixed(2)}</span>}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
