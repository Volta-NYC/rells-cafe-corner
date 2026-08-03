import type { MenuItem as MenuItemType } from "@/lib/menuData";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="grid grid-cols-[minmax(0,1fr)_auto] gap-5 border-b border-cafe-ink/10 py-5 last:border-b-0">
      <div className="min-w-0">
        <h4 className="font-heading text-base uppercase tracking-wide text-cafe-ink sm:text-lg">{item.name}</h4>
        {item.description && <p className="mt-2 text-sm italic leading-6 text-cafe-muted">{item.description}</p>}
        {item.addOn && <p className="mt-3 text-xs uppercase tracking-wide text-cafe-muted">{item.addOn}</p>}
      </div>
      <p className="whitespace-nowrap font-heading text-lg uppercase tracking-wide text-cafe-roseDeep">{item.price}</p>
    </li>
  );
}
