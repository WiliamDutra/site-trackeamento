Mesma família visual, porém elevação maior no hover (`-translate-y-1` + `shadow-xl`) por serem CTAs de maior importância. Tem uma barra superior em gradiente dourado→verde.

**Card de depoimento**: `rounded-lg bg-gold-light p-6 flex flex-col gap-4` — fundo bege-dourado (`#f5edd0`), sem borda, sem sombra, `border-radius: 8px`. Estrelas douradas no topo, aspas em itálico serifado.

**Card de blog**: imagem no topo (`h-48 object-cover`) com zoom sutil no hover (`group-hover:scale-105 transition-transform duration-300`), tags em pill cinza-claro, título em `font-heading font-700`.

## Botões (variantes)

| Variante | Classes principais | Uso |
|---|---|---|
| Primário sólido verde | `rounded-full bg-primary-600 hover:bg-primary-700 text-white` | Navbar, cards, WhatsApp |
| **CTA dourado (destaque)** | `rounded-full bg-gold hover:bg-gold-light text-primary-900 font-800 uppercase tracking-wide shadow-[0_10px_40px_-10px_rgba(201,168,76,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(201,168,76,0.8)] hover:-translate-y-0.5` | Hero e CTA final ("Agendar Consulta") |
| Secundário outline | fundo transparente, borda clara, texto branco/escuro | "Comunidade Longevos" |
| Escuro sólido | `bg-primary-800`/`900`, texto branco | "Ver todas as especialidades" |

Todos os botões são **pill** (`border-radius: 9999px`, `rounded-full`).

## Formulário / WhatsApp CTA

Não há formulário tradicional na home — o "formulário" é substituído por botões de deep-link para WhatsApp (`Agendar pelo WhatsApp`), estilizados como botão primário verde de largura total dentro do card, com aviso pequeno abaixo em `text-neutral-500 text-xs` ("Para agendamento — não para emergências médicas.").

## Footer

Fundo `bg-primary-600` (`#53685d`), texto branco com opacidades variadas para hierarquia (`text-white`, `text-white/70`, `text-white/55`). Grid de 4 colunas (dados de contato, consultas, produtos, contato), redes sociais como ícones circulares, barra inferior com copyright e links legais separada por `border-t border-white/10`.

---

# 5. Animações e efeitos

Após rolagem incremental por toda a página (0 → ~8000px), o comportamento observado é o seguinte:

## Header

- **Sticky/fixo** desde o topo (`position: fixed`), permanece visível durante toda a rolagem.
- **Não muda de estilo ao rolar** — continua transparente, deixando o conteúdo por trás (hero escuro no topo, seções claras depois) visível através dele. Não há efeito de "aparecer fundo branco + sombra" comumente visto em outros sites.
- Classe `transition-all duration-200` está presente mas não observei nenhuma mudança de estado que a acione (pode ser resquício de implementação para um estado de menu mobile).

## Micro-interações de hover (gatilho: `:hover`, sem JS de scroll)

| Elemento | Efeito | Duração/Easing |
|---|---|---|
| Cards (especialidade/produto) | `translate-y` para cima (-2px a -4px) + aumento de sombra + borda dourada | `duration-200`, `ease` padrão Tailwind |
| Botão CTA dourado | eleva `-translate-y-0.5` + sombra dourada intensifica (`shadow-[...0.6] → [...0.8]`) | `duration-200` |
| Botões sólidos (verde) | troca de tom `primary-600 → primary-700` | `duration-150`, `cubic-bezier(0.4,0,0.2,1)` |
| Título dentro do card (`h3`) | muda cor para `primary-700` | `transition-colors` |
| Imagem de blog | `scale-105` (zoom leve) | `duration-300` |
| Seta "→" dentro de links "Saiba mais" | desliza levemente (`translate-x-0.5/1`) | `transition-transform` |

## Elementos com animação contínua (loop, gatilho: carregamento da página, não scroll)

- Ícones decorativos "✦" espalhados pela página usam `animate-pulse` (padrão Tailwind: opacidade oscila entre 1 e 0.5 em ciclo de 2s, `cubic-bezier` suave, `infinite`).
- Existe um keyframe customizado não utilizado ativamente na página chamado `claude-pulse` (`0%,100% opacity:0.6; 50% opacity:1`), provavelmente reaproveitado de outro componente do design system.

## Efeitos de scroll (fade-in, slide, parallax, contadores)

Após inspeção detalhada do DOM (busca por classes de estado tipo `opacity-0`/`translate-y-8` e por `IntersectionObserver`/bibliotecas de scroll-reveal) e da rolagem visual completa da página: **não foram encontradas animações de entrada disparadas por scroll** (sem fade-in, sem slide-up progressivo, sem contadores numéricos animados, sem parallax de background). O conteúdo aparece totalmente renderizado assim que entra na viewport — as únicas transições dinâmicas do site são as de hover/foco listadas acima e o header fixo. Isso é uma escolha de design relativamente minimalista em termos de motion.

## Foco/acessibilidade

Botão CTA dourado possui anel de foco visível: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold` (aproximado) — importante para navegação via teclado.

---

# 6. CSS / Tailwind equivalente

```html
<!-- Botão CTA dourado (hero / seção final) -->
<a class="group inline-flex items-center justify-center rounded-full
          bg-gold hover:bg-gold-light text-primary-900
          px-7 py-4 text-sm sm:text-base font-body font-800 uppercase tracking-wide
          shadow-[0_10px_40px_-10px_rgba(201,168,76,0.6)]
          hover:shadow-[0_15px_50px_-10px_rgba(201,168,76,0.8)]
          hover:-translate-y-0.5 transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
  Agendar Consulta →
</a>

<!-- Botão primário verde (navbar/whatsapp) -->
<a class="inline-flex items-center px-5 py-2 rounded-full
          bg-primary-600 hover:bg-primary-700 text-white
          font-body text-sm font-600 transition-colors duration-150">
  Agendar Consulta
</a>

<!-- Card de especialidade -->
<a class="group bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6
          shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-gold/50
          transition-all duration-200 flex flex-col">
  <h3 class="font-heading font-700 text-base sm:text-lg text-neutral-900 mb-2
             group-hover:text-primary-700 transition-colors leading-snug">
    Pré-Diabetes
  </h3>
</a>

<!-- Card de depoimento -->
<div class="rounded-lg bg-gold-light p-6 flex flex-col gap-4">
  <p class="italic text-neutral-800">"Depoimento do paciente..."</p>
</div>

<!-- Título de seção com palavra em destaque -->
<h2 class="font-display font-700 text-3xl sm:text-4xl lg:text-5xl
           text-neutral-900 mb-4 leading-[1.1]">
  Online ou <em class="italic text-gold">presencial.</em>
</h2>

<!-- Header fixo transparente -->
<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- logo / nav / cta -->
    </div>
  </div>
</header>
```

```css
/* CSS puro equivalente (sem Tailwind) */
.btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: #c9a84c;
  color: #263330;
  padding: 16px 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  box-shadow: 0 10px 40px -10px rgba(201, 168, 76, 0.6);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-gold:hover {
  background: #f5edd0;
  box-shadow: 0 15px 50px -10px rgba(201, 168, 76, 0.8);
  transform: translateY(-2px);
}

.card {
  background: #ffffff;
  border: 1px solid #d4d4ce;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
}
.card:hover {
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: rgba(201, 168, 76, 0.5);
  transform: translateY(-2px);
}
```

---

# 7. Tokens de Design

```css
:root {
  /* Cores principais */
  --primary: #53685d;        /* primary-600 — verde-oliva, cor de marca */
  --primary-dark: #263330;   /* primary-900 — fundo hero/seções escuras */
  --primary-hover: #435650;  /* primary-700 */
  --secondary: #c9a84c;      /* gold — accent/CTA */
  --secondary-light: #f5edd0; /* gold-light — fundo de depoimentos, hover do gold */
  --background: #fafaf8;     /* bg-white-soft — fundo geral da página */
  --background-alt: #f7f7f5;
  --surface: #ffffff;        /* fundo de cards */
  --text: #1a1a1a;           /* neutral-900 — texto principal */
  --text-muted: #3d3d3d;     /* neutral-700 */
  --text-subtle: #6b6b6b;    /* neutral-500 */
  --border: #d4d4ce;         /* neutral-200 */

  /* Tipografia */
  --font-display: "Playfair Display", Georgia, serif;
  --font-heading: "Sora", system-ui, sans-serif;
  --font-body: "Manrope", system-ui, sans-serif;

  /* Radius */
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Espaçamento de seção */
  --section-padding-y: 4rem;      /* py-16 mobile */
  --section-padding-y-lg: 6rem;   /* py-24 desktop */
  --container-max: 80rem;         /* max-w-7xl */

  /* Sombra do CTA dourado */
  --shadow-gold: 0 10px 40px -10px rgba(201, 168, 76, 0.6);
  --shadow-gold-hover: 0 15px 50px -10px rgba(201, 168, 76, 0.8);

  /* Transições padrão */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

**Nota metodológica**: todos os valores acima foram extraídos diretamente do CSSOM da página (estilos computados e variáveis `:root` do Tailwind v4), não de estimativa visual, garantindo alta fidelidade na recriação. A rolagem completa da página (topo ao rodapé, em ~10 capturas incrementais) confirmou que o site não usa animações de entrada por scroll (fade/slide/parallax/contadores) — o motion se concentra em hover/foco e no header fixo transparente.