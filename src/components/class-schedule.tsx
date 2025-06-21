'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const schedules = [
  {
    title: '1º Período',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Maio/Destaques/154_2025_2.png',
  },
  {
    title: '2º Período',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Maio/Destaques/154_2025_2.png',
  },
  {
    title: '3º Período',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Maio/Destaques/154_2025_2.png',
  },
  {
    title: '4º Período',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Maio/Destaques/154_2025_2.png',
  },
  {
    title: '5º Período',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Maio/Destaques/154_2025_2.png',
  },
  {
    title: '6º Período',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Maio/Destaques/154_2025_2.png',
  },
]

export function ClassSchedule() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
        Horários de aulas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {schedules.map(({ title, image }) => (
          <div key={title}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
