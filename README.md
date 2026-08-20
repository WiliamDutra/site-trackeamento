# Página de Vendas — Programa de Controle de Glicemia (Dr. Marcos)

Landing page de vendas para um programa online de acompanhamento voltado a pessoas com diabetes tipo 2, assinado pelo Dr. Marcos. O objetivo da página é apresentar a oferta, gerar identificação com a dor do público, construir autoridade/confiança e converter em compra através de um único CTA (checkout).

**Site no ar:** https://sitepaginatrackeamento.companynervonine.online

---

## Sobre o projeto

O projeto nasceu de um processo de copywriting estruturado: antes de qualquer linha de código, foi feita uma entrevista guiada (do geral ao específico) para levantar oferta, público, promessa, provas, objeções e tom de voz. Só depois disso a estrutura da página e o texto foram definidos.

**Briefing resultante da entrevista:**

| Item | Definição |
|---|---|
| Produto | Programa/protocolo online de controle de diabetes tipo 2 |
| Formato | Conteúdo online (curso) + acompanhamento |
| Público | Pessoas com diabetes tipo 2 |
| Promessa principal | Reduzir/controlar a glicemia |
| Prova social | Depoimentos de pacientes |
| Objeções endereçadas | "já tentei de tudo", medo de não manter disciplina, "vale o preço?", segurança sem supervisão médica presencial |
| Tom de voz | Acolhedor e empático |
| Preço | R$ 97 (pagamento único) |
| Garantia | 7 dias incondicional |

O design visual (paleta de cores, tipografia, estilo de botões e cards) foi reaproveitado do design system já existente do site institucional do Dr. Marcos, para manter consistência de marca entre os projetos.

Conteúdo que depende de material real do cliente (foto do médico, depoimentos de pacientes) foi deixado como placeholder neutro — sem fotos ou nomes fictícios — até que o material autorizado seja enviado.

---

## Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router) | Framework React, renderização e roteamento |
| [React 19](https://react.dev) | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilização utility-first, tokens de design via `@theme` |
| [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Carregamento otimizado das fontes Google (Playfair Display, Sora, Manrope) |
| [Vercel](https://vercel.com) | Build, deploy e hospedagem |
| [GitHub](https://github.com) | Versionamento e controle de deploy contínuo |

Não há backend/banco de dados neste projeto — é uma landing page estática, sem formulário próprio (o CTA leva direto a um link de checkout externo).

---

## Estrutura do projeto

```
app/
  layout.tsx      # layout raiz, fontes e metadata
  globals.css      # tokens de design (cores, fontes, sombras) via Tailwind v4 @theme
  page.tsx         # composição das seções da página
components/
  Hero.tsx             # dobra principal: promessa + CTA
  DorIdentificacao.tsx # identificação com a dor do público
  SobreDrMarcos.tsx    # autoridade médica
  ComoFunciona.tsx      # etapas do programa
  Depoimentos.tsx       # prova social (placeholder)
  OfertaPreco.tsx        # preço, garantia e CTA
  Faq.tsx                 # objeções em formato de perguntas frequentes
  CtaFinal.tsx            # reforço final + disclaimer legal
lib/
  constants.ts     # constantes centralizadas (link de checkout, preço, dias de garantia)
design.md          # design system de referência (cores, tipografia, componentes)
```

Um componente por seção, mobile-first, cada um mapeado a um ponto específico do briefing (dor, autoridade, objeção, etc.) em vez de texto genérico.

---

## Rodando localmente

Pré-requisito: Node.js 20+.

```bash
npm install       # instala as dependências
npm run dev       # ambiente de desenvolvimento em http://localhost:3000
npm run build     # build de produção
npm run start     # roda o build de produção localmente
npm run lint      # eslint
```

---

## Deploy e infraestrutura

- **Repositório:** [github.com/WiliamDutra/site-trackeamento](https://github.com/WiliamDutra/site-trackeamento) — acesso via SSH.
- **Hospedagem/Deploy:** Vercel, projeto `trackeamento-wiliam`, conectado ao repositório GitHub. Todo push na branch `master` dispara um deploy automático em produção — não há passo manual de deploy no dia a dia.
- **Domínio:** `sitepaginatrackeamento.companynervonine.online`, configurado como subdomínio apontando para o projeto na Vercel (DNS gerenciado via Cloudflare), com SSL emitido automaticamente pela Vercel.
- **Variáveis de ambiente:** nenhuma obrigatória até o momento (projeto sem integrações de API/backend). `.env.example` documenta o padrão a seguir caso alguma seja adicionada (ex: Supabase, no futuro). Segredos nunca são commitados; nenhuma variável sensível usa o prefixo `NEXT_PUBLIC_`.

### Fluxo de trabalho

1. Mudança é implementada e revisada localmente (`npm run dev`, `npm run lint`, `npm run build`).
2. Commit com mensagem semântica (`feat`/`fix`/`refactor`/`chore`).
3. Push para `master` no GitHub.
4. Vercel builda e publica automaticamente em produção.

---

## Decisões de design/produto relevantes

- **Placeholders éticos:** a página evita qualquer conteúdo fabricado que pareça real (fotos ou depoimentos falsos). Onde falta material autorizado do cliente, o layout usa placeholders visuais neutros (ícone genérico, esqueleto de texto) em vez de simular fotos/pessoas que não existem — importante em uma página do setor de saúde, onde prova social falsa é tanto antiético quanto um risco de compliance (CFM/CONAR).
- **Constantes centralizadas:** valores que tendem a mudar (link de checkout, preço, dias de garantia) ficam em `lib/constants.ts`, não espalhados pelos componentes.
- **Acessibilidade leve:** o FAQ usa `<details>`/`<summary>` nativos do HTML (acordeão funcional sem JavaScript), com foco visível nos CTAs.
