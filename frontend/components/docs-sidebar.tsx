"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sidebar navigation data
const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/",
      },
      {
        title: "Installation",
        href: "/installation",
      },
    ],
  },
  {
    title: "Supervised Learning",
    items: [
      {
        title: "Linear Regression",
        href: "/supervised/linear-regression",
      },
      {
        title: "Logistic Regression",
        href: "/supervised/logistic-regression",
      },
      {
        title: "Decision Trees",
        href: "/supervised/decision-trees",
      },
      {
        title: "Random Forest",
        href: "/supervised/random-forest",
      },
      {
        title: "Support Vector Machines",
        href: "/supervised/svm",
      },
    ],
  },
  {
    title: "Unsupervised Learning",
    items: [
      {
        title: "K-Means Clustering",
        href: "/unsupervised/k-means",
      },
      {
        title: "Principal Component Analysis",
        href: "/unsupervised/pca",
      },
      {
        title: "Hierarchical Clustering",
        href: "/unsupervised/hierarchical-clustering",
      },
      {
        title: "DBSCAN",
        href: "/unsupervised/dbscan",
      },
    ],
  },
  {
    title: "Deep Learning Core",
    items: [
      {
        title: "Tensor",
        href: "/deep-learning/tensor",
      },
      {
        title: "Autograd",
        href: "/deep-learning/autograd",
      },
      {
        title: "Neural Network",
        href: "/deep-learning/neural-network",
      },
      {
        title: "Optimizers",
        href: "/deep-learning/optimizers",
      },
      {
        title: "Loss Functions",
        href: "/deep-learning/loss-functions",
      },
    ],
  },
  {
    title: "Transformers",
    items: [
      {
        title: "Attention Mechanism",
        href: "/transformers/attention",
      },
      {
        title: "Multi-Head Attention",
        href: "/transformers/multihead-attention",
      },
      {
        title: "GPT Architecture",
        href: "/transformers/gpt",
      },
      {
        title: "BERT Architecture",
        href: "/transformers/bert",
      },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        {sidebarItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                      <Link href={item.href}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
