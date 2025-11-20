import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contatti - Gianni Albertario',
}

export default function Contatti() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h2>Contatti</h2>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="contact-content">
              <p className="intro-text">
                Se desiderate mettervi in contatto con me per commenti, domande o semplicemente 
                per condividere le vostre impressioni, sarò felice di leggere i vostri messaggi.
              </p>
              
              <div className="contact-form">
                <form action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="name">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Oggetto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Invia Messaggio
                  </button>
                </form>
              </div>

              <div className="contact-info">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:tuaemail@esempio.it">
                    tuaemail@esempio.it
                  </a>
                </p>
                <p>
                  <strong>Pavia, Italia</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
