import * as z from "zod"

export const gameSchema = z
  .object({
    type: z.string().min(1, "Selecione o tipo de jogo"),
    venue: z.string().min(1, "Selecione o local"),
    date: z.date({
      required_error: "Selecione a data",
    }),
    time: z.string().min(1, "Selecione o horário"),
    maxPlayers: z.string().min(1, "Digite o número de jogadores"),
    price: z.string().min(1, "Digite o preço por jogador"),
    description: z.string().optional(),
  })
  .refine(
    (data) => {
      const gameDate = new Date(data.date)
      gameDate.setHours(Number.parseInt(data.time.split(":")[0]), Number.parseInt(data.time.split(":")[1]))
      return gameDate > new Date()
    },
    {
      message: "A data e hora do jogo deve ser no futuro",
      path: ["date"],
    },
  )

