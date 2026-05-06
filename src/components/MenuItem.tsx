import type { MenuItem as MenuItemType } from "@/lib/menuData";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-cafe-gold/60 hover:bg-[#1c1a16] hover:shadow-glow">
      <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-cafe-gold/50 transition group-hover:bg-cafe-orange" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div className="min-w-0 pl-2">
          <h3 className="text-lg font-extrabold leading-snug text-white sm:text-xl">{item.name}</h3>
          {item.description && <p className="mt-2 text-sm leading-6 text-cafe-cream/66">{item.description}</p>}
        </div>
        <p className="w-fit shrink-0 rounded-full border border-cafe-gold/25 bg-cafe-gold/10 px-3 py-1 text-left font-heading text-base uppercase text-cafe-gold sm:text-right sm:text-lg">{item.price}</p>
      </div>
      {item.addOn && <p className="mt-4 border-t border-white/10 pt-3 text-xs uppercase text-cafe-cream/50">{item.addOn}</p>}
    </article>
  );
}
