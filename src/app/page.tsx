import { Banner } from '@/components/banner'
import { Carousel } from '@/components/carousel'
import { ClassSchedule } from '@/components/class-schedule'
import PostCard from '@/components/post-card'
import { ProjectsGrid } from '@/components/projects-grid'
import Link from 'next/link'

const MAX_DISPLAY = 3

const posts = [
  {
    slug: 'introducing-tailwind',
    thumbnail:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    date: '2025-06-18',
    title: 'Introducing Tailwind CSS',
    summary:
      'An introduction to the utility-first CSS framework that is taking the front-end world by storm.',
    tags: ['tailwind', 'css', 'frontend'],
  },
  {
    slug: 'nextjs-routing',
    thumbnail:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    date: '2025-06-17',
    title: 'Mastering Next.js Routing',
    summary:
      'Learn how to handle dynamic and nested routes in your Next.js projects with ease.',
    tags: ['nextjs', 'routing', 'react'],
  },
  {
    slug: 'dark-mode-toggle',
    thumbnail:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    date: '2025-06-15',
    title: 'Implementing a Dark Mode Toggle',
    summary:
      'A step-by-step guide to implementing dark mode in your website using Tailwind and React.',
    tags: ['dark mode', 'react', 'tailwind'],
  },
  {
    slug: 'seo-best-practices',
    thumbnail:
      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/Forum_ciencia.png',
    date: '2025-06-14',
    title: 'SEO Best Practices for Modern Web Apps',
    summary:
      'Ensure your web application is discoverable by search engines with these SEO tips.',
    tags: ['seo', 'web', 'marketing'],
  },
]

export default function Home() {
  return (
    <>
      <div className="container mx-auto space-y-10">
        <Carousel
          images={[
            'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
            'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png',
          ]}
        />
        <ul className="flex flex-col gap-5">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <PostCard
                key={slug}
                title={title}
                slug={slug}
                date={date}
                tags={tags}
                summary={summary}
                thumbnail={post.thumbnail}
              />
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base leading-6 font-medium">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        <Banner image="https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2020/Abril/destaques/Banner_750x195_enceja.png" />
        <ProjectsGrid />
        <ClassSchedule />
      </div>
    </>
  )
}
