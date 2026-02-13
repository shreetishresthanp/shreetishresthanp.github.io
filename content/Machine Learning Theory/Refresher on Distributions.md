---
title: Refresher on Distributions
draft: false
tags:
  -
---
> *I occasionally keep mixing up distributions, do here's a reference for when I'd need it.*

##### Gaussian (normal) distribution 
- The fundamental one
- Bell curve
- Heights of people, test scores
##### Notation
- $X \sim N(\mu, \sigma^2)$
	- where $\mu$ is the mean (center of the distribution)
	- $\sigma^2$ is variance (spread)
	- $\sigma$ is standard deviation
- $X$ can take any real value from ${-\infty}$ to ${\infty}$ (continuous distribution)
- $N(0,1)$ is the standard normal
##### PDF
- $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \cdot \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$
	- $\frac{1}{\sqrt{2\pi\sigma^2}}$: Normalization constant (ensures total area under curve = 1)
	- $\exp(\cdots)$: The exponential gives the bell shape
	- $(x-\mu)^2$: Squared distance from mean -- makes it symmetric
	- $2\sigma^2$: Controls the spread -- larger $\sigma^2$ means wider bell

#### Poisson Distribution
- Models number of events occurring in a fixed time interval
- number of emails per hour, typos per page
##### Notation
- $X \sim \lambda$
	- where $\lambda$ is average no. of events ($\lambda > 0$)
	- X is discrete $(0,1,2...)$ non-negative integers
##### PMF
- $P(X = k) = \frac{\lambda^k \cdot e^{-\lambda}}{k!} \quad \text{for } k = 0, 1, 2, \ldots$
	- $\lambda^k$: Higher $\lambda$ or higher $k$ increases this term
	- $e^{-\lambda}$: This normalizes the distribution (ensures probabilities sum to 1)
	- $k!$: Factorial in denominator makes large $k$ values less likely
- Mean: $\mathbb{E}[X] = \lambda$
- Variance: $\operatorname{Var}(X) = \lambda$ (mean = variance!)
- For MGF computation, sum over $k=1,2,...$ and recognize:
	- $e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}$
#### Bernoulli Distribution
- Single trial with exactly two outcomes (success/failure)
- Coin flip (heads/tails), exams (pass, fail)
##### Notation
- $X \sim p$
	- where p is probability of success $0 \leq p \leq 1$
	- $X \in {[0,1]}$

##### PMF
$$\begin{align*}
P(X = 1) &= p \\
P(X = 0) &= 1 - p
\end{align*}$$
- More formally, 
- $P(X = k) = p^k \cdot (1-p)^{1-k} \quad \text{for } k \in \{0, 1\}$
- Mean: $\mathbb{E}[X] = p$
- Variance: $\operatorname{Var}(X) = p(1-p)$

#### Uniform Distribution
- A random variable where every value within the interval is equally likely
- random point on line, random angle between 0 and 360
##### Notation
- $X \sim [a,b]$
	- where $a$ and $b$ are endpoints of the interval and $a < b$
	- $X \in [a,b]$ (any real number between a and b)
	- This is also a continuous distribution like Gaussian
##### PDF
- $$f(x) = \begin{cases}
\frac{1}{b-a} & \text{for } a \leq x \leq b \\
0 & \text{otherwise}
\end{cases}$$
	- $\frac{1}{b-a}$ because the area under the curve must be equal to 1
	- $\int_a^b \frac{1}{b-a} \, dx = \frac{b-a}{b-a} = 1 \quad$
- Mean: $\mathbb{E}[X] = \frac{a+b}{2}$ (midpoint)
- Variance: $\operatorname{Var}(X) = \frac{(b-a)^2}{12}$
