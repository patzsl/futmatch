"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, Settings, Home } from "lucide-react"

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Jogos", href: "/games", icon: Calendar },
  { name: "Grupos", href: "/groups", icon: Users },
  { name: "Locais", href: "/venues", icon: MapPin },
  { name: "Configurações", href: "/settings", icon: Settings },
  // Adicione esta linha apenas em ambiente de desenvolvimento
  ...(process.env.NODE_ENV === "development"
    ? [{ name: "Teste Integrações", href: "/settings/test", icon: Settings }]
    : []),
]

export function SideNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-2 p-4 border-r min-w-[240px]">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <Button
            key={link.name}
            variant={pathname === link.href ? "secondary" : "ghost"}
            className={cn("w-full justify-start gap-2", pathname === link.href && "bg-secondary")}
            asChild
          >
            <Link href={link.href}>
              <Icon className="h-4 w-4" />
              {link.name}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

