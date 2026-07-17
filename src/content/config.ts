import { defineCollection, z } from 'astro:content';

const recurso = z.object({
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
    recursos: z.array(recurso).default([]),
    presentaciones: z.array(recurso).default([]),
  }),
});

export const collections = { modulos };
