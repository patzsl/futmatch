"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, QrCodeIcon as Qrcode } from "lucide-react"
import { useState } from "react"

export function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("credit")

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Métodos de Pagamento</CardTitle>
          <CardDescription>Gerencie seus métodos de pagamento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="credit" onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="credit" id="credit" className="peer sr-only" />
              <Label
                htmlFor="credit"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <CreditCard className="mb-3 h-6 w-6" />
                Cartão de Crédito
              </Label>
            </div>
            <div>
              <RadioGroupItem value="pix" id="pix" className="peer sr-only" />
              <Label
                htmlFor="pix"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Qrcode className="mb-3 h-6 w-6" />
                PIX
              </Label>
            </div>
          </RadioGroup>

          {paymentMethod === "credit" ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Número do Cartão</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry-month">Mês</Label>
                  <Input id="expiry-month" placeholder="MM" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry-year">Ano</Label>
                  <Input id="expiry-year" placeholder="AA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="card-name">Nome no Cartão</Label>
                <Input id="card-name" placeholder="JOÃO M SILVA" />
              </div>

              <Button className="w-full">Adicionar Cartão</Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted p-8 flex items-center justify-center">
                <Qrcode className="h-32 w-32" />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Escaneie o QR Code com seu aplicativo de pagamento para cadastrar seu PIX
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Pagamentos</CardTitle>
          <CardDescription>Seus últimos pagamentos e faturas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Pelada de Quarta</p>
                  <p className="text-sm text-muted-foreground">15 de Fevereiro, 2024</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ 40,00</p>
                  <p className="text-sm text-green-600">Pago</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

