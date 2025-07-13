import { FileText, Video } from 'lucide-react'

const materials = [
  {
    type: 'pdf',
    title: 'Slides - Aula 1: Introdução ao Node.js',
    href: '/materiais/aula1.pdf',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
  },
  {
    type: 'video',
    title: 'Vídeo explicativo - Conceito de Threads',
    href: 'https://youtube.com/example',
    icon: <Video className="w-5 h-5 text-red-500" />,
  },
]

export function StudyMaterials() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
        📚 Materiais de Estudo
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {materials.map((material, index) => (
          <a
            key={index}
            href={material.href}
            target="_blank"
            className="flex items-start gap-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 hover:shadow-md transition"
          >
            <div className="shrink-0">{material.icon}</div>
            <div className="text-zinc-700 dark:text-zinc-200 text-sm font-medium">
              {material.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
