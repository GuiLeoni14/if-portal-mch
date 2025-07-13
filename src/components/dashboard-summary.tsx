// components/dashboard-summary.tsx
import { Calendar, AlertCircle, BookOpen } from 'lucide-react'

export function DashboardSummary() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold">Resumo do Dia</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 text-sm">
          <Calendar className="text-blue-600 w-4 h-4" />
          Aula de Estrutura de Dados - 14h às 16h
        </li>
        <li className="flex items-center gap-3 text-sm">
          <BookOpen className="text-green-600 w-4 h-4" />
          Entrega do trabalho de Redes (23h59)
        </li>
        <li className="flex items-center gap-3 text-sm">
          <AlertCircle className="text-yellow-500 w-4 h-4" />
          Aviso: Biblioteca fechada hoje
        </li>
      </ul>
    </section>
  )
}
