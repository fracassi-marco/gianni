import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disegni - Gianni Albertario',
}

export default function Disegni() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h2>Disegni a China</h2>
            <p className="subtitle">Angoli di Pavia con l&apos;acqua come filo conduttore</p>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="gallery">
              {/* Esempio di disegno - ripetere per ogni opera */}
              <div className="gallery-item">
                <div className="image-placeholder">
                  <p>Inserire immagine disegno</p>
                </div>
                <h3>Titolo del disegno</h3>
                <p className="description">Descrizione del disegno</p>
              </div>

              <div className="gallery-item">
                <div className="image-placeholder">
                  <p>Inserire immagine disegno</p>
                </div>
                <h3>Titolo del disegno</h3>
                <p className="description">Descrizione del disegno</p>
              </div>

              <div className="gallery-item">
                <div className="image-placeholder">
                  <p>Inserire immagine disegno</p>
                </div>
                <h3>Titolo del disegno</h3>
                <p className="description">Descrizione del disegno</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
