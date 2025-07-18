'use client'
import { Search, Menu, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  useState,
  useEffect,
  useCallback,
  type KeyboardEventHandler,
} from 'react'
import { usePosts } from '@/hooks/fetch/usePosts'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import * as prismic from '@prismicio/client'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  // Debounce para evitar muitas requisições
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const { data, isLoading } = usePosts({
    params: {
      filters: [
        prismic.filter.at('document.type', 'post'),
        debouncedQuery
          ? prismic.filter.fulltext('my.post.title', debouncedQuery)
          : '',
      ].filter(Boolean),

      pageSize: 20,
    },
    options: {
      enabled: debouncedQuery.length > 0, // Só faz a busca se houver query
    },
  })

  const handleSearch = useCallback(() => {
    if (!query.trim()) return

    setIsSearching(true)

    if (data && data?.posts && data.posts.length > 0) {
      router.push(`/post/${data.posts[0].uid || data.posts[0].id}`)
      setSearchOpen(false)
      setQuery('')
    } else {
      // Se não encontrou resultados, redireciona para página de busca
      router.push(`/blog?search=${encodeURIComponent(query)}`)
      setSearchOpen(false)
      setQuery('')
    }

    setIsSearching(false)
  }, [query, data, router])

  const handleKeyDown = (e: KeyboardEventHandler<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }

  const closeMenu = () => setOpenMenu(false)

  const searchResults = data?.posts || []
  const showResults = debouncedQuery.length > 0 && !isLoading
  const hasResults = searchResults.length > 0

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="container mx-auto py-4 px-4 md:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/logo.png"
                className="h-10 w-auto"
                alt="Meninas Digitais Logo"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Meninas Digitais
              </h1>
              <p className="text-xs text-gray-500">MCH • Desde 2019</p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/sobre"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Sobre
            </Link>

            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 shadow-lg">
                  <Search className="mr-2 h-4 w-4" />
                  Pesquisar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogTitle>Pesquisar Posts</DialogTitle>
                <div className="space-y-4 max-w-full overflow-hidden">
                  <div className="flex gap-2 items-center">
                    <Input
                      placeholder="Buscar título do post..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                    <Button
                      onClick={handleSearch}
                      disabled={!query.trim() || isSearching}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isSearching ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* Resultados da busca */}
                  {isLoading && debouncedQuery && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Buscando...
                    </div>
                  )}

                  {showResults && hasResults && (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      <p className="text-sm text-gray-600">
                        {searchResults.length} resultado(s) encontrado(s):
                      </p>
                      {searchResults.slice(0, 5).map((post) => (
                        <button
                          key={post.id}
                          onClick={() => {
                            router.push(`/post/${post.uid || post.id}`)
                            setSearchOpen(false)
                            setQuery('')
                          }}
                          className="w-full text-left p-2 hover:bg-gray-50 rounded-md text-sm border border-gray-200 transition-colors"
                        >
                          <div className="font-medium text-gray-900">
                            {post?.title || 'Título não disponível'}
                          </div>
                          {post?.description && (
                            <div className="text-gray-500 text-xs mt-1 truncate max-w-full">
                              {post.description}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {showResults && !hasResults && (
                    <div className="text-sm text-gray-500 py-4 text-center">
                      <p>Nenhum resultado encontrado para "{debouncedQuery}"</p>
                      <p className="text-xs mt-1">
                        Tente termos diferentes ou palavras-chave
                      </p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Botão mobile */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Menu"
          >
            {openMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {openMenu && (
          <div className="mt-4 md:hidden flex flex-col space-y-4 pb-4 border-t border-gray-200 pt-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 font-medium py-2"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/sobre"
              className="text-gray-600 hover:text-gray-900 font-medium py-2"
              onClick={closeMenu}
            >
              Sobre
            </Link>

            <div className="space-y-3 pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Buscar título do post..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button
                  onClick={handleSearch}
                  disabled={!query.trim() || isSearching}
                  className="bg-green-600 hover:bg-green-700"
                  size="sm"
                >
                  {isSearching ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Resultados mobile */}
              {isLoading && debouncedQuery && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Buscando...
                </div>
              )}

              {showResults && hasResults && (
                <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-100 rounded-lg p-2">
                  <p className="text-sm text-gray-600 px-1">
                    {searchResults.length} resultado(s):
                  </p>
                  {searchResults.slice(0, 3).map((post) => (
                    <button
                      key={post.id}
                      onClick={() => {
                        router.push(`/blog/${post.uid || post.id}`)
                        setOpenMenu(false)
                        setQuery('')
                      }}
                      className="w-full text-left p-2 hover:bg-gray-50 rounded-md text-sm border border-gray-200 transition-colors block"
                    >
                      <div className="font-medium text-gray-900 text-sm line-clamp-1">
                        {post?.title || 'Título não disponível'}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {showResults && !hasResults && (
                <p className="text-sm text-gray-500 py-2">
                  Nenhum resultado encontrado para "{debouncedQuery}"
                </p>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
