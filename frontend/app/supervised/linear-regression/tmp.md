A quick tangent...

Sometimes math gets a reputation for being this abstruse sport, almost like Herman Hesse's Bead Glass Game.

You start with some assumptions, some axioms, and then you build from there.

You construct these marvelous wonderful, intricate systems, almost like your very own fantasy world, and then you see what is possible here.

And you could really start from any set of axioms and explore infinitely. It's just a matter of time and patience.

This perception or interpretation of the development of math, is a bit of a myth. While it's certainly true that you could postulate pretty much any set of axioms and go from there, this isn't what happens in practice. In practice, mathematicians are trying to solve some problem, and they will often make choices that are cold, simple, and pragmatic. 

Gauss was interested in the trajectory of planets in our solar system. While he was certainly more fascinated with the math than your average bloke off the street, he decided on his implementation of an analysis tool (the aforementioned Method of Least Squares) because it worked and was simple (relatively speaking, linear algebra still hadn't been invented, and so things that we can do more or less trivially today still required Gauss's literal human computer brain to spend hours computing).

### So why least squares?

Well, let's start with the trivial - we're trying to minimize something. I'm not going to dive into Calc 1, so take my word for it - minimizing means differentiating, and finding where the derivative equals 0. That's the game you have to play when you're minimizing.

So we have an infinite universe of lines to choose from, lines that could fit our data. We're choosing the one that minimizes our error term (in this case, the squared error term).

The general formula of a line is - 
y = m*x + b

our points are \\hat{y}

so we're trying to find the m and b that make it so that (\\hat{y} - m*x + b)^2 is minimized.

Nice thing about the fact that m and b are our only two free terms is that we can visualize it.

<insert 3d visualization in which m is on the x-axis, b is on the y-axis, and the squared error is on the z axis>

So, contestant number one -

<p className="mt-4">
Absolute Errors: <Latex>{"$\\sum_{i=1}^{n} |y_i - \\hat{y}_i|$"}</Latex>
</p>

Disqualified, because it doesn't differentiate smoothly. At the point when y = \\hat{y}, there's a sharp kink, which is plain annoying to deal with.

...add a visualization