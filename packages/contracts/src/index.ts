/**
 * @gedeon/contracts — fuente única de verdad.
 *
 * Comparte tipos, schemas Zod y enums entre:
 * - apps/web (formularios, UI)
 * - apps/api (Pydantic mirrors, validation)
 * - apps/discord-bot (command payloads)
 *
 * Regla: todo tipo que cruce un boundary de app vive aquí.
 */

// ── Enums (constants + schemas + types) ──
export {
  PreferredMode,
  preferredModeSchema,
  PREFERRED_MODE_LABELS,
} from "./enums/preferred-mode.js";

export {
  AvailabilityOption,
  availabilityOptionSchema,
  AVAILABILITY_LABELS,
} from "./enums/availability-option.js";

// ── Schemas (Zod) ──
export {
  leadInterestInputSchema,
  leadInterestSuccessSchema,
} from "./schemas/lead-interest.js";

// ── Types (inferred from Zod) ──
export type { LeadInterestInput } from "./types/lead-interest.js";
export type { LeadInterestSuccess } from "./types/lead-interest.js";
