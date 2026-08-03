import Image from "next/image";
import type { MenuItem as MenuItemType } from "@/lib/menuData";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="relative w-full overflow-hidden rounded-2xl border border-cafe-line bg-white p-5 shadow-card">
      <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-cafe-rose/35" />
      {item.image && (
        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-cafe-bg">
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 320px" />
        </div>
      )}
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
      <p className="mt-4 pl-2 text-xs font-bold uppercase text-cafe-muted">Order on DoorDash for pickup or delivery</p>
    </article>
  );
}
