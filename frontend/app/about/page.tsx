import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">About snailkit-learn</h1>
        <p className="text-muted-foreground">Educational machine learning at a snail's pace</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="content">
            {/* Write your HTML directly here */}
            <p>
              snailkit-learn was created with a simple belief: to truly understand machine learning algorithms, you need
              to implement them from scratch, line by line, in pure Python.
            </p>
            <p>
              While libraries like scikit-learn are excellent for production use, their optimized code can be difficult
              to understand for beginners. snailkit-learn takes a different approach, implementing algorithms in pure
              Python with detailed comments and explanations.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic my-4">
              "What I cannot create, I do not understand." — Richard Feynman
            </blockquote>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="content space-y-4">
            {/* Write your HTML directly here */}
            <div>
              <h3 className="font-bold">Is snailkit-learn suitable for production use?</h3>
              <p>
                No, snailkit-learn is designed for educational purposes only. Our implementations prioritize readability
                and clarity over performance. For production use, we recommend using established libraries like
                scikit-learn, TensorFlow, or PyTorch.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Who is snailkit-learn for?</h3>
              <p>
                snailkit-learn is ideal for students, educators, and anyone who wants to understand how machine learning
                algorithms work under the hood. It's particularly useful for those who find the optimized code in
                production libraries difficult to follow.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Why the snail theme?</h3>
              <p>
                The snail represents our philosophy of slow, methodical learning. Just as a snail moves slowly but
                steadily, our library helps you build a solid understanding of machine learning concepts one step at a
                time. Plus, we think snails are cute!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
