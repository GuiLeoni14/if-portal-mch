'use client'

import {
  Calendar,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  User,
  Sparkles,
  Target,
  Heart,
  Zap,
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
import Link from 'next/link'

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Ecossistema de Projetos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos do Curso de{' '}
            <span className="text-green-600">Sistemas de Informação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            O IFSULDEMINAS - Campus Machado desenvolve diversos projetos
            inovadores que conectam tecnologia, educação e impacto social,
            preparando nossos estudantes para os desafios do futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Meninas Digitais Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-purple-700 hover:bg-white">
                  Ativo
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                Meninas Digitais
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Projeto que incentiva a participação de mulheres na área de
                Tecnologia da Informação, promovendo inclusão e diversidade no
                setor.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-purple-500" />9
                  participantes ativas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-purple-500" />
                  Fev 2025 - Dez 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-3 text-purple-500" />
                  Profª Daniela Guimarães
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  Inclusão
                </span>
                <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                  Capacitação
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Networking
                </span>
              </div>

              <Link href="/projeto/meninas-digitais">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  Conhecer Projeto
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Autobots Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-blue-700 hover:bg-white">
                  Ativo
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                Autobots
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Projeto de robótica e automação que desenvolve soluções
                inteligentes utilizando tecnologias emergentes como IoT, IA e
                sistemas embarcados.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-blue-500" />
                  12 participantes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-blue-500" />
                  Projeto contínuo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-3 text-blue-500" />
                  Prof. João Silva
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Robótica
                </span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                  IoT
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Automação
                </span>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                Conhecer Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Innovation Lab Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-green-700 hover:bg-white">
                  Ativo
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                Lab de Inovação
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Laboratório de desenvolvimento de soluções inovadoras para
                problemas reais, focando em startups, empreendedorismo e
                tecnologias disruptivas.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-green-500" />
                  15 participantes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-green-500" />
                  Projeto contínuo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-3 text-green-500" />
                  Prof. Carlos Santos
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Inovação
                </span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                  Startups
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Pesquisa
                </span>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                Conhecer Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Smart Campus Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-orange-700 hover:bg-white">
                  Em Desenvolvimento
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                  <Target className="h-6 w-6" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                Smart Campus
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Projeto de transformação digital do campus, implementando
                soluções IoT, sistemas inteligentes e sustentabilidade
                tecnológica.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-orange-500" />8
                  participantes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-orange-500" />
                  Mar 2025 - Nov 2025
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-3 text-orange-500" />
                  Profª Ana Costa
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                  IoT
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                  Sustentabilidade
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                  Smart City
                </span>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                Conhecer Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Data Science Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-indigo-700 hover:bg-white">
                  Ativo
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                Data Science Lab
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Laboratório de ciência de dados focado em análise preditiva,
                machine learning e inteligência artificial aplicada a problemas
                regionais.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-indigo-500" />
                  10 participantes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-indigo-500" />
                  Projeto contínuo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-3 text-indigo-500" />
                  Prof. Roberto Lima
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                  Data Science
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  Machine Learning
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  IA
                </span>
              </div>

              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                Conhecer Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Mobile Development Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-blue-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-teal-700 hover:bg-white">
                  Ativo
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl group-hover:text-teal-600 transition-colors">
                Mobile Dev Lab
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Laboratório de desenvolvimento mobile focado em criar
                aplicativos inovadores para Android e iOS, utilizando
                tecnologias modernas.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-3 text-teal-500" />
                  14 participantes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-3 text-teal-500" />
                  Projeto contínuo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-3 text-teal-500" />
                  Prof. Marina Oliveira
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                  Mobile
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  React Native
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Flutter
                </span>
              </div>

              <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
                Conhecer Projeto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Impacto dos Projetos
            </h3>
            <p className="text-gray-600">
              Números que demonstram o alcance e a qualidade dos nossos projetos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">68</div>
              <div className="text-gray-600 text-sm">Estudantes Envolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600 text-sm">Projetos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600 text-sm">
                Professores Orientadores
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600 text-sm">
                Soluções Desenvolvidas
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interessado em Participar?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Faça parte da comunidade de inovação do IFSULDEMINAS e contribua
            para projetos que estão transformando a educação e a tecnologia em
            nossa região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg">
              <Users className="mr-2 h-5 w-5" />
              Participar de um Projeto
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-green-300 hover:bg-green-50 bg-transparent"
            >
              Propor Novo Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
