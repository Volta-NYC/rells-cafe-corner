import "./globals.css"
import CartDrawer from "@/components/CartDrawer"
import { CartProvider } from "@/lib/cart"

export const metadata = {
  title: "Rell's Cafe Corner | Cherylles Kitchen LLC",
  description: "Brooklyn cafe serving sandwiches, breakfast, salads, wings, desserts, and drinks from 276 Chestnut Street."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cafe-bg font-body text-cafe-ink antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
