import {
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Tag,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { getPosts, type Post } from '@/api/getPosts'
import { notFound } from 'next/navigation'
import * as prismic from '@prismicio/client'

const calculateReadTime = (content: string) => {
  const wordsPerMinute = 200
  const words = content.replace(/<[^>]*>/g, '').split(' ').length
  const readTime = Math.ceil(words / wordsPerMinute)
  return `${readTime} min`
}

export const getPostBySlug = async (slug: string) => {
  const { posts } = await getPosts({
    filters: [prismic.filter.at('my.post.uid', slug)],
  })

  if (!posts) {
    notFound()
  }

  return posts[0]
}

const getRelatedPosts = async (
  currentPostId: string,
  tags: string[],
): Promise<Post[]> => {
  try {
    const response = await getPosts({
      page: 1,
      after: currentPostId,
    })

    // Filtra posts relacionados (exclui o post atual)
    return response.posts
      .filter((post) => post.id !== currentPostId)
      .slice(0, 3)
  } catch (error) {
    console.error('Erro ao buscar posts relacionados:', error)
    return []
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  const relatedPosts = await getRelatedPosts(post.id, post.tags)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Mock data for the post
  const mockMetadata = {
    author: {
      name: 'Profª Daniela Guimarães',
      role: 'Coordenadora do Projeto Meninas Digitais',
      avatar: '',
      bio: 'Professora do IFSULDEMINAS e coordenadora do projeto Meninas Digitais.',
    },
    readTime: calculateReadTime(post.content),
    views: Math.floor(Math.random() * 2000) + 500,
    likes: Math.floor(Math.random() * 100) + 20,
    comments: Math.floor(Math.random() * 50) + 5,
    category: 'Eventos',
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pb-10">
        <div className="container mx-auto">
          {/* Category and Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-gray-600">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {mockMetadata.readTime} de leitura
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              {mockMetadata.views.toLocaleString()} visualizações
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              {mockMetadata.comments} comentários
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={mockMetadata.author.avatar}
                  alt={mockMetadata.author.name}
                />
                <AvatarFallback>
                  {mockMetadata.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {mockMetadata.author.name}
                </h3>
                <p className="text-purple-600 font-medium">
                  {mockMetadata.author.role}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {mockMetadata.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="my-10">
        <div className="container mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Share */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Compartilhar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Posts Relacionados
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <div
                            key={relatedPost.id}
                            className="group cursor-pointer"
                          >
                            <div className="flex space-x-3">
                              <img
                                src={relatedPost.thumbnail}
                                alt={relatedPost.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-sm text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  {formatDate(relatedPost.date)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Newsletter */}
                <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="text-lg">Newsletter</CardTitle>
                    <CardDescription>
                      Receba as últimas novidades do projeto em seu email
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Seu email" />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Inscrever-se
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Você também pode gostar
              </h2>
              <p className="text-gray-600">
                Outros posts que podem interessar você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      {relatedPost.title}
                    </CardTitle>
                    <CardDescription>{relatedPost.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatDate(relatedPost.date)}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
