import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { EChart } from "@/components/echart"

export default function LinearRegressionPage() {
  // Sample chart data - replace with your own
  const chartOption = {
    xAxis: { type: "category", data: [1, 2, 3, 4, 5, 6, 7] },
    yAxis: { type: "value" },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: "line" }],
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Linear Regression</h1>
          <p className="text-muted-foreground">
            A simple supervised learning algorithm for predicting continuous values.
          </p>
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="math">Math</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 py-4">
            <div className="content">
              {/* Write your HTML directly here */}
              <p>
                Linear regression is one of the most basic and widely used machine learning algorithms. It attempts to
                model the relationship between a dependent variable and one or more independent variables by fitting a
                linear equation to the observed data.
              </p>
              <p>
                In simple linear regression, we model the relationship between a dependent variable y and an independent
                variable x using a linear function:
              </p>
              <div className="bg-muted p-4 rounded-md font-mono">y = mx + b</div>
              <p>Where:</p>
              <ul className="list-disc pl-6">
                <li>y is the predicted value</li>
                <li>m is the slope of the line</li>
                <li>x is the input feature</li>
                <li>b is the y-intercept</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="math" className="space-y-4 py-4">
            <div className="content">
              {/* Write your HTML directly here */}
              <h2 className="text-2xl font-bold mb-4">Mathematical Formulation</h2>
              <p>
                The goal of linear regression is to find values for m and b that minimize the Mean Squared Error (MSE)
                between the predicted values and the actual values:
              </p>
              <div className="bg-muted p-4 rounded-md font-mono">MSE = (1/n) * Σ(y_pred - y_actual)²</div>
              <p>
                We can use gradient descent to iteratively update our parameters (m and b) to minimize this error
                function.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-4 py-4">
            <div className="content">
              {/* Write your HTML directly here */}
              <h2 className="text-2xl font-bold mb-4">Python Implementation</h2>
              <p>Here's a simple implementation of linear regression using gradient descent:</p>
              <pre className="p-4 rounded-md bg-muted font-mono text-sm overflow-auto">
                {`# Your Python code will go here
class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        
    def fit(self, X, y):
        # Initialize parameters
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        # Gradient descent
        for _ in range(self.n_iterations):
            y_predicted = np.dot(X, self.weights) + self.bias
            
            # Compute gradients
            dw = (1/n_samples) * np.dot(X.T, (y_predicted - y))
            db = (1/n_samples) * np.sum(y_predicted - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
        return self
        
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias`}
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="visualization" className="space-y-4 py-4">
            <div className="content">
              {/* Write your HTML directly here */}
              <h2 className="text-2xl font-bold mb-4">Visualization</h2>
              <p>This visualization shows a simple linear regression model fit to sample data points:</p>
              <Card>
                <CardContent className="pt-6">
                  <EChart option={chartOption} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
