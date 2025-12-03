'use client'


import Header from '@/components/Header'
import Footer from '@/components/Footer'
import canzoniData from './canzoni-data.json'

export default function Canzoni() {
  // Rimuovi duplicati (mantieni solo la versione con il nome più corto/pulito)
  const canzoniUniche = canzoniData.filter((canzone, index, self) => {
    const nomeNormalizzato = canzone.nome.toLowerCase().replace(/[^a-z0-9]/g, '')
    return index === self.findIndex(c => 
      c.nome.toLowerCase().replace(/[^a-z0-9]/g, '') === nomeNormalizzato
    )
  })

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h2>Canzoni</h2>
            <p className="subtitle">Brani musicati con SUNO</p>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="songs-list">
              {canzoniUniche.map((canzone, index) => {
                return (
                  <article key={index} className="song-item">
                    <h3>{canzone.nome}</h3>
                    <div className="audio-player">
                      <audio 
                        controls 
                        controlsList="nodownload"
                      >
                        <source src={`/canzoni/${canzone.file}`} type="audio/mpeg" />
                        Il tuo browser non supporta l&apos;elemento audio.
                      </audio>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="info-box">
              <p>
                Le canzoni sono state musicate con l&apos;aiuto dell&apos;intelligenza artificiale SUNO, 
                su ispirazione dei testi lasciati in eredità da Gabriela.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
