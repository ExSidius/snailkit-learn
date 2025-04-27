# Linear Regression

## Setup
April 17th, 11:30PM
Finished the janitorial work associated with this model.

## How to fit a line?
April 18th, 10:37AM

Now the interesting question, how do you fit a line?

Specifically, how do you fit a line in an OLS (Ordinary Least Squares) model.

It's worth visiting the assumptions behind a univariate OLS model. 

Let's see what Wikipedia has to say, emulating a workflow that any reasonable amateur might employ - 
1. Weak Exogeneity
2. Linearity
3. Homoskedasticity
4. Independence of Errors
5. Lack of perfect multicollinearity

Let's break these down one at a time.

### Weak Exogeneity

Per Wikipedia - 
> This essentially means that the predictor variables x can be treated as fixed values, rather than random variables. This means, for example, that the predictor variables are assumed to be error-free—that is, not contaminated with measurement errors. Although this assumption is not realistic in many settings, dropping it leads to significantly more difficult errors-in-variables models.

We need to talk about what it is we're actually doing here.

Let's imagine that you have some procedure that generates data. Let's deal with bunnies, and imagine that we're measuring hop distance, and trying to explain it based on the length of the bunny's feet.

There is some True and Perfect Relationship in the natural world, but it's confounded by various noisy factors. For example, another thing that affects hop distance is what the bunny ate last night, but we simply don't have access to that. This is a source of noise.

What We Measure = True and Perfect Relationship + Noise
y = X*β + ε

(β is a set of coefficients that quantify how much hop distance changes with a unit change in bunny foot length.)

When we assume weak exogeneity, we're essentially saying that while there are some small other noisy elements to this relationship, we aren't introducing measurement error into X directly.
Our ruler is not miscalibrated when we measure the length of the bunny's feet.

If that were the case, then we'd have a new source of noise!
```
X = X' + η

X' -> actual measurement
η -> measurement error
```

Then our overall equation becomes -
```
y = X*β + ε
=> y = (X' + η)*β + ε
=> y = X'*β + (η*β) + ε
```

This is harder to model, and a simple OLS model won't do it.

Under *no* exogeneity, both X *and* y are noisy. X *may* be correlated with ε
Under weak exogeneity, only y is noisy. X is uncorrelated with ε.
Under strong exogeneity, only y is noisy, X isn't correlated with ε now, in the past, in the future, ever. (this comes up more in things like timeseries modeling - it's just a much stricter constraint on the description of the noise).

So weak exogeneity just means that we aren't introducing measurement error when we measure the bunny's feet - only ignoring the noisy that may impact the otherwise perfect and true relationship between bunny foot size and hop distance. i.e. X is not correlated with the overall noise term - they are independent.

Weak exogeneity assumes that the predictors (e.g., bunny foot length) are measured without error and are uncorrelated with the noise in the response variable (e.g., hop distance).

One thing I haven't addressed is ε and what assumptions we're making about it. That will come later.

Here’s your cleaned-up and formatted explanation in Markdown:

---

## Linearity

According to [Wikipedia](https://en.wikipedia.org/wiki/Linearity), linearity in regression models means:

> The mean of the response variable is a linear combination of the parameters (regression coefficients) and the predictor variables.  
>  
> This assumption is less restrictive than it may appear. Since predictor variables are treated as fixed values, linearity is a restriction only on the parameters—not on the predictors themselves. Predictor variables can be arbitrarily transformed, and multiple copies of a single predictor can be used with different transformations.  
>  
> For example, in **polynomial regression**, linear regression is used to fit the response variable as a polynomial function of a predictor variable. However, this flexibility can lead to **overfitting**, which often requires regularization techniques like **ridge regression** or **lasso regression**.  
>  
> **Bayesian linear regression** is another approach that incorporates regularization inherently by placing priors on coefficients. In fact, ridge and lasso can be interpreted as special cases of Bayesian linear regression with specific priors.

---

### Revisiting the Idea of a Line

In basic algebra, a line is defined as:

```math
y = mx + b
```

In higher dimensions, this generalizes to:

```math
y = m₁x₁ + m₂x₂ + m₃x₃ + ... + b
```

Or more compactly, in **matrix notation**:

```math
y = Xβ
```

- This includes the intercept term.
- It does **not** yet include the noise term—this is just the structure of the linear prediction.

---

### Can OLS Fit More Than Just Straight Lines?

Yes. Ordinary Least Squares (OLS) can fit **non-linear shapes** as long as the model remains **linear in the parameters**.

Example: A polynomial model

```math
y = m₁x₁ + m₂x₂² + m₃x₃³ + ... + b
```

Even though the relationship between inputs and outputs is **non-linear**, the model is **linear in the coefficients**. Therefore, OLS can be used.

### Transforming the Inputs

To make this even clearer, we can redefine the variables:

```
z₁ = x₁  
z₂ = x₂²  
z₃ = x₃³  
...
```

Then rewrite the equation as:

```math
y = m₁z₁ + m₂z₂ + m₃z₃ + ... + b
```

This is now an **ordinary linear equation** in terms of the `z` variables.

---

### What *Doesn't* Count as Linear?

Linearity is about the coefficients, not the predictors. If the **coefficients** interact **non-linearly** with the predictors, the model is **not linear**.

For example:

```math
y = β₀ + β₁^X
```

This is **not linear**, because the predictor `X` appears as an exponent to a coefficient. In such cases, OLS does not apply.

> **Key Point**:  
> A model is linear **if it is linear in β**. The predictors `X` can be arbitrary transformations—as long as the relationship with β is linear.

---