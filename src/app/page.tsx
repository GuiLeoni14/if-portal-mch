import { Banner } from '@/components/banner'
import { Carousel } from '@/components/carousel'
import { ClassSchedule } from '@/components/class-schedule'
import { DashboardSummary } from '@/components/dashboard-summary'
import { DisciplineDetails } from '@/components/discipline-details'
import { Notifications } from '@/components/notifications'
import PostCard from '@/components/post-card'
import { Projects } from '@/components/projects'
import { ProjectsGrid } from '@/components/projects-grid'
import { StudentSupport } from '@/components/student-support'
import { StudyMaterials } from '@/components/study-materials'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

const MAX_DISPLAY = 3

const posts = [
  {
    slug: 'josif-2025-campus-passos',
    thumbnail:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
    date: '2025-06-21',
    title: 'Campus Passos sediará a 17ª JOSIF e 14º Simpósio de Pós-Graduação',
    summary:
      'Com o tema “Inovação, Tecnologia e Educação em diálogo com a sociedade”, evento terá palestras, minicursos e apresentações científicas. Submissões até 31 de julho.',
    tags: ['josif', 'eventos', 'pesquisa'],
  },
  {
    slug: 'semana-ti-machado',
    thumbnail:
      'https://portal.ifsuldeminas.edu.br/images/banners/banners_diversos/14_olip.png',
    date: '2025-05-10',
    title: 'Semana da Tecnologia da Informação movimenta o Campus Machado',
    summary:
      'Atividades incluem painéis com egressos, maratona de programação e oficina de segurança da informação.',
    tags: ['eventos', 'TI', 'egressos'],
  },
  {
    slug: 'iniciacao-cientifica-ti',
    thumbnail:
      'https://portal.ifsuldeminas.edu.br/images/banners/banners_diversos/14_olip.png',
    date: '2025-04-27',
    title: 'Projetos de Iniciação Científica ganham destaque no curso de SI',
    summary:
      'Estudantes de Sistemas de Informação apresentam soluções tecnológicas para demandas reais da comunidade.',
    tags: ['pesquisa', 'tecnologia', 'sistemas'],
  },
  {
    slug: 'egressos-em-destaque',
    thumbnail:
      'https://portal.ifsuldeminas.edu.br/images/banners/banners_diversos/14_olip.png',
    date: '2025-03-15',
    title: 'Egressos do curso de Sistemas de Informação inspiram novos alunos',
    summary:
      'Painel com ex-alunos do curso mostra trajetória profissional e compartilha dicas para inserção no mercado.',
    tags: ['egressos', 'inspiracao', 'carreira'],
  },
]

export default function Home() {
  return (
    <>
      <div className="container mx-auto space-y-16">
        {/* Destaques e Notícias */}
        <section className="space-y-10">
          <Carousel
            images={[
              'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
              'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
            ]}
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Últimas Notícias</h2>
            <ul className="flex flex-col gap-5">
              {!posts.length && 'Nenhuma postagem encontrada.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </ul>

            {posts.length > MAX_DISPLAY && (
              <div className="flex justify-end">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  Ver todas &rarr;
                </Link>
              </div>
            )}
          </div>

          <Projects />

          <div className="mt-10">
            <ClassSchedule />
          </div>
        </section>

        {/* Chamada para o Fórum */}
        <section>
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative text-center space-y-5 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Inscrições Abertas
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Participe do Fórum 2025
              </h3>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Inscreva-se agora e faça parte do maior evento de ciência e
                tecnologia do sul de Minas Gerais.
                <span className="block mt-2 font-semibold text-yellow-300">
                  ⚡ Vagas limitadas!
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Fazer Inscrição
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white/80 text-white backdrop-blur-sm font-semibold transition-all duration-200"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Ver Programação
                </Button>
              </div>

              <div className="flex items-center justify-center gap-5 pt-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  15-17 Agosto
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Campus Machado
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  150 vagas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Painel Acadêmico */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Painel Acadêmico</h2>
          <Notifications />
          <DashboardSummary />
          <DisciplineDetails />
        </section>

        {/* Materiais e Suporte */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Materiais e Suporte</h2>
          <StudyMaterials />
          <StudentSupport />
        </section>
      </div>
    </>
  )
}
