# Definition
A vector field is a function which assigns each point in an $n$-dimensional space a corresponding vector of $m$ dimensions. Vector fields are commonly depicted, in 2D space for example, as a 2D graph in which every point $(x, y)$ serves as the starting point for a 2D vector, $\vec{F}(x, y)$. In 3D space, $\mathbb{R}^3$, each point is assigned a 3D vector, $\vec{F}(x, y, z)$. A vector field is defined as a function of the coordinates that make up its domain space, for example, a 3D vector field will be a function of $x$, $y$, and $z$, or of $i$, $j$, and $k$. Therefore,
$$
\vec{F}(x, y, z) = \begin{pmatrix}
F_{1}(x, y, z) \\
F_{2}(x, y, z) \\
F_{3}(x, y, z)
\end{pmatrix} = F_{1}(x, y, z)\hat{x} + F_{2}(x, y, z)\hat{y} + F_{3}(x, y, z)\hat{z}
$$
where $\hat{x}$, $\hat{y}$, and $\hat{z}$ are unit vectors that define a 3D space. An example vector field in 2 dimensions might be,
$$
\vec{F}(x, y) = \begin{pmatrix}
-y \\
x
\end{pmatrix} = -y \hat{x} + x \hat{y}
$$
and would be visualized as,

![](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields_Files/image001.png)
![](https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields_Files/image002.png)

One can see here that at each point $(x, y)$, there is a vector equal to $\begin{pmatrix} -y \\ x \end{pmatrix}$. At $(1, 2)$, then, we see a vector equal to $\begin{pmatrix} -2 \\ 1 \end{pmatrix}$.

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
All vectors fields contain a property we call *curl*, which is a measure of how much a vector field is curving at a given point. We do this by taking the derivative at that given point, with respect to all dimensions along which the given vector field may vary. For that reason it is required that the field must be differentiable at all points for which we want to calculate curl.

Curl measures how much the vector field curves instantaneously relative to fixed unit vector axes. If we define a 3D space with unit vectors $\langle\hat{i}, \hat{j}, \hat{k}\rangle$, and we have a vector field $\vec{F}(x, y, z) = \langle P(x, y, z), Q(x, y, z), R(x, y, z)\rangle=P\hat{i}+Q\hat{j}+R\hat{k}$ in that space, then we can take the derivative of $\vec{F}$ at each point with respect to each axis to create a new vector field.
$$
curl \vec{F} = \nabla \times \vec{F} = \begin{vmatrix}
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
where $\nabla$ is the [del operator](https://en.wikipedia.org/wiki/Del) $\nabla = \frac{\partial}{\partial x}\hat{i} + \frac{\partial}{\partial y}\hat{j} + \frac{\partial}{\partial z}\hat{k}$.

# The Laplacian

## Example
Let $F(x, y, z) = x^2 - y^2 + 2yz$. Then,
$$
grad\>F = \vec{\nabla}F = \langle 2x, -2y+2z, 2y \rangle \\[1.5em]
\Delta F = \vec{\nabla} \cdot \vec{\nabla} F = 2 - 2 = 0
$$
Therefore $F$ is harmonic.