import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { amount, gameId } = body

    // Criar uma sessão de checkout do Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Pagamento de Jogo",
            },
            unit_amount: amount * 100, // Stripe trabalha com centavos
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/games/${gameId}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/games/${gameId}`,
      metadata: {
        gameId,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Erro no processamento do Stripe:", error)
    return NextResponse.json({ error: "Erro ao processar pagamento" }, { status: 500 })
  }
}

