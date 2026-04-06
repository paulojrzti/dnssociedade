import React from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Mapeamento Prático',
    description: 'Nossa equipe entra na sua operação via formulário inteligente e extrai a documentação base em menos de 15 minutos do seu tempo.',
  },
  {
    number: '02',
    title: 'Auditoria Real',
    description: 'Buscamos os ralos de dinheiro escondidos. Uma análise focada exclusivamente na realidade prática do seu modelo de negócios.',
  },
  {
    number: '03',
    title: 'Planta Baixa de Proteção',
    description: 'Reunião executiva: direto ao ponto e focado 100% no que deve ser corrigido para blindar seu patrimônio.',
  }
];

export function Metodologia() {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-20 animate-fade-in delay-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Inteligência legal, <br/>
            <span className="text-zinc-500">sem a burocracia tradicional.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 animate-fade-in delay-300">
            {STEPS.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col sm:flex-row items-center justify-between gap-8 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Visual Node */}
                <div className="absolute left-[39px] sm:left-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-background bg-zinc-800 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10 hidden sm:flex">
                  <span className="text-xs font-bold text-white">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-3rem)] rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04]`}>
                  <div className="inline-flex sm:hidden h-8 w-8 mb-4 items-center justify-center rounded-full bg-zinc-800 border border-white/10 text-xs font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
