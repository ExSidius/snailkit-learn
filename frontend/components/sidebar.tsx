"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sidebar as UISidebar } from "@/components/ui/sidebar"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/" },
        { title: "Installation", href: "/installation" },
      ],
    },
    {
      title: "Supervised Learning",
      items: [
        { title: "Linear Regression", href: "/supervised/linear-regression" },
        { title: "Logistic Regression", href: "/supervised/logistic-regression" },
      ],
    },
    {
      title: "Unsupervised Learning",
      items: [
        { title: "K-Means", href: "/unsupervised/k-means" },
        { title: "PCA", href: "/unsupervised/pca" },
      ],
    },
    {
      title: "Deep Learning",
      items: [
        { title: "Tensor", href: "/deep-learning/tensor" },
        { title: "Autograd", href: "/deep-learning/autograd" },
      ],
    },
  ]

  return (
    <UISidebar>
      <div className="p-4 space-y-6">
        {routes.map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="font-medium text-sm">{section.title}</h4>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block text-sm py-1 px-2 rounded-md hover:bg-accent",
                    pathname === item.href && "bg-accent text-accent-foreground font-medium",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </UISidebar>
  )
}
