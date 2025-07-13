import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <img src="/logo.svg" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Portal SI
              </h1>
              <p className="text-xs text-gray-500">MCH • Desde 2025</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#eventos"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Eventos
            </a>
            <a
              href="#sobre"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#impacto"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Impacto
            </a>
            <a
              href="#contato"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Contato
            </a>
            <Button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 shadow-lg">
              <Search />
              Pesquisar
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
