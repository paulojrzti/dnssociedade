import React from 'react'
import { Hero } from './components/Hero'
import { Dores } from './components/Dores'
import { Solucao } from './components/Solucao'
import { Metodologia } from './components/Metodologia'
import { Objections } from './components/Objections'

function App() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-white/20">
      <Hero />
      <Dores />
      <Solucao />
      <Metodologia />
      <Objections />
    </main>
  )
}

export default App
