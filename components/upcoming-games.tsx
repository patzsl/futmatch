import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CalendarIcon } from "lucide-react"

const games = [
  {
    id: 1,
    type: "Futebol Society",
    location: "Arena Soccer Club",
    date: "Hoje, 19:00",
    confirmed: 12,
    needed: 14,
    status: "confirmed",
  },
  {
    id: 2,
    type: "Futvôlei",
    location: "Praia de Copacabana",
    date: "Amanhã, 08:00",
    confirmed: 3,
    needed: 4,
    status: "pending",
  },
]

export function UpcomingGames() {
  return (
    <div className="space-y-4">
      {games.map((game) => (
        <Card key={game.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{game.type}</h3>
                  <Badge variant={game.status === "confirmed" ? "default" : "secondary"}>
                    {game.status === "confirmed" ? "Confirmado" : "Pendente"}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <MapPin className="h-4 w-4" />
                  {game.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {game.date}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src={`/placeholder-user.jpg`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {game.confirmed}/{game.needed} confirmados
                </div>
                <Button size="sm" variant={game.status === "confirmed" ? "secondary" : "default"}>
                  {game.status === "confirmed" ? "Ver detalhes" : "Confirmar presença"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

