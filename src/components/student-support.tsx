// components/student-support.tsx
export function StudentSupport() {
  return (
    <section className="bg-white dark:bg-zinc-800 rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold">Suporte ao Estudante</h2>
      <p className="text-sm">Está com dúvidas ou precisa de ajuda?</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="/suporte/faq" className="text-blue-600 underline text-sm">
          Ver perguntas frequentes (FAQ)
        </a>
        <a href="/suporte/chat" className="text-blue-600 underline text-sm">
          Abrir chat com atendimento
        </a>
        <a href="/suporte/contato" className="text-blue-600 underline text-sm">
          Enviar mensagem
        </a>
      </div>
    </section>
  )
}
