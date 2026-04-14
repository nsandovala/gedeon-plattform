import { z } from "zod";

/**
 * Disponibilidad horaria del interesado.
 */
export const AvailabilityOption = {
  WEEKDAY_EVENING: "weekday_evening",
  WEEKEND: "weekend",
  FLEXIBLE: "flexible",
  LIMITED: "limited",
} as const;

export type AvailabilityOption =
  (typeof AvailabilityOption)[keyof typeof AvailabilityOption];

export const availabilityOptionSchema = z.enum([
  AvailabilityOption.WEEKDAY_EVENING,
  AvailabilityOption.WEEKEND,
  AvailabilityOption.FLEXIBLE,
  AvailabilityOption.LIMITED,
]);

/** Labels para UI */
export const AVAILABILITY_LABELS: Record<AvailabilityOption, string> = {
  [AvailabilityOption.WEEKDAY_EVENING]: "Tardes entre semana",
  [AvailabilityOption.WEEKEND]: "Fines de semana",
  [AvailabilityOption.FLEXIBLE]: "Flexible / full-time",
  [AvailabilityOption.LIMITED]: "Limitada (pocas horas)",
};
