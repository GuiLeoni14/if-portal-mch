import Link from 'next/link'
import { Button } from './ui/button'
import { Calendar, ExternalLink, MapPin, Users } from 'lucide-react'

export function CTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="relative text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Projeto em andamento
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Acompanhe o projeto Meninas Digitais
        </h3>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Acesse a página no Instagram e fique por dentro das ações que
          incentivam a presença feminina na área de TI.
          <span className="block mt-2 font-semibold text-yellow-300">
            ✨ Participe e inspire outras mulheres!
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            asChild
          >
            <Link
              href="https://www.instagram.com/meninasdigitais.ifmch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver no Instagram
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5 pt-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            01 Mar – 31 Dez
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Campus Machado
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />9 integrantes
          </div>
        </div>
      </div>
    </div>
  )
}
