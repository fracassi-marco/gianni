# Sito Web Gianni Albertario - Next.js

Sito web statico generato con Next.js 15 per presentare l'opera artistica di Gianni Albertario: disegni a china, testi e canzoni.

## Struttura del progetto

```
gianni/
├── app/
│   ├── layout.js          # Layout principale
│   ├── page.js            # Homepage "Chi Sono"
│   ├── globals.css        # Stili globali
│   ├── disegni/page.js    # Pagina disegni
│   ├── testi/page.js      # Pagina testi
│   ├── canzoni/page.js    # Pagina canzoni (con accordion)
│   └── contatti/page.js   # Pagina contatti
├── components/
│   ├── Header.js          # Navigazione principale
│   └── Footer.js          # Footer del sito
├── canzoni/               # File audio MP3
├── public/                # File statici (immagini, etc)
├── out/                   # HTML statico generato (dopo build)
└── static-html-old/       # Backup versione HTML originale
```

## Comandi disponibili

### Sviluppo
```bash
npm run dev
```
Avvia il server di sviluppo su http://localhost:3000

### Build statico
```bash
npm run build
```
Genera l'HTML statico nella cartella `out/`

### Preview produzione
```bash
npm start
```
Avvia un server per visualizzare la build di produzione

## Caratteristiche

- **Export statico**: Configurato per generare HTML puro
- **Responsive**: Funziona su tutti i dispositivi
- **SEO-friendly**: Metadata configurato per ogni pagina
- **Accordion interattivo**: Nella pagina canzoni per visualizzare i testi
- **Audio player**: Con protezione download per i file MP3
- **Design elegante**: Palette sobria con Tailwind CSS

## Come aggiungere contenuti

### Aggiungere un disegno
1. Inserire l'immagine nella cartella `public/images/`
2. Modificare `app/disegni/page.js` aggiungendo un nuovo blocco:

```jsx
<div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
  <img src="/images/nome-disegno.jpg" alt="Descrizione" className="w-full h-72 object-cover" />
  <div className="p-6">
    <h3 className="text-xl font-normal text-primary mb-2">Titolo</h3>
    <p className="text-sm text-accent">Descrizione</p>
  </div>
</div>
```

### Aggiungere una canzone
1. Inserire il file MP3 nella cartella `canzoni/`
2. Modificare `app/canzoni/page.js` aggiungendo un nuovo articolo

### Aggiungere un testo
Modificare `app/testi/page.js` aggiungendo un nuovo articolo

## Deploy

Il contenuto della cartella `out/` può essere caricato su qualsiasi hosting statico:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Qualsiasi server web

## Note tecniche

- Next.js 15.5.6
- React 19
- Tailwind CSS 4.0
- Export statico abilitato in `next.config.js`
- Ottimizzazione immagini disabilitata per export statico
