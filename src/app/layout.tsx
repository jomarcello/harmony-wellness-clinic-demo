import './globals.css'

export const metadata = {
  title: 'Healthcare Practice Demo',
  description: 'AI-powered healthcare practice automation demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
