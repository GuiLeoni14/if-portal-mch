import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  title: string
  slug: string
  date: string
  tags: string[]
  summary: string
  thumbnail: string
}

export default function PostCard({
  title,
  slug,
  date,
  tags,
  summary,
  thumbnail,
}: PostCardProps) {
  return (
    <article className="grid gap-5 md:grid-cols-4">
      {/* Thumbnail */}
      <Link
        href={`/blog/${slug}`}
        className="relative block h-48 w-full md:h-full md:col-span-1 overflow-hidden rounded-lg"
      >
        <img
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
          className="object-cover transition duration-300 ease-in-out hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </Link>

      {/* Content */}
      <div className="md:col-span-3 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight">
              <Link
                href={`/blog/${slug}`}
                className="text-gray-900 dark:text-gray-100"
              >
                {title}
              </Link>
            </h2>
            <time
              dateTime={date}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {date}
            </time>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium uppercase"
              >
                {tag.split(' ').join('-')}
              </Link>
            ))}
          </div>

          <p className="prose max-w-none text-gray-600 dark:text-gray-400">
            {summary}
          </p>
        </div>

        <div className="mt-4 text-base font-medium">
          <Link
            href={`/blog/${slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Read more: "${title}"`}
          >
            Leia mais &rarr;
          </Link>
        </div>
      </div>
    </article>
  )
}
