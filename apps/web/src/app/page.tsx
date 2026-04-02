import React from "next";

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
            <a href="#cta" className="hover:text-foreground transition-colors py-2 border-b-2 border-transparent hover:border-gedeon-red">DESPLIEGUE</a>
          </div>
        </div>
      </nav>

      {/* Monumental Asymmetric Hero */}
      <section className="relative min-h-[100vh] w-full flex items-center bg-background border-b border-gedeon-border pt-20">
        
        {/* Dynamic Abstract Tactical Background */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tactical-mesh" width="80" height="80" patternUnits="userSpaceOnUse">
                {/* Diagonal field lines */}
                <path d="M0,80 L80,0" stroke="var(--color-text-muted)" strokeWidth="0.5" opacity="0.2"/>
                {/* Horizontal & Vertical grid */}
                <path d="M40,0 L40,80" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.05"/>
                <path d="M0,40 L80,40" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.05"/>
                {/* Nodes */}
                <circle cx="40" cy="40" r="1" fill="var(--color-gedeon-red)"/>
                <circle cx="0" cy="80" r="1.5" fill="var(--color-text-secondary)" opacity="0.5"/>
              </pattern>
              <radialGradient id="hero-glow" cx="70%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-gedeon-red)" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="var(--color-background)" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-glow)"/>
            <rect width="100%" height="100%" fill="url(#tactical-mesh)"/>
          </svg>
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content Column - Monumental Typography */}
          <div className="w-full md:w-[65%] 2xl:w-[60%] flex flex-col items-start pt-12 md:pt-0">
            <div className="inline-flex items-center gap-4 mb-10 pl-1">
              <span className="w-10 h-[2px] bg-gedeon-red inline-block" />
              <span className="text-[11px] font-bold tracking-[0.4em] text-text-muted uppercase">Iniciando Protocolo 01</span>
            </div>
            
            <h1 className="text-[4.5rem] sm:text-8xl lg:text-[9rem] xl:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] text-foreground mb-8 ml-[-4px]">
              El <br/> Regreso <br/>
              <span className="text-gedeon-red">Táctico.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-text-secondary font-light max-w-xl leading-relaxed tracking-wide mb-16 pl-1 border-l border-gedeon-red/30">
              Forjando leyendas. La comunidad que resistió vuelve convertida en un batallón implacable. Honor, disciplina y victoria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pl-1">
              <button className="group relative px-10 py-5 bg-foreground text-background font-bold tracking-[0.2em] text-xs uppercase overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Alinearse al Sistema
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gedeon-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              </button>
              <button className="px-10 py-5 bg-transparent border border-gedeon-border text-foreground font-bold tracking-[0.2em] text-xs uppercase hover:bg-white/5 transition-colors">
                Nuestro Legado
              </button>
            </div>
          </div>

          {/* Right Column - Visual Signature */}
          <div className="hidden md:flex w-[35%] 2xl:w-[40%] justify-end relative">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Outer rotating ring */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite] opacity-30" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="240" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="4 12" />
                <circle cx="250" cy="250" r="230" fill="none" stroke="var(--color-gedeon-red)" strokeWidth="0.5" strokeDasharray="400 100" />
              </svg>
              {/* The Shield/Core Emblem */}
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-gedeon-red relative z-10 drop-shadow-[0_0_30px_rgba(139,17,17,0.4)]">
                <path d="M50 5 L10 20 V45 C10 70 30 90 50 95 C70 90 90 70 90 45 V20 L50 5 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter"/>
                <path d="M50 5 V95" stroke="var(--color-text-secondary)" strokeWidth="1" strokeDasharray="2 4"/>
                <path d="M10 20 L90 20" stroke="var(--color-text-secondary)" strokeWidth="1" opacity="0.5"/>
                <path d="M20 30 L80 30" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                <rect x="45" y="40" width="10" height="10" fill="currentColor" />
              </svg>
            </div>
          </div>
          
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold rotate-90 origin-left translate-y-8">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gedeon-red to-transparent" />
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

      {/* Ceremonial Closing / Final CTA */}
      <section id="cta" className="py-48 bg-background relative px-6 md:px-12 flex flex-col items-center text-center justify-center border-t-8 border-gedeon-red">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-gedeon-red)_0%,transparent_40%)] opacity-5 pointer-events-none" />
        
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-gedeon-red mb-10 opacity-80">
          <path d="M12 2L3 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
        </svg>
        
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 max-w-4xl leading-[0.9]">
          La arena se abre <span className="text-transparent border-text-stroke text-background font-outline">una vez más.</span>
        </h2>
        <style dangerouslySetInnerHTML={{__html: `
          .font-outline { -webkit-text-stroke: 1px var(--color-foreground); color: transparent; }
        `}} />
        
        <p className="text-text-muted text-xl max-w-2xl font-light mb-16 tracking-wide">
          No buscamos jugadores, reclutamos tácticos. Únete hoy a la élite.
        </p>
        
        <a href="#" className="inline-flex items-center justify-center px-16 py-6 bg-gedeon-red text-white font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
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
