import Link from "next/link";

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
}
export default function PostCard(
  { title, slug, date, tags, summary }: PostCardProps,
) {
  return (
    <li key={slug} className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{date}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  <Link
                    href={`/blog/${slug}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                    >
                      {tag.split(" ").join("-")}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {summary}
              </div>
            </div>
            <div className="text-base leading-6 font-medium">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
