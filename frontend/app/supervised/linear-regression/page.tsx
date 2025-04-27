"use client";

import { EChart } from "@/components/echart";
import { GLChart } from "@/components/charts";
import type { EChartsOption } from "echarts";
import Latex from "react-latex";
import "katex/dist/katex.min.css";

// The original generating function is -
// m = 1.3
// b = 4
// e = np.random.normal(0, 5, size=len(x))
// y = m*x + b + e

export default function Page() {
  const data = [
    [1, -1],
    [2, 9],
    [3, 12],
    [4, 7],
    [5, 12],
    [6, 16],
    [7, 12],
    [8, 21],
    [9, 20],
    [10, 15],
    [11, 20],
    [12, 21],
    [13, 16],
    [14, 20],
    [15, 35],
    [16, 22],
    [17, 30],
    [18, 26],
    [19, 30],
    [20, 31],
    [21, 25],
    [22, 23],
    [23, 31],
    [24, 37],
    [25, 37],
    [26, 42],
    [27, 40],
    [28, 39],
    [29, 46],
    [30, 47],
    [31, 43],
    [32, 44],
    [33, 47],
    [34, 49],
    [35, 54],
    [36, 53],
    [37, 50],
    [38, 53],
    [39, 70],
    [40, 60],
    [41, 54],
    [42, 60],
    [43, 65],
    [44, 60],
    [45, 67],
    [46, 55],
    [47, 60],
    [48, 61],
    [49, 72],
  ];

  const chart1: EChartsOption = {
    xAxis: {
      type: "value" as const,
    },
    yAxis: { type: "value" as const },
    series: [
      {
        data: data,
        type: "scatter",
        symbolSize: 8,
      },
    ],
  };

  const chart2: EChartsOption = {
    xAxis: { type: "value" as const },
    yAxis: { type: "value" as const },
    series: [
      {
        data: data,
        type: "scatter",
        symbolSize: 8,
      },
      {
        data: Array.from({ length: 49 }, (_, i) => [
          i + 1,
          1.2 * (i + 1) + 3.8,
        ]),
        type: "line",
        symbol: "none",
      },
    ],
  };

  const chart3: EChartsOption = {
    xAxis: { type: "value" as const },
    yAxis: { type: "value" as const },
    series: [
      {
        data: data,
        type: "scatter" as const,
        symbolSize: 8,
      },
      {
        data: Array.from({ length: 49 }, (_, i) => [i + 1, 1.3 * (i + 1) + 4]),
        type: "line" as const,
        symbol: "none",
        lineStyle: {
          color: "#3CB371", // Medium sea green color for the line
          width: 2,
        },
      },
      ...data.map((point) => {
        const x = point[0];
        const y = point[1];
        const lineY = 1.3 * x + 4; // The y value on the line

        return {
          data: [
            [x, y],
            [x, lineY],
          ],
          type: "line" as const,
          lineStyle: {
            color: "red",
            width: 1,
          },
          symbol: "none",
        };
      }),
    ] as const,
  };

  // Error functions for visualization
  const errorFunctions = {
    squared: (actual: number, predicted: number) =>
      Math.pow(actual - predicted, 2),
    absolute: (actual: number, predicted: number) =>
      Math.abs(actual - predicted),
    cubed: (actual: number, predicted: number) =>
      Math.pow(actual - predicted, 3),
    quartic: (actual: number, predicted: number) =>
      Math.pow(actual - predicted, 4),
  };

  // Create a reusable error surface chart configuration
  const createErrorSurfaceChart = (
    errorType: "squared" | "absolute" | "cubed" | "quartic",
    title: string
  ) => ({
    title: {
      text: "3D Visualization of Error Surface",
      subtext: title,
    },
    tooltip: {},
    visualMap: {
      show: true,
      dimension: 2,
      min: 0,
      max: 100,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
    },
    grid3D: {
      viewControl: {
        autoRotate: true,
        autoRotateSpeed: 5,
        rotateSensitivity: 1,
      },
    },
    xAxis3D: {
      name: "m (slope)",
      type: "value",
      min: 0,
      max: 3,
    },
    yAxis3D: {
      name: "b (intercept)",
      type: "value",
      min: -5,
      max: 15,
    },
    zAxis3D: {
      name: `Sum of ${title}`,
      type: "value",
    },
    series: [
      {
        type: "surface" as any,
        wireframe: {
          show: true,
        },
        equation: {
          x: {
            step: 0.1,
            min: 0,
            max: 3,
          },
          y: {
            step: 0.5,
            min: -5,
            max: 15,
          },
          z: function (x: number, y: number) {
            const m = x;
            const b = y;
            const error = data.map((point) => {
              const predicted = m * point[0] + b;
              return errorFunctions[errorType](point[1], predicted);
            });
            // Calculate the sum of all errors
            return error.reduce((acc, val) => acc + val, 0);
          },
        },
      },
    ],
  });

  // Create chart options using the reusable function
  const squaredErrorChart = createErrorSurfaceChart("squared", "Squared Error");
  const absoluteErrorChart = createErrorSurfaceChart(
    "absolute",
    "Absolute Error"
  );
  const cubedErrorChart = createErrorSurfaceChart("cubed", "Cubed Error");
  const quarticErrorChart = createErrorSurfaceChart("quartic", "Quartic Error");

  return (
    <div className="w-full px-8">
      <h1 className="mb-2 text-4xl font-bold">Linear Regression</h1>

      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
        A simple supervised learning algorithm for predicting continuous values.
      </p>
      <h2 className="mt-4 text-2xl font-bold">How do you fit a line?</h2>

      <p className="mt-4">
        It's a deceptively deep question. Let's say you have a set of points
        that looks like this:
      </p>

      <div className="mt-4 flex justify-center">
        <div className="w-full max-w-[1000px]">
          <EChart option={chart1} />
        </div>
      </div>

      <p className="mt-4">
        And you want to fit a line to these points. How do you do that?
      </p>

      <p className="mt-4">Well, you could try to eyeball it.</p>

      <div className="mt-4 flex justify-center">
        <div className="w-full max-w-[1000px]">
          <EChart option={chart2} />
        </div>
      </div>

      <p className="mt-4">Not the worst, but it's pretty arbitrary.</p>

      <p className="mt-4">This problem comes up a lot.</p>

      <p className="mt-4">
        It was first solved by Adrien-Marie Legendre in 1805, but I use the word
        solved extremely loosely. He solved with "The Method of Least Squares".
      </p>

      <p className="mt-4">
        Since, then Linear Regression been tackled by Carl Friedrich Gauss,
        Pierre-Simon Laplace, Francis Galton, Karl Pearson, Andrey Markov,
        Ronald Fisher, and many others in the modern era.
      </p>
      <p className="mt-4">
        Each of them have contributed to the algorithm, the implementation, the
        optimization, and the interpretation.
      </p>
      <p className="mt-4">We'll explore all of these details.</p>

      <p className="mt-4">
        Legendre and Gauss both independently came up with the method of least
        squares, which is the basis of linear regression.
      </p>
      <p className="mt-4">
        The essential idea is that you find the line that minimizes the sum of
        the squared distances between the points and the line.
      </p>
      <p className="mt-4">
        That is to say, if you imagine that these points were generated by some
        linear function (where linear in this case simply means producing a
        line) and then some random noise was added to each point, then the line
        you fit will be the one that minimizes the average squared error.
      </p>
      <div className="mt-4 flex justify-center">
        <div className="w-full max-w-[1000px]">
          <EChart option={chart3} />
        </div>
      </div>
      <p className="mt-4">Let's state this a little more formally.</p>
      <p className="mt-4">
        Legendre and Gauss decided to minimize the sum of the squared errors.
      </p>
      <p className="mt-4">
        Squared Errors:{" "}
        <Latex>{"$\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2$"}</Latex>
      </p>
      <p className="mt-4">Where:</p>
      <ul className="mt-4 list-disc pl-8">
        <li>
          <Latex>{"$y_i$"}</Latex> is the actual value
        </li>
        <li>
          <Latex>{"$\\hat{y}_i$"}</Latex> is the predicted value from our line
        </li>
      </ul>
      <p className="mt-4">
        This immediately raises a question - why <em>squares</em> in particular?
      </p>

      <p className="mt-4">Let's outline a few alternatives.</p>

      <p className="mt-4">
        Absolute Errors: <Latex>{"$\\sum_{i=1}^{n} |y_i - \\hat{y}_i|$"}</Latex>
      </p>

      <p className="mt-4">
        Cubed Errors: <Latex>{"$\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^3$"}</Latex>
      </p>

      <p className="mt-4">
        Quartic Errors:{" "}
        <Latex>{"$\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^4$"}</Latex>
      </p>

      <p className="mt-4">So why least squares?</p>

      <p className="mt-4">
        Well, let's start with the trivial - we're trying to minimize something.
        I'm not going to dive into Calc 1, so take my word for it - minimizing
        means differentiating, and finding where the derivative equals 0. That's
        the game you have to play when you're minimizing.
      </p>

      <p className="mt-4">
        So we have an infinite universe of lines to choose from, lines that
        could fit our data. We're choosing the one that minimizes our error term
        (in this case, the squared error term).
      </p>

      <p className="mt-4">The general formula of a line is -</p>

      <p className="mt-4">
        <Latex>{"$y = mx + b$"}</Latex>
      </p>

      <p className="mt-4">
        Our points are <Latex>{"$\\hat{y}$"}</Latex>
      </p>

      <p className="mt-4">
        So we're trying to find the <Latex>{"$m$"}</Latex> and{" "}
        <Latex>{"$b$"}</Latex> that make it so that{" "}
        <Latex>{"$(\\hat{y} - (mx + b))^2$"}</Latex> is minimized.
      </p>

      <p className="mt-4">
        Nice thing about the fact that <Latex>{"$m$"}</Latex> and{" "}
        <Latex>{"$b$"}</Latex> are our only two free terms is that we can
        visualize it.
      </p>

      <div className="mt-4">
        <GLChart option={squaredErrorChart} style={{ height: "100%" }} />
      </div>

      <p className="mt-4">
        So, contestant number one - Absolute Errors:{" "}
        <Latex>{"$\\sum_{i=1}^{n} |y_i - \\hat{y}_i|$"}</Latex>
      </p>

      <div className="mt-4">
        <GLChart option={absoluteErrorChart} style={{ height: "100%" }} />
      </div>

      <p className="mt-4">
        Disqualified, because it doesn't differentiate smoothly. At the point
        when <Latex>{"$y = \\hat{y}$"}</Latex>, there's a sharp kink, which is
        plain annoying to deal with.
      </p>

      <p className="mt-4">
        And contestant number three - Cubed Errors:{" "}
        <Latex>{"$\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^3$"}</Latex>
      </p>

      <div className="mt-4">
        <GLChart option={cubedErrorChart} style={{ height: "100%" }} />
      </div>

      <p className="mt-4">
        Cubing doesn't deal nicely with signs - see, we don't really care about
        the sign of the error, but the cube treats it as though it's relevant -
        it preserves the error sign. In order to do something useful with this,
        we'd have to differentiate it again, at which point you're back to
        minimizing the squared error.
      </p>

      <p className="mt-4">
        And contestant number four - Quartic Errors:{" "}
        <Latex>{"$\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^4$"}</Latex>
      </p>

      <div className="mt-4">
        <GLChart option={quarticErrorChart} style={{ height: "100%" }} />
      </div>

      <p className="mt-4">
        This is interesting. The quartic error function is better than cubed,
        since it gets rid of the sign. But it's also a lot flatter around the
        minimum. What seems to be happening is that it's a lot more "accepting"
        of different lines around the minimum. This can be explained by the
        fact that when we raise the error the power of 4, we're giving outliers
        a lot of weight. Which means, that even "worse" lines seem comparable
        because they deal with an outlier or two pretty well.
      </p>

      <p className="mt-4">
        The higher the power, then, the less discerning the error function is.
      </p>

      <div className="mt-4">
        So, the square has a lot of really nice properties:
        <ul className="mt-2 list-disc pl-6">
          <li>It's differentiable (and when you differentiate it, you get a linear function <Latex>{"$x^2 \\rightarrow 2x$"}</Latex>)</li>
          <li>It gets rid of the sign of the error</li>
          <li>It's discerning</li>
          <li>It's convex [bowl shaped] (no sharp edges like the absolute or flat regions like the cubed)</li>
        </ul>
        There are others too, but they'll show up later.
      </div>

      <p className="mt-4">
        There is a downside - it's not robust to outliers (at least compared to the absolute). But it's still better than any higher powers.
      </p>

      <p className="mt-4">
        
      </p>
    </div>
  );
}
