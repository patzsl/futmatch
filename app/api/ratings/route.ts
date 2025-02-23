import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { gameId, rating, feedback } = body

    // Aqui você implementaria a lógica para salvar a avaliação no banco de dados
    console.log("Salvando avaliação:", { gameId, rating, feedback })

    return NextResponse.json({
      success: true,
      message: "Avaliação salva com sucesso",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao salvar avaliação" }, { status: 500 })
  }
}

