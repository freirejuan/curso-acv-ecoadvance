import { defineCollection, z } from 'astro:content';

const video = z.object({
  tipo: z.enum(['youtube', 'ted', 'iframe', 'enlace']),
  src: z.string().optional(),
  thumb: z.string().optional(),
});

const itemInspirarte = z.object({
  titulo: z.string(),
  url: z.string(),
  fuente: z.string().optional(),
  descripcion: z.string().optional(),
  idioma: z.string().optional(),
  duracion: z.string().optional(),
  video: video.optional(),
});

const itemCurso = z.object({
  titulo: z.string(),
  url: z.string(),
  fuente: z.string().optional(),
  descripcion: z.string().optional(),
  idioma: z.string().optional(),
  coste: z.string().optional(),
  dedicacion: z.string().optional(),
});

const itemReferencia = z.object({
  titulo: z.string(),
  url: z.string(),
  tipo: z.string().optional(),
  idioma: z.string().optional(),
  dedicacion: z.string().optional(),
  descripcion: z.string().optional(),
});

const grupoReferencias = z.object({
  titulo: z.string().optional(),
  plegable: z.boolean().default(false),
  items: z.array(itemReferencia),
});

const presentacion = z.object({
  titulo: z.string(),
  tipo: z.enum(['pdf', 'enlace', 'video', 'presentacion']),
  fuente: z.string().optional(),
  descripcion: z.string().optional(),
  porque: z.string().optional(),
  url: z.string().optional(),
  estado: z.enum(['disponible', 'proximamente']).default('disponible'),
});

const modulos = defineCollection({
  type: 'data',
  schema: z.object({
    numero: z.number(),
    slug: z.string(),
    titulo: z.string(),
    subtitulo: z.string(),
    fechas: z.string(),
    sesiones: z.string(),
    acento: z.enum(['verde', 'ambar', 'naranja']).default('verde'),
    descripcion: z.string(),
    contenidos: z.array(z.string()),
    resumen_inspirarte: z.string().optional(),
    resumen_cursos: z.string().optional(),
    nota_presentaciones: z.string().optional(),
    inspirarte: z.array(itemInspirarte).default([]),
    cursos: z.array(itemCurso).default([]),
    referencias: z.array(grupoReferencias).default([]),
    presentaciones: z.array(presentacion).default([]),
  }),
});

export const collections = { modulos };
