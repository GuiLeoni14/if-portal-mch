import { StudentSupport } from '@/components/student-support'
import { MessageCircleQuestion } from 'lucide-react'

export default function Suporte() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-zinc-900 dark:to-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10 text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircleQuestion className="w-4 h-4" />
            Atendimento ao Aluno
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Suporte ao Estudante
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl mx-auto">
            Encontre respostas, fale com a equipe ou envie uma solicitação de
            ajuda.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6 sm:p-8">
          <StudentSupport />
        </div>
      </div>
    </div>
  )
}
