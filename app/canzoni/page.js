'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Canzoni() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

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
              <article className="song-item">
                <h3>Sono Partiti Dalla Stazione</h3>
                <div className="audio-player">
                  <audio 
                    controls 
                    controlsList="nodownload"
                  >
                    <source src="/canzoni/SONO PARTITI DALLA STAZIONE.mp3" type="audio/mpeg" />
                    Il tuo browser non supporta l&apos;elemento audio.
                  </audio>
                </div>
                <p className="song-description">Brano musicato con SUNO</p>
                
                <div className="accordion">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="accordion-button"
                  >
                    <span>Leggi il testo</span>
                    <span className="accordion-icon">
                      {openAccordion === 1 ? '−' : '+'}
                    </span>
                  </button>
                  <div className="accordion-content" style={{maxHeight: openAccordion === 1 ? '1000px' : '0'}}>
                    <div className="lyrics-text">
                      <p>
                        Inserire qui il testo completo<br />
                        della canzone &quot;Sono Partiti Dalla Stazione&quot;<br />
                        con le strofe separate
                      </p>
                      <p>
                        Seconda strofa<br />
                        del testo
                      </p>
                    </div>
                  </div>
                </div>
              </article>
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
