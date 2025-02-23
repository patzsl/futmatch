import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Pelada de Quarta",
    members: 16,
    type: "Futebol Society",
    role: "captain",
  },
  {
    id: 2,
    name: "Vôlei na Praia",
    members: 8,
    type: "Futvôlei",
    role: "player",
  },
]

export function MyGroups() {
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <Card key={group.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{group.name}</h3>
                  <Badge variant={group.role === "captain" ? "default" : "secondary"}>
                    {group.role === "captain" ? "Capitão" : "Jogador"}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <Users className="h-4 w-4" />
                  {group.members} membros
                </div>
                <div className="text-sm text-muted-foreground">{group.type}</div>
              </div>
              <Button size="sm">Ver grupo</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

