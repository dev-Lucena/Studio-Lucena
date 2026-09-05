import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Instagram,
  Phone,
} from 'lucide-react'

const works = [
  'https://images.unsplash.com/photo-1542728928-141a8b4c7ec9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509191436522-e954c3d6b3fe?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1596815064285-45ed8a73f4d3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1565058379802-bbe93b2f703e?auto=format&fit=crop&w=1200&q=80',
]

const services = [
  ['Fineline', 'Traços precisos e delicados para arte minimalista.'],
  ['Blackwork', 'Composições marcantes, contraste alto e impacto visual.'],
  ['Realism', 'Retratos e cenas com textura e profundidade.'],
  ['Cover-up', 'Releitura técnica para cobrir tatuagens antigas.'],
]

const testimonials = [
  ['Camila R.', 'Atendimento impecável, ambiente premium e resultado acima do esperado.'],
  ['Bruno S.', 'Fechei pelo WhatsApp em minutos. O estúdio passa muita confiança.'],
  ['Lara M.', 'Visual do site é profissional e a galeria vende o trabalho sozinha.'],
]

function WhatsAppButton() {
  const phone = '5562993793731'
  const text = encodeURIComponent('Olá! Quero agendar uma avaliação na Lucena Studio.')
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  )
}

export default function App() {
  return (
    <div className="page">
      <WhatsAppButton />

      <header className="hero">
        <nav className="nav">
          <div className="brand">Lucena Studio</div>
          <div className="nav-actions">
            <a href="#portfolio">Portfólio</a>
            <a href="#contato" className="btn btn-small">
              Agendar
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <Sparkles size={16} /> Estúdio premium de tatuagem
            </p>
            <h1>Tatuagens autorais com acabamento de galeria.</h1>
            <p className="lead">
              Uma landing page moderna, rápida e pensada para converter visitantes em clientes reais,
              com foco em design editorial, prova social e contato direto via WhatsApp.
            </p>

            <div className="hero-cta">
              <a href="#contato" className="btn">
                Quero agendar <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn ghost">
                Ver trabalhos
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <Star size={16} /> 4,9/5 avaliação média
              </span>
              <span>
                <ShieldCheck size={16} /> Higiene e segurança
              </span>
              <span>
                <Clock3 size={16} /> Resposta rápida no WhatsApp
              </span>
            </div>
          </div>

          <div className="hero-card">
            <img src={works[0]} alt="Tatuagem de estúdio moderno" />
            <div className="card-overlay">
              <strong>Agenda da semana</strong>
              <p>Vagas limitadas para fineline e blackwork.</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section grid-4">
          {services.map(([title, desc]) => (
            <article className="feature" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </section>

        <section className="section" id="portfolio">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <MapPin size={16} /> Portfólio realista
              </p>
              <h2>Imagens fortes, site com presença de marca.</h2>
            </div>
            <p>
              Galeria com fotos reais ou similares a reais para valorizar o trabalho e passar
              credibilidade imediata.
            </p>
          </div>

          <div className="gallery">
            {works.map((src, i) => (
              <img key={i} src={src} alt={`Portfólio ${i + 1}`} />
            ))}
          </div>
        </section>

        <section className="section split">
          <div className="about">
            <p className="eyebrow">
              <Phone size={16} /> Atendimento comercial
            </p>
            <h2>Pronto para venda, pronto para Vercel.</h2>
            <p>
              O projeto já vem organizado em React + Vite, ideal para GitHub e deploy na Vercel.
              O botão flutuante de WhatsApp facilita o fechamento de orçamentos sem fricção.
            </p>
          </div>

          <div className="testimonials">
            {testimonials.map(([name, text]) => (
              <blockquote key={name}>
                <p>{text}</p>
                <footer>{name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section contact" id="contato">
          <div>
            <p className="eyebrow">
              <MessageCircle size={16} /> Faça seu orçamento
            </p>
            <h2>Converse no WhatsApp e reserve sua sessão.</h2>
          </div>

          <a
            className="btn"
            href="https://wa.me/5562993793731?text=Olá!%20Quero%20agendar%20uma%20avaliação%20na%20Lucena%20Studio."
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp <ArrowRight size={18} />
          </a>
        </section>
      </main>
    </div>
  )
}