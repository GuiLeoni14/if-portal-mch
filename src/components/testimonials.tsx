import { Heart, Star } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Desenvolvedora Frontend',
    content:
      'O projeto mudou minha vida! Hoje trabalho em uma das maiores empresas de tecnologia do país.',
    avatar: '/placeholder.svg?height=60&width=60',
  },
  {
    name: 'Maria Santos',
    role: 'Data Scientist',
    content:
      'Encontrei minha paixão pela ciência de dados através dos workshops do Meninas Digitais.',
    avatar: '/placeholder.svg?height=60&width=60',
  },
  {
    name: 'Julia Costa',
    role: 'UX Designer',
    content:
      'A comunidade é incrível! Sempre apoiando umas às outras no crescimento profissional.',
    avatar: '/placeholder.svg?height=60&width=60',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-700">
              Histórias de Sucesso
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vidas <span className="text-pink-600">transformadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das mulheres que mudaram suas carreiras através do
            Meninas Digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-purple-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
