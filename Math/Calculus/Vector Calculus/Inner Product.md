An inner product is a generalization of the [[Vector Operations#Dot Product|dot product]]. Both a dot product and an inner product take in two vectors and output a scalar. The dot product is found by multiplying the $k$-th component of the first vector by the $k$-th component of the second, and summing all these products.
$$
\vec{u} \cdot \vec{v}=u_{1}v_{1}+u_{2}v_{2}+...u_{n}v_{n}=\sum_{k=1}^nu_{k}v_{k}
$$
An inner product can be any other function so long as it satisfies the requirements below. For example, we could define a vector of $n$ scalar weights, $w$, and apply these weights to the two vectors:
$$
\langle\vec{u},\vec{v}\rangle=\sum_{k=1}^nw_{k}u_{k}v_{k}
$$
Note that if we define the inner product to include these weights, then all inner products and operations relying on the inner product used thereafter will include these weights *implicitly*.

# Definition
Within a given [[Vector Space|vector space]] $V$, an inner product is any vector function, denoted $\langle\>,\>\rangle$ or $\langle \vec{u},\vec{v}\rangle$, which satisfies the following three axioms for some arbitrary vectors $\vec{u}$, $\vec{v}$, and $\vec{w}$ in $V$. The three axioms are slightly different for vector spaces in $\mathbb{R}$ vs. in $\mathbb{C}$.
### Real Inner Products

#### Positive-definiteness
$$
\langle \vec{u}, \vec{u}\rangle \geq 0 \quad\quad \langle \vec{u}, \vec{u}\rangle =0\>\>\text{only if}\>\>\vec{u}=0
$$
#### Bilinearity
Recall that linearity is composed of additivity, $f(x+y)=f(x)+f(y)$, and homogeneity, $f(ax)=a\cdot f(x)$. So for an inner product, we must have,
$$
\langle a\vec{u}, \vec{v}\rangle = a\cdot\langle \vec{u}, \vec{v}\rangle \quad\quad \langle \vec{u}, b\vec{v}\rangle = b\cdot\langle \vec{u}, \vec{v}\rangle
$$
$$
\langle a\vec{u}+b\vec{v}, \vec{w}\rangle = \langle a\vec{u}, \vec{w}\rangle+\langle b\vec{v}, \vec{w}\rangle \quad\quad \langle \vec{u}, a\vec{v}+b\vec{w}\rangle = \langle \vec{u}, a\vec{v}\rangle+\langle \vec{v}, b\vec{w}\rangle
$$
for any scalars $a$ and $b$.

#### Symmetry
$$
\langle\vec{u}, \vec{v}\rangle=\langle\vec{v}, \vec{u}\rangle
$$
### Complex Inner Products
#### Positive-definiteness
$$
\langle \vec{u}, \vec{u}\rangle \geq 0 \quad\quad \langle \vec{u}, \vec{u}\rangle =0\>\>\text{only if}\>\>\vec{u}=0
$$
#### "Sesquilinearity"
A word which means "one-and-a-half linearity". Bilinearity cannot hold at the same time as symmetry and positive-definiteness for complex inputs. For example, if we have $\langle i\vec{u}, i\vec{u}\rangle$, then positive-definiteness insists that this product be greater than or equal to 0, but if we apply bilinearity, we have $\langle i\vec{u}, i\vec{u}\rangle=i\cdot i\cdot\langle\vec{u},\vec{u}\rangle=(-1)\cdot\langle\vec{u},\vec{u}\rangle<0$. Therefore we need to modify the requirement of linearity so that for one (not both) of the inputs, if linearity is applied, we get the *conjugate* of the scalar factor out instead of just the scalar factor itself.
$$
\langle a\vec{u}, \vec{v}\rangle = a\cdot\langle \vec{u}, \vec{v}\rangle \quad\quad \langle \vec{u}, b\vec{v}\rangle = \bar{b}\cdot\langle \vec{u}, \vec{v}\rangle  =b^*\cdot\langle \vec{u}, \vec{v}\rangle
$$
or vice versa with $b$ remaining linear and $a\to \bar{a}$. Then, positive-definiteness holds: $\langle i\vec{u}, i\vec{u}\rangle=i\cdot \bar{i}\cdot\langle\vec{u},\vec{u}\rangle=(i)(-i)\cdot\langle\vec{u},\vec{u}\rangle=(1)\cdot\langle\vec{u},\vec{u}\rangle<0$.

Additivity remains the same as for real numbers:
$$
\langle a\vec{u}+b\vec{v}, \vec{w}\rangle = \langle a\vec{u}, \vec{w}\rangle+\langle b\vec{v}, \vec{w}\rangle \quad\quad \langle \vec{u}, a\vec{v}+b\vec{w}\rangle = \langle \vec{u}, a\vec{v}\rangle+\langle \vec{v}, b\vec{w}\rangle
$$

#### Conjugate Symmetry
$$
\langle\vec{u}, \vec{v}\rangle=\overline{\langle\vec{v}, \vec{u} \rangle} = \langle \vec{v}, \vec{u}\rangle^*
$$
# Uses
An inner product is used to define the following properties. These properties are normally fundamental to vector calculus, and most vector spaces are also inner product spaces where these properties are well defined. In vector space which are not also inner product space, these properties become largely meaningless or cannot be defined.

#### Vector Length or Norm
$$
||\vec{u}||\coloneqq \sqrt{\langle \vec{u}, \vec{u} \rangle}
$$
This property is called the *norm* of the inner product, and is also the equation used to define the length of a vector. A vector space that can define a norm using its inner product is a *normed* vector space. If we've established *length* as a property, a number of others flow from this, including angle, distance, orthogonality, projection, etc.
#### Distance Between Vectors
$$
d(\vec{u}, \vec{v})\coloneqq||\vec{u}-\vec{v}||=\sqrt{\langle\vec{u}-\vec{v}, \vec{u}-\vec{v}\rangle}
$$
This is also called "metric", and a space which has a metric is a metric space. In a metric space we can talk about points being "close" or "far" from each other.
#### Angle Between Vectors
$$
cos(\theta)\coloneqq\frac{\langle \vec{u}, \vec{v}\rangle}{||\vec{u}||\>||\vec{v}||} \quad\text{or}\quad\theta\coloneqq\cos^{-1}(\frac{\langle \vec{u}, \vec{v}\rangle}{||\vec{u}||\>||\vec{v}||})
$$
#### Vector Orthogonality
$$
\vec{u} \perp \vec{v} \quad\text{only when}\quad \langle\vec{u},\vec{v}\rangle=0
$$
#### Pythagorean Theorem
If $\vec{u} \perp \vec{v}$, then,
$$
||\vec{u}||^2+||\vec{v}||^2=||\vec{u}+\vec{v}||^2
$$
# Inner Product Space
A vector space that has an inner product associated with it is an inner product space. On some vector space $V$ we can define multiple inner products, and so give rise to many inner product spaces from the same underlying vector space. There can also be a vector space with **no** inner product.

### Examples of Inner Product Spaces
The real numbers $\mathbb{R}$, where the inner product is $\langle x,y\rangle=xy$.

Euclidean space, $\mathbb{R}^n$, where the inner product is the dot product, $\langle(x_{1}, x_{2}, ... x_{n}),(y_{1}, y_{2}, ...y_{n})\rangle = x_{1}y_{1}+x_{2}y_{2}+...x_{n}y_{n}$.


# References
1. [Real and Complex Inner Products - Columbia University](https://www.math.columbia.edu/~dejong/courses/notes-bob/innerprods.pdf)
2. [Inner Product - Wolfram Mathworld](https://mathworld.wolfram.com/InnerProduct.html)
3. [Inner Product Space - Wikipedia](https://en.wikipedia.org/wiki/Inner_product_space#Basic_results,_terminology,_and_definitions)