import React from 'react';
import { Button } from './ui/button';

export function Objections() {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center animate-fade-in delay-200">
        
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
          Qual o preço de <span className="italic text-zinc-400">dormir tranquilo?</span>
        </h2>
        
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[50px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">Custo da Inércia</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Um processo trabalhista médio fura o fluxo de caixa de uma PME em <strong className="text-red-400 font-bold whitespace-nowrap">R$ 40.000,00</strong>. Adicione custos periciais, custas judiciais e bloqueios de capital repentinos que congelam as operações da sua empresa instantaneamente.
              </p>
            </div>

            <div className="w-px h-32 bg-white/10 hidden md:block" />

            <div className="flex-1 text-left md:text-right">
              <h3 className="text-2xl font-semibold text-white mb-4">Seu Investimento</h3>
              <div className="text-sm tracking-widest text-zinc-500 uppercase font-semibold mb-2">Diagnóstico Empresarial</div>
              <div className="text-4xl font-bold text-white mb-6">
                <span className="text-xl align-top text-zinc-500">R$</span>2.300
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Obter Proteção Agora
              </Button>
            </div>

          </div>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Nota: "É um investimento minúsculo para eliminar meses de incerteza da cabeça do proprietário."
        </p>

      </div>
    </section>
  );
}
