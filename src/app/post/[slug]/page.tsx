'use client'

import { useState } from 'react'
import {
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Tag,
  ChevronRight,
  Download,
  ImageIcon,
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
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

// Mock data for the post
const postData = {
  id: '1',
  title:
    'Workshop de Introdução à Programação: Transformando Vidas Através do Código',
  slug: 'workshop-introducao-programacao-2024',
  excerpt:
    'Conheça como nosso último workshop impactou a vida de 30 participantes e abriu novas portas no mundo da tecnologia.',
  content: `
    <p>O Workshop de Introdução à Programação realizado no último sábado foi um marco importante para o projeto Meninas Digitais do IFSULDEMINAS Campus Machado. Com 30 participantes entusiasmadas, o evento superou todas as expectativas e demonstrou mais uma vez o poder transformador da educação tecnológica.</p>

    <h2>Uma Manhã de Descobertas</h2>
    <p>O workshop começou às 8h30 no Laboratório de Informática do campus, com um ambiente acolhedor e cheio de energia. As participantes, vindas de diferentes backgrounds e idades, compartilhavam um objetivo comum: dar os primeiros passos no mundo da programação.</p>

    <p>A professora Daniela Guimarães, coordenadora do projeto, abriu o evento destacando a importância da diversidade na tecnologia: "Cada uma de vocês traz uma perspectiva única que pode revolucionar a forma como pensamos sobre tecnologia e inovação."</p>

    <h2>Metodologia Prática e Inclusiva</h2>
    <p>O workshop foi estruturado em três módulos principais:</p>
    <ul>
      <li><strong>Fundamentos da Lógica de Programação:</strong> Conceitos básicos apresentados de forma visual e interativa</li>
      <li><strong>Primeiros Passos com Python:</strong> Exercícios práticos usando a linguagem Python</li>
      <li><strong>Projeto Final:</strong> Desenvolvimento de uma calculadora simples em equipes</li>
    </ul>

    <p>A abordagem hands-on permitiu que todas as participantes saíssem do evento com um projeto funcional, aumentando significativamente a confiança e o interesse pela área.</p>

    <h2>Depoimentos Inspiradores</h2>
    <p>Maria Silva, estudante do ensino médio, compartilhou sua experiência: "Nunca imaginei que programar pudesse ser tão criativo e divertido. Agora quero seguir carreira na área de tecnologia!"</p>

    <p>Ana Costa, que trabalha no comércio local, também se mostrou entusiasmada: "Este workshop me mostrou que nunca é tarde para aprender algo novo. Já me inscrevi no próximo curso avançado!"</p>

    <h2>Resultados e Próximos Passos</h2>
    <p>O sucesso do evento pode ser medido não apenas pela participação ativa, mas também pelos resultados concretos:</p>
    <ul>
      <li>100% das participantes completaram o projeto final</li>
      <li>85% demonstraram interesse em continuar os estudos na área</li>
      <li>15 novas inscrições para o programa de mentoria</li>
      <li>Formação de 3 grupos de estudo autônomos</li>
    </ul>

    <h2>Agradecimentos</h2>
    <p>Agradecemos a todas as participantes pela energia e dedicação, aos monitores voluntários que auxiliaram durante o evento, e ao IFSULDEMINAS por fornecer toda a infraestrutura necessária.</p>

    <p>O próximo workshop está agendado para o dia 22 de fevereiro e focará em Desenvolvimento Web. As inscrições já estão abertas!</p>
  `,
  author: {
    name: 'Profª Daniela Guimarães',
    role: 'Coordenadora do Projeto Meninas Digitais',
    avatar: '#',
    bio: 'Professora do IFSULDEMINAS e coordenadora do projeto Meninas Digitais. Doutora em Ciência da Computação com foco em inclusão digital.',
  },
  publishedAt: '2024-02-10T10:00:00Z',
  updatedAt: '2024-02-10T15:30:00Z',
  readTime: '8 min',
  views: 1247,
  likes: 89,
  comments: 23,
  category: 'Eventos',
  tags: ['Workshop', 'Programação', 'Python', 'Educação', 'Inclusão'],
  featuredImage:
    'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
  gallery: [
    'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
    'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
    'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
    'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
  ],
  attachments: [
    {
      name: 'Material do Workshop - Introdução à Programação.pdf',
      size: '2.4 MB',
      type: 'pdf',
    },
    {
      name: 'Exercícios Práticos Python.zip',
      size: '1.8 MB',
      type: 'zip',
    },
  ],
  relatedPosts: [
    {
      id: '2',
      title: 'Como Escolher sua Primeira Linguagem de Programação',
      excerpt: 'Guia completo para iniciantes na programação',
      image:
        'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
      publishedAt: '2024-02-05T10:00:00Z',
    },
    {
      id: '3',
      title: 'Mulheres que Inspiram: Histórias de Sucesso na TI',
      excerpt: 'Conheça trajetórias inspiradoras de mulheres na tecnologia',
      image:
        'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
      publishedAt: '2024-02-01T10:00:00Z',
    },
    {
      id: '4',
      title: 'Preparando-se para o Mercado de Trabalho em TI',
      excerpt: 'Dicas essenciais para sua primeira oportunidade na área',
      image:
        'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png',
      publishedAt: '2024-01-28T10:00:00Z',
    },
  ],
}

const comments = [
  {
    id: '1',
    author: 'Ana Silva',
    avatar: '#',
    content:
      'Participei do workshop e foi incrível! A metodologia é muito didática e acolhedora. Recomendo para todas que têm interesse na área.',
    publishedAt: '2024-02-10T14:30:00Z',
    likes: 12,
  },
  {
    id: '2',
    author: 'Maria Santos',
    avatar: '#',
    content:
      'Que iniciativa maravilhosa! Infelizmente não pude participar desta vez, mas já me inscrevi para o próximo. Parabéns pelo trabalho!',
    publishedAt: '2024-02-10T16:15:00Z',
    likes: 8,
  },
  {
    id: '3',
    author: 'Julia Costa',
    avatar: '#',
    content:
      'O projeto final foi desafiador mas muito gratificante. Saí do workshop com muito mais confiança para continuar estudando programação.',
    publishedAt: '2024-02-11T09:20:00Z',
    likes: 15,
  },
]

export default function PostPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showCommentForm, setShowCommentForm] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pb-10">
        <div className="container mx-auto">
          {/* Category and Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              {postData.category}
            </Badge>
            {postData.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-gray-600">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {postData.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {postData.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(postData.publishedAt)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {postData.readTime} de leitura
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              {postData.views.toLocaleString()} visualizações
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              {postData.comments} comentários
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={
                    postData.author.avatar ||
                    'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png'
                  }
                  alt={postData.author.name}
                />
                <AvatarFallback>
                  {postData.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {postData.author.name}
                </h3>
                <p className="text-purple-600 font-medium">
                  {postData.author.role}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {postData.author.bio}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? 'text-red-600 border-red-200' : ''}
              >
                <Heart
                  className={`mr-2 h-4 w-4 ${isLiked ? 'fill-current' : ''}`}
                />
                {postData.likes + (isLiked ? 1 : 0)}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? 'text-blue-600 border-blue-200' : ''}
              >
                <Bookmark
                  className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="my-10">
        <div className="container mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={
                postData.featuredImage ||
                'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png'
              }
              alt={postData.title}
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
                dangerouslySetInnerHTML={{ __html: postData.content }}
              />

              {/* Gallery */}
              {postData.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Galeria de Fotos
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {postData.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                      >
                        <img
                          src={
                            image ||
                            'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png'
                          }
                          alt={`Galeria ${index + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Attachments */}
              {postData.attachments.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Materiais para Download
                  </h3>
                  <div className="space-y-4">
                    {postData.attachments.map((attachment, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Download className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {attachment.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {attachment.size}
                                </p>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              className="bg-purple-600 hover:bg-purple-700"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Baixar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Comments Section */}
              <div className="mt-16">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Comentários ({comments.length})
                  </h3>
                  <Button
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Comentar
                  </Button>
                </div>

                {/* Comment Form */}
                {showCommentForm && (
                  <Card className="mb-8 border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Deixe seu comentário
                      </CardTitle>
                      <CardDescription>
                        Compartilhe sua opinião ou experiência sobre este post
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="comment-name">Nome</Label>
                          <Input id="comment-name" placeholder="Seu nome" />
                        </div>
                        <div>
                          <Label htmlFor="comment-email">Email</Label>
                          <Input
                            id="comment-email"
                            type="email"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="comment-content">Comentário</Label>
                        <Textarea
                          id="comment-content"
                          placeholder="Escreva seu comentário..."
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="flex space-x-3">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Publicar Comentário
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowCommentForm(false)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <Card key={comment.id} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={
                                comment.avatar ||
                                'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png'
                              }
                              alt={comment.author}
                            />
                            <AvatarFallback>
                              {comment.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {comment.author}
                              </h4>
                              <span className="text-sm text-gray-500">
                                {formatDate(comment.publishedAt)} às{' '}
                                {formatTime(comment.publishedAt)}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-3">
                              {comment.content}
                            </p>
                            <div className="flex items-center space-x-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-500 hover:text-purple-600"
                              >
                                <ThumbsUp className="mr-1 h-4 w-4" />
                                {comment.likes}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-500 hover:text-purple-600"
                              >
                                Responder
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Table of Contents */}
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Índice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-purple-600 hover:text-purple-800"
                      >
                        Uma Manhã de Descobertas
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-purple-600 hover:text-purple-800"
                      >
                        Metodologia Prática e Inclusiva
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-purple-600 hover:text-purple-800"
                      >
                        Depoimentos Inspiradores
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-purple-600 hover:text-purple-800"
                      >
                        Resultados e Próximos Passos
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-purple-600 hover:text-purple-800"
                      >
                        Agradecimentos
                      </a>
                    </nav>
                  </CardContent>
                </Card>

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
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Posts Relacionados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {postData.relatedPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                          <div className="flex space-x-3">
                            <img
                              src={
                                post.image ||
                                'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png'
                              }
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {formatDate(post.publishedAt)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

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
            {postData.relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      post.image ||
                      'https://portal.mch.ifsuldeminas.edu.br/images/imagens_noticias/2025/Junho/Destaque/josif_2025_banner_300x200.png'
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.publishedAt)}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
