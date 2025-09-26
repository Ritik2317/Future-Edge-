import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  return (
    <header className="w-full border-b shadow-sm">
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo-dark.png"
            alt="Logo"
            width={100}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <SignedIn>
            {/* Dashboard Button */}
            <Link href="/dashboard" className="cursor-pointer">
              <Button className="flex items-center gap-2 cursor-pointer">
                <LayoutDashboard className="w-4 h-4" />
                Industry Insights
              </Button>
            </Link>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium cursor-pointer hover:text-blue-600">
                Growth Tools
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="cursor-pointer">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/resume" className="flex items-center gap-2 cursor-pointer">
                    <FileText className="w-4 h-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/ai-cover-letter" className="flex items-center gap-2 cursor-pointer">
                    <PenBox className="w-4 h-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/interview" className="flex items-center gap-2 cursor-pointer">
                    <GraduationCap className="w-4 h-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Profile */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button className="cursor-pointer">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  )
}

export default Header
