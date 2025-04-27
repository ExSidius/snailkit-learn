import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { EChart } from "@/components/echart"

export default function LinearRegressionPage() {
  // this data is gener
  // m = 1.3
  // x = np.arange(1, 50)
  // b = 4
  // e = np.random.normal(0, 5, size=len(x))
  // y = m*x + b + e
  // {
  //     'x': x,
  //     'y': np.round(y, 0).astype(int)
  // }
  const chart1 = {
    xAxis: { type: "value", data: Array.from({ length: 49 }, (_, i) => i + 1) },
    yAxis: { type: "value" },
    series: [{
      data: [
        [1, -1], [2, 9], [3, 12], [4, 7], [5, 12], [6, 16], [7, 12], [8, 21], 
        [9, 20], [10, 15], [11, 20], [12, 21], [13, 16], [14, 20], [15, 35], 
        [16, 22], [17, 30], [18, 26], [19, 30], [20, 31], [21, 25], [22, 23], 
        [23, 31], [24, 37], [25, 37], [26, 42], [27, 40], [28, 39], [29, 46], 
        [30, 47], [31, 43], [32, 44], [33, 47], [34, 49], [35, 54], [36, 53], 
        [37, 50], [38, 53], [39, 70], [40, 60], [41, 54], [42, 60], [43, 65], 
        [44, 60], [45, 67], [46, 55], [47, 60], [48, 61], [49, 72]
      ],
      type: "scatter",
      symbolSize: 8
    }],
  }

  // we will plot y = 1.2x + 3.8


  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Linear Regression</h1>
          <p className="text-muted-foreground">
            A simple supervised learning algorithm for predicting continuous values.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">How do you fit a line?</h2>
          <p>
            It's a pretty innoccuous question. Let's say you have a set of points that looks like this:
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-3/4">
              <EChart option={chart1} />
            </div>
          </div>
          <p className="mt-10">
            And you want to fit a line to these points. How do you do that?
          </p>
          <p>
            Well, you could try to eyeball it.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-3/4">
              <EChart option={{
                xAxis: { type: "value" },
                yAxis: { type: "value" },
                series: [
                  {
                    data: chart1.series[0].data,
                    type: "scatter",
                    symbolSize: 8
                  },
                  {
                    data: Array.from({ length: 49 }, (_, i) => [i + 1, 1.2 * (i + 1) + 3.8]),
                    type: "line",
                    symbol: "none"
                  }
                ]
              }} />
            </div>
          </div>

          <p className="mt-10">
            Not the worst, but it's pretty arbitrary. <br></br>
            This problem comes up a lot. <br></br>
            It was first solved by Carl Friedrich Gauss in 1809, but I use the word solved extremely loosely.
          </p>
        </div>



        {/* <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="math">Math</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 py-4">
            <div className="content">
              
              <p>
                Linear regression is one of the most basic and widely used machine learning algorithms. It attempts to
                model the relationship between a dependent variable and one or more independent variables by fitting a
                linear equation to the observed data.
              </p>
              <p>
                In simple linear regression, we model the relationship between a dependent variable y and an independent
                variable x using a linear function:
              </p>
              <div className="rounded-md bg-muted p-4 font-mono">y = mx + b</div>
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
              
              <h2 className="mb-4 text-2xl font-bold">Mathematical Formulation</h2>
              <p>
                The goal of linear regression is to find values for m and b that minimize the Mean Squared Error (MSE)
                between the predicted values and the actual values:
              </p>
              <div className="rounded-md bg-muted p-4 font-mono">MSE = (1/n) * Σ(y_pred - y_actual)²</div>
              <p>
                We can use gradient descent to iteratively update our parameters (m and b) to minimize this error
                function.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-4 py-4">
            <div className="content">
              
              <h2 className="mb-4 text-2xl font-bold">Python Implementation</h2>
              <p>Here's a simple implementation of linear regression using gradient descent:</p>
              <pre className="overflow-auto rounded-md bg-muted p-4 font-mono text-sm">
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
              
              <h2 className="mb-4 text-2xl font-bold">Visualization</h2>
              <p>This visualization shows a simple linear regression model fit to sample data points:</p>
              <Card>
                <CardContent className="pt-6">
                  <EChart option={chartOption} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs> */}
      </div>
    </div>
  )
}
