import { MapPin, MessageCircle } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="bg-cafe-bg py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_0.85fr] md:px-8">
        <div className="min-h-[420px] overflow-hidden rounded-[28px] border border-cafe-line bg-white">
          <iframe
            title="Map to Rell's Cafe Corner"
            src="https://www.google.com/maps?q=276%20Chestnut%20Street%2C%20Brooklyn&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="rounded-[28px] border border-cafe-line bg-white p-8 shadow-card md:p-10">
          <p className="mb-4 text-sm font-extrabold uppercase text-cafe-rose">Visit Us</p>
          <h2 className="font-heading text-4xl uppercase text-cafe-ink md:text-6xl">276 Chestnut Street, Brooklyn</h2>
          <div className="mt-8 space-y-5 text-cafe-inkSoft/80">
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-cafe-rose" size={20} /> Delivery in 30 minutes, pickup in just 15 minutes.</p>
            <p className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-cafe-rose" size={20} /> Questions, catering, or special requests? Reach out before you order.</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://maps.google.com/?q=276%20Chestnut%20Street%2C%20Brooklyn" target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full bg-cafe-ink px-6 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-cafe-rose">
              Get Directions
            </a>
            <a href="https://rellscafecorner.com/contact-us" target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-cafe-line px-6 py-4 text-sm font-extrabold uppercase text-cafe-ink transition hover:border-cafe-rose hover:text-cafe-rose">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
