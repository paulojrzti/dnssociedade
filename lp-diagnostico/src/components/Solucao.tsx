import React from 'react';
import { Target, CheckCircle2, AlertOctagon, XCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Solucao() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-zinc-900/50 blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 animate-fade-in delay-200">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              A clareza absoluta sobre <span className="text-zinc-500">o que pode te dar prejuízo.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-md">
              O Diagnóstico Jurídico Empresarial traduz o direito para a linguagem de negócios. Eliminamos o juridiquês e te entregamos um "Raio-X" objetivo e prático:
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">O que está crítico</h4>
                  <p className="text-sm text-zinc-400">Pontos de ação imediata que podem causar processos no curto prazo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertOctagon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">Ajustes de médio prazo</h4>
                  <p className="text-sm text-zinc-400">Furos de contrato e fluxo de gestão que não te protegem o suficiente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">O que está blindado</h4>
                  <p className="text-sm text-zinc-400">Processos que já operam com margem de segurança.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-8">
              Marcar uma análise
            </Button>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl animate-fade-in delay-400 shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight text-white">Raio-X Concluído</div>
                <div className="text-sm text-zinc-400">Análise de Pontos de Risco</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Risco Trabalhista Mapeado</span>
                  <span className="text-red-400 font-medium">Crítico (85%)</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-red-500/50 to-red-500" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Saúde Contratual</span>
                  <span className="text-yellow-400 font-medium">Atenção (50%)</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[50%] rounded-full bg-gradient-to-r from-yellow-500/50 to-yellow-500" />
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Plano de Ação Gerado</span>
                  <Button variant="outline" size="sm">Ver Detalhes</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
