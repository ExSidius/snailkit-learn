import { MarkdownContent } from "@/components/markdown-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const installationMarkdown = `
# Installation Guide

snailkit-learn is a Python package that can be installed using pip. Follow the instructions below to get started.

## Requirements

- Python 3.8 or higher
- NumPy
- Matplotlib (for visualizations)

## Installation Steps

You can install snailkit-learn using pip:

\`\`\`bash
pip install snailkit-learn
\`\`\`

Or directly from the source code:

\`\`\`bash
git clone https://github.com/username/snailkit-learn.git
cd snailkit-learn
pip install -e .
\`\`\`

## Verifying Installation

You can verify that snailkit-learn is installed correctly by running:

\`\`\`python
import snailkit_learn as skl
print(skl.__version__)
\`\`\`

## Quick Start

Here's a simple example to get you started with linear regression:

\`\`\`python
import numpy as np
import snailkit_learn as skl

# Generate some sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 6])

# Create and train a linear regression model
model = skl.linear_model.LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(np.array([[6], [7]]))
print(predictions)
\`\`\`
`

export default function InstallationPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-8">
        <MarkdownContent content={installationMarkdown} />

        <Tabs defaultValue="pip" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pip">Pip</TabsTrigger>
            <TabsTrigger value="conda">Conda</TabsTrigger>
            <TabsTrigger value="docker">Docker</TabsTrigger>
          </TabsList>
          <TabsContent value="pip" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation with pip</CardTitle>
                <CardDescription>The recommended way to install snailkit-learn</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>pip install snailkit-learn</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conda" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation with conda</CardTitle>
                <CardDescription>For Anaconda or Miniconda users</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>conda install -c conda-forge snailkit-learn</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="docker" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Using Docker</CardTitle>
                <CardDescription>Run snailkit-learn in a container</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>docker pull username/snailkit-learn docker run -it username/snailkit-learn</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
