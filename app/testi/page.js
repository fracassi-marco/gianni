'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import testiData from './testi-data.json'

export default function Testi() {
  const [openAccordions, setOpenAccordions] = useState({})

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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
              {testiData.map((testo, index) => {
                const needsAccordion = testo.lineCount > 8
                const previewLines = needsAccordion ? testo.lines.slice(0, 8) : testo.lines
                const remainingLines = needsAccordion ? testo.lines.slice(8) : []
                const isOpen = openAccordions[index]

                return (
                  <article key={index} className="lyrics-item">
                    <h3>{testo.title}</h3>
                    <div className="lyrics-text">
                      <p>
                        {previewLines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < previewLines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      
                      {needsAccordion && (
                        <>
                          <div 
                            className="accordion-content" 
                            style={{
                              maxHeight: isOpen ? 'none' : '0',
                              overflow: isOpen ? 'visible' : 'hidden',
                              transition: isOpen ? 'none' : 'max-height 0.3s ease'
                            }}
                          >
                            <p>
                              {remainingLines.map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < remainingLines.length - 1 && <br />}
                                </span>
                              ))}
                            </p>
                          </div>
                          
                          <div className="accordion" style={{ marginTop: '1rem' }}>
                            <button
                              onClick={() => toggleAccordion(index)}
                              className="accordion-button"
                            >
                              <span>{isOpen ? 'Nascondi il resto' : 'Leggi tutto il testo'}</span>
                              <span className="accordion-icon">
                                {isOpen ? '−' : '+'}
                              </span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
