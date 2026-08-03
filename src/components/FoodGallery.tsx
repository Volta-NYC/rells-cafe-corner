"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/rells-gallery-breakfast-bowl.jpg", alt: "Breakfast bowl from Rell's Cafe Corner" },
  { src: "/images/rells-gallery-sandwich-closeup.jpg", alt: "Close-up of a bacon sandwich" },
  { src: "/images/rells-gallery-chicken-sandwich.jpg", alt: "Crispy chicken sandwich" },
  { src: "/images/rells-gallery-kale-salad.jpg", alt: "Chicken kale salad" },
  { src: "/images/rells-gallery-steak-sandwich.jpg", alt: "Steak sandwich" },
  { src: "/images/rells-gallery-french-toast-overhead.jpg", alt: "Berry-topped French toast" },
  { src: "/images/rells-gallery-chicken-bowl.jpg", alt: "Grilled chicken bowl" },
  { src: "/images/rells-gallery-empanadas-open.jpg", alt: "Stuffed empanadas" },
  { src: "/images/rells-gallery-club-sandwich.jpg", alt: "Rell's signature club sandwich" },
  { src: "/images/rells-gallery-cheesesteak.jpg", alt: "Cheesesteak sandwich" },
];

const loopingGalleryImages = [...galleryImages, ...galleryImages];

export default function FoodGallery() {
  return (
    <section aria-labelledby="gallery-heading" className="overflow-hidden border-y border-cafe-line bg-cafe-tintSoft py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6 px-5 md:px-8"
      >
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase text-cafe-rose">From our counter</p>
          <h2 id="gallery-heading" className="font-heading text-4xl uppercase text-cafe-ink sm:text-5xl md:text-6xl">
            Made to crave
          </h2>
        </div>
        <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24" aria-hidden="true">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-cafe-rose"
          />
          <div className="absolute inset-2 overflow-hidden rounded-full border border-cafe-ink/15 bg-white p-1">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/images/rells-gallery-breakfast-bowl.jpg" alt="" fill sizes="96px" className="object-cover" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="food-gallery-window" aria-label="Rell's Cafe Corner food gallery">
        <div className="food-gallery-track">
          {loopingGalleryImages.map((image, index) => {
            const isDuplicate = index >= galleryImages.length;

            return (
              <article
                key={`${image.src}-${index}`}
                aria-hidden={isDuplicate}
                className="group relative h-[300px] w-[220px] shrink-0 overflow-hidden rounded-[22px] border-2 border-white bg-white p-2 shadow-card sm:h-[350px] sm:w-[255px]"
              >
                <div className="relative h-full overflow-hidden rounded-[15px] bg-cafe-tint">
                  <Image
                    src={image.src}
                    alt={isDuplicate ? "" : image.alt}
                    fill
                    sizes="(min-width: 640px) 255px, 220px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
