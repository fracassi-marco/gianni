import './globals.css'

export const metadata = {
  title: 'Gianni Albertario - Artista',
  description: 'Portfolio artistico di Gianni Albertario: disegni a china, testi e canzoni',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
