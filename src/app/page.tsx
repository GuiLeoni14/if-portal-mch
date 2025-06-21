import PostCard from "@/components/post-card";
import Link from "next/link";

const MAX_DISPLAY = 3;

const posts = [
  {
    slug: "introducing-tailwind",
    date: "2025-06-18",
    title: "Introducing Tailwind CSS",
    summary:
      "An introduction to the utility-first CSS framework that is taking the front-end world by storm.",
    tags: ["tailwind", "css", "frontend"],
  },
  {
    slug: "nextjs-routing",
    date: "2025-06-17",
    title: "Mastering Next.js Routing",
    summary:
      "Learn how to handle dynamic and nested routes in your Next.js projects with ease.",
    tags: ["nextjs", "routing", "react"],
  },
  {
    slug: "dark-mode-toggle",
    date: "2025-06-15",
    title: "Implementing a Dark Mode Toggle",
    summary:
      "A step-by-step guide to implementing dark mode in your website using Tailwind and React.",
    tags: ["dark mode", "react", "tailwind"],
  },
  {
    slug: "seo-best-practices",
    date: "2025-06-14",
    title: "SEO Best Practices for Modern Web Apps",
    summary:
      "Ensure your web application is discoverable by search engines with these SEO tips.",
    tags: ["seo", "web", "marketing"],
  },
];

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <ul className="">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post;
            return (
              <PostCard
                key={slug}
                title={title}
                slug={slug}
                date={date}
                tags={tags}
                summary={summary}
              />
            );
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
      </div>
    </>
  );
}
