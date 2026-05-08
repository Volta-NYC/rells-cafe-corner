import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Menu", href: "/#menu", external: false },
  { label: "Order Now", href: "/#menu", external: false },
  { label: "About", href: "/#about", external: false },
  { label: "Reviews", href: "https://rellscafecorner.com/reviews", external: true },
  { label: "Contact Us", href: "/#contact", external: false },
  { label: "Allergy Info", href: "https://rellscafecorner.com/allergy-info", external: true },
];
const legalLinks = [
  { label: "Terms & Conditions", href: "https://rellscafecorner.com/terms-and-conditions" },
  { label: "Privacy Policy", href: "https://rellscafecorner.com/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cafe-line bg-white px-5 py-12 text-cafe-inkSoft md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 pt-4 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Rell's Cafe Corner logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full border border-cafe-rose object-cover"
            />
            <span className="font-heading text-lg uppercase text-cafe-ink">Rell&apos;s Cafe Corner</span>
          </div>
          <p className="mt-5 text-cafe-muted">Brooklyn&apos;s Favorite Cafe - 276 Chestnut Street</p>
          <p className="mt-4 text-sm text-cafe-subtle">© 2026 Cherylles Kitchen LLC</p>
          <p className="mt-3 text-sm text-cafe-subtle">
            Made by{" "}
            <a
              href="https://voltanyc.org"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--volta-green)] transition hover:opacity-85"
            >
              Volta
            </a>
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-heading uppercase text-cafe-rose">Links</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-cafe-inkSoft/85">
            {footerLinks.map((link) => (
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-cafe-rose">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="transition hover:text-cafe-rose">
                  {link.label}
                </Link>
              )
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-cafe-subtle">
            {legalLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-cafe-rose">{link.label}</a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading uppercase text-cafe-rose">Accepted Here</h3>
          <p className="text-sm text-cafe-inkSoft/85">Visa, MasterCard, Visa Electron, AmEx</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/us/app/cherylles-kitchen-llc/id6753680663"
              target="_blank"
              rel="noreferrer"
              aria-label="Download on the App Store"
              className="transition hover:opacity-85"
            >
              <Image src="/images/appstore.svg" alt="Download on the App Store" width={128} height={39} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fh885262"
              target="_blank"
              rel="noreferrer"
              aria-label="Get it on Google Play"
              className="transition hover:opacity-85"
            >
              <Image src="/images/playstore.svg" alt="Get it on Google Play" width={128} height={39} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
