import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, User, Search } from "lucide-react"
import logo from "@/assets/Woodcreek.png"

const Header = () => {
  return (
    <header className="w-full bg-neutral-900 text-white px-4 md:px-6 py-2 flex items-center justify-between">
      {/* Left: Logo + School Name */}
      <div className="flex items-center gap-2 md:gap-3">
        <img src={logo} alt="Woodcreek Logo" className="h-10 md:h-12 w-auto" />
        <div className="flex flex-col items-center leading-tight">
          <span className="font-bold text-xs md:text-lg">Woodcreek</span>
          <span className="text-[10px] md:text-sm font-medium text-gray-300">School</span>
        </div>
      </div>

      {/* Center: Staff Intranet */}
      <div className="hidden md:flex flex-1 justify-center">
        <span className="font-semibold text-lg">Staff Intranet</span>
      </div>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-3">
        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-sm font-medium text-gray-200">Search</span>
          <Input
            type="text"
            placeholder="Search the intranet and phone book"
            className="w-64 border border-gray-400 bg-white text-black 
                       focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            GO
          </Button>
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden">
          <Search className="h-5 w-5 cursor-pointer" />
        </div>

        {/* Icons */}
        <Users className="h-5 w-5 cursor-pointer" />
        <User className="h-5 w-5 cursor-pointer" />
      </div>
    </header>
  )
}

export default Header
