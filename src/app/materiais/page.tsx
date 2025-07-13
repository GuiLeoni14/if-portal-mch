import { StudyMaterials } from '@/components/study-materials'
import { FileText } from 'lucide-react'

export default function Materiais() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-zinc-900 dark:to-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        {/* Cabeçalho */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
            <FileText className="w-4 h-4" />
            Recursos Acadêmicos
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Materiais de Estudo
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl mx-auto">
            Acesse apostilas, vídeos, PDFs e conteúdos recomendados para suas
            disciplinas.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-6 sm:p-8 text-left">
          <StudyMaterials />
        </div>
      </div>
    </div>
  )
}
