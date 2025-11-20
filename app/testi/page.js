import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Testi - Gianni Albertario',
}

export default function Testi() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h2>Testi delle Canzoni</h2>
            <p className="subtitle">Parole ispirate da Gabriela</p>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="lyrics-list">
              {/* Esempio di testo */}
              <article className="lyrics-item">
                <h3>Titolo della canzone</h3>
                <div className="lyrics-text">
                  <p>
                    Inserire qui il testo della canzone<br />
                    con le strofe separate<br />
                    e la formattazione appropriata
                  </p>
                  <p>
                    Seconda strofa<br />
                    del testo della canzone
                  </p>
                </div>
              </article>

              <article className="lyrics-item">
                <h3>Titolo della seconda canzone</h3>
                <div className="lyrics-text">
                  <p>
                    Inserire qui il testo della canzone<br />
                    con le strofe separate<br />
                    e la formattazione appropriata
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
