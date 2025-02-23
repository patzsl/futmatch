"use client"

import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"

export function PushNotificationHandler() {
  const { toast } = useToast()

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      registerServiceWorker()
    }
  }, [])

  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js")
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
      })

      // Enviar a subscription para o backend
      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscription }),
      })
    } catch (error) {
      console.error("Erro ao registrar push notifications:", error)
      toast({
        title: "Erro",
        description: "Não foi possível ativar as notificações push",
        variant: "destructive",
      })
    }
  }

  return null
}

