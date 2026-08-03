import Image from "next/image";
import { DOORDASH_DELIVERY_URL, DOORDASH_PICKUP_URL } from "@/lib/doordash";

export default function AppDownload() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[28px] border border-cafe-line bg-cafe-tintSoft px-6 py-12 md:grid-cols-[1fr_320px] md:px-12">
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase text-cafe-rose">Order with DoorDash</p>
          <h2 className="font-heading text-4xl uppercase text-cafe-ink sm:text-5xl md:text-6xl">Pickup Or Delivery</h2>
          <p className="mt-4 text-lg text-cafe-inkSoft/80">Choose the option that works for you, then place your order directly through DoorDash.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={DOORDASH_DELIVERY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cafe-ink px-6 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose"
            >
              DoorDash Delivery
            </a>
            <a
              href={DOORDASH_PICKUP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cafe-ink/20 px-6 py-4 text-sm font-extrabold uppercase text-cafe-ink transition hover:border-cafe-rose hover:text-cafe-rose"
            >
              DoorDash Pickup
            </a>
          </div>
        </div>
        <div className="relative mx-auto h-[430px] w-[220px] rounded-[2rem] border border-cafe-line bg-white p-3 shadow-soft">
          <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-cafe-line" />
          <div className="h-full overflow-hidden rounded-[1.45rem] border border-cafe-line bg-white">
            <div className="photo-frame relative h-40">
              <Image
                src="/images/rells-empanadas.jpg"
                alt="Fresh empanadas from Rell's Cafe Corner"
                fill
                sizes="220px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-xl uppercase text-cafe-ink">Rell&apos;s On DoorDash</p>
            </div>
            <div className="space-y-3 p-4">
              {["Delivery", "Pickup", "Your Rell's Favorites"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-cafe-line bg-cafe-bg px-3 py-3">
                  <span className="text-xs font-bold text-cafe-ink">{item}</span>
                  <span className="h-2 w-2 rounded-full bg-cafe-rose" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
