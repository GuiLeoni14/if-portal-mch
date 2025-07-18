import { Carousel } from '@/components/carousel'
import PostCard from '@/components/post-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { AboutSection } from './about'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { getPosts } from '@/api/getPosts'

// Dados mockados do projeto
const projectData = {
  title: 'Projeto Meninas Digitais',
  subtitle: 'Incentivando mulheres na área de Tecnologia da Informação',
  description:
    'Alunas dos cursos técnicos e superiores do IFSULDEMINAS - Campus Machado participam do projeto "Meninas Digitais", sob coordenação da professora Daniela Guimarães e do aluno Marcelo da Luz. O projeto visa promover a área de Tecnologia da Informação e correlatas, estimulando o interesse de mulheres e incentivando sua participação e integração no setor.',
  status: 'Ativo',
  startDate: '2025-03-01',
  endDate: '2025-12-31',
  location: 'IFSULDEMINAS - Campus Machado',
  coordinator: 'Profª Daniela Guimarães',
  participants: 9,
  categories: ['Tecnologia', 'Inclusão', 'Educação'],
  objectives: [
    'Estimular o interesse de mulheres pela área de TI',
    'Promover integração entre estudantes e profissionais da área',
    'Realizar eventos e discussões sobre desafios enfrentados por mulheres na tecnologia',
    'Valorizar e divulgar experiências femininas no setor',
  ],
  contact: {
    email: 'daniela.guimaraes@ifsuldeminas.edu.br',
    phone: '(35) 3295-1100',
  },
}

export default async function ProjectPage() {
  const { posts } = await getPosts({
    pageSize: 3,
  })

  return (
    <div className="container mx-auto space-y-10 py-10">
      {/* Carrossel de Imagens */}
      <Carousel
        images={[
          'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2019/Novembro/05/meninasDigitais/0346c219-d629-48d1-a87b-c4ac2efcfd11.jpg',
        ]}
      />

      {/* Cabeçalho do Projeto */}
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {projectData.categories.map((category) => (
            <Badge key={category} variant="secondary" className="px-3 py-1">
              {category}
            </Badge>
          ))}
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 px-3 py-1">
            {projectData.status}
          </Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            {projectData.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {projectData.subtitle}
          </p>
        </div>
      </div>

      {/* Layout Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Conteúdo Principal */}
        <div className="lg:col-span-3 space-y-10">
          {/* Sobre o Projeto */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Sobre o Projeto
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {projectData.description}
            </p>
          </section>

          {/* Objetivos */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Objetivos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectData.objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Posts Relacionados */}
          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Notícias Relacionadas
              </h2>
              <Link
                href="/noticias?projeto=forum-ciencia"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center gap-1"
              >
                Ver todas <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            {/* Informações do Projeto */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Informações
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      Período
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {new Date(projectData.startDate).toLocaleDateString(
                        'pt-BR',
                      )}{' '}
                      -{' '}
                      {new Date(projectData.endDate).toLocaleDateString(
                        'pt-BR',
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      Local
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {projectData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      Participantes
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {projectData.participants} pessoas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordenação */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Coordenação
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {projectData.coordinator}
              </p>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Contato
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a
                    href={`mailto:${projectData.contact.email}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm break-all"
                  >
                    {projectData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Botão de Ação */}
            <a
              href="https://www.instagram.com/meninasdigitais.ifmch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                Mais Informações
              </Button>
            </a>
          </div>
        </div>
      </div>

      <AboutSection />

      <Testimonials />
      <CTA />
    </div>
  )
}
