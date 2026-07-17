# Curso Virtual de Análisis de Ciclo de Vida — EcoAdvance Ecuador

Web estática (Astro) que sirve de repositorio y guía del Curso Virtual de ACV,
organizado por el proyecto EcoAdvance (GIZ) para funcionarios públicos ecuatorianos.

## Cómo publicar la web (una sola vez)

1. **GitHub:** crea un repositorio (p. ej. `curso-acv-ecoadvance`) y sube todo el
   contenido de esta carpeta (sin `node_modules` ni `dist`, ya excluidos en `.gitignore`).
2. **Cloudflare Pages:** en el panel de Cloudflare → *Workers & Pages* → *Create* →
   *Pages* → *Connect to Git* → selecciona el repositorio y usa esta configuración:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Al guardar, Cloudflare construye y publica la web en `https://<nombre>.pages.dev`.
   Cada `git push` a `main` la actualiza automáticamente en ~1 minuto.

## Cómo añadir recursos o presentaciones tras cada sesión (~10 min)

1. Si el material es un PDF propio, cópialo a `public/materiales/modulo-N/`
   (crea la carpeta si no existe; nombre en minúsculas y sin espacios).
2. Edita `src/content/modulos/modulo-N.yaml` y añade una entrada en `recursos:`
   o `presentaciones:`. Ejemplo:

```yaml
recursos:
  - titulo: "Life Cycle Thinking: una introducción"
    tipo: pdf            # pdf | enlace | video | presentacion
    fuente: "PNUMA (2021)"
    descripcion: "Guía introductoria que presenta el enfoque de ciclo de vida con ejemplos aplicados."
    porque: "Es la puerta de entrada más clara al tema antes de la sesión."   # opcional
    url: "/materiales/modulo-1/lct-introduccion.pdf"   # o URL externa https://…
    estado: disponible
```

3. Guarda, haz commit y push. La web se actualiza sola.

Mientras un módulo no tenga entradas en `recursos:`/`presentaciones:`, la web
muestra automáticamente el aviso "Próximamente — disponible tras la sesión".

## Desarrollo local (opcional)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Estructura

- `src/content/modulos/` — contenido de los 5 módulos (**único lugar que se edita semanalmente**)
- `src/pages/` — home, página EcoAdvance, plantilla de módulo, 404
- `src/styles/global.css` — sistema de diseño (tokens y componentes, ver doc B)
- `public/logos/`, `public/ods/`, `public/materiales/` — activos estáticos

## Créditos

Proyecto EcoAdvance — implementado por GIZ por encargo del BMUV (IKI), en consorcio
con PNUMA y Öko-Institut. Contrapartes en Ecuador: MAE y SERCOP.
Iconos ODS: material oficial de comunicación de las Naciones Unidas.
