// components/notifications.tsx
import { BellRing } from 'lucide-react'

export function Notifications() {
  return (
    <section className="bg-yellow-100 dark:bg-yellow-900 rounded-xl p-4 flex items-center gap-3">
      <BellRing className="text-yellow-700 w-5 h-5" />
      <p className="text-sm text-yellow-800 dark:text-yellow-200">
        Nova mensagem do professor de Banco de Dados: “Corrigi as notas da prova
        1”
      </p>
    </section>
  )
}
