import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Layers, Eye, Shield, Sun, CheckCircle2, ArrowRight } from "lucide-react";

interface ComparisonRow {
  label: string;
  gita: string;
  maya: string;
  sarvam: string;
  shakti: string;
}

const comparisonData: ComparisonRow[] = [
  {
    label: "Core Focus",
    gita: "Clarity",
    maya: "Realignment",
    sarvam: "Long-Term Design",
    shakti: "Activation",
  },
  {
    label: "If You Feel…",
    gita: "Confused or unsure",
    maya: "Capable but something feels off",
    sarvam: "Ready to build something that lasts",
    shakti: "Clear but need stronger execution",
  },
  {
    label: "Best For",
    gita: "Students, graduates, Homemakers, Professionals",
    maya: "Professionals, growth phases, inner friction",
    sarvam: "Founders, senior leaders, long-term builders",
    shakti: "Individuals, teams, organisations",
  },
  {
    label: "Duration",
    gita: "3 Hours",
    maya: "3 Months",
    sarvam: "12 Months",
    shakti: "3–6 Hour Modules",
  },
  {
    label: "Primary Outcome",
    gita: "Clear direction & confidence",
    maya: "Clear priorities & steady momentum",
    sarvam: "Sustainable success architecture",
    shakti: "Sharper execution & stronger leadership",
  },
  {
    label: "Commitment Level",
    gita: "Focused",
    maya: "Focused & Structured",
    sarvam: "High & Intentional",
    shakti: "Flexible",
  },
  {
    label: "Ideal Starting Point?",
    gita: "When clarity is missing",
    maya: "When alignment is missing",
    sarvam: "When long-term design matters",
    shakti: "When execution needs strength",
  },
];

const programs = [
  { id: "gita", name: "GITA", icon: Eye, flagship: false, href: "/program-gita", cta: "Apply for GITA" },
  { id: "maya", name: "MAYA", icon: Layers, flagship: true, href: "/program-maya", cta: "Apply for MAYA" },
  { id: "sarvam", name: "SARVAM", icon: Shield, flagship: false, href: "/program-sarvam", cta: "Apply for SARVAM" },
  { id: "shakti", name: "SHAKTI", icon: Sun, flagship: false, href: "/program-shakti", cta: "Apply for SHAKTI" },
];

const ProgramComparison = () => {
  return (
    <section id="comparison" className="section relative overflow-hidden bg-background pt-32 pb-24">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-primary/60" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
              Comparison
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-4">The Success369 Journeys</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the right starting point for your current context and desired outcomes.
          </p>
        </motion.div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block">
          <div className="relative rounded-[2.5rem] border border-border/40 bg-card/20 backdrop-blur-3xl overflow-hidden shadow-2xl">
            {/* Header Row */}
            <div className="grid grid-cols-[240px_1fr_1fr_1fr_1fr] border-b border-border/40">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold m-0">Journey Overview</h3>
                <p className="text-xs text-muted-foreground mt-2 font-medium tracking-widest uppercase">Select Your Path</p>
              </div>
              {programs.map((program) => (
                <div 
                  key={program.id} 
                  className={`p-8 text-center flex flex-col items-center justify-between gap-4 border-l border-border/40 relative ${program.flagship ? 'bg-primary/[0.03]' : ''}`}
                >
                  {program.flagship && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary shadow-[0_4px_12px_rgba(var(--primary),0.3)]" />
                  )}
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${program.flagship ? 'bg-primary text-white scale-110' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      <program.icon size={22} />
                    </div>
                    <div>
                      <span className="font-display text-2xl font-black tracking-widest">{program.name}</span>
                      {program.flagship && (
                        <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mt-1">Flagship</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Data Rows */}
            <div className="relative">
              {comparisonData.map((row, idx) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`grid grid-cols-[240px_1fr_1fr_1fr_1fr] group border-b border-border/40 last:border-0 ${idx % 2 === 0 ? 'bg-foreground/[0.02]' : ''}`}
                >
                  <div className="p-6 px-8 flex items-center bg-card/40">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{row.label}</span>
                  </div>
                  {/* GITA */}
                  <div className="p-6 flex items-center justify-center text-center border-l border-border/40 transition-colors group-hover:bg-foreground/[0.01]">
                    <p className="text-sm leading-relaxed text-foreground/80 font-medium">{row.gita}</p>
                  </div>
                  {/* MAYA */}
                  <div className="p-6 flex items-center justify-center text-center border-l border-border/40 bg-primary/[0.02] transition-colors group-hover:bg-primary/[0.04]">
                     <p className="text-sm leading-relaxed text-foreground font-semibold px-2">{row.maya}</p>
                  </div>
                  {/* SARVAM */}
                  <div className="p-6 flex items-center justify-center text-center border-l border-border/40 transition-colors group-hover:bg-foreground/[0.01]">
                    <p className="text-sm leading-relaxed text-foreground/80 font-medium">{row.sarvam}</p>
                  </div>
                  {/* SHAKTI */}
                  <div className="p-6 flex items-center justify-center text-center border-l border-border/40 transition-colors group-hover:bg-foreground/[0.01]">
                    <p className="text-sm leading-relaxed text-foreground/80 font-medium">{row.shakti}</p>
                  </div>
                </motion.div>
              ))}

              {/* Footer CTA Row */}
              <div className="grid grid-cols-[240px_1fr_1fr_1fr_1fr] border-t border-border/40 bg-card/40">
                <div className="p-8" />
                {programs.map((program) => (
                  <div key={program.id} className={`p-8 border-l border-border/40 flex justify-center ${program.flagship ? 'bg-primary/[0.03]' : ''}`}>
                    <Link 
                      to={program.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                        program.flagship 
                          ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-1' 
                          : 'bg-foreground/5 text-foreground hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {program.id === 'maya' ? 'Flagship Journey' : 'View Program'}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Horizontal Cards */}
        <div className="lg:hidden space-y-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-3xl border ${program.flagship ? 'border-primary/50 bg-primary/5' : 'border-border/50 bg-card/30'} backdrop-blur-xl relative`}
            >
              {program.flagship && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-[8px] uppercase tracking-[0.2em] text-white font-bold">
                  Flagship
                </div>
              )}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <program.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-wider m-0">{program.name}</h3>
              </div>
              
              <div className="space-y-6">
                {comparisonData.map((row) => (
                  <div key={row.label} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{row.label}</span>
                    <p className="text-sm text-foreground/90 m-0">
                      {program.id === 'gita' ? row.gita : 
                       program.id === 'maya' ? row.maya : 
                       program.id === 'sarvam' ? row.sarvam : row.shakti}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramComparison;
