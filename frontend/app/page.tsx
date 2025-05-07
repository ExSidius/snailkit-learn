import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="py-6 text-center">
        <h1 className="mb-4 text-4xl font-bold">snailkit-learn</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Machine learning at a snail's pace, because understanding is more important than optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Supervised Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Learn from labeled data with algorithms like Linear Regression.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/supervised">Explore</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Unsupervised Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Discover patterns in unlabeled data with algorithms like K-Means.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/unsupervised">Explore</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deep Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Build neural networks from scratch with pure Python.</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/deep-learning">Explore</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
