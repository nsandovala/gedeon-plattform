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
import GedeonMark from "./GedeonMark";

type FormState = "idle" | "submitting" | "success" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const fieldSequence = {
  name: "01",
  discord: "02",
  email: "03",
  preferredMode: "04",
  availability: "05",
  message: "06",
} as const;

export default function InterestForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setErrorMessage("");

    try {
      const res = await fetch(`${API_URL}/api/interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const detail =
          body?.detail ??
          (res.status === 422
            ? "Datos invalidos. Revisa los campos."
            : "Error del servidor. Intentalo de nuevo.");
        throw new Error(detail);
      }

      setFormState("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Error desconocido");
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <StatusPanel
        tone="success"
        eyebrow="Canal reservado"
        title="Registro confirmado."
        description="La senal fue recibida. Cuando el protocolo se abra, este contacto entra en la primera ola de aviso."
        actionLabel="Registrar otro perfil"
        onAction={() => {
          setFormState("idle");
          reset();
        }}
      />
    );
  }

  if (formState === "error") {
    return (
      <StatusPanel
        tone="error"
        eyebrow="Falla temporal"
        title="Error de transmision."
        description="No pudimos registrar tu interes en este intento. El sistema sigue operativo, pero hubo una interrupcion temporal."
        message={errorMessage}
        actionLabel="Reintentar"
        onAction={() => setFormState("idle")}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
      <div className="mb-8 grid gap-4 border-b border-white/8 pb-6 sm:grid-cols-3">
        <SignalChip label="Operacion" value="Interes inicial" />
        <SignalChip label="Canal" value="Contacto directo" />
        <SignalChip label="Ruido" value="Minimo" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FieldGroup
          index={fieldSequence.name}
          label="Identidad operativa"
          error={errors.name?.message}
          required
        >
          <input
            {...register("name")}
            id="interest-name"
            type="text"
            placeholder="Nombre o alias principal"
            className="recruit-input"
            disabled={formState === "submitting"}
          />
        </FieldGroup>

        <FieldGroup
          index={fieldSequence.discord}
          label="Canal Discord"
          error={errors.discord?.message}
          required
        >
          <input
            {...register("discord")}
            id="interest-discord"
            type="text"
            placeholder="usuario o usuario#0000"
            className="recruit-input"
            disabled={formState === "submitting"}
          />
        </FieldGroup>

        <FieldGroup
          index={fieldSequence.email}
          label="Correo de respaldo"
          hint="Opcional"
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            id="interest-email"
            type="email"
            placeholder="tu@email.com"
            className="recruit-input"
            disabled={formState === "submitting"}
          />
        </FieldGroup>

        <FieldGroup
          index={fieldSequence.preferredMode}
          label="Modo prioritario"
          error={errors.preferredMode?.message}
          required
        >
          <select
            {...register("preferredMode")}
            id="interest-preferred-mode"
            className="recruit-input recruit-select"
            disabled={formState === "submitting"}
          >
            {Object.entries(PREFERRED_MODE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </FieldGroup>

        <FieldGroup
          index={fieldSequence.availability}
          label="Ventana de disponibilidad"
          error={errors.availability?.message}
          required
        >
          <select
            {...register("availability")}
            id="interest-availability"
            className="recruit-input recruit-select"
            disabled={formState === "submitting"}
          >
            {Object.entries(AVAILABILITY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </FieldGroup>

        <div className="md:col-span-2">
          <FieldGroup
            index={fieldSequence.message}
            label="Nota tactica"
            hint="Opcional // max. 500 caracteres"
            error={errors.message?.message}
          >
            <textarea
              {...register("message")}
              id="interest-message"
              rows={5}
              placeholder="Cuanto contexto baste: motivacion, experiencia o que esperas de esta nueva etapa."
              className="recruit-input recruit-textarea resize-none"
              disabled={formState === "submitting"}
            />
          </FieldGroup>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6 border-t border-white/8 pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-sm">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gedeon-red">
            Politica de contacto
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            Tus datos se usan solo para avisarte cuando el protocolo se active y
            el acceso inicial quede disponible.
          </p>
        </div>

        <button
          type="submit"
          disabled={formState === "submitting"}
          className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden bg-foreground px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="relative z-10 flex items-center gap-3">
            {formState === "submitting" ? (
              <>
                <span className="inline-block h-4 w-4 rounded-full border-2 border-background/30 border-t-background animate-[orbit-slow_1s_linear_infinite]" />
                Transmitiendo senal...
              </>
            ) : (
              <>
                Registrar interes
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
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
          <div className="absolute inset-0 z-0 origin-left scale-x-0 bg-gedeon-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </button>
      </div>
    </form>
  );
}

function SignalChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-gedeon-red">
        {label}
      </p>
      <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">
        {value}
      </p>
    </div>
  );
}

function StatusPanel({
  tone,
  eyebrow,
  title,
  description,
  message,
  actionLabel,
  onAction,
}: {
  tone: "success" | "error";
  eyebrow: string;
  title: string;
  description: string;
  message?: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-10 text-center backdrop-blur-sm sm:px-8 sm:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="status-glow mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-background/70 p-3">
          <GedeonMark className="h-full w-full" />
        </div>

        <p
          className={`mb-3 text-[10px] font-bold uppercase tracking-[0.28em] ${
            tone === "success" ? "text-gedeon-red" : "text-[#D04A4A]"
          }`}
        >
          {eyebrow}
        </p>
        <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-foreground md:text-4xl">
          {title}
        </h3>
        <p className="max-w-md text-base leading-relaxed text-text-secondary">
          {description}
        </p>

        {message ? (
          <p className="mt-6 max-w-lg rounded-[18px] border border-gedeon-red/30 bg-gedeon-red/10 px-4 py-3 text-sm leading-relaxed text-gedeon-red">
            {message}
          </p>
        ) : null}

        <div className="mt-8 grid w-full max-w-xl gap-4 border-t border-white/8 pt-6 sm:grid-cols-2">
          <SignalChip label="Estado" value={tone === "success" ? "Canal abierto" : "Requiere reintento"} />
          <SignalChip label="Siguiente paso" value={tone === "success" ? "Aviso prioritario" : "Nueva transmision"} />
        </div>

        <button
          onClick={onAction}
          className="mt-8 cursor-pointer border-b border-text-muted/30 pb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted transition-colors hover:border-gedeon-red hover:text-foreground"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

function FieldGroup({
  index,
  label,
  hint,
  error,
  required,
  children,
}: {
  index: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="recruit-field">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gedeon-red/25 bg-gedeon-red/10 text-[10px] font-bold tracking-[0.18em] text-gedeon-red">
              {index}
            </span>
            <label className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground">
              {label}
              {required ? <span className="ml-1 text-gedeon-red">*</span> : null}
            </label>
          </div>
          {hint ? (
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
              {hint}
            </span>
          ) : null}
        </div>
      </div>
      {children}
      {error ? (
        <span className="mt-3 block text-[11px] font-medium tracking-wide text-gedeon-red">
          {error}
        </span>
      ) : null}
    </div>
  );
}
