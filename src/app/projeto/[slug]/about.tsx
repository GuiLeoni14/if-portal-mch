import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen, Target, Users, Zap } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Nossa Missão
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Construindo o <span className="text-blue-600">futuro</span> da
              tecnologia
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Desde 2019, o Projeto Meninas Digitais é uma iniciativa oficial da
              Sociedade Brasileira de Computação (SBC) que promove a
              participação feminina na área de Tecnologia da Informação e
              Computação.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-3 w-3 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Capacitação Prática
                  </h4>
                  <p className="text-gray-600">
                    Workshops e cursos hands-on para desenvolver habilidades
                    técnicas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <Users className="h-3 w-3 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Networking Poderoso
                  </h4>
                  <p className="text-gray-600">
                    Conexões com profissionais e oportunidades reais no mercado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <Award className="h-3 w-3 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Reconhecimento
                  </h4>
                  <p className="text-gray-600">
                    Visibilidade e valorização para mulheres na tecnologia
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
              Fazer parte da nossa História
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-2">50+</h4>
                  <p className="text-gray-600">Workshops Realizados</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-2">
                    500+
                  </h4>
                  <p className="text-gray-600">Mulheres Capacitadas</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-2">95%</h4>
                  <p className="text-gray-600">Taxa de Satisfação</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-2">80%</h4>
                  <p className="text-gray-600">Inserção no Mercado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
