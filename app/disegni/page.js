import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disegni a china - Gianni Albertario',
}

const disegni = [
  { nome: 'Battello sul Ticino a Pavia', file: 'Battello sul Ticino a Pavia.jpg' },
  { nome: 'Confluente Naviglio pavese - Ticino', file: 'Confluente Naviglio pavese - Ticino.jpg' },
  { nome: 'Fontanella in cortile longobardo', file: 'Fontanella in cortile longobardo.jpg' },
  { nome: 'Fossato attorno Castello Visconteo - Pavia', file: 'Fossato attorno Castello Visconteo - Pavia.jpg' },
  { nome: 'Il Naviglio cade nel Ticino', file: 'Il Naviglio cade nel Ticino.jpg' },
  { nome: 'Il Ticino a Pavia', file: 'Il Ticino a Pavia.jpg' },
  { nome: 'La Lavandaia del Ticino a Pavia', file: 'La Lavandaia del Ticino a Pavia.jpg' },
  { nome: 'La fontanella di San Michele a Pavia', file: 'La fontanella di San Michele a Pavia.jpg' },
  { nome: 'Mulino a Bereguardo', file: 'Mulino a Bereguardo.jpg' },
  { nome: 'Naviglio Pavese a Milano', file: 'Naviglio Pavese a Milano.jpg' },
  { nome: 'Naviglio a Pavia', file: 'Naviglio a Pavia.jpg' },
  { nome: 'Pavia...il Ticino e i suoi ponti', file: 'Pavia...il Ticino e i suoi ponti.jpg' },
  { nome: 'Piena 2016 del Ticino a Pavia', file: 'Piena 2016 del Ticino a Pavia.jpg' },
  { nome: 'Pioggia in Piazza Vittoria a Pavia', file: 'Pioggia in Piazza Vittoria a Pavia.jpg' },
  { nome: 'Policlinico San Matteo con fontana', file: 'Policlinico San Matteo con fontana.jpg' },
  { nome: 'Ponte all\'Osteria del Naviglio a Pavia', file: 'Ponte all\'Osteria del Naviglio a Pavia.jpg' },
  { nome: 'Ponte di barche sul Ticino', file: 'Ponte di barche sul Ticino.jpg' },
  { nome: 'Pozzo Casa Eustachi', file: 'Pozzo Casa Eustachi.jpg' },
  { nome: 'Pozzo nel cortile Magnolie Università', file: 'Pozzo nel cortile Magnolie Università.jpg' },
  { nome: 'Scorcio del BorgoTicino a Pavia', file: 'Scorcio del BorgoTicino a Pavia.jpg' },
]

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
              {disegni.map((disegno, index) => (
                <div key={index} className="gallery-item">
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image
                      src={`/images/${disegno.file}`}
                      alt={disegno.nome}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3>{disegno.nome}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
