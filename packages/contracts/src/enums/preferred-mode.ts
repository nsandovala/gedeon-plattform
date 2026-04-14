import { z } from "zod";

/**
 * Formatos de participación preferidos por el usuario.
 * Mapeados como string enum para compatibilidad con forms y API.
 */
export const PreferredMode = {
  COMPETITIVE: "competitive",
  CASUAL: "casual",
  CONTENT: "content",
  COACHING: "coaching",
  ORGANIZER: "organizer",
} as const;

export type PreferredMode = (typeof PreferredMode)[keyof typeof PreferredMode];

export const preferredModeSchema = z.enum([
  PreferredMode.COMPETITIVE,
  PreferredMode.CASUAL,
  PreferredMode.CONTENT,
  PreferredMode.COACHING,
  PreferredMode.ORGANIZER,
]);

/** Labels para UI */
export const PREFERRED_MODE_LABELS: Record<PreferredMode, string> = {
  [PreferredMode.COMPETITIVE]: "Competitivo",
  [PreferredMode.CASUAL]: "Casual",
  [PreferredMode.CONTENT]: "Creador de contenido",
  [PreferredMode.COACHING]: "Coach / Analista",
  [PreferredMode.ORGANIZER]: "Organizador",
};
