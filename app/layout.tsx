import './globals.css'

export const metadata = {
  title: 'Mikku - Developer Portfolio',
  description: 'Full-stack developer specializing in Rust, TypeScript, and modern web technologies',
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