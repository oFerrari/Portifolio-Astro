# Portfólio Astro

Portfólio pessoal com apresentação, projetos, habilidades, tecnologias e links de contato. Combina páginas Astro e componentes React.

## Tecnologias

Astro 7, React 18, TypeScript e Tailwind CSS 4, com componentes daisyUI 5.

## Executar localmente

Use Node.js 22.12 ou superior (Node.js 24 recomendado).

```sh
npm ci
npm run dev
```

O servidor de desenvolvimento fica em http://localhost:4321.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Verificar tipos e gerar a versão estática em dist/ |
| `npm run preview` | Conferir o build localmente |
| `npm audit` | Consultar alertas conhecidos das dependências |

## Organização

- `src/pages`: páginas e rotas.
- `src/components`: componentes de interface.
- `src/layouts`: estrutura compartilhada das páginas.
- `src/styles/global.css`: entrada do Tailwind e estilos globais.
- `public`: imagens e arquivos estáticos.

## Manutenção

O Tailwind é integrado pelo plugin oficial para Vite. O Dependabot consulta atualizações semanalmente e abre propostas para revisão. Mantenha `package.json` e `package-lock.json` sincronizados; regenere o lockfile com npm após mudar dependências.

Não versione `node_modules`, builds, logs ou arquivos `.env` com credenciais.
