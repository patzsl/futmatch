"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface RatingDialogProps {
  gameId: string
  onRatingSubmit: () => void
}

export function RatingDialog({ gameId, onRatingSubmit }: RatingDialogProps) {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit() {
    try {
      setIsSubmitting(true)
      const response = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId,
          rating,
          feedback,
        }),
      })

      if (response.ok) {
        toast({
          title: "Avaliação enviada",
          description: "Obrigado pelo seu feedback!",
        })
        onRatingSubmit()
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua avaliação",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Avaliar Jogo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Avaliar Jogo</DialogTitle>
          <DialogDescription>Compartilhe sua experiência sobre este jogo</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className={`p-1 rounded-full transition-colors ${
                  rating >= value ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                <Star className="h-8 w-8 fill-current" />
              </button>
            ))}
          </div>
          <Textarea
            placeholder="Deixe seu comentário (opcional)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button onClick={handleSubmit} disabled={!rating || isSubmitting} className="w-full">
            {isSubmitting ? "Enviando..." : "Enviar Avaliação"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

