import type { MenuItem as MenuItemType } from "@/lib/menuData";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-cafe-charcoal/82 p-5 transition duration-300 hover:-translate-y-1 hover:border-cafe-gold/60 hover:bg-[#202020] hover:shadow-glow">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="text-xl font-extrabold text-white">{item.name}</h3>
          {item.description && <p className="mt-2 text-sm leading-6 text-cafe-cream/66">{item.description}</p>}
        </div>
        <p className="shrink-0 text-right font-heading text-lg uppercase text-cafe-gold">{item.price}</p>
      </div>
      {item.addOn && <p className="mt-4 border-t border-white/10 pt-3 text-xs uppercase text-cafe-cream/50">{item.addOn}</p>}
    </article>
  );
}
