import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type, userId, message } = body

    // Simulação de envio de notificação
    console.log(`Enviando notificação do tipo ${type} para usuário ${userId}: ${message}`)

    return NextResponse.json({
      success: true,
      message: "Notificação enviada com sucesso",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar notificação" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  // Simulação de busca de notificações
  const notifications = [
    {
      id: 1,
      type: "game",
      message: "Seu jogo começa em 1 hora",
      read: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      type: "payment",
      message: "Pagamento confirmado para o jogo de hoje",
      read: true,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 3,
      type: "group",
      message: "Você foi convidado para um novo grupo",
      read: false,
      createdAt: new Date(Date.now() - 172800000).toISOString(),
    },
  ]

  return NextResponse.json(notifications)
}

