"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadInterestInputSchema,
  PREFERRED_MODE_LABELS,
  AVAILABILITY_LABELS,
  PreferredMode,
  AvailabilityOption,
  type LeadInterestInput,
} from "@gedeon/contracts";

type FormState = "idle" | "submitting" | "success";

export default function InterestForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadInterestInput>({
    resolver: zodResolver(leadInterestInputSchema),
    defaultValues: {
      name: "",
      discord: "",
      email: "",
      preferredMode: PreferredMode.COMPETITIVE,
      availability: AvailabilityOption.FLEXIBLE,
      message: "",
    },
  });

  const onSubmit = async (data: LeadInterestInput) => {
    setFormState("submitting");

    // Mock submit — simula latencia de red
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log para desarrollo (se reemplazará por POST /api/interest)
    console.log("[Gedeon] Interest submission:", data);

    setFormState("success");
  };

  // ═══════════════════════════════════════
  // SUCCESS STATE
  // ═══════════════════════════════════════
  if (formState === "success") {
    return (
      <div className="relative flex flex-col items-center justify-center text-center py-24 px-8">
        {/* Pulse ring */}
        <div className="relative mb-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              width: "80px",
              height: "80px",
              background:
                "radial-gradient(circle, var(--gedeon-red) 0%, transparent 70%)",
              filter: "blur(20px)",
              animation: "glow-breathe 3s ease-in-out infinite",
            }}
          />
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            className="relative z-10 text-gedeon-red"
          >
            <path
              d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>

        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">
          Registro <span className="text-gedeon-red">Confirmado.</span>
        </h3>
        <p className="text-text-secondary text-base max-w-md leading-relaxed mb-8">
          Tu solicitud ha sido recibida. Cuando la arena se abra, serás de los
          primeros en saberlo.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            reset();
          }}
          className="text-[10px] font-bold tracking-[0.25em] uppercase text-text-muted hover:text-foreground transition-colors border-b border-text-muted/30 hover:border-gedeon-red pb-1 cursor-pointer"
        >
          Enviar otro registro
        </button>
      </div>
    );
  }

  // ═══════════════════════════════════════
  // FORM STATE
  // ═══════════════════════════════════════
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
        {/* Nombre */}
        <FieldGroup label="Nombre de guerra" error={errors.name?.message} required>
          <input
            {...register("name")}
            type="text"
            placeholder="Tu nombre o alias"
            id="interest-name"
            className="form-input"
            disabled={formState === "submitting"}
          />
        </FieldGroup>

        {/* Discord */}
        <FieldGroup label="Usuario de Discord" error={errors.discord?.message} required>
          <input
            {...register("discord")}
            type="text"
            placeholder="usuario#0000 o usuario"
            id="interest-discord"
            className="form-input"
            disabled={formState === "submitting"}
          />
        </FieldGroup>

        {/* Email */}
        <FieldGroup label="Email" error={errors.email?.message} hint="Opcional">
          <input
            {...register("email")}
            type="email"
            placeholder="tu@email.com"
            id="interest-email"
            className="form-input"
            disabled={formState === "submitting"}
          />
        </FieldGroup>

        {/* Formato preferido */}
        <FieldGroup label="Formato favorito" error={errors.preferredMode?.message} required>
          <select
            {...register("preferredMode")}
            id="interest-preferred-mode"
            className="form-input"
            disabled={formState === "submitting"}
          >
            {Object.entries(PREFERRED_MODE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </FieldGroup>

        {/* Disponibilidad */}
        <FieldGroup label="Disponibilidad" error={errors.availability?.message} required>
          <select
            {...register("availability")}
            id="interest-availability"
            className="form-input"
            disabled={formState === "submitting"}
          >
            {Object.entries(AVAILABILITY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </FieldGroup>

        {/* Mensaje */}
        <div className="md:col-span-2">
          <FieldGroup label="Mensaje" error={errors.message?.message} hint="Opcional · máx. 500 caracteres">
            <textarea
              {...register("message")}
              placeholder="¿Por qué quieres unirte? ¿Qué esperas de Gedeon?"
              id="interest-message"
              rows={4}
              className="form-input resize-none"
              disabled={formState === "submitting"}
            />
          </FieldGroup>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="group relative px-12 py-5 bg-foreground text-background font-bold tracking-[0.2em] text-[11px] uppercase overflow-hidden cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-3">
            {formState === "submitting" ? (
              <>
                <span
                  className="inline-block w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                  style={{ animation: "orbit-slow 1s linear infinite" }}
                />
                Transmitiendo…
              </>
            ) : (
              <>
                Registrar Interés
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gedeon-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
        </button>

        <p className="text-[10px] text-text-muted tracking-wide max-w-xs">
          Sin spam. Tus datos serán usados solo para contactarte cuando el protocolo se active.
        </p>
      </div>
    </form>
  );
}

// ═══════════════════════════════════════
// FIELD GROUP COMPONENT
// ═══════════════════════════════════════
function FieldGroup({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <div className="flex items-baseline gap-2">
        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">
          {label}
          {required && <span className="text-gedeon-red ml-1">*</span>}
        </label>
        {hint && (
          <span className="text-[9px] tracking-wider text-text-muted/60 uppercase">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <span className="text-[11px] text-gedeon-red tracking-wide font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
