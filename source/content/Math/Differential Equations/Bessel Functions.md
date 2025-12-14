# Definition
A Bessel function is one which is a solution to the following differential equation:
$$
x^2y''+xy'+(x^2-p^2)y=0 \tag{1}
$$
where $p$ is any constant and $y=y(x)$. The *order* of the Bessel function is defined by this constant $p$, which can be integer, half-integer, complex, etc., but which is most often a non-negative real number.

# Solutions

## Derivation of a Generic Solution

We can take equation (1) and divide it by $x^2$ to get, for $x>0$, 
$$
y''+\frac{1}{x}y'+(1-\frac{p^2}{x^2})y=0
$$
This is the standard form of a second-order differential eq., in the form $y''+P(x)y'+Q(x)y=0$. We can see clearly that at $x=0$ this equation produces an undefined value, so at that point the function is not [[Analytic]] and this represents a regular singularity. For that reason, we can
$$
y=x^{\alpha}(a_{0}+a_{1}x+a_{2}x^2+\dots+a_{n}x^n+\dots)
$$