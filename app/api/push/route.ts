import { NextResponse } from "next/server"
import webpush from "web-push"

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  throw new Error("VAPID keys não configuradas")
}

webpush.setVapidDetails("mailto:suporte@futmatch.com", process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY)

export async function POST(req: Request) {
  try {
    const { subscription, title, message } = await req.json()

    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title,
        body: message,
        icon: "/icon.png",
      }),
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar push notification:", error)
    return NextResponse.json({ error: "Erro ao enviar notificação" }, { status: 500 })
  }
}

