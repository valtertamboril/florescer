/*
  Floricultura - Single-file React component (Tailwind CSS)
  --------------------------------------------------------
  Como usar:
   - Projeto novo: criar com `create-react-app` ou Next.js
   - Instalar Tailwind CSS (https://tailwindcss.com/docs/guides/create-react-app)
   - Colocar este arquivo em `src/components/FloriculturaSite.jsx` e importar em App.jsx
   - Substitua imagens/URLs, cores e textos nos lugares marcados com // TODO

  O componente é responsivo, acessível e pronto para personalizar.
*/

import React from 'react';

const SITE_TITLE = 'Minha Floricultura'; // TODO: trocar para o nome da sua loja
const LOGO_URL = ''; // TODO: URL do logo (ou deixar vazio para texto)

const sampleProducts = [
  { id: 1, name: 'Buquê Primavera', price: 'R$ 65,00', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Arranjo Tropical', price: 'R$ 85,00', img: 'https://images.unsplash.com/photo-1501004318642-b39e6451bec7?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Vaso Orquídea', price: 'R$ 120,00', img: 'https://images.unsplash.com/photo-1501004318643-b39e6451bec8?auto=format&fit=crop&w=800&q=60' },
];

export default function FloriculturaSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-white text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {LOGO_URL ? (
                <img src={LOGO_URL} alt={`${SITE_TITLE} logo`} className="h-10 w-auto rounded-md" />
              ) : (
                <div className="text-2xl font-bold text-green-800">{SITE_TITLE}</div>
              )}
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-green-700">
                <a href="#home" className="hover:underline">Início</a>
                <a href="#produtos" className="hover:underline">Produtos</a>
                <a href="#sobre" className="hover:underline">Sobre</a>
                <a href="#contato" className="hover:underline">Contato</a>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <a href="#contato" className="hidden sm:inline-block px-4 py-2 rounded-full bg-green-700 text-white text-sm font-semibold shadow">Peça agora</a>
              <button className="p-2 rounded-md border border-green-200 md:hidden" aria-label="Abrir menu">
                {/* simple hamburger */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 leading-tight">Flores frescas, momentos inesquecíveis</h1>
                <p className="mt-4 text-lg text-green-800/90">Desde arranjos para presentes até decoração para eventos — cuidamos de cada detalhe com carinho.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#produtos" className="inline-block px-6 py-3 rounded-full bg-green-700 text-white font-semibold shadow">Ver produtos</a>
                  <a href="#contato" className="inline-block px-6 py-3 rounded-full border border-green-200 text-green-800 font-semibold">Fale conosco</a>
                </div>

                <div className="mt-8 text-sm text-green-700/80">
                  <strong>Entrega rápida</strong> • Pagamento por cartão, PIX ou dinheiro • Aceitamos pedidos para eventos
                </div>
              </div>

              <div className="order-first md:order-last">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=60" alt="Buquê colorido" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="produtos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-green-900">Nossos destaques</h2>
            <a href="#" className="text-sm text-green-700 hover:underline">Ver catálogo completo →</a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-green-800">{p.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">Flor fresquinha selecionada diariamente.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-green-700 font-bold">{p.price}</div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-2 rounded-md border border-green-200 text-sm">Detalhes</button>
                      <button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm">Comprar</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Galeria */}
        <section className="bg-green-50/60 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-green-900">Galeria</h3>
            <p className="mt-2 text-sm text-green-800/80">Inspire-se com alguns dos nossos trabalhos.</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* imagens de exemplo - troque pelas suas */}
              {[1,2,3,4,5,6,7,8].map((i)=> (
                <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-sm">
                  <img src={`https://images.unsplash.com/photo-150100431864${i}?auto=format&fit=crop&w=800&q=60`} alt={`galeria ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-green-900">Sobre a nossa floricultura</h3>
              <p className="mt-4 text-green-800/90">Somos apaixonados por plantas e flores. Desde [ano] atendemos nossa comunidade com arranjos personalizados, consultoria para eventos e entrega local. Nossa missão é transformar momentos em memórias através das cores e aromas.</p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li>🌿 Flores frescas diariamente</li>
                <li>🚚 Entrega em até 24h (áreas próximas)</li>
                <li>🎉 Decoração para eventos</li>
                <li>💳 Pagamento por PIX, cartão e dinheiro</li>
              </ul>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1501004318649-b39e6451bec9?auto=format&fit=crop&w=800&q=60" alt="Equipe" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-green-900">Fale com a gente</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Formulário simulado — integre com Formspree ou sua API');}}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="seu@exemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" rows={4} placeholder="Como podemos ajudar?" />
                </div>
                <div>
                  <button type="submit" className="px-4 py-2 rounded-full bg-green-700 text-white font-semibold">Enviar mensagem</button>
                </div>
              </form>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-green-900">Endereço</h4>
                  <p className="text-sm text-green-800/90">Rua Exemplo, 123 — Centro<br />Cidade - Estado</p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-green-900">Horário</h4>
                  <p className="text-sm text-green-800/90">Seg–Sáb: 8:00 — 18:00<br />Dom: 9:00 — 13:00</p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-green-900">Telefone / WhatsApp</h4>
                  <p className="text-sm text-green-800/90">(00) 9 0000-0000</p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-green-900">Redes</h4>
                  <div className="mt-2 flex gap-3">
                    <a href="#" aria-label="Instagram" className="text-sm underline">Instagram</a>
                    <a href="#" aria-label="Facebook" className="text-sm underline">Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder - substitua por embed do Google Maps se quiser */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">Mapa (insira embed do Google Maps aqui)</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-900 text-green-100 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">© {new Date().getFullYear()} {SITE_TITLE}. Todos os direitos reservados.</div>
            <div className="text-sm">Desenvolvido por <strong>Sua Equipe</strong></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
