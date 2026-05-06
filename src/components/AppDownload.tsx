import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="bg-cafe-charcoal py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase text-cafe-gold">Rell's on the go</p>
          <h2 className="font-heading text-5xl uppercase text-white md:text-6xl">Download Our App</h2>
          <p className="mt-4 text-lg text-cafe-cream/72">Get exclusive discounts and a smooth ordering experience</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Image src="https://nativesites.touch2success.com/compressed_images/Appstore.svg" alt="Download on the App Store" width={164} height={50} unoptimized />
          <Image src="https://nativesites.touch2success.com/compressed_images/Playstore.svg" alt="Get it on Google Play" width={164} height={50} unoptimized />
        </div>
      </div>
    </section>
  );
}
