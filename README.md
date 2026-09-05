# 🖤 MARCA — Landing Page para Estúdio de Tatuagem

**Landing page moderna, minimalista e 100% responsiva, construída em React puro (sem build), com identidade visual autoral e chatbot integrado ao WhatsApp.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![No Build](https://img.shields.io/badge/build-none-7A2E24?style=flat)
![Status](https://img.shields.io/badge/status-pronto%20para%20deploy-25D366?style=flat)

🔗 **[Ver demo ao vivo](#)** ← troque pelo link do seu deploy assim que publicar

---

## 💡 Sobre o projeto

**MARCA** é a landing page de um estúdio de tatuagem fictício, criada para demonstrar como transformar um briefing de negócio em uma experiência de marca completa: identidade visual, copywriting, UX de conversão e atendimento automatizado — tudo em uma única página, leve e sem dependências de build.

O projeto foi pensado para resolver um problema real de pequenos negócios: **transformar visitante em conversa no WhatsApp**, com o menor atrito possível.

## ✨ Destaques

- **Logo tatuada animada** — wordmark com filtro SVG de textura de tinta (`feTurbulence` + `feDisplacementMap`) e degradê de cor em loop, simulando o efeito da tinta assentando na pele.
- **Chat de WhatsApp embutido** — widget flutuante com respostas rápidas e campo de mensagem livre, sem precisar sair da página.
- **Identidade visual autoral** — paleta e tipografia construídas a partir do próprio universo da tatuagem (tinta, pele, flash sheet), fugindo dos clichês visuais de página gerada por IA.
- **Galeria com transparência** — fotos de referência em alta definição com aviso no hover deixando claro o que é imagem ilustrativa, sem enganar o visitante.
- **Marca d'água de fundo** — textura sutil que acompanha a rolagem do topo ao rodapé, reforçando o clima do estúdio sem competir com o conteúdo.
- **Zero dependência de build** — sem Node, sem bundler, sem Babel rodando no navegador. Abre em qualquer lugar, sempre.

## 🛠️ Tecnologias

- **React 18** via CDN, escrito com `React.createElement` puro (sem JSX) — elimina a necessidade de transpilação em tempo de execução.
- **CSS puro** com variáveis de tema, grid/flexbox e animações leves.
- **SVG inline** para ícones, selos e efeitos de textura — zero requisições extras, zero peso.
- **Google Fonts** (Big Shoulders Display + Inter) para a identidade tipográfica.

## 🧠 Decisões técnicas que valem destacar

> Pontos pensados para robustez em produção, não só estética.

- **Sem Babel no navegador**: a maioria dos "React sem build" que quebra em produção falha porque depende de transpilar JSX em tempo real. Aqui, o app inteiro é escrito com `React.createElement`, então não existe esse ponto de falha.
- **Sem imagens externas frágeis na base do layout**: ícones e selos são SVG inline; as únicas imagens externas (galeria) são hospedadas em CDN estável e carregadas com `loading="lazy"`.
- **Acessibilidade de base**: foco visível em links e botões, respeito a `prefers-reduced-motion`, textos alternativos em todas as imagens.

## 🚀 Como rodar localmente

Não precisa instalar nada. Basta abrir o arquivo:

```bash
# clone o repositório
git clone <url-do-seu-repositorio>
cd <pasta-do-projeto>

# abra o arquivo direto no navegador
open estudio-tattoo-marca.html   # macOS
start estudio-tattoo-marca.html  # Windows
```

Ou publique como está — é um único HTML estático, pronto para qualquer hospedagem (Vercel, Netlify, GitHub Pages).

## ⚙️ Personalização rápida

| O que mudar | Onde |
|---|---|
| Número do WhatsApp | constante `WHATS_NUMBER`, início da tag `<script>` |
| Endereço, horário, Instagram | componente `ContactSection` |
| Fotos da galeria | array `GALLERY` |
| Paleta de cores | variáveis dentro de `:root` no `<style>` |

## 📁 Estrutura

```
estudio-tattoo-marca.html   → página completa (HTML + CSS + JS)
README.md                   → este arquivo
```

## 📄 Licença

Projeto livre para estudo, adaptação e uso como base de portfólio.

## 👤 Autor

Desenvolvido por **[seu nome aqui]** — [LinkedIn](#) · [GitHub](#) · [Portfólio](#)
