# Definition
Flux is a measure of vector field strength along a barrier. A barrier can be a curve in 2D, a surface in 3D, a volume in 4D, or an $n$-dimensional shape in $(n+1)$-dimensional space, $\mathbb{R}^{n+1}$, where a [[Vector Fields|vector field]] of $n$-dimensions is present.

The word *flux* is derived from the Latin word *fluxus*, meaning "flow". It is common to use flux to describe physical materials flowing through an imaginary surface, like water in a pipe flowing through an imaginary circular disk. Because of this, many people also visualize flux as vector field lines "flowing" or "moving" through a surface in 3D space. For example, we describe magnetic field lines as *flux*, as *flowing* through space, even though there is nothing moving.
## 2D
$$
\Phi = \int_{C} \vec{F}\>\cdot \hat{n}\>ds 
$$
where $\vec{F}$ is the vector field in $\mathbb{R}^2$, $C$ is some [[Smoothness|smooth]] curve in $\mathbb{R}^2$, $\hat{n}$ is the unit vector normal to $C$ at all points, and $ds$ is an infinitesimal arc length of $C$.
## 3D
$$
\Phi = \iint_{S} \vec{F} \>\cdot \hat{n}\>dS
$$
where $\vec{F}$ is the vector field in $\mathbb{R}^3$, $S$ is some [[Smoothness|smooth]] surface in $\mathbb{R}^3$, $\hat{n}$ is the unit vector normal to $S$ at all points, and $dS$ is an infinitesimal area of $S$.

# Derivation

## 1-Dimension
Suppose we have a one-dimensional space with a one-dimensional [[Vector Fields|vector field]], $\vec{f}(x)$, present everywhere. Then to calculate flux here (although the concept of flux may not be the same as in higher dimensions), we must designate a point $x_{0}$ which will be our mark for measuring the vector field strength.


## 2-Dimensions
Suppose we have a two-dimensional space, $\mathbb{R}^2$, with a two-dimensional [[Vector Fields|vector field]], $\vec{f}(x, y)$, present everywhere. Suppose we define a curve $C$ in $\mathbb{R}^2$, and we want to calculate the flux passing through $C$. Suppose $C$ is [[Parameterization|parameterized]] by a function $\vec{r}(t)$. We can perform a [[The Integral#The Line Integral|line integral]] over $C$, comparing the vector at any point along it, $(x_{0}, y_{0})$, to the normal vector to $C$ using a dot product, with the final result of,
$$
\int_{C} \vec{f} \cdot \hat{n}\>ds
$$
which we will now derive.

The arc length of the curve $C$ is $L$ and an infinitesimally small arc length segment is $ds$, where $s(t)$ is the partial arc length, as [[Parameterization#Arc Length|here]].
$$
s(t_{0}) = \int_{a}^{t_{0}} ||\vec{r}\>'(t)||\>dt \to ds = ||\vec{r}\>'(t)||dt
$$
The normal vector to $C$ at any point is found by first finding the tangent, then computing the perpendicular vector to that tangent. The tangent to $C$ at any point is $\vec{r}\>'(t)$, and the unit tangent at any point can be called $\vec{T}(t)$, and is $\vec{T}(t) = \frac{\vec{r}\>'(t)}{||\vec{r}\>'(t)||}$. Then, in 2D, a vector $\vec{b}$ can be perpendicular to a vector $\vec{a}$ if, by decomposing $\vec{a}$ into $x$- and $y$-components, $\vec{b} = \langle -a_{y}, a_{x} \rangle$ or $= \langle a_{y}, -a_{x} \rangle$. There are two possible perpendicular vectors to $\vec{T}(t)$, and it doesn't matter which is used so long as it is consistent along the curve. We will choose to calculate the perpendicular vector, $\vec{N}(t)$, in this way,
$$
\vec{T}(t) = \langle T_{x}(t), T_{y}(t)\rangle \to \vec{N}(t) = \langle-T_{y}(t), T_{x}(t)\rangle
$$
Then, we can normalize this vector into a unit normal vector,
$$
\hat{n}(t) = \frac{\vec{N}(t)}{||\vec{N}(t)||}
$$
or,
$$
\hat{n}(t) = \frac{1}{||\vec{r}\>'(t)||}\langle -\vec{r}_{y}\>'(t), \vec{r}_{x}\>'(t) \rangle
$$
Now we have everything we need to form an expression that shows a computation of the vector field strength through a curve:
$$
\Phi = \int_{C}\vec{f}(x, y) \cdot \hat{n}\>ds = \int_{a}^b \vec{f}(\vec{r}(t))\>\cdot \hat{n}\>ds
$$
Then, with the earlier expression $ds = |\vec{r}\>'(t)|dt$ and the expression for $\hat{n}$,
$$
\Phi = \int_{a}^{b}\vec{f}(\vec{r}(t))\>\cdot \hat{n} ||\vec{r}\>'(t)||dt = \int_{a}^{b}\vec{f}(\vec{r}(t))\>\cdot \langle -r_{y}(t), r_{x}(t) \rangle dt
$$
where $r_{x}(t)$ and $r_{y}(t)$ are the $x$- and $y$- components that make up $\vec{r}(t)$.

## 3-Dimensions
Suppose we have a three-dimensional space, $\mathbb{R}^3$, with a three-dimensional [[Vector Fields|vector field]], $\vec{F}(x, y, z)$, present everywhere. Suppose we define a flat surface $S$ in $\mathbb{R}^3$, and we want to calculate the flux passing through $S$.

## $n$-Dimensions