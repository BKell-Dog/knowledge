# Real Analyticity
A function $f(x)$ is analytic at a point $a$ in its domain if it satisfies the two following conditions:
1. On some open interval around $a$ in the real domain, $(b, c) \in \mathbb{R}$, $f(x)$ can be expressed as its convergent Taylor series[^1], 
$$
f(x)=\sum_{n=0}^{\infty} c_{n}(x-a)^n=\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n \tag{1}
$$
2. $f(x)$ is infinitely differentiable everywhere on its domain, meaning that it has derivatives which exist at all points on its domain for any order of differentiation.

[^1]: See [[The Taylor Series]].