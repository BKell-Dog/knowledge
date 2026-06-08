# Definition
A vector field is a function which assigns each point in an $n$-dimensional space a corresponding vector of $m$ dimensions. Vector fields are commonly depicted, in 2D space for example, as a 2D graph in which every point $(x, y)$ serves as the starting point for a 2D vector, $\vec{F}(x, y)$. In 3D space, $\mathbb{R}^3$, each point is assigned a 3D vector, $\vec{F}(x, y, z)$. A vector field is defined as a function of the coordinates that make up its domain space, for example, a 3D vector field will be a function of $x$, $y$, and $z$, or of $i$, $j$, and $k$. Therefore,
$$
\vec{F}(x, y, z) = \begin{pmatrix}
F_{1}(x, y, z) \\
F_{2}(x, y, z) \\
F_{3}(x, y, z)
\end{pmatrix} = F_{1}(x, y, z)\hat{x} + F_{2}(x, y, z)\hat{y} + F_{3}(x, y, z)\hat{z}
$$
where $\hat{x}$, $\hat{y}$, and $\hat{z}$ are orthogonal unit vectors that define a 3D space. An example vector field in 2 dimensions might be,
$$
\vec{F}(x, y) = \begin{pmatrix}
-y \\
x
\end{pmatrix} = -y \hat{x} + x \hat{y}
$$
and would be visualized as,
![](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields_Files/image001.png)
![](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields_Files/image002.png)
One can see here that at each point $(x, y)$, there is a vector equal to $\begin{pmatrix} -y \\ x \end{pmatrix}$. At $(1, 2)$, we see a vector equal to $\begin{pmatrix} -2 \\ 1 \end{pmatrix}$.

A sample 3D vector field might be,
$$
\vec{F}(x, y, z) = \begin{pmatrix}
2x \\
-2y \\
-2x
\end{pmatrix} = 2x \hat{x} - 2y \hat{y} - 2x \hat{z}
$$
which is visualized as,

![](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields_Files/image003.png)
![](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields_Files/image004.png)

We can see here, too, that at a point $(1, 2, 3)$ there is a vector equal to $\begin{pmatrix} 2 \\ -4 \\ -2 \end{pmatrix}$.
For much of calculus and physics, a vector field is required to be (and naturally is) [[Smoothness|smooth]] at all points.
## The 'Del' Operator
We must define a symbolic vector, one which has not real dimensions but which must be a vector for us to use it in vector math, which we will refer to as 'del' and which we will denote $\vec{\nabla}$. This symbolic vector will have components $\vec{\nabla} = \langle \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \rangle$, which may be applied to a scalar function, $F(x, y, z)$, or to a vector function, $\vec{F}(x, y, z) = \langle F_{1}(x, y, z), F_{2}(x, y, z), F_{3}(x, y, z) \rangle$.

We can apply the del operator to the scalar function $F$ as follows,
$$
\vec{\nabla}F = \langle  \frac{\partial F}{\partial x}, \frac{\partial F}{\partial y}, \frac{\partial F}{\partial z}  \rangle
$$
This is called the [[Vector Fields#Gradient Fields|gradient]] of $F$, written $grad\>\vec{F} = \vec{\nabla}F$, and is a **vector**.

We can apply the del operator to the vector function $\vec{F}$ in two ways, in a dot product or in a cross product, as follows,
$$
\vec{\nabla} \cdot \vec{F} = \frac{\partial F_{1}}{\partial x} + \frac{\partial F_{2}}{\partial y} + \frac{\partial F_{3}}{\partial z}
$$
which is called the [[Vector Fields#Divergence|divergence]] of $\vec{F}$, written $div\>\vec{F} = \vec{\nabla} \cdot \vec{F}$, and is a **scalar**; or,
$$
\vec{\nabla} \times \vec{F} = \begin{vmatrix}
\hat{x} \quad \hat{y} \quad \hat{z} \\
\frac{\partial}{\partial x} \quad \frac{\partial}{\partial y} \quad \frac{\partial}{\partial z} \\
F_{1} \quad F_{2} \quad F_{3}
\end{vmatrix} = (\frac{\partial F_{3}}{\partial y} - \frac{\partial F_{2}}{\partial z})\>\hat{x}\>\> + ( \frac{\partial F_{1}}{\partial z} - \frac{\partial F_{3}}{\partial x})\>\hat{y}\>\> + (\frac{\partial F_{2}}{\partial x} - \frac{\partial F_{1}}{\partial y})\>\hat{z}
$$
which is called the [[Vector Fields#Curl|curl]] of $\vec{F}$, written $curl\>\vec{F} = \vec{\nabla} \times \vec{F}$, and is a **vector**.

There is a second way to apply the del operator to a scalar function which is commonly used,
$$
\vec{\nabla} \cdot \vec{\nabla}F = \frac{\partial^2 F_{1}}{{\partial x}^2} + \frac{\partial^2 F_{2}}{{\partial y}^2} + \frac{\partial^2 F_{3}}{{\partial z}^2} = \Delta F
$$
which is called the [[Vector Fields#The Laplacian|Laplacian]] of $F$. Laplace's differential equation is $\Delta F = \vec{\nabla} \cdot \vec{\nabla}F = 0$, and any solution to this which is class $C^2$ is a harmonic function. It should be obvious that this operation is simply taking the divergence of the gradient field of $F$.
# Gradient Fields

# Divergence


# Curl
Curl is a measure of how much a vector field rotates at a given point. We calculate curl as the cross product $\vec{\nabla} \times \vec{F}$, which results in another vector field function that represents curl values,
$$
curl \vec{F} = \vec{\nabla} \times \vec{F} = \begin{vmatrix}
\hat{i} \quad \hat{j} \quad \hat{k} \\
\frac{\partial}{\partial x} \quad \frac{\partial}{\partial y} \quad \frac{\partial}{\partial z} \\
P \quad Q \quad R
\end{vmatrix} \\[1.5em] 
% = \hat{i}\begin{vmatrix}
%\frac{\partial}{\partial y} \quad \frac{\partial}{\partial z} \\
%Q \quad R
%\end{vmatrix} - \hat{j} \begin{vmatrix}
%\frac{\partial}{\partial x} \quad \frac{\partial}{\partial z} \\
%P \quad R
%\end{vmatrix} + \hat{k} \begin{vmatrix}
%\frac{\partial}{\partial x} \quad \frac{\partial}{\partial y} \\
%P \quad Q
%\end{vmatrix}
= (\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z})\>\hat{i}\>\> + ( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x})\>\hat{j}\>\> + (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})\>\hat{k}
$$
But let us first understand the concept of curl from first principles.

### Curl in 1-Dimension
If we have a vector field in one dimension, it has no curl: space consists only of a single line, and every point $(x)$ along the single dimension is assigned a vector represented as $\langle x \rangle$, which has magnitude as well as a direction of either *forward* or *backward*, $+$ or $-$.

### Curl in 2-Dimensions
If we have a vector field that exists in two dimensions, then each point $(x, y)$ is assigned a vector $\vec{f}(x, y) = \langle f_{1}(x, y), f_{2}(x, y) \rangle$, and any $\vec{f}$ can curl in either a clockwise or counter clockwise direction. That is, compared to the vectors immediately adjacent to it, a vector at a single point $\vec{f}(x, y)$ can have either a larger or smaller $x$-component (indicating rotation about the y-axis), and/or a larger or smaller $y$-component (indicating rotation about the x-axis).

#### Differential Derivation
For a vector $\vec{f}$, $f_{1}$ is the $x$-component and $f_{2}$ is the $y$-component. We can conceive of these components as a left-to-right force and an up-and-down force that act on the final vector, and if we sweep a single point through space, it will experience many different lateral or vertical forces according to the function $\vec{f}$. If we sweep a point along a horizontal line parallel to the x-axis, then an upward vertical force, a positive $f_{2}$, will represent a counterclockwise rotation about the centerpoint; a downward force, a negative $f_{2}$, will represent a clockwise rotation. Therefore, to discover the curl of $\vec{f}$ along a horizontal line, we must take the derivative of $f_{2}$ with respect to $x$, $\frac{\partial f_{2}}{\partial x}$.

For the same reason, by sweeping a point along a vertical line and observing the value of $f_{1}$ at each position, the curl of $\vec{f}$ along a vertical line will be the derivative of $f_{1}$ with respect to $y$, $\frac{\partial f_{1}}{\partial y}$.

Then, to find the total curl of $\vec{f}$, we must consider both $\frac{\partial f_{2}}{\partial x}$ and $\frac{\partial f_{1}}{\partial y}$. How do we relate them?

Let's return to basic concepts. At the point $(x, y)$, the vector field is $\vec{f}(x, y) = \langle f_{1}(x, y),\>f_{2}(x, y) \rangle$. Then at an infinitesimal distance away from that point, at $(x + \Delta x, y)$, the vector field is 
$$
\vec{f}(x + \Delta x, y) \approx \langle   f_{1}(x, y) + \frac{\partial f_{1}(x, y)}{\partial x} \Delta x,\> f_{2}(x, y) + \frac{\partial f_{2}(x, y)}{\partial x} \Delta x   \rangle
$$
and at a point $(x,\>y + \Delta y)$,
$$
\vec{f}(x, y + \Delta y) \approx \langle   f_{1}(x, y) + \frac{\partial f_{1}(x, y)}{\partial y} \Delta y,\> f_{2}(x, y) + \frac{\partial f_{2}(x, y)}{\partial y} \Delta y \rangle
$$
Then these changes can be represented as a matrix:
$$
\begin{bmatrix}
\>f_{1}(x, y) \>\\
\>f_{2}(x, y) \>
\end{bmatrix} = \begin{bmatrix}
\frac{\partial f_{1}}{\partial x} \quad \frac{\partial f_{1}}{\partial y} \\
\frac{\partial f_{2}}{\partial x} \quad \frac{\partial f_{2}}{\partial y}
\end{bmatrix} \begin{bmatrix}
\Delta x \\
\Delta y
\end{bmatrix}
$$
This 2x2 matrix is a Jacobian. Any matrix can be broken apart into a [[Symmetry|symmetric]] and [[Symmetry#Antisymmetry|antisymmetric]] component: $M = S + A = \frac{1}{2}(M + M^T) + \frac{1}{2}(M - M^T)$. Therefore this Jacobian's antisymmetric component is,
$$
A = \frac{1}{2}\begin{bmatrix}
0 \quad \frac{\partial f_{1}}{\partial y} - \frac{\partial f_{2}}{\partial x} \\
\frac{\partial f_{2}}{\partial x} - \frac{\partial f_{1}}{\partial y} \quad 0
\end{bmatrix} = \frac{1}{2}\begin{bmatrix}
0 \quad -(\frac{\partial f_{2}}{\partial x} - \frac{\partial f_{1}}{\partial y}) \\
\frac{\partial f_{2}}{\partial x} - \frac{\partial f_{1}}{\partial y} \quad 0
\end{bmatrix}
$$
We now have a relationship between $\frac{\partial f_{2}}{\partial x}$ and $\frac{\partial f_{1}}{\partial y}$. This matrix $A$ represents an infinitesimal rotation, and the off-diagonal element represents the curl of $\vec{f}$. Thus we have,
$$
curl \> \vec{f} = \frac{\partial f_{2}(x, y)}{\partial x} - \frac{\partial f_{1}(x, y)}{\partial y} = \begin{vmatrix}
\frac{\partial}{\partial x} \quad \frac{\partial}{\partial y} \\
f_{1}(x, y) \quad f_{2}(x, y)
\end{vmatrix} = \vec{\nabla} \times \vec{f}
$$

#### Integral Derivation
Suppose the 2D vector field $\vec{f}$ has some closed curve within it, $C$, which itself encloses a 2D space $A$, and that $C$ can be [[Parameterization|parameterized]] by a function $\vec{r}(t)$. Then, for every infinitesimal section of $\vec{r}$, $d\vec{r}$, we can compute the dot product of that small vector with the vector of $\vec{f}$ at that same point, to find the "circulation" of $\vec{f}$ along $C$, which is really just a measure of how much the vector field aligns with a tangent vector to $C$ at every point along $C$. Thus we have the integral along a closed curve of $\vec{f}$ dot-producted with an infinitesimal section of $\vec{r}$:
$$
circ \> \vec{f} = \oint_{C}\vec{f} \cdot d\vec{r}
$$
We can see that, according to this formulation, a longer curve $C$ will result in a larger circulation, which is improper: our goal is to measure the circulation of the vector field without considerations of $C$ or $A$. For that reason we will also normalize the area to find the circulation per unit area:
$$
circ \> \vec{f} = \frac{1}{|A|}\oint_{C}\vec{f} \cdot d\vec{r}
$$

where $|A|$ is the area of $A$. This integral can be used to find the curl of $\vec{f}$ at a single point if we shrink the radius (or area, if not a circle) of $A$ down to $0$ while keeping it centered at $(x, y)$, as here:
$$
curl \> \vec{f} = \lim_{ |A| \to 0 } \frac{1}{|A|}\oint_{C}\vec{f} \cdot d\vec{r}
$$
Instead of conceiving of curl as instantaneous rotation in one direction or the other, we are now thinking of it as the total rotation-per-unit-area of an infinitesimally small area. Greene's Theorem states,
$$
\oint_{C} \vec{F} \cdot d\vec{r} = \iint_{A} (\vec{\nabla} \times \vec{F}) da
$$
Here we can see that this former expression of curl is identical to the differential form.
# The Laplacian

## Example
Let $F(x, y, z) = x^2 - y^2 + 2yz$. Then,
$$
grad\>F = \vec{\nabla}F = \langle 2x, -2y+2z, 2y \rangle \\[1.5em]
\Delta F = \vec{\nabla} \cdot \vec{\nabla} F = 2 - 2 = 0
$$
Therefore $F$ is harmonic.