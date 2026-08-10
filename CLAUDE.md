# CLAUDE.md

Guia de contexto para trabalhar neste projeto.

## Stack

- **Next.js** (App Router) — v16.3.0
- **React** — v19.2.8
- **TypeScript**
- **Tailwind CSS** — v4
- **GitHub** para versionamento
- **Vercel** para deploy
- **Supabase** quando o projeto precisar guardar dados (ainda não integrado)

Sempre usar a versão mais recente estável de cada ferramenta/lib. Antes de integrar uma API nova, conferir a documentação oficial atual. Se a API tiver versão na URL, deixar essa versão numa constante única e fácil de atualizar.

## Comandos

```bash
npm run dev     # ambiente de desenvolvimento (http://localhost:3000)
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # eslint
```

## Convenções

- Um componente por seção de página, em `components/`.
- Mobile-first: estilizar primeiro para telas pequenas, depois adicionar breakpoints (`sm:`, `md:`, `lg:`) do Tailwind.
- Segredos apenas em variáveis de ambiente (`.env.local`, nunca commitado). Nenhuma variável sensível com prefixo `NEXT_PUBLIC_`.
- Conteúdo/copy que depende de material real do cliente (depoimentos, fotos, bio) entra como placeholder claro (ex: `[DEPOIMENTO AQUI]`) até ser substituído.

## Como trabalhamos

- Antes de construir qualquer coisa nova, mostrar o plano e esperar aprovação.
- Git desde o início: cada mudança relevante aprovada vira um commit com mensagem clara (`feat`/`fix`/`refactor`/`chore`). Nunca dar push sem revisão.
- Explicações em português, simples. Erros são explicados antes de corrigidos.
- Design cuidado (UI/UX), responsivo mobile-first desde o começo.
- Uma mudança por vez — não alterar o que não foi pedido.
