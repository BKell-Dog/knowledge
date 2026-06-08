# Definition
Suppose we have a [[Smoothness|smooth]] surface $S$ in three-dimensional space $\mathbb{R}^3$, which can be [[Parameterization|parameterized]] by some function $\vec{S}(u, v)$, and that this surface's boundary is represented by a curve, $C = \partial S$, which can be parameterized by the function $\vec{C}(t)$. Note that the statement $C=\partial S$ defines $C$ as the infinitesimal new area added to $S$ if $S$ were to grow outwards along its border by some infinitesimal amount. Suppose we also have a [[Vector Fields|vector field]] $\vec{F}(x, y, z) = \langle F_{x}(x, y, z), F_{y}(x, y, z), F_{z}(x, y, z)\rangle$ permeating this space $\mathbb{R}^3$ so that all of $S$ is within it, and that $\vec{F}$ has [[Continuity|continuous]] first-order [[Partial Derivatives|partial derivatives]] on $S$.  Then Stokes' Theorem states,
$$
\iint_{S}(\nabla \times \vec{F}) \cdot d\vec{S} = \oint_{\partial S}\vec{F}\cdot d\vec{C}
$$
# Derivation
Stokes' Theorem unifies two methods of calculating [[Circulation|circulation]] around a surface. Suppose we have a surface $S$ existing in the presence of a [[Vector Fields|vector field]] $\vec{F}$: if we wanted to calculate

# References
1. [Unit 23: Stokes' Theorem - Harvard University](https://people.math.harvard.edu/~knill/teaching/summer2020/handouts/lecture23.pdf)
2. [A Derivation of Stokes' Theorem by Zaché, Luchini, and Battisti](https://www.researchgate.net/publication/375047042_A_derivation_of_the_Stokes_theorem)