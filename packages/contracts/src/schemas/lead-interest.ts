import { z } from "zod";
import { preferredModeSchema } from "../enums/preferred-mode.js";
import { availabilityOptionSchema } from "../enums/availability-option.js";

/**
 * Schema de entrada para el formulario de interés.
 * Validación compartida entre frontend y (futuro) backend.
 */
export const leadInterestInputSchema = z.object({
  name: z
    .string()
    .min(2, "Tu nombre debe tener al menos 2 caracteres")
    .max(80, "Nombre demasiado largo"),
  discord: z
    .string()
    .min(2, "Tu usuario de Discord es obligatorio")
    .max(40, "Usuario de Discord demasiado largo"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  preferredMode: preferredModeSchema,
  availability: availabilityOptionSchema,
  message: z.string().max(500, "Máximo 500 caracteres").optional().or(z.literal("")),
});

/**
 * Respuesta exitosa del endpoint POST /api/interest.
 */
export const leadInterestSuccessSchema = z.object({
  ok: z.literal(true),
  message: z.string(),
  referenceId: z.string().uuid().optional(),
});
