import { Notifications } from '@/components/notifications'
import { DashboardSummary } from '@/components/dashboard-summary'
import { DisciplineDetails } from '@/components/discipline-details'
import { LayoutDashboard } from 'lucide-react'

export default function Painel() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Cabeçalho */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">
            <LayoutDashboard className="w-4 h-4" />
            Acompanhamento diário
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Painel Acadêmico
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Veja rapidamente suas aulas, prazos e informações das disciplinas.
          </p>
        </div>

        {/* Bloco: Notificações */}
        <section className="bg-white dark:bg-zinc-800 shadow rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Notificações
          </h2>
          <Notifications />
        </section>

        {/* Bloco: Resumo do Dia */}
        <section className="bg-white dark:bg-zinc-800 shadow rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Resumo do Dia
          </h2>
          <DashboardSummary />
        </section>

        {/* Bloco: Detalhes das Disciplinas */}
        <section className="bg-white dark:bg-zinc-800 shadow rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Minhas Disciplinas
          </h2>
          <DisciplineDetails />
        </section>
      </div>
    </div>
  )
}
