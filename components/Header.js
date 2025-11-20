import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <h1 className="logo">Gianni Albertario</h1>
          <ul className="nav-menu">
            <li>
              <Link href="/">Chi Sono</Link>
            </li>
            <li>
              <Link href="/disegni">Disegni</Link>
            </li>
            <li>
              <Link href="/testi">Testi</Link>
            </li>
            <li>
              <Link href="/canzoni">Canzoni</Link>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
