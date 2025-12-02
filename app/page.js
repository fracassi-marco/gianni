import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h2>Chi Sono</h2>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="text-content">
              <div>
                <p>
                  Mi chiamo <strong>Gianni (Giovanni) Albertario</strong> e sono nato a Pavia il 6 novembre 1951; qualcuno mi dice essere stato portato dalla piena del Ticino di quell&apos;anno.
                </p>
                
                <p>
                  Ho avuto la fortuna di nascere povero da una famiglia ricca di valori. Se qualcuno ritenesse 
                  che sono matto pensando che sia una fortuna nascere povero, rispondo che non fosse stato così 
                  la mia vita sarebbe stata del tutto normale, ma non così bella come lo è stata.
                </p>
                
                <p>                  
                  A dispetto di alcune previsioni della sorte, l&apos;incontro con persone straordinarie ha favorito il percorso che mi ha consentito di laurearmi in ingegneria elettronica nel giugno 1975 a pochi mesi dalla dipartita di una mamma che è stata ammalata per tanti anni.
                </p>
                
                <p>
                  Ho avuto la fortuna di poter lavorare in un&apos;eccellente azienda multinazionale d&apos;informatica e poi di svolgere in proprio attività connesse alla tecnologia informatica, ma non solo.
                </p>
                
                <p>
                  Ma la vera fortuna della mia vita è stata quella di avere incontrato Gabriela, una persona stupenda che, diventata mia moglie, mi ha donato due splendidi figli che stanno accompagnandomi dopo la dipartita di quella che è stata mamma e moglie esemplare, un modello di bellezza soprattutto interiore con la quale credo di aver realizzato, come molti affermano, un vero modello di famiglia...
                </p>
                
                <p>
                  Mi sono dilettato di pittura realizzando vari quadri personali e una raccolta di disegni che 
                  potete vedere nel sito. Sono disegni che riproducono angoli della mia città, Pavia, avendo 
                  l&apos;acqua come filo conduttore.
                </p>
                
                <p>
                  Lasciando questa vita terrena, dopo un percorso meraviglioso interrotto dalla malattia, Gabriela mi ha lasciato un&apos;importante eredità, ovvero l&apos;ispirazione di testi che nel giro di pochi mesi ho trasformato in brani musicali con IA, alla quale sono stato avviato dall&apos;amico Matteo, sacerdote e musicista.
                </p>
                
                <p>
                  Nel sito, chi lo desidera può leggere i testi e ascoltare la musica.
                </p>
                
                <p>
                  Alcuni brani sono stati scritti dall&apos;amico Luciano, in testi che io ho musicato con IA.
                </p>
                
                <p>
                  L&apos;amica Simona mi ha infine suggerito di scrivere la favola della mia vita con Gabriela: ci sto provando.
                </p>
                
                <p>
                  Se avete letto fin qua, grazie di avermi voluto conoscere; spero di non deludervi.
                </p>
                
                <p className="thanks">
                  Grazie infine a Marco, per avermi aiutato a realizzare questo sito, uno stimolo per potermi dedicare in futuro alla conoscenza dell&apos;IA.
                </p>
                
                <p className="signature">
                  Gianni (Giovanni) Albertario
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
