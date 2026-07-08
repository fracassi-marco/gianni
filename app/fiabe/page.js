import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Fiabe() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h2>Fiabe</h2>
            <p className="subtitle">La favola della mia vita con Gabriela</p>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="text-content">
              <div>
                <h3>La favola di Gianni e Gabriela</h3>

                <p>
                  C&apos;era una volta, in una città attraversata da un fiume paziente, un giovane che ogni
                  mattina prendeva lo stesso treno per andare incontro al proprio destino, senza saperlo.
                  Su quel treno, un giorno, i suoi occhi incontrarono quelli di una ragazza che sembrava
                  uscita da un sogno: uno sguardo dolce, velato da una piccola malinconia, capace però di
                  raccontare più di mille parole.
                </p>

                <p>
                  &laquo;Potrei leggere il suo giornale?&raquo; chiese lui, con il coraggio improvviso di chi
                  sente che non deve lasciarsi sfuggire quell&apos;attimo. &laquo;Certo&raquo; rispose lei
                  sorridendo &laquo;ma possiamo anche vederci qualche sera&raquo;. Fu così, tra un binario e
                  l&apos;altro, che ebbe inizio la favola più bella.
                </p>

                <p>
                  Il giovane si chiamava Gianni, la ragazza Gabriela. Insieme costruirono una casa che
                  divenne il cuore di ogni loro viaggio: un luogo semplice, pieno di gesti quotidiani, dove
                  ogni angolo custodiva un ricordo e ogni finestra si affacciava su un giardino coltivato con
                  pazienza, anno dopo anno. In quella casa arrivarono due bambini, Anna e Luca, e con loro
                  arrivò anche la certezza che il sogno di famiglia immaginato tanti anni prima si era
                  finalmente avverato.
                </p>

                <p>
                  Passarono le stagioni, e come in ogni favola vera, non mancarono le prove difficili. Ma
                  l&apos;amore tra Gianni e Gabriela era una radice profonda, capace di resistere anche al
                  vento più forte. Nei momenti più bui, bastava un sorriso, una mano tesa, una parola
                  sussurrata piano per ritrovare la strada di casa.
                </p>

                <p>
                  Un giorno Gabriela chiese a Gianni: &laquo;cosa c&apos;è di là? Ho un po&apos; paura&raquo;.
                  E lui, senza esitare, le rispose: &laquo;stai tranquilla, troverai tutto il bene che hai
                  fatto qui&raquo;. Fu l&apos;ultima domanda e l&apos;ultima risposta di una vita vissuta
                  insieme, ma non fu un addio: perché chi ha amato così tanto non se ne va mai davvero, resta
                  nel giardino che ha coltivato, nelle voci dei suoi figli, nella musica che da quelle parole
                  è nata.
                </p>

                <p>
                  E così, ancora oggi, chi passa vicino a quella casa racconta che nelle sere più quiete si
                  possa sentire un dolce sussurro tra le foglie: è la voce di Gabriela che continua a
                  parlare al cuore di Gianni, ricordandogli che il loro grande amore, proprio come nelle
                  favole vere, vivrà per sempre.
                </p>

                <p style={{ textAlign: 'center' }}>
                  <a
                    href="/documents/Cosa-ce-di-la.pdf"
                    download
                    className="submit-btn"
                    style={{ display: 'inline-block', textDecoration: 'none' }}
                  >
                    Scarica il PDF &laquo;Cosa c&apos;è di là&raquo;
                  </a>
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
