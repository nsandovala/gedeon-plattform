

import InterestForm from "./components/InterestForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden font-sans selection:bg-gedeon-red/40">
      
      {/* Navbar Premium Brutalist */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-text-secondary/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gedeon-red">
              <path d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              <path d="M12 2v20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
            </svg>
            <span className="font-bold text-sm tracking-[0.25em] uppercase text-foreground">Gedeon</span>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] text-text-muted">
            <a href="#manifiesto" className="hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-gedeon-red">MANIFIESTO</a>
            <a href="#tactica" className="hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-gedeon-red">SISTEMA</a>
            <a href="#interes" className="hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-gedeon-red">INTERÉS</a>
            <a href="#cta" className="hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-gedeon-red">DESPLIEGUE</a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
           HERO V4 — Orbital Shield System / Spartan Quantum Minimalism
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] w-full flex items-center bg-background border-b border-gedeon-border pt-20 overflow-hidden">

        {/* ── Layer 1: Geometric Mesh Background ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="field-mesh" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Primary diagonals */}
                <path d="M0,100 L100,0" stroke="var(--color-text-secondary)" strokeWidth="0.4" style={{ animation: 'line-breathe 8s ease-in-out infinite' }} />
                <path d="M0,0 L100,100" stroke="var(--color-text-secondary)" strokeWidth="0.4" opacity="0.1" />
                {/* Cross grid */}
                <path d="M50,0 V100" stroke="var(--color-text-muted)" strokeWidth="0.3" opacity="0.08" />
                <path d="M0,50 H100" stroke="var(--color-text-muted)" strokeWidth="0.3" opacity="0.08" />
                {/* Pulsing tactical nodes */}
                <circle cx="50" cy="50" r="1.5" fill="var(--color-gedeon-red)" style={{ animation: 'node-pulse 4s ease-in-out infinite' }} />
                <circle cx="0" cy="0" r="1" fill="var(--color-text-secondary)" opacity="0.3" />
                <circle cx="100" cy="0" r="1" fill="var(--color-text-secondary)" opacity="0.3" />
                <circle cx="0" cy="100" r="1" fill="var(--color-text-secondary)" opacity="0.25" />
                <circle cx="100" cy="100" r="1" fill="var(--color-text-secondary)" opacity="0.25" />
                {/* Red accent marks at intersections */}
                <rect x="48" y="0" width="4" height="0.5" fill="var(--color-gedeon-red)" opacity="0.15" />
                <rect x="0" y="48" width="0.5" height="4" fill="var(--color-gedeon-red)" opacity="0.15" />
              </pattern>
              {/* Radial fade to contain the mesh */}
              <radialGradient id="mesh-fade" cx="55%" cy="45%" r="65%">
                <stop offset="0%" stopColor="var(--color-background)" stopOpacity="0" />
                <stop offset="70%" stopColor="var(--color-background)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--color-background)" stopOpacity="1" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#field-mesh)" opacity="0.5" />
            <rect width="100%" height="100%" fill="url(#mesh-fade)" />
          </svg>
        </div>

        {/* ── Layer 2: Red Energy Glow ── */}
        <div
          className="absolute pointer-events-none z-[1]"
          style={{
            width: '700px',
            height: '700px',
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, var(--gedeon-red) 0%, transparent 70%)',
            animation: 'glow-breathe 6s ease-in-out infinite',
            filter: 'blur(80px)',
          }}
        />

        {/* ── Content Grid ── */}
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Left: Editorial Text Block */}
          <div className="w-full md:w-[58%] flex flex-col items-start">
            {/* Microtexto operativo */}
            <div className="flex items-center gap-3 mb-12">
              <span className="w-8 h-[1px] bg-gedeon-red" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-text-muted uppercase" style={{ animation: 'flicker-red 8s ease-in-out infinite' }}>
                Protocolo Gedeon // Preparando La Arena
              </span>
            </div>

            {/* Headline monumental */}
            <h1 className="text-[3.8rem] sm:text-[5.5rem] lg:text-[8rem] xl:text-[9.5rem] font-black uppercase tracking-[-0.04em] leading-[0.82] text-foreground mb-10 ml-[-3px]">
              El<br />
              Regreso<br />
              <span className="text-gedeon-red">Táctico.</span>
            </h1>

            {/* Subtítulo */}
            <div className="relative pl-5 mb-16 max-w-lg">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-gedeon-red via-gedeon-red/40 to-transparent" />
              <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed tracking-wide">
                Forjando leyendas. La comunidad que resistió vuelve convertida en un batallón implacable. Honor, disciplina y victoria.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#interes" className="group relative px-10 py-5 bg-foreground text-background font-bold tracking-[0.2em] text-[11px] uppercase overflow-hidden cursor-pointer inline-block no-underline">
                <span className="relative z-10 flex items-center gap-3">
                  Alinearse al Sistema
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gedeon-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              </a>
              <button className="px-10 py-5 bg-transparent border border-gedeon-border text-foreground font-bold tracking-[0.2em] text-[11px] uppercase hover:border-text-secondary/40 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer">
                Nuestro Legado
              </button>
            </div>
          </div>

          {/* Right: Shield + Orbital System */}
          <div className="hidden md:flex w-[42%] justify-center items-center relative">
            <div className="relative w-[420px] h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">

              {/* Orbital Ring 1 — Outermost (slow, dashed) */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 500 500"
                style={{ animation: 'orbit-slow 90s linear infinite' }}
              >
                <circle cx="250" cy="250" r="245" fill="none" stroke="var(--color-text-muted)" strokeWidth="0.5" strokeDasharray="3 18" opacity="0.25" />
                {/* Orbital node markers */}
                <circle cx="250" cy="5" r="2" fill="var(--color-gedeon-red)" style={{ animation: 'node-pulse 5s ease-in-out infinite' }} />
                <circle cx="495" cy="250" r="1.5" fill="var(--color-text-secondary)" opacity="0.5" />
                <circle cx="250" cy="495" r="1.5" fill="var(--color-text-secondary)" opacity="0.4" />
              </svg>

              {/* Orbital Ring 2 — Mid (counter-rotating, partial arc) */}
              <svg
                className="absolute inset-[30px] w-[calc(100%-60px)] h-[calc(100%-60px)]"
                viewBox="0 0 500 500"
                style={{ animation: 'orbit-reverse 70s linear infinite' }}
              >
                <circle cx="250" cy="250" r="240" fill="none" stroke="var(--color-gedeon-red)" strokeWidth="0.8" strokeDasharray="300 200" opacity="0.4" />
                <circle cx="250" cy="250" r="240" fill="none" stroke="var(--color-text-secondary)" strokeWidth="0.3" strokeDasharray="2 28" opacity="0.2" />
                {/* Orbital node */}
                <circle cx="10" cy="250" r="2.5" fill="var(--color-gedeon-red)" style={{ animation: 'flicker-red 6s ease-in-out infinite' }} />
              </svg>

              {/* Orbital Ring 3 — Inner halo */}
              <svg
                className="absolute inset-[60px] w-[calc(100%-120px)] h-[calc(100%-120px)]"
                viewBox="0 0 500 500"
                style={{ animation: 'orbit-slow 50s linear infinite' }}
              >
                <circle cx="250" cy="250" r="230" fill="none" stroke="var(--color-text-secondary)" strokeWidth="0.4" strokeDasharray="8 40" opacity="0.15" />
              </svg>

              {/* ── The Shield: Core Emblem ── */}
              <svg
                className="relative z-10"
                width="160" height="180"
                viewBox="0 0 120 140"
                fill="none"
                style={{ filter: 'drop-shadow(0 0 40px rgba(139,17,17,0.35))' }}
              >
                {/* Shield outline */}
                <path
                  d="M60 6 L12 28 V62 C12 98 36 125 60 134 C84 125 108 98 108 62 V28 L60 6 Z"
                  stroke="var(--color-gedeon-red)"
                  strokeWidth="2"
                  strokeLinejoin="miter"
                  fill="none"
                />
                {/* Inner shield echo */}
                <path
                  d="M60 18 L24 36 V64 C24 92 42 114 60 122 C78 114 96 92 96 64 V36 L60 18 Z"
                  stroke="var(--color-text-secondary)"
                  strokeWidth="0.5"
                  strokeLinejoin="miter"
                  fill="none"
                  opacity="0.2"
                />
                {/* Vertical axis — dashed */}
                <line x1="60" y1="6" x2="60" y2="134" stroke="var(--color-text-secondary)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.3" />
                {/* Horizontal crossbar */}
                <line x1="12" y1="28" x2="108" y2="28" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.15" />
                <line x1="20" y1="42" x2="100" y2="42" stroke="var(--color-gedeon-red)" strokeWidth="0.5" opacity="0.25" />
                {/* Core nucleus */}
                <rect x="54" y="58" width="12" height="12" fill="var(--color-gedeon-red)" opacity="0.8" />
                <rect x="56" y="60" width="8" height="8" fill="var(--color-background)" opacity="0.6" />
                {/* Lower marks */}
                <line x1="40" y1="80" x2="80" y2="80" stroke="var(--color-text-muted)" strokeWidth="0.5" opacity="0.15" />
                <circle cx="60" cy="100" r="1.5" fill="var(--color-gedeon-red)" style={{ animation: 'node-pulse 3s ease-in-out infinite' }} />
              </svg>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-3 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-text-muted rotate-90 origin-left translate-y-8">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-gedeon-red to-transparent" />
        </div>

      </section>

      {/* Manifiesto Editorial - High Contrast Block */}
      <section id="manifiesto" className="relative py-40 bg-zinc-950 px-6 md:px-12 border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(var(--color-foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20">
          
          <div className="flex flex-col">
            <span className="text-[12px] text-gedeon-red font-bold tracking-[0.3em] uppercase mb-6">Bloque 01</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground border-l-4 border-gedeon-red pl-6">
              El Escudo<br/>Intacto.
            </h2>
          </div>
          
          <div className="flex flex-col gap-10 lg:pl-10 2xl:pl-32 border-t border-gedeon-border md:border-t-0 md:border-l md:border-gedeon-border pt-10 md:pt-0">
            <div className="text-2xl md:text-4xl text-text-secondary font-light leading-snug tracking-tight">
              "No seguimos tendencias, marcamos el estándar. Gedeon Esport no nace de la casualidad, surge de la voluntad inquebrantable de dominar el terreno con pura táctica."
            </div>
            
            <div className="flex flex-col gap-6 text-base tracking-wide leading-relaxed text-text-muted max-w-2xl">
              <p>
                Nuestra armadura moderna es nuestro juego de equipo. Nuestra lanza, la precisión en cada jugada. La comunidad que formamos no es un adorno visual, es una verdadera fuerza colectiva.
              </p>
              <p>
                El silencio antes de la batalla es donde se forjan los campeones.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-text-secondary/10">
              {[ { l: 'DISCIPLINA', v: '100%' }, { l: 'ESTADO', v: 'ACTIVO' }, { l: 'VISIÓN', v: 'GLOBAL' }, { l: 'HONOR', v: 'MÁXIMO' } ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-[10px] text-gedeon-red font-bold tracking-[0.2em]">{stat.l}</span>
                  <span className="text-3xl font-light uppercase tracking-tighter text-foreground">{stat.v}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Valores Tácticos - Brutalist Cards */}
      <section id="tactica" className="py-40 bg-gedeon-surface px-6 md:px-12 relative overflow-hidden">
        {/* Giant background numbers */}
        <div className="absolute -right-20 top-0 text-[30rem] font-black text-background/50 leading-none select-none z-0">0X</div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="flex items-end justify-between mb-24 border-b border-text-muted/20 pb-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Código Táctico</h2>
            <span className="text-sm font-bold tracking-[0.3em] text-gedeon-red uppercase hidden md:block">Metodología Gedeon</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-text-muted/10 bg-background/50 backdrop-blur-sm">
            {[
              { id: '01', title: 'Fuerza Contenida', desc: 'No derrochamos energía. Cada movimiento es intencional, cada ofensiva está calculada. Atacamos con precisión cuando la victoria es absoluta.' },
              { id: '02', title: 'Mentalidad de Acero', desc: 'La derrota es simplemente data; la victoria es la consecuencia lógica de nuestra preparación. Inquebrantables bajo cualquier presión.' },
              { id: '03', title: 'Unidad Total', desc: 'El individuo es letal, pero el batallón es invencible. Sincronización táctica donde cada agente protege al colectivo.' }
            ].map((item, i) => (
              <div key={i} className={`p-12 2xl:p-16 flex flex-col group relative ${i !== 0 ? 'border-t md:border-t-0 md:border-l border-text-muted/10' : ''}`}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gedeon-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <span className="text-gedeon-red text-xl font-mono block mb-12 opacity-50 group-hover:opacity-100 transition-opacity">{item.id}</span>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-6 leading-tight pb-6 border-b border-text-muted/20">{item.title}</h3>
                <p className="text-text-secondary font-light text-base leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
           INTEREST FORM — Alineamiento Táctico
         ═══════════════════════════════════════════════════════════ */}
      <section id="interes" className="relative py-32 md:py-40 bg-background px-6 md:px-12 border-b border-gedeon-border overflow-hidden">
        {/* Subtle dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Red glow accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            left: "-10%",
            top: "20%",
            background:
              "radial-gradient(circle, var(--gedeon-red) 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.08,
          }}
        />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          {/* Section Header */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-20 mb-20">
            <div className="flex flex-col">
              <span className="text-[12px] text-gedeon-red font-bold tracking-[0.3em] uppercase mb-6">
                Bloque 03
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-foreground border-l-4 border-gedeon-red pl-6">
                Alineamiento<br />Táctico.
              </h2>
            </div>

            <div className="flex flex-col gap-6 lg:pl-10 2xl:pl-32 border-t border-gedeon-border md:border-t-0 md:border-l md:border-gedeon-border pt-10 md:pt-0 justify-center">
              <p className="text-xl md:text-2xl text-text-secondary font-light leading-snug tracking-tight max-w-xl">
                Registra tu interés y sé el primero en recibir acceso cuando el protocolo se active. Sin compromisos, sin spam.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gedeon-red opacity-70">
                  <path d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
                <span className="text-[10px] font-bold tracking-[0.25em] text-text-muted uppercase">
                  Tus datos están protegidos por el escudo
                </span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="relative p-8 md:p-12 lg:p-16 border border-gedeon-border bg-gedeon-surface/30 backdrop-blur-sm">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gedeon-red" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gedeon-red" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gedeon-red" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gedeon-red" />

            <InterestForm />
          </div>
        </div>
      </section>

      {/* Ceremonial Closing / Final CTA */}
      <section id="cta" className="py-48 bg-background relative px-6 md:px-12 flex flex-col items-center text-center justify-center border-t-8 border-gedeon-red">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-gedeon-red)_0%,transparent_40%)] opacity-5 pointer-events-none" />
        
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-gedeon-red mb-10 opacity-80">
          <path d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
        </svg>
        
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 max-w-4xl leading-[0.9]">
          La arena se abre <span className="text-transparent border-text-stroke text-background font-outline">una vez más.</span>
        </h2>

        
        <p className="text-text-muted text-xl max-w-2xl font-light mb-16 tracking-wide">
          No buscamos jugadores, reclutamos tácticos. Únete hoy a la élite.
        </p>
        
        <a href="#interes" className="inline-flex items-center justify-center px-16 py-6 bg-gedeon-red text-white font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 no-underline">
          Ingresar al Batallón
        </a>
      </section>

      {/* Footer Minimalista Brutalista */}
      <footer className="bg-zinc-950 py-12 px-6 md:px-12 border-t border-text-muted/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold tracking-[0.3em] uppercase text-xl text-foreground">
            GEDEON <span className="text-gedeon-red">ESPORT</span>
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-text-muted uppercase">
            &copy; {new Date().getFullYear()} / Protocolo Activo / Legado en Construcción
          </div>
        </div>
      </footer>

    </main>
  );
}
