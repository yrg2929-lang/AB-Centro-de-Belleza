import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AB Centro de Belleza — Adriana Morales | León, Guanajuato',
  description:
    'Centro de belleza profesional en León Centro, Guanajuato. Depilación Láser, Extensiones de Pestañas, Alaciados y Eliminación de Manchas. Agenda tu cita hoy.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf7f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#faf7f4] scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
