# Automatización QA – FrontEnd (Sauce Demo)


## Cobertura

| Criterio de aceptación | Feature |
|------------------------|---------|
| Login con credenciales válidas (`standard_user`) | `features/login.feature` |
| Login con credenciales inválidas y usuario bloqueado (`locked_out_user`) | `features/login.feature` |
| Agregar un producto al carrito | `features/cart.feature` |
| Ver los productos agregados en el carrito | `features/cart.feature` |
| Completar la compra hasta la confirmación | `features/checkout.feature` |

## Requisitos

- [Node.js LTS](https://nodejs.org/) (v18 o superior)
- Git

## Instalación

```bash
npm install
npx playwright install chromium
```

## Ejecución

| Comando | Descripción |
|---------|-------------|
| `npm test` | Ejecuta todas las pruebas (sin abrir el navegador) |
| `npm run test:headed` | Ejecuta con el navegador visible |
| `npm run test:login` | Solo escenarios `@login` |
| `npm run test:cart` | Solo escenarios `@cart` |
| `npm run test:checkout` | Solo escenarios `@checkout` |

Al terminar se genera el reporte `reports/cucumber-report.html` (con captura de pantalla y videos).

## Estructura

```
├── features/        # Escenarios en Gherkin
├── src/
│   ├── pages/       # Page Objects
│   ├── steps/       # Step definitions
│   └── support/     # world.ts y hooks.ts
├── cucumber.js      # Configuración de Cucumber
└── INFORME_ESTRATEGIA.md
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Reto QA: Playwright + Cucumber para Sauce Demo"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```
