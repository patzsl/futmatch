"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUpload } from "@/components/image-upload"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function TestIntegrationsPage() {
  const { toast } = useToast()
  const [testingPayment, setTestingPayment] = useState(false)
  const [testingNotification, setTestingNotification] = useState(false)

  // Teste do Stripe
  async function testStripePayment() {
    try {
      setTestingPayment(true)
      const response = await fetch("/api/payments/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 1, // R$ 1,00 para teste
          gameId: "test-game",
        }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      toast({
        title: "Erro no Stripe",
        description: "Não foi possível iniciar o pagamento",
        variant: "destructive",
      })
    } finally {
      setTestingPayment(false)
    }
  }

  // Teste de Push Notification
  async function testPushNotification() {
    try {
      setTestingNotification(true)
      const permission = await Notification.requestPermission()

      if (permission === "granted") {
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        })

        await fetch("/api/push", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscription,
            title: "Teste",
            message: "Esta é uma notificação de teste!",
          }),
        })

        toast({
          title: "Sucesso",
          description: "Notificação enviada!",
        })
      } else {
        toast({
          title: "Permissão Negada",
          description: "Você precisa permitir notificações no seu navegador",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar a notificação",
        variant: "destructive",
      })
    } finally {
      setTestingNotification(false)
    }
  }

  // Handler para upload de imagem
  function handleImageUpload(url: string) {
    toast({
      title: "Imagem enviada",
      description: `URL da imagem: ${url}`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Teste de Integrações</h1>
        <p className="text-muted-foreground">Teste as integrações com Stripe, Push Notifications e Cloudinary</p>
      </div>

      <div className="grid gap-6">
        {/* Teste Stripe */}
        <Card>
          <CardHeader>
            <CardTitle>Teste de Pagamento (Stripe)</CardTitle>
            <CardDescription>Faça um pagamento de teste de R$ 1,00 usando o Stripe</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={testStripePayment} disabled={testingPayment}>
              {testingPayment ? "Processando..." : "Testar Pagamento"}
            </Button>
          </CardContent>
        </Card>

        {/* Teste Push Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Teste de Notificações Push</CardTitle>
            <CardDescription>Envie uma notificação push de teste</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={testPushNotification} disabled={testingNotification}>
              {testingNotification ? "Enviando..." : "Testar Notificação"}
            </Button>
          </CardContent>
        </Card>

        {/* Teste Cloudinary */}
        <Card>
          <CardHeader>
            <CardTitle>Teste de Upload de Imagem</CardTitle>
            <CardDescription>Faça upload de uma imagem para o Cloudinary</CardDescription>
          </CardHeader>
          <CardContent>
            <ImageUpload onUpload={handleImageUpload} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

