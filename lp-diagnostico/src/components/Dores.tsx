import React from 'react';
import { Files, Users, AlertTriangle } from 'lucide-react';

const DORES = [
  {
    icon: Files,
    title: 'Contratos "Copia e Cola"',
    description: 'Modelos da internet não protegem as especificidades do modelo de negócio e abrem brechas contra a própria empresa.',
  },
  {
    icon: Users,
    title: 'Improviso no RH',
    description: 'Acordos informais, controle de ponto falho e contratações em áreas cinzentas (PJ mascarado) viram bombas-relógio.',
  },
  {
    icon: AlertTriangle,
    title: 'Advogado só na Emergência',
    description: 'A maioria dos empresários confia na "sorte". Apagar um incêndio custa no mínimo 10x mais do que preveni-il.',
  }
];

export function Dores() {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-2xl text-left mb-16 animate-fade-in delay-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Se um funcionário te processar amanhã, você está preparado?
          </h2>
          <p className="text-lg text-zinc-400">
            A maioria dos empresários confia na "sorte" invés de estratégia técnica. Veja os perigos invisíveis da sua gestão:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DORES.map((dor, idx) => (
            <div 
              key={idx}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04] animate-fade-in delay-${(idx+3)*100}`}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                <dor.icon className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white tracking-tight">
                {dor.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {dor.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
