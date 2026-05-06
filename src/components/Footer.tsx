import Image from "next/image";
import Link from "next/link";

const footerLinks = ["Menu", "Order Now", "About", "Reviews", "Contact Us", "Allergy Info"];
const legalLinks = ["Terms & Conditions", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-5 py-12 text-cafe-cream md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="https://assets.foodhub.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1758998674phpUEl3iS.jpg"
              alt="Rell's Cafe Corner logo"
              width={56}
              height={56}
              unoptimized
              className="h-12 w-12 rounded-full border border-cafe-gold object-cover"
            />
            <span className="font-heading text-lg uppercase text-white">Rell's Cafe Corner</span>
          </div>
          <p className="mt-5 text-cafe-cream/66">Brooklyn's Favorite Cafe - 276 Chestnut Street</p>
          <p className="mt-4 text-sm text-cafe-cream/46">© 2026 Cherylles Kitchen LLC</p>
        </div>
        <div>
          <h3 className="mb-4 font-heading uppercase text-cafe-gold">Links</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-cafe-cream/68">
            {footerLinks.map((link) => (
              <Link key={link} href={link === "Menu" ? "#menu" : link === "About" ? "#about" : "https://rellscafecorner.com/"} className="transition hover:text-cafe-gold">
                {link}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-cafe-cream/46">
            {legalLinks.map((link) => <a key={link} href="https://rellscafecorner.com/" target="_blank" rel="noreferrer">{link}</a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading uppercase text-cafe-gold">Accepted Here</h3>
          <p className="text-sm text-cafe-cream/68">Visa, MasterCard, Visa Electron, AmEx</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Image src="https://nativesites.touch2success.com/compressed_images/Appstore.svg" alt="Download on the App Store" width={128} height={39} unoptimized />
            <Image src="https://nativesites.touch2success.com/compressed_images/Playstore.svg" alt="Get it on Google Play" width={128} height={39} unoptimized />
          </div>
        </div>
      </div>
    </footer>
  );
}
