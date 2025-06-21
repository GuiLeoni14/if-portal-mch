import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Dados dos projetos
const projects = [
  {
    id: 'forum-ciencia-2025',
    title: 'Fórum de Ciência e Tecnologia 2025',
    description:
      'O maior evento de ciência e tecnologia do sul de Minas, reunindo pesquisadores, estudantes e profissionais.',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    status: 'Em andamento',
    category: 'Evento',
    startDate: '2025-08-15',
    endDate: '2025-08-17',
    location: 'Campus Machado',
    participants: 150,
    featured: true,
  },
  {
    id: 'projeto-extensao-rural',
    title: 'Extensão Rural Sustentável',
    description:
      'Projeto de extensão focado em práticas sustentáveis para pequenos produtores rurais da região.',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
    status: 'Ativo',
    category: 'Extensão',
    startDate: '2025-03-01',
    endDate: '2025-12-15',
    location: 'Região Sul de Minas',
    participants: 80,
    featured: false,
  },
  {
    id: 'olimpiada-matematica',
    title: 'Olimpíada de Matemática IFSUL',
    description:
      'Competição anual de matemática para estudantes do ensino médio da região, promovendo o interesse pela área.',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    status: 'Planejamento',
    category: 'Competição',
    startDate: '2025-09-10',
    endDate: '2025-09-12',
    location: 'Campus Machado',
    participants: 200,
    featured: false,
  },
  {
    id: 'feira-profissoes',
    title: 'Feira das Profissões 2025',
    description:
      'Apresentação dos cursos e oportunidades profissionais para estudantes do ensino médio.',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
    status: 'Concluído',
    category: 'Orientação',
    startDate: '2025-05-20',
    endDate: '2025-05-22',
    location: 'Campus Machado',
    participants: 300,
    featured: false,
  },
  {
    id: 'hackathon-inovacao',
    title: 'Hackathon de Inovação',
    description:
      'Maratona de programação e inovação com foco em soluções tecnológicas para problemas locais.',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    status: 'Em breve',
    category: 'Tecnologia',
    startDate: '2025-10-05',
    endDate: '2025-10-07',
    location: 'Campus Machado',
    participants: 120,
    featured: true,
  },
  {
    id: 'semana-meio-ambiente',
    title: 'Semana do Meio Ambiente',
    description:
      'Atividades de conscientização ambiental e sustentabilidade para toda a comunidade acadêmica.',
    image:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
    status: 'Ativo',
    category: 'Sustentabilidade',
    startDate: '2025-06-01',
    endDate: '2025-06-07',
    location: 'Campus Machado',
    participants: 250,
    featured: false,
  },
]

const getStatusColor = (status) => {
  const colors = {
    'Em andamento':
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    Ativo: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    Planejamento:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    Concluído: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100',
    'Em breve':
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  }
  return colors[status] || colors.Ativo
}

const getCategoryColor = (category) => {
  const colors = {
    Evento:
      'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
    Extensão: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100',
    Competição: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    Orientação:
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
    Tecnologia: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100',
    Sustentabilidade:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
  }
  return colors[category] || colors.Evento
}

export function ProjectsGrid() {
  return (
    <div className="space-y-5">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Conheça os principais projetos e eventos do IFSULDEMINAS
          </p>
        </div>
        <Link href="/projetos" className="hidden sm:block">
          <Button
            variant="ghost"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Ver Todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Projeto em Destaque Principal */}
      {projects.filter((p) => p.featured)[0] && (
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-5 md:p-5 border border-gray-200/50 dark:border-gray-700/50">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className={getCategoryColor(projects[0].category)}>
                  {projects[0].category}
                </Badge>
                <Badge className={getStatusColor(projects[0].status)}>
                  {projects[0].status}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100"
                >
                  ⭐ Destaque
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {projects[0].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(projects[0].startDate).toLocaleDateString(
                      'pt-BR',
                      { day: '2-digit', month: 'short' },
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{projects[0].location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{projects[0].participants} pessoas</span>
                </div>
              </div>

              <Link href={`/projetos/${projects[0].id}`}>
                <Button size="lg" className="w-full sm:w-auto">
                  Saiba Mais
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.slice(1, 5).map((project) => (
          <div key={project.id} className="group">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 space-y-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    className={getCategoryColor(project.category)}
                    variant="secondary"
                  >
                    {project.category}
                  </Badge>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(project.startDate).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>{project.participants} participantes</span>
                  </div>
                </div>

                <Link href={`/projetos/${project.id}`} className="block">
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 text-left"
                  >
                    Ver Projeto
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Link para ver todos - Mobile */}
      <div className="flex justify-center sm:hidden">
        <Link href="/projetos">
          <Button
            variant="ghost"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Ver Todos os Projetos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
