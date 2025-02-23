import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Users } from "lucide-react"
import Link from "next/link"

const groups = [
  {
    id: 1,
    name: "Pelada de Quarta",
    members: 16,
    type: "Futebol Society",
    role: "captain",
    nextGame: "Quarta, 19:00",
    location: "Arena Soccer Club",
  },
  {
    id: 2,
    name: "Vôlei na Praia",
    members: 8,
    type: "Futvôlei",
    role: "player",
    nextGame: "Sábado, 08:00",
    location: "Praia de Copacabana",
  },
  {
    id: 3,
    name: "Futsal dos Brothers",
    members: 12,
    type: "Futsal",
    role: "player",
    nextGame: "Segunda, 20:00",
    location: "Ginásio Municipal",
  },
]

export default function GroupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Grupos</h1>
        <Button asChild>
          <Link href="/groups/new">
            <Plus className="mr-2 h-4 w-4" />
            Criar Grupo
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar grupos..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="my-groups">
        <TabsList>
          <TabsTrigger value="my-groups">Meus Grupos</TabsTrigger>
          <TabsTrigger value="discover">Descobrir</TabsTrigger>
        </TabsList>
        <TabsContent value="my-groups" className="space-y-4">
          {groups.map((group) => (
            <Card key={group.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{group.name}</h3>
                      <Badge variant={group.role === "captain" ? "default" : "secondary"}>
                        {group.role === "captain" ? "Capitão" : "Jogador"}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {group.members} membros
                      </div>
                      <span>•</span>
                      <div>{group.type}</div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Próximo jogo: </span>
                      {group.nextGame} - {group.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <Avatar key={i} className="border-2 border-background">
                          <AvatarImage src={`/placeholder-user.jpg`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <Button>Ver grupo</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="discover">
          <Card>
            <CardHeader>
              <CardTitle>Descubra Novos Grupos</CardTitle>
              <CardDescription>Encontre grupos baseados nas suas preferências e localização</CardDescription>
            </CardHeader>
            <CardContent>{/* Implementar descoberta de grupos */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

