# Portfólio — Vitor Moraes

Site portfólio profissional e corporativo para prospecção B2B.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** — design system coral-pêssego customizado
- **Framer Motion** — animações profissionais
- **next-intl** — infraestrutura i18n (PT/EN/ES)

## Executar

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Estrutura

```
src/
├── app/
│   ├── [locale]/layout.tsx    # Layout com i18n provider
│   ├── [locale]/page.tsx      # Página principal
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Design system + paleta coral
├── components/
│   ├── Header.tsx             # Navbar com logo e seletor de idioma
│   ├── Hero.tsx               # Seção hero com CTAs
│   ├── Projects.tsx           # Lista de projetos
│   ├── ProjectCard.tsx        # Card de projeto
│   ├── About.tsx              # Sobre + contatos
│   └── Footer.tsx             # Rodapé
├── i18n/
│   ├── routing.ts             # Configuração de rotas
│   ├── request.ts             # Carregamento de mensagens
│   └── navigation.ts          # Navegação locale-aware
└── messages/
    ├── pt.json                # Português
    ├── en.json                # English
    └── es.json                # Español
```

## Paleta de Cores

Baseada no gradiente coral-pêssego da logomarca.

| Token | Hex | Uso |
|---|---|---|
| coral-500 | #E8845E | Cor principal |
| coral-400 | #F09A72 | Gradientes e tags |
| coral-600 | #D4654A | Hover e ênfase |
| neutral-900 | #1A1A2E | Texto heading |
| neutral-50 | #FAFAFA | Fundo geral |

## Projetos

- **Telma Online** — Jogo de cartas multiplayer real-time
- **Fluxo** — SaaS de gestão comercial integrada

## Licença

Todos os direitos reservados. © 2026 Vitor Moraes.
