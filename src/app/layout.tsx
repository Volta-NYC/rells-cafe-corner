import "./globals.css"

export const metadata = {
  title: "Rell's Cafe Corner | Brooklyn Cafe",
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
        {children}
      </body>
    </html>
  )
}
