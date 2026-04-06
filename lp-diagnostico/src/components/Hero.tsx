import React from 'react';
import { ArrowRight, Box, ShieldAlert, Cpu } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-24 pb-20">
      {/* Background with abstract lighting */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 grayscale"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
        }}
      />
      <div className="absolute top-0 right-0 -mr-64 -mt-64 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-16 md:pt-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in delay-100">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
            <ShieldAlert className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Inteligência Jurídica Preventiva
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
            O risco invisível que pode custar <br className="hidden sm:block"/>
            <span className="bg-gradient-to-br from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              o lucro da sua empresa
            </span> este ano.
          </h1>

          <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Você pode estar acumulando um passivo trabalhista e contratual silencioso. Descubra agora onde a sua operação está exposta antes de receber uma notificação judicial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group">
              Quero Diagnosticar Minha Empresa
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="pt-24 pb-8 flex flex-col items-center opacity-50 space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Metodologia Aplicada em Negócios de Alta Performance
            </p>
            <div className="flex gap-8 items-center grayscale">
              <div className="flex items-center gap-2">
                <Box className="w-5 h-5" /> <span className="font-bold text-lg">TechCorp</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5" /> <span className="font-bold text-lg">Indústria 4.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
