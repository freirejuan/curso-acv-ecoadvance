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

## Cómo añadir una presentación tras cada sesión (~10 min)

1. Copia el PDF a `public/materiales/modulo-N/` (crea la carpeta si no
   existe; nombre en minúsculas y sin espacios).
2. Edita `src/content/modulos/modulo-N.yaml` y añade una entrada en
   `presentaciones:`. Ejemplo:

```yaml
presentaciones:
  - titulo: "Sesión 2.1 — Marco normativo y objetivo y alcance"
    tipo: presentacion
    fuente: "Beatriz Rivela · 29 de julio"
    url: "/materiales/modulo-2/sesion-2-1.pdf"
    estado: disponible
```

3. Guarda, haz commit y push. La web se actualiza sola en ~1 minuto.

Mientras un módulo no tenga entradas en `presentaciones:`, la web muestra
automáticamente el aviso "Próximamente — disponible tras la sesión".

## Estructura de los recursos de cada módulo

Cada `modulo-N.yaml` tiene tres listas de recursos ya cargadas:

- `inspirarte:` — vídeos con reproductor embebido. Campos: `titulo`, `url`,
  `fuente`, `descripcion`, `idioma`, `duracion` y `video:` con `tipo`
  (youtube | ted | iframe | enlace), `src` (id de YouTube, slug de TED o URL
  a insertar) y `thumb` (miniatura en `public/thumbs/`).
- `cursos:` — cursos e-learning. Campos extra: `coste` y `dedicacion`.
- `referencias:` — lista de grupos; cada grupo tiene `titulo` (opcional),
  `plegable: true|false` y sus `items` (con `tipo`, `idioma` y `dedicacion`
  opcionales).

Las líneas-resumen de sección se editan en `resumen_inspirarte` y
`resumen_cursos`.

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
