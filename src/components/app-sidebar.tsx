'use client'

import type * as React from 'react'
import {
  Calendar,
  Award,
  BookOpen,
  ArrowRight,
  User,
  ChevronRight,
  Play,
  Sparkles,
  Target,
  Heart,
  Zap,
  Home,
  Info,
  Phone,
  ExternalLink,
  Mail,
  GraduationCap,
  Building,
  Globe,
  MessageSquare,
  CalendarIcon,
  TrendingUp,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

// Navigation data
const navigationData = {
  main: [
    {
      title: 'Início',
      url: '#',
      icon: Home,
    },
    {
      title: 'Sobre o Projeto',
      url: '#sobre',
      icon: Info,
    },
    {
      title: 'Eventos',
      url: '#eventos',
      icon: Calendar,
      badge: '3 próximos',
    },
    {
      title: 'Projetos SI',
      url: '#projetos',
      icon: BookOpen,
      badge: '6 ativos',
    },
    {
      title: 'Contato',
      url: '#contato',
      icon: Phone,
    },
  ],
  projects: [
    {
      title: 'Meninas Digitais',
      url: '#meninas-digitais',
      icon: Heart,
      status: 'Ativo',
      participants: 9,
    },
    {
      title: 'Autobots',
      url: '#autobots',
      icon: Zap,
      status: 'Ativo',
      participants: 12,
    },
    {
      title: 'Lab de Inovação',
      url: '#inovacao',
      icon: Target,
      status: 'Ativo',
      participants: 15,
    },
    {
      title: 'Smart Campus',
      url: '#smart-campus',
      icon: Building,
      status: 'Desenvolvimento',
      participants: 8,
    },
    {
      title: 'Data Science Lab',
      url: '#data-science',
      icon: TrendingUp,
      status: 'Ativo',
      participants: 10,
    },
    {
      title: 'Mobile Dev Lab',
      url: '#mobile-dev',
      icon: Sparkles,
      status: 'Ativo',
      participants: 14,
    },
  ],
  resources: [
    {
      title: 'Portal IFSULDEMINAS',
      url: 'https://portal.ifsuldeminas.edu.br',
      icon: Globe,
      external: true,
    },
    {
      title: 'Campus Machado',
      url: 'https://portal.ifsuldeminas.edu.br/index.php/campus/machado',
      icon: Building,
      external: true,
    },
    {
      title: 'SBC - Meninas Digitais',
      url: 'http://meninas.sbc.org.br',
      icon: Award,
      external: true,
    },
    {
      title: 'Sistemas de Informação',
      url: '#curso-si',
      icon: GraduationCap,
    },
  ],
}

const upcomingEvents = [
  {
    title: 'Workshop Python',
    date: '15/02',
    time: '14h',
    spots: 12,
  },
  {
    title: 'Palestra Carreira',
    date: '22/02',
    time: '19h',
    spots: 33,
  },
  {
    title: 'Hackathon 2025',
    date: '08/03',
    time: '8h',
    spots: 18,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <div className="flex items-center space-x-3 p-2">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Meninas Digitais
            </h1>
            <p className="text-xs text-gray-500">IFSULDEMINAS • Machado</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegação Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Projects Section */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                Projetos do Curso
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationData.projects.map((project) => (
                    <SidebarMenuItem key={project.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={project.url}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <project.icon className="h-4 w-4" />
                            <span className="text-sm">{project.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Badge
                              variant={
                                project.status === 'Ativo'
                                  ? 'default'
                                  : 'secondary'
                              }
                              className="text-xs"
                            >
                              {project.participants}
                            </Badge>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <SidebarSeparator />

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>Ações Rápidas</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3 p-2">
              <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-sm">
                <Play className="mr-2 h-4 w-4" />
                Participar do Projeto
              </Button>
              <Button
                variant="outline"
                className="w-full text-sm bg-transparent"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Ver Próximos Eventos
              </Button>
              <Button variant="ghost" className="w-full text-sm">
                <Mail className="mr-2 h-4 w-4" />
                Entrar em Contato
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Upcoming Events */}
        <SidebarGroup>
          <SidebarGroupLabel>Próximos Eventos</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2 p-2">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {event.title}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {event.spots} vagas
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    {event.date} às {event.time}
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-xs mt-2">
                Ver Todos os Eventos
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Resources */}
        <SidebarGroup>
          <SidebarGroupLabel>Links Úteis</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.resources.map((resource) => (
                <SidebarMenuItem key={resource.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={resource.url}
                      target={resource.external ? '_blank' : undefined}
                      rel={
                        resource.external ? 'noopener noreferrer' : undefined
                      }
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <resource.icon className="h-4 w-4" />
                        <span className="text-sm">{resource.title}</span>
                      </div>
                      {resource.external && (
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Statistics Card */}
        <SidebarGroup>
          <SidebarGroupLabel>Estatísticas</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="p-2">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">68</div>
                      <div className="text-xs text-gray-600">Estudantes</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">6</div>
                      <div className="text-xs text-gray-600">Projetos</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        25+
                      </div>
                      <div className="text-xs text-gray-600">Soluções</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-600">
                        4.8
                      </div>
                      <div className="text-xs text-gray-600">Avaliação</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="p-2">
              <Card className="border-0 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    <User className="h-8 w-8 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Profª Daniela</h4>
                    <p className="text-xs opacity-90">Coordenadora</p>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>daniela.guimaraes@</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <Phone className="h-3 w-3" />
                      <span>(35) 3295-1100</span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full mt-3 bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    <MessageSquare className="mr-2 h-3 w-3" />
                    Conversar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
