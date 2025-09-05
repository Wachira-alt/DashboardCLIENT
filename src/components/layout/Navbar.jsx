import React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

// Different dropdown items for each section
const financeItems = [
  "About finance",
  "Finance graduate program", 
  "Formal change",
  "Working in Finance",
  "Performance planning and development",
  "Noticeboard",
  "LEADing Finance",
  "Finance WHS",
  "Finance Olympics Competition",
]

const hrItems = [
  "About HR",
  "Employment policies",
  "Staff handbook",
  "Benefits and entitlements",
  "Workplace relations",
  "Health and safety",
  "Recruitment",
  "Staff development",
  "Leave management",
]

const careersItems = [
  "Career opportunities",
  "Training programs",
  "Professional development",
  "Leadership development",
  "Skills assessment",
  "Mentoring programs",
  "Graduate programs",
  "Internships",
  "Career pathways",
]

const servicesItems = [
  "IT Services",
  "Library services",
  "Student services",
  "Facilities management",
  "Security services",
  "Catering services",
  "Parking services",
  "Mail services",
  "Procurement",
]

// Reusable Dropdown Component
const DropdownContent = ({ items }) => (
  <NavigationMenuContent
    className="absolute left-0 top-full mt-1 bg-white text-gray-700 shadow-lg border border-gray-200 rounded-md p-6 z-50"
  >
    <div
      className={`
        grid gap-x-6 gap-y-2
        ${items.length <= 6 ? "grid-cols-1" : items.length <= 12 ? "grid-cols-2" : "grid-cols-3"}
      `}
    >
      {items.map((item, idx) => (
        <NavigationMenuLink
          key={idx}
          href="#"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150 py-1"
        >
          ▸ {item}
        </NavigationMenuLink>
      ))}
    </div>
  </NavigationMenuContent>
)

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-300 text-black px-4 md:px-6">
      <NavigationMenu className="w-full justify-start">
        <NavigationMenuList className="flex items-center">

          {/* Home - Active State */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-3 bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-200"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Finance */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Finance
            </NavigationMenuTrigger>
            <DropdownContent items={financeItems} />
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* HR & employment */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              HR & employment
            </NavigationMenuTrigger>
            <DropdownContent items={hrItems} />
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Careers & training */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Careers & training
            </NavigationMenuTrigger>
            <DropdownContent items={careersItems} />
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Services */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Services
            </NavigationMenuTrigger>
            <DropdownContent items={servicesItems} />
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Contacts & campuses */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Contacts & campuses
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Strategy & governance */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Strategy & governance
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Research support */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Research support
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* Teaching support */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Teaching support
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <div className="h-6 w-px bg-gray-300" />

          {/* News */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/news"
              className="px-4 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              News
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export default Navbar
