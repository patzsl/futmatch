import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"
import { Bell } from "lucide-react"

export function TopNav() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="font-bold text-2xl">FutMatch</div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificações</span>
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  )
}

