import { LogIn, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Logo } from "../icons/logo"
import { Button } from "../ui/button"
import { Label } from "../ui/label"

export const HeaderDesktop = () => {
  return (
    <header className="px-4 fixed z-50 bg-transparent items-center w-full justify-center sm:flex hidden py-4">
      <div className="w-full h-full max-w-282 flex flex-1 flex-row gap-22 items-center jus">
        <Logo className="min-w-50 h-12" />
        <div className="flex flex-row gap-12 items-center w-full">
          <Link href={"/"}>
            <Button variant="link">
              <Label className="text-white">Home</Label>
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant="link">
              <Label className="text-white">Property</Label>
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant="link">
              <Label className="text-white">Article</Label>
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant="link">
              <Label className="text-white">Booking Now</Label>
            </Button>
          </Link>
        </div>
        <Button>
          <LogIn />
          Sign in / Sign up
        </Button>
      </div>
    </header>
  )
}

export const HeaderMobile = () => {
  return (
    <header className="fixed px-4 py-3 z-50 bg-transparent  items-center  w-full flex sm:hidden">
      <div className="w-full border-b border-grey-4 h-full max-h-12 flex flex-1 flex-row gap-4 items-center justify-between">
        <Button variant="icon">
          <MenuIcon />
        </Button>
        <Logo className="max-w-25 w-full max-h-6 h-full flex" />
        <Button variant="icon" >
          <LogIn />
        </Button>
      </div>
    </header>
  )
}