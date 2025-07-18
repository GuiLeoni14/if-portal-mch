import { Carousel } from '@/components/carousel'
import PostCard from '@/components/post-card'
import Link from 'next/link'
import { AboutSection } from './sobre/about'
import { CTA } from '@/components/cta'
import { getPosts } from '@/api/getPosts'
import { Testimonials } from '@/components/testimonials'

const MAX_DISPLAY = 3

export default async function Home() {
  const { posts } = await getPosts()
  return (
    <>
      <div className="container mx-auto space-y-16 pt-10">
        {/* Destaques e Notícias */}
        <section className="space-y-10">
          <Carousel
            images={[
              'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2019/Novembro/05/meninasDigitais/0346c219-d629-48d1-a87b-c4ac2efcfd11.jpg',
            ]}
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Últimas Notícias</h2>
            <ul className="flex flex-col gap-5">
              {!posts.length && 'Nenhuma postagem encontrada.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => (
                <PostCard key={post.id} {...post} />
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
        </section>
        <AboutSection />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Últimas Notícias</h2>

          {!posts.length && <p>Nenhuma postagem encontrada.</p>}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, MAX_DISPLAY).map((post) => (
              <PostCard direction="column" key={post.id} {...post} />
            ))}
          </div>

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

        <CTA />
        <Testimonials />
      </div>
    </>
  )
}
