"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  id: string;
  name: string;
  unitPrice: number;
  priceLabel: string;
  qty: number;
};

type CartContextValue = {
  items: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartLine, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "rells-cart-v1";

export function parsePrice(label: string): number {
  const match = label.match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? Number(match[0]) : 0;
}

export function makeItemId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw) as CartLine[]);
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = useCallback((item, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((line) => line.id === item.id);
      if (existing) {
        return prev.map((line) => (line.id === item.id ? { ...line, qty: line.qty + qty } : line));
      }
      return [...prev, { ...item, qty }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((line) => line.id !== id);
      return prev.map((line) => (line.id === id ? { ...line, qty } : line));
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = items.reduce((sum, line) => sum + line.qty * line.unitPrice, 0);
    return { items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, setQty, clear, count, subtotal };
  }, [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
