"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Supervised Learning",
    href: "/supervised",
    items: [
      {
        title: "Linear Regression",
        href: "/supervised/linear-regression",
        description: "Predict continuous values with a line of best fit.",
      },
      {
        title: "Logistic Regression",
        href: "/supervised/logistic-regression",
        description: "Classify data into discrete categories.",
      },
      {
        title: "Decision Trees",
        href: "/supervised/decision-trees",
        description: "Make decisions based on feature thresholds.",
      },
    ],
  },
  {
    title: "Unsupervised Learning",
    href: "/unsupervised",
    items: [
      {
        title: "K-Means",
        href: "/unsupervised/k-means",
        description: "Group similar data points into clusters.",
      },
      {
        title: "PCA",
        href: "/unsupervised/pca",
        description: "Reduce dimensionality while preserving variance.",
      },
    ],
  },
  {
    title: "Deep Learning",
    href: "/deep-learning",
    items: [
      {
        title: "Tensor",
        href: "/deep-learning/tensor",
        description: "Multi-dimensional arrays for neural networks.",
      },
      {
        title: "Autograd",
        href: "/deep-learning/autograd",
        description: "Automatic differentiation for backpropagation.",
      },
    ],
  },
  {
    title: "Transformers",
    href: "/transformers",
    items: [
      {
        title: "Attention",
        href: "/transformers/attention",
        description: "The core mechanism of transformer models.",
      },
      {
        title: "GPT",
        href: "/transformers/gpt",
        description: "Generative Pre-trained Transformer architecture.",
      },
      {
        title: "BERT",
        href: "/transformers/bert",
        description: "Bidirectional Encoder Representations from Transformers.",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center md:hidden">
          <SidebarTrigger />
        </div>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">🐌 snailkit-learn</span>
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainNavItems.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                pathname === subItem.href && "bg-accent text-accent-foreground",
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === item.href && "bg-accent text-accent-foreground",
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <span className="text-xl font-bold">🐌 snailkit-learn</span>
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
