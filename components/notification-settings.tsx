import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Notificações por Push</CardTitle>
          <CardDescription>Gerencie como você recebe notificações no seu dispositivo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Lembretes de Jogos</Label>
              <p className="text-sm text-muted-foreground">Receba lembretes antes dos seus jogos</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Confirmações de Presença</Label>
              <p className="text-sm text-muted-foreground">Seja notificado quando jogadores confirmarem presença</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Pagamentos</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações sobre pagamentos pendentes e confirmados
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Convites de Grupo</Label>
              <p className="text-sm text-muted-foreground">Seja notificado sobre novos convites para grupos</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificações por Email</CardTitle>
          <CardDescription>Configure suas preferências de email</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Resumo Semanal</Label>
                <p className="text-sm text-muted-foreground">Receba um resumo dos seus jogos da semana</p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label>Frequência de Emails</Label>
              <Select defaultValue="daily">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a frequência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Tempo Real</SelectItem>
                  <SelectItem value="daily">Diário</SelectItem>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="never">Nunca</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

