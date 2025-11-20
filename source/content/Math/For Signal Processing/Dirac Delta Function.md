# Definition
The Dirac Function as used in engineering is not rigorously mathematically defined. It is supposed to have the following two constraints simultaneously,

$$
\delta(x) = \begin{cases}
\infty, \quad x = 0 \\
0, \quad \>\>x\neq 0
\end{cases} \quad \quad \quad \int_{-\infty}^{\infty}\delta(x)\>dx = 1
$$
Mathematicians have pointed out[^1] that it is impossible for a function to satisfy both of these conditions simultaneously. Dirac himself responded to this critique by instead formulating his function as a "generalized function" or distribution (i.e. not itself a function but a class which encompasses many functions), and proposing that his integral should be interpreted as,
$$
\int_{-\infty}^{\infty}\delta(x)\>dx = \lim_{ \epsilon \to 0^+ } \int_{-\infty}^{\infty} \delta_{\epsilon}(x)\>dx
$$
where $\delta_{\epsilon}(x)$ is any function which satisfies
$$
\lim_{ \epsilon \to 0^+ } \delta_{\epsilon}(x) = \begin{cases}
\infty, \quad x = 0 \\
0, \quad \>\>x\neq 0
\end{cases}
$$
$$
\int_{-\infty}^{\infty} \delta_{\epsilon}(x)\>dx = 1
$$

So the delta function could be any function which always has an area of one, and which approaches infinity as some quantity associated with it, $\epsilon$, approaches zero. It could be the Gaussian normal function, $\delta_{\epsilon}(x)=\frac{1}{\epsilon\sqrt{\pi}}e^\frac{-x^2}{\epsilon^2}$, a box function, $\delta_{\epsilon}(x)=\begin{cases} \frac{1}{2\epsilon}, \quad |x| < \epsilon \\0, \quad otherwise \end{cases}$ , or a triangular function, $\delta_{\epsilon}(x)=\begin{cases} \frac{1}{\epsilon}\left( 1-\frac{|x|}{\epsilon} \right), \quad |x| < \epsilon \\0, \quad otherwise \end{cases}$. In undergrad I was taught the delta function visually, shown how some functions can be made taller and thinner at the same time, and that at the limit, the function can be infinitely tall and infinitesimally thin, thereby representing an 'impulse' signal.

![[https://galileo-unbound.blog/wp-content/uploads/2022/12/sincfcn.jpg?w=2048]]

However, in engineering, we accept this function without mathematical rigor as a useful tool that gets the job done.
# Properties


# Footnotes
[^1]: See [Lecture Notes on the Dirac Delta Function, Fourier Transform, Laplace Transform](https://materia.dfa.unipd.it/salasnich/dfl/dfl.pdf) by Luca Salasnich

# Further Reading
1. [Dirac Delta Function](https://www.math.wustl.edu/~alanchang/teaching/mathcamp/mathcamp2020_dirac_delta_function.pdf) by Alan Chang
2. [Paul Dirac's Delta Function](https://galileo-unbound.blog/2022/12/17/paul-diracs-delta-function/) by David Nolte