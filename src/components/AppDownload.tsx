import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#1A1A1A,#0A0A0A_55%,#24170d)] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1fr_320px] md:px-8">
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase text-cafe-gold">Rell&apos;s on the go</p>
          <h2 className="font-heading text-4xl uppercase text-white sm:text-5xl md:text-6xl">Download Our App</h2>
          <p className="mt-4 text-lg text-cafe-cream/72">Get exclusive discounts and a smooth ordering experience</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Image src="https://nativesites.touch2success.com/compressed_images/Appstore.svg" alt="Download on the App Store" width={164} height={50} unoptimized />
            <Image src="https://nativesites.touch2success.com/compressed_images/Playstore.svg" alt="Get it on Google Play" width={164} height={50} unoptimized />
          </div>
        </div>
        <div className="relative mx-auto h-[430px] w-[220px] rounded-[2rem] border border-cafe-gold/35 bg-cafe-black p-3 shadow-glow">
          <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="h-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#111]">
            <div className="relative h-40">
              <Image
                src="https://assets.touch2success.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1759574097php4ELJbc.jpg"
                alt=""
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-black to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-xl uppercase text-white">Order Rell&apos;s</p>
            </div>
            <div className="space-y-3 p-4">
              {["Turkey & Avocado", "Chicken & Waffles", "Blueberry Basil"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
                  <span className="text-xs font-bold text-cafe-cream">{item}</span>
                  <span className="h-2 w-2 rounded-full bg-cafe-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
