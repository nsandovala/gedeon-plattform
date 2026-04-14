import { z } from "zod";
import {
  leadInterestInputSchema,
  leadInterestSuccessSchema,
} from "../schemas/lead-interest.js";

/** Tipo de entrada del formulario de interés — inferido del schema Zod */
export type LeadInterestInput = z.infer<typeof leadInterestInputSchema>;

/** Tipo de respuesta exitosa — inferido del schema Zod */
export type LeadInterestSuccess = z.infer<typeof leadInterestSuccessSchema>;
