"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">🐌 snailkit-learn</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/supervised" className="text-sm font-medium">
            Supervised
          </Link>
          <Link href="/unsupervised" className="text-sm font-medium">
            Unsupervised
          </Link>
          <Link href="/deep-learning" className="text-sm font-medium">
            Deep Learning
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
