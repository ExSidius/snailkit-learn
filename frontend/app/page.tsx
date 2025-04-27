import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold mb-4">🐌 snailkit-learn</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Machine learning at a snail's pace, because understanding is more important than optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
