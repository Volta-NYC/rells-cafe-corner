import "./globals.css"
import CartDrawer from "@/components/CartDrawer"
import { CartProvider } from "@/lib/cart"

export const metadata = {
  title: "Cherylles Kitchen LLC | Sandwich Store in Brooklyn | Order Food Online",
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
