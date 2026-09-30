import './App.css'

const EMAIL = 'ornek@eposta.com'

function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="avatar" aria-hidden="true">HB</div>
        <p className="greeting">Merhaba, ben</p>
        <h1 className="name">Hakan Bilgi</h1>
        <p className="tagline">Yeni şeyler öğrenmeyi ve üretmeyi seven biri</p>

        <div className="about">
          <h2>Hakkımda</h2>
          <p>
            Teknolojiye ve yazılıma meraklıyım. Bu sayfa, Vite ve React ile
            hazırladığım ilk projem. Fikirleri hayata geçirmeyi, yeni araçlar
            denemeyi ve öğrendiklerimi paylaşmayı seviyorum.
          </p>
        </div>

        <a className="contact-btn" href={`mailto:${EMAIL}`}>
          İletişime Geç
        </a>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Hakan Bilgi</footer>
    </main>
  )
}

export default App
