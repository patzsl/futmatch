import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, CreditCard } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">FutMatch</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Como Funciona
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Preços
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contato
          </Link>
          <Link
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            href="/login"
          >
            Entrar
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Organize seus jogos de forma fácil
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Agende partidas, gerencie times e faça pagamentos em um só lugar. A maneira mais simples de reunir a
                  galera para jogar.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/register">Comece Agora</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#features">Saiba Mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold">Agendamento Fácil</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Agende jogos em quadras, campos ou praias com poucos cliques
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold">Gestão de Grupos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Crie e gerencie grupos de jogadores facilmente
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold">Locais Parceiros</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Encontre os melhores locais para suas partidas
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-bold">Pagamento Integrado</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pague via PIX ou cartão diretamente pelo app</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FutMatch. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}

