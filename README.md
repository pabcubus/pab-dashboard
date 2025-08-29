
# Electron + React + TypeScript + Router (5 páginas)

Proyecto base minimal para crear una app de escritorio con **Electron**, **React**, **TypeScript** y **React Router**.

## Scripts de NPM
- `npm run dev` — Ejecuta el proyecto en modo desarrollo (Vite + compilación de Electron + abre la app).
- `npm start` — Inicia Electron apuntando al servidor de desarrollo (útil si ya tienes `tsc -w` y `vite` corriendo).
- `npm run build` — Compila el renderer (Vite) y el proceso principal de Electron a `dist` y `dist-electron`.
- `npm run package` — Empaqueta un binario instalable usando **electron-builder** (Win/macOS/Linux).
- `npm run clean` — Limpia carpetas de build.
- `npm run typecheck` — Chequea tipos sin emitir archivos.

## Estructura
```text
.
├─ electron/                 # Código del main y preload de Electron (TypeScript)
│  ├─ main.ts
│  └─ preload.ts
├─ src/renderer/             # Código React + TS (renderer)
│  ├─ pages/                 # 5 páginas de ejemplo
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Settings.tsx
│  │  ├─ Reports.tsx
│  │  └─ Help.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ styles.css
├─ index.html                # Entrada de Vite
├─ vite.config.ts
├─ tsconfig.json
└─ electron/tsconfig.json
```

## Desarrollo
1. Instala dependencias: `npm install`
2. Ejecuta: `npm run dev`

Esto levanta Vite en `http://localhost:3000`, compila `electron/` a `dist-electron/`
y abre la app de Electron apuntando al dev server. El enrutamiento usa `HashRouter`
para que funcione correctamente en producción con `file://`.

## Producción / Build
- `npm run build` produce:
  - `dist/` (build del renderer de Vite)
  - `dist-electron/` (main & preload compilados)
- `npm run package` genera un instalador mediante **electron-builder**.
