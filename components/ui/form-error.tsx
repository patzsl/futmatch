"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export function FormError({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm text-destructive flex items-center gap-2"
    >
      <AlertCircle className="h-4 w-4" />
      {message}
    </motion.div>
  )
}

