'use client'
import { useEffect, useRef, useState } from 'react'
import { usePosts } from '@/hooks/fetch/usePosts'
import { cn } from '@/lib/utils'
import PostCard from '@/components/post-card'

export default function Blog() {
  const [pageSize, setPageSize] = useState(4)
  const { data, isLoading, isFetching } = usePosts({
    params: {
      page: 1,
      pageSize,
    },
    identifier: ['blog-page', String(pageSize)],
    options: {
      placeholderData: (prev: any) => prev,
    },
  })
  const loaderRef = useRef<null | HTMLDivElement>(null)
  const isDisabledLoader = useRef(false)

  const loadMorePosts = () => {
    isDisabledLoader.current = false
    if (data && data.total_results_size >= pageSize) {
      setPageSize((prevPage) => prevPage + 3)
    }
  }

  const handleLoadMore = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]

    if (data && entry.isIntersecting && !isDisabledLoader.current) {
      isDisabledLoader.current = true
      loadMorePosts()
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleLoadMore, {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    })

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [data])

  const [...rest] = data?.posts || []
  const isLoadingMore = isFetching || isLoading

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Bem-vindo ao nosso Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Explorando ideias, compartilhando conhecimento e inspirando mentes
            curiosas.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        {/* Lista dos demais posts */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <PostCard direction="column" key={post.id} {...post} />
          ))}
          {isLoadingMore && (
            <>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-300 h-64 w-full rounded-md mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              ))}
            </>
          )}
        </section>

        {/* Loader para o IntersectionObserver */}
        {data?.total_pages > data?.page && (
          <div
            ref={loaderRef}
            className={cn('h-2 w-full', {
              'hidden h-0 w-0': isLoadingMore,
            })}
          ></div>
        )}
      </div>
    </main>
  )
}
