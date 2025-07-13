import { BookOpen, CalendarDays, ClipboardList } from 'lucide-react'

export function DisciplineDetails() {
  return (
    <section className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow space-y-6">
      {/* Cabeçalho da disciplina */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Sistemas Distribuídos
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Profª Ana Paula Souza • 60h • Semestre 2025/2
          </p>
        </div>
        <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </div>

      {/* Informações */}
      <ul className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
        <li className="flex items-start gap-3">
          <CalendarDays className="w-5 h-5 text-indigo-500 mt-0.5" />
          <span>
            <strong>Próxima aula:</strong> 03/07 — Tópico: RPC e gRPC
          </span>
        </li>
        <li className="flex items-start gap-3">
          <ClipboardList className="w-5 h-5 text-emerald-500 mt-0.5" />
          <span>
            <strong>Trabalho 1:</strong> Entrega até 10/07
          </span>
        </li>
        <li className="flex items-start gap-3">
          <ClipboardList className="w-5 h-5 text-rose-500 mt-0.5" />
          <span>
            <strong>Prova parcial:</strong> 15/07
          </span>
        </li>
      </ul>
    </section>
  )
}
