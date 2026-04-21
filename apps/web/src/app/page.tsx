import InterestForm from "./components/InterestForm";
import GedeonMark from "./components/GedeonMark";

const tacticalStats = [
  { label: "Disciplina", value: "100%" },
  { label: "Estado", value: "Activo" },
  { label: "Vision", value: "Global" },
  { label: "Honor", value: "Maximo" },
];

const tacticalValues = [
  {
    id: "01",
    title: "Fuerza Contenida",
    desc: "No derrochamos energia. Cada movimiento es intencional, cada ofensiva esta calculada. Atacamos con precision cuando la victoria es absoluta.",
  },
  {
    id: "02",
    title: "Mentalidad de Acero",
    desc: "La derrota es simplemente data; la victoria es la consecuencia logica de nuestra preparacion. Inquebrantables bajo cualquier presion.",
  },
  {
    id: "03",
    title: "Unidad Total",
    desc: "El individuo es letal, pero el batallon es invencible. Sincronizacion tactica donde cada agente protege al colectivo.",
  },
];

const recruitmentSignals = [
  {
    code: "Canal prioritario",
    detail: "Tu registro entra primero al radar cuando se active el despliegue.",
  },
  {
    code: "Sin ruido",
    detail: "Solo contacto util. Nada de spam, nada de mensajes fuera de contexto.",
  },
  {
    code: "Lectura tactica",
    detail: "Los campos nos ayudan a entender perfil, disponibilidad y afinidad competitiva.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans text-foreground selection:bg-gedeon-red/40">
      <nav className="fixed top-0 z-50 w-full border-b border-text-secondary/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-6">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gedeon-red"
            >
              <path
                d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M12 2v20"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.5"
              />
            </svg>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-foreground">
              Gedeon
            </span>
          </div>
          <div className="hidden gap-12 text-[10px] font-bold tracking-[0.2em] text-text-muted md:flex">
            <a
              href="#manifiesto"
              className="border-b-2 border-transparent py-2 transition-colors hover:border-gedeon-red hover:text-foreground"
            >
              MANIFIESTO
            </a>
            <a
              href="#tactica"
              className="border-b-2 border-transparent py-2 transition-colors hover:border-gedeon-red hover:text-foreground"
            >
              SISTEMA
            </a>
            <a
              href="#interes"
              className="border-b-2 border-transparent py-2 transition-colors hover:border-gedeon-red hover:text-foreground"
            >
              INTERES
            </a>
            <a
              href="#cta"
              className="border-b-2 border-transparent py-2 transition-colors hover:border-gedeon-red hover:text-foreground"
            >
              DESPLIEGUE
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[100vh] w-full items-center overflow-hidden border-b border-gedeon-border bg-background pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="field-mesh" width="120" height="120" patternUnits="userSpaceOnUse">
                <path
                  d="M0,120 L120,0"
                  stroke="var(--color-text-secondary)"
                  strokeWidth="0.35"
                  opacity="0.2"
                  style={{ animation: "line-breathe 10s ease-in-out infinite" }}
                />
                <path
                  d="M0,0 L120,120"
                  stroke="var(--color-text-muted)"
                  strokeWidth="0.25"
                  opacity="0.08"
                />
                <path
                  d="M60,0 V120"
                  stroke="var(--color-text-muted)"
                  strokeWidth="0.25"
                  opacity="0.08"
                />
                <path
                  d="M0,60 H120"
                  stroke="var(--color-text-muted)"
                  strokeWidth="0.25"
                  opacity="0.08"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="1.5"
                  fill="var(--color-gedeon-red)"
                  style={{ animation: "node-pulse 4.5s ease-in-out infinite" }}
                />
              </pattern>
              <radialGradient id="mesh-fade" cx="62%" cy="46%" r="68%">
                <stop offset="0%" stopColor="var(--color-background)" stopOpacity="0" />
                <stop offset="76%" stopColor="var(--color-background)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--color-background)" stopOpacity="1" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#field-mesh)" opacity="0.44" />
            <rect width="100%" height="100%" fill="url(#mesh-fade)" />
          </svg>
        </div>

        <div className="hero-circuit-haze absolute -right-10 top-1/2 z-[1] h-[620px] w-[620px] -translate-y-1/2 rounded-full" />
        <div className="hero-circuit-haze absolute left-[-16%] top-[14%] z-[1] h-[420px] w-[420px] rounded-full opacity-50" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-12 px-6 md:px-12 lg:flex-row lg:gap-16 lg:px-16">
          <div className="flex w-full flex-col items-start lg:w-[54%]">
            <div className="mb-10 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gedeon-red" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.35em] text-text-muted"
                style={{ animation: "flicker-red 8s ease-in-out infinite" }}
              >
                Protocolo Gedeon // Sistema de activacion
              </span>
            </div>

            <h1 className="ml-[-3px] mb-8 text-[3.9rem] font-black uppercase leading-[0.82] tracking-[-0.045em] text-foreground sm:text-[5.6rem] lg:text-[8rem] xl:text-[9.5rem]">
              El
              <br />
              Regreso
              <br />
              <span className="text-gedeon-red">Tactico.</span>
            </h1>

            <div className="relative mb-14 max-w-xl pl-5">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-gedeon-red via-gedeon-red/40 to-transparent" />
              <p className="text-lg font-light leading-relaxed tracking-[0.02em] text-text-secondary md:text-xl">
                Una marca que vuelve con disciplina, geometria y sistema activo.
                El nucleo se mantiene firme; la red alrededor despierta con
                precision.
              </p>
            </div>

            <div className="mb-12 flex flex-col gap-5 sm:flex-row">
              <a
                href="#interes"
                className="group relative inline-block cursor-pointer overflow-hidden bg-foreground px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-background no-underline"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Alinearse al sistema
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
                </span>
                <div className="absolute inset-0 z-0 origin-left scale-x-0 bg-gedeon-red transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </a>
              <button className="cursor-pointer border border-gedeon-border bg-transparent px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-text-secondary/40 hover:bg-white/[0.02]">
                Nuestro legado
              </button>
            </div>

            <div className="grid w-full max-w-[720px] gap-4 border-t border-white/8 pt-8 sm:grid-cols-3">
              {[
                {
                  label: "Firma",
                  value: "Insignia sentinela",
                },
                {
                  label: "Pulso",
                  value: "Circuitos en expansion lenta",
                },
                {
                  label: "Orbita",
                  value: "Campo activo y estable",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gedeon-red">
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-[46%]">
            <div className="relative flex h-[420px] w-[420px] items-center justify-center sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 560 560"
                style={{ animation: "orbit-slow 96s linear infinite" }}
              >
                <circle
                  cx="280"
                  cy="280"
                  r="258"
                  fill="none"
                  stroke="var(--color-text-muted)"
                  strokeWidth="0.9"
                  strokeDasharray="4 22"
                  opacity="0.24"
                />
                <circle
                  cx="280"
                  cy="24"
                  r="3.5"
                  fill="var(--color-gedeon-red)"
                  style={{ animation: "node-pulse 5s ease-in-out infinite" }}
                />
                <circle cx="536" cy="280" r="2.5" fill="var(--color-text-secondary)" opacity="0.5" />
                <circle cx="280" cy="536" r="2.5" fill="var(--color-text-secondary)" opacity="0.3" />
              </svg>

              <svg
                className="absolute inset-[28px] h-[calc(100%-56px)] w-[calc(100%-56px)]"
                viewBox="0 0 560 560"
                style={{ animation: "orbit-reverse 78s linear infinite" }}
              >
                <circle
                  cx="280"
                  cy="280"
                  r="240"
                  fill="none"
                  stroke="var(--color-gedeon-red)"
                  strokeWidth="1.4"
                  strokeDasharray="320 180"
                  opacity="0.4"
                />
                <circle
                  cx="280"
                  cy="280"
                  r="232"
                  fill="none"
                  stroke="var(--color-text-secondary)"
                  strokeWidth="0.8"
                  strokeDasharray="3 20"
                  opacity="0.18"
                />
                <path
                  d="M68 280C68 162 162 68 280 68"
                  stroke="var(--color-gedeon-red)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.45"
                />
                <circle
                  cx="60"
                  cy="280"
                  r="4"
                  fill="var(--color-gedeon-red)"
                  style={{ animation: "flicker-red 6s ease-in-out infinite" }}
                />
              </svg>

              <svg
                className="absolute inset-[74px] h-[calc(100%-148px)] w-[calc(100%-148px)]"
                viewBox="0 0 560 560"
                style={{ animation: "orbit-slow 54s linear infinite" }}
              >
                <circle
                  cx="280"
                  cy="280"
                  r="200"
                  fill="none"
                  stroke="var(--color-text-secondary)"
                  strokeWidth="0.7"
                  strokeDasharray="10 34"
                  opacity="0.14"
                />
              </svg>

              <div className="hero-core-glow absolute inset-[110px] rounded-full" />

              <div className="relative z-10 h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px]">
                <GedeonMark
                  showCircuitField
                  className="h-full w-full drop-shadow-[0_0_28px_rgba(139,17,17,0.18)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 flex flex-col items-center gap-3 opacity-40 md:left-12">
          <span className="origin-left translate-y-8 rotate-90 text-[9px] font-bold uppercase tracking-[0.2em] text-text-muted">
            Scroll
          </span>
          <div className="h-20 w-[1px] bg-gradient-to-b from-gedeon-red to-transparent" />
        </div>
      </section>

      <section
        id="manifiesto"
        className="relative border-b border-white/5 bg-zinc-950 px-6 py-40 md:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-20 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col">
            <span className="mb-6 text-[12px] font-bold uppercase tracking-[0.3em] text-gedeon-red">
              Bloque 01
            </span>
            <h2 className="border-l-4 border-gedeon-red pl-6 text-5xl font-black uppercase leading-none tracking-tighter text-foreground md:text-6xl">
              El escudo
              <br />
              intacto.
            </h2>
          </div>

          <div className="flex flex-col gap-10 border-t border-gedeon-border pt-10 md:border-l md:border-t-0 md:pt-0 lg:pl-10 2xl:pl-32">
            <div className="text-2xl font-light leading-snug tracking-tight text-text-secondary md:text-4xl">
              &quot;No seguimos tendencias, marcamos el estandar. Gedeon Esport
              no nace de la casualidad, surge de la voluntad inquebrantable de
              dominar el terreno con pura tactica.&quot;
            </div>

            <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed tracking-wide text-text-muted">
              <p>
                Nuestra armadura moderna es nuestro juego de equipo. Nuestra
                lanza, la precision en cada jugada. La comunidad que formamos no
                es un adorno visual, es una verdadera fuerza colectiva.
              </p>
              <p>El silencio antes de la batalla es donde se forjan los campeones.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-text-secondary/10 pt-8 md:grid-cols-4">
              {tacticalStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gedeon-red">
                    {stat.label}
                  </span>
                  <span className="text-3xl font-light uppercase tracking-tighter text-foreground">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="tactica"
        className="relative overflow-hidden bg-gedeon-surface px-6 py-40 md:px-12"
      >
        <div className="pointer-events-none absolute -right-20 top-0 select-none text-[30rem] font-black leading-none text-background/50">
          0X
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="mb-24 flex items-end justify-between border-b border-text-muted/20 pb-8">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter md:text-7xl">
              Codigo tactico
            </h2>
            <span className="hidden text-sm font-bold uppercase tracking-[0.3em] text-gedeon-red md:block">
              Metodologia Gedeon
            </span>
          </div>

          <div className="grid grid-cols-1 gap-0 border border-text-muted/10 bg-background/50 backdrop-blur-sm md:grid-cols-3">
            {tacticalValues.map((item, index) => (
              <div
                key={item.id}
                className={`group relative flex flex-col p-12 2xl:p-16 ${
                  index !== 0 ? "border-t border-text-muted/10 md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gedeon-red transition-transform duration-500 group-hover:scale-x-100" />

                <span className="mb-12 block font-mono text-xl text-gedeon-red opacity-50 transition-opacity group-hover:opacity-100">
                  {item.id}
                </span>
                <h3 className="mb-6 border-b border-text-muted/20 pb-6 text-3xl font-bold uppercase leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-auto text-base font-light leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="interes"
        className="relative overflow-hidden border-b border-gedeon-border bg-background px-6 py-32 md:px-12 md:py-40"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="interest-ambient-glow absolute left-[-12%] top-[12%] h-[520px] w-[520px] rounded-full" />
        <div className="interest-ambient-glow absolute bottom-[-28%] right-[-10%] h-[540px] w-[540px] rounded-full opacity-60" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="mb-16 grid grid-cols-1 gap-16 md:mb-20 md:grid-cols-[1fr_2fr] md:gap-20">
            <div className="flex flex-col">
              <span className="mb-6 text-[12px] font-bold uppercase tracking-[0.3em] text-gedeon-red">
                Bloque 03
              </span>
              <h2 className="border-l-4 border-gedeon-red pl-6 text-4xl font-black uppercase leading-none tracking-tighter text-foreground md:text-5xl lg:text-6xl">
                Alineamiento
                <br />
                tactico.
              </h2>
            </div>

            <div className="flex flex-col justify-center gap-6 border-t border-gedeon-border pt-10 md:border-l md:border-t-0 md:pt-0 lg:pl-10 2xl:pl-32">
              <p className="max-w-2xl text-xl font-light leading-snug tracking-tight text-text-secondary md:text-2xl">
                El hero ya abre el sistema. Esta seccion lo convierte en una
                entrada formal: panel de reclutamiento, lectura clara y misma
                energia contenida.
              </p>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-gedeon-red" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">
                  Reclutamiento inicial // canal protegido
                </span>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <aside className="recruitment-dossier relative overflow-hidden border border-white/10 px-6 py-7 sm:px-8 sm:py-9">
              <div className="recruitment-panel-grid absolute inset-0 opacity-40" />
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between gap-6 border-b border-white/8 pb-6">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gedeon-red">
                      Dossier 03 // Interest intake
                    </p>
                    <h3 className="text-2xl font-black uppercase leading-none tracking-tight text-foreground sm:text-3xl">
                      Panel de reclutamiento premium.
                    </h3>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.02] p-2 shadow-[0_0_40px_rgba(139,17,17,0.14)]">
                    <GedeonMark className="h-full w-full" />
                  </div>
                </div>

                <p className="max-w-xl text-base leading-relaxed text-text-secondary">
                  Cada dato entra como una senal. No pedimos mas de lo
                  necesario: identidad operativa, canal de contacto,
                  disponibilidad y una nota breve para entender afinidad y
                  contexto competitivo.
                </p>

                <div className="mt-8 grid gap-4">
                  {recruitmentSignals.map((signal, index) => (
                    <div
                      key={signal.code}
                      className="rounded-[22px] border border-white/10 bg-white/[0.02] px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gedeon-red/30 bg-gedeon-red/10 text-[10px] font-bold tracking-[0.18em] text-gedeon-red">
                          0{index + 1}
                        </span>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-foreground">
                          {signal.code}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-text-muted">
                        {signal.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/8 pt-6">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gedeon-red">
                      Estado
                    </p>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Registro inicial de comunidad.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gedeon-red">
                      Criterio
                    </p>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Claridad, disciplina y minimo ruido visual.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="recruitment-shell relative overflow-hidden border border-white/10 bg-gedeon-surface/55">
              <div className="recruitment-panel-grid absolute inset-0 opacity-45" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gedeon-red/70 to-transparent" />
              <div className="absolute left-0 top-8 h-24 w-px bg-gradient-to-b from-gedeon-red/80 to-transparent" />
              <div className="absolute right-0 top-8 h-24 w-px bg-gradient-to-b from-gedeon-red/80 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-8 flex flex-col gap-5 border-b border-white/8 pb-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gedeon-red">
                      Intake channel // live
                    </p>
                    <h3 className="text-2xl font-black uppercase leading-none tracking-tight text-foreground md:text-3xl">
                      Acceso de interes.
                    </h3>
                  </div>
                  <div className="grid gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted sm:grid-cols-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-center">
                      Validacion activa
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-center">
                      Respuesta prioritaria
                    </span>
                  </div>
                </div>

                <InterestForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative flex flex-col items-center justify-center border-t-8 border-gedeon-red bg-background px-6 py-48 text-center md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,var(--color-gedeon-red)_0%,transparent_40%)] opacity-5" />

        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          className="mb-10 text-gedeon-red opacity-80"
        >
          <path
            d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </svg>

        <h2 className="mb-8 max-w-4xl text-4xl font-black leading-[0.9] tracking-tighter md:text-7xl">
          La arena se abre{" "}
          <span className="font-outline text-background">
            una vez mas.
          </span>
        </h2>

        <p className="mb-16 max-w-2xl text-xl font-light tracking-wide text-text-muted">
          No buscamos jugadores, reclutamos tacticos. Unete hoy a la elite.
        </p>

        <a
          href="#interes"
          className="inline-flex items-center justify-center bg-gedeon-red px-16 py-6 font-bold uppercase tracking-[0.3em] text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
        >
          Ingresar al batallon
        </a>
      </section>

      <footer className="border-t border-text-muted/10 bg-zinc-950 px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-xl font-bold uppercase tracking-[0.3em] text-foreground">
            GEDEON <span className="text-gedeon-red">ESPORT</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            &copy; {new Date().getFullYear()} / Protocolo activo / Legado en construccion
          </div>
        </div>
      </footer>
    </main>
  );
}
