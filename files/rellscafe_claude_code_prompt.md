# Claude Code Prompt — Rell's Cafe Corner (Cherylles Kitchen LLC) Website Remodel

Build a stunning, modern restaurant/café website for **Cherylles Kitchen LLC** (brand: **Rell's Cafe Corner**), a sandwich store and café at 276 Chestnut Street, Brooklyn. The current site is a generic FoodHub ordering template — functional but completely soulless. I want this to look like a real Brooklyn café with personality, warmth, and appetite appeal. Use **Next.js (App Router) + Tailwind CSS + Framer Motion**.

---

## DESIGN DIRECTION

Think: warm Brooklyn café meets bold street-food energy. Dark, rich backgrounds with pops of gold and food photography that makes you hungry.

- **Color palette:** Deep black (#0A0A0A), charcoal (#1A1A1A), warm gold/amber (#D4A853), cream white (#F5F2EA), burnt orange accent (#E87A2F), soft sage green (#8BAF7F for salad/fresh items). Pure white (#FFFFFF) for card text on dark backgrounds.
- **Typography:** Montserrat (weight 800, uppercase) for headings — this matches their current brand. Roboto Condensed or DM Sans for body text. Keep headings bold and impactful.
- **Vibe:** Dark, moody food photography backgrounds. Gold accents. The current site already uses a dark aesthetic on the About page — lean into that. Think upscale diner meets Instagram-worthy café. The owner (a woman, visible in the circular logo photo) should feel present in the brand.
- **Layout:** Full-bleed hero sections, sticky nav, smooth scroll between menu categories, card-based menu items with hover animations, parallax food imagery between sections.

---

## SECTIONS TO BUILD (in order, top to bottom)

### 1. Navbar
- Left: Logo image (circular photo) + "Rell's Cafe Corner" in Montserrat bold
- Right links: Home, Menu, About, Order Now
- Logo image URL: https://assets.foodhub.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1758998674phpUEl3iS.jpg
- Sticky on scroll with dark backdrop blur
- "Order Now" as a highlighted/accent button (gold background)
- Mobile hamburger menu

### 2. Hero Section
- Full-viewport height, dark overlay
- Background image: https://assets.touch2success.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1759573816phpEk4WwX.jpg (croissants/pastries shot)
- Gradient overlay: linear-gradient from #000000fa at bottom to transparent at top
- Large headline: "FEELING A LITTLE SAUCY?" (their actual tagline from the About page — keep it)
- Use an animated fire/glow effect on the word "SAUCY" (CSS animation, not a GIF)
- Subtext: "Brooklyn's favorite café. Sandwiches, breakfast & more — delivered in 30 minutes."
- Two CTAs: "View Menu" (scroll to menu) and "Order Now" (links to https://rellscafecorner.com/, opens new tab)
- Subtle scroll-down indicator

### 3. About Section
- Black background, white text
- Split layout: food image on left, text on right
- Left image: https://assets.touch2success.com/static/adbe6939bc20dd710f84ec6592b783c9/img/1759574097php4ELJbc.jpg (chicken & waffles)
- Right image (decorative, partially behind text): https://assets.touch2success.com/static/c5da8c3b32b8cc9fc8d76de87e85ec0a/img/1713389031phpTrmw1t.png (fries with ketchup — this has transparent bg, great for overlay)
- Heading: "ABOUT US"
- Body: "We know life gets busy, and that's why we make food easy! Whether you're on your lunch break, heading home after work, or planning a cozy night in, Cherylles Kitchen LLC in Brooklyn offers a variety of freshly prepared meals that are ready in minutes. From gourmet sandwiches to crispy wings, enjoy top-quality meals without breaking the bank."
- CTA button: "ORDER NOW" with the animated border-line style (two horizontal lines above/below that shift on hover)
- Fade-in on scroll animation

### 4. Chef's Special Section
- Dark background with subtle gradient
- Heading: "CHEF'S SPECIAL"
- 3 featured items in bordered cards (1px white border, 20px border-radius):
  1. **Salad** — image: https://assets.touch2success.com/static/c5da8c3b32b8cc9fc8d76de87e85ec0a/img/1718796543phpF0XrpM.png
  2. **Avocado Toast** — image: https://assets.touch2success.com/static/b1cb275a788a9c10f60a93682b1e7039/img/1758984941php76hwJd.jpg
  3. **Macarons** — image: (use this same CDN pattern, or find a macaron stock image)
- Cards should have a slight tilt/3D hover effect
- Label underneath each image in gold text

### 5. Menu Section (THE BIG ONE)
- This is the core of the site. Display the FULL menu organized by category.
- Section background: dark wood texture (use a CSS dark wood pattern or this image behind: https://public.touch2success.com/static/c5da8c3b32b8cc9fc8d76de87e85ec0a/img/1680172992phpP7mS2x.jpeg)
- Sticky horizontal category tabs at the top of the section: All Day Breakfast, Gourmet Sandwiches, Salads Wings & Things, Kids Corner, Desserts, Drinks
- Clicking a tab smooth-scrolls to that category within the section
- Menu items displayed as clean cards (2-column grid on desktop, 1-column mobile)
- Each card: item name (bold), description (smaller text, muted color), price (gold/amber, right-aligned)
- Add-on info displayed in a subtle smaller font below descriptions
- Section intro for "Gourmet Sandwiches" should show the combo pricing info in a styled banner
- No images needed per menu item — text-only cards look cleaner for menus this large

**Full menu data (use ALL of this):**

#### ALL DAY BREAKFAST
*"Please Contact The Takeaway For Choice Of Breads"*
- Bagels — $2.00
- Avocado Toast — $4.75
- Mini Pancakes — $7.00
- Croissant Lovers Sandwich — $7.50
- B.L.T. Sandwich — $6.95
- Chicken & Waffles — $13.95
- Small Assorted Egg Sandwiches — $6.00
- Small Yogurt Fruit Parfait — $3.75
- Large Yogurt Fruit Parfait — $5.50
- Muffins — $2.00
- Croissants — $2.25

#### GOURMET SANDWICHES
*Combo options: Chips/Fruit & Drink $3.25 | Fries & Drink $4.25 | Soup Combo $6.25*
- The Turkey & Avocado Sandwich — $8.50
- Turkey Club With Bacon Sandwich — $9.50
- Grilled Chicken Caesar Wrap — $9.00
- The Jerk Chicken Sandwich — $10.50
- The Italian Chicken Sandwich — $9.50
- House Tuna Sandwich — $7.75
- Veggie & Hummus Wrap — $9.00
- Egg Sandwich — $5.25
- Egg & Cheese Sandwich — $6.10
- Bacon, Egg, & Cheese Sandwich — $6.95

#### SALADS, WINGS & THINGS
- Jerk Chicken Salad — $14.50
- Chicken Caesar Salad — $13.00
- The Chicken & Avocado Salad — $14.75
- Chicken Wings (6 flavors) — $12.75
- French Fries — $3.50
- Sweet Plantains — $3.50
- Bacon — $3.50

#### KIDS CORNER
*With Chips Or Fruit And Small Drink*
- Kids Grilled Cheese — $6.50
- Kids Peanut Butter & Jelly — $6.50
- Kids Turkey With Lettuce — $6.50
- Kids Ham, Cheese With Lettuce — $6.50
- Kids Nutella On Toast — $6.50

#### DESSERTS
- Chocolate Chip Cookie — $2.00
- White Chocolate Macadamia Nut Cookie — $2.00
- Macarons (assorted) — $2.00
- Cupcakes (Lemon Raspberry / Chocolate / Vanilla / Strawberry / Red Velvet) — $3.50 each

#### DRINKS
- Hot Chocolate — (price TBD)
- 15oz Lemonades — $4.25
- 15oz Blueberry Basil Lemonade Fruit Smoothie — $4.50

### 6. Order Info / How It Works
- 3-column layout with icons
- Column 1: "Browse the Menu" — "Check out our full menu of sandwiches, breakfast, salads & more."
- Column 2: "Place Your Order" — "Order online for delivery in 30 mins or pickup in just 15 mins."
- Column 3: "Enjoy!" — "Freshly prepared, every time. We don't compromise on quality."
- Gold accent icons (use Lucide icons: UtensilsCrossed, Clock, Sparkles)
- Black background, white/gold text

### 7. App Download CTA
- Full-width banner with dark background
- Heading: "Download Our App"
- Subtext: "Get exclusive discounts and a smooth ordering experience"
- App Store and Google Play badge images:
  - https://nativesites.touch2success.com/compressed_images/Appstore.svg
  - https://nativesites.touch2success.com/compressed_images/Playstore.svg
- Phone mockup illustration or just the badges

### 8. Location / Contact Section
- Map embed or styled address card
- Address: 276 Chestnut Street, Brooklyn
- Include delivery radius info (30 min delivery)
- Simple contact form or "Get in Touch" button

### 9. Footer
- Dark background (#0A0A0A)
- Logo + "Rell's Cafe Corner" text
- "Brooklyn's Favorite Café · 276 Chestnut Street"
- Links: Menu, Order Now, About, Reviews, Contact Us, Allergy Info
- Legal: Terms & Conditions, Privacy Policy
- Payment accepted: Visa, MasterCard, Visa Electron, AmEx
- App download badges (smaller)
- "© 2026 Cherylles Kitchen LLC"

---

## TECHNICAL REQUIREMENTS

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS v3+ with custom color config
- **Animations:** Framer Motion for scroll-triggered animations, parallax, card hovers, menu tab transitions
- **Fonts:** Import from Google Fonts — Montserrat (800 weight) + Roboto Condensed (400) or DM Sans
- **Images:** Use next/image with external URLs. Set unoptimized={true}. The food photos are hosted on assets.foodhub.com and assets.touch2success.com CDNs.
- **Responsive:** Mobile-first. The menu section is critical on mobile — single column, easy to read.
- **Performance:** Lazy load everything below the fold. Dark backgrounds make the site feel fast.
- **Accessibility:** Proper semantic HTML, alt text, keyboard nav, contrast compliant (white on black is already good).
- **No backend needed** — static marketing site. "Order Now" links to the existing FoodHub ordering page.

---

## FILE STRUCTURE

```
rells-cafe-corner/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── ChefsSpecial.tsx
│   ├── Menu.tsx
│   ├── MenuItem.tsx
│   ├── MenuCategoryTabs.tsx
│   ├── HowItWorks.tsx
│   ├── AppDownload.tsx
│   ├── Location.tsx
│   └── Footer.tsx
├── lib/
│   └── menuData.ts (complete menu array with all items, descriptions, prices, categories)
├── public/
│   └── (any local assets)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## WHAT TO AVOID

- The generic FoodHub template look — white cards on dark wood, no personality
- Tiny text dumped into 2-column grids with no breathing room
- Generic stock food photos that don't match the menu (they currently use some stock — that's fine, just make them look intentional)
- Overcrowded menu sections — give items room, use dividers between categories
- Bright white backgrounds — this brand is dark-themed, keep it dark
- Cookie-cutter restaurant templates — this should feel like Rell's place, not just "a restaurant website"
- Putting all the add-on price info in the main card — show it on hover or in an expandable detail
