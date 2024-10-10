"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet"
import Image from "next/image.js"
import { ChevronDown, ArrowRight, Menu } from "lucide-react"

export default function ResponsiveTransparentHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "#",
      dropdownItems: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      ],
    },
    { name: "Contact", href: "/contact" },
    { name: "Team", href: "/team" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
  ]

  const NavItem = ({ item, isMobile = false }) => {
    if (item.dropdownItems) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className={`${isMobile ? 'text-black' : 'text-white'} hover:text-gray-300 flex items-center`}>
            {item.name} <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.dropdownItems.map((dropdownItem) => (
              <DropdownMenuItem key={dropdownItem.name}>
                <Link href={dropdownItem.href}>{dropdownItem.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
    return (
      <Link href={item.href} className={`${isMobile ? 'text-black' : 'text-white'} hover:text-gray-300`}>
        {item.name}
      </Link>
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-bold">
          <Image src={'/logo.png'} width={100} height={100} className=""/>

          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white hidden md:flex">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavItem key={item.name} item={item} isMobile />
                  ))}
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full mt-4">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}