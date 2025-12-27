# Derivation
## Gauss's Law

## Gauss's Law for Magnetism

## Faraday's Law
[[Michael Faraday]] recorded experimentally that a voltage $V$ was induced within a conductive coil with $n$ turns when the magnetic field passing through that coil was altered, and that the induced voltage was proportional to the change in the magnetic field. We can write this simple relationship as,
$$
V=n \frac{d\varphi}{dt}
$$
where $\varphi$ is the magnetic flux passing through the coil, and $t$ is of course time.

## Ampère-Maxwell Law
$$
\begin{aligned}
\nabla\cdot\mathbf{E} &= \frac{\rho}{\varepsilon_0} &&\text{(Gauss's law)}\\[6pt]
\nabla\cdot\mathbf{B} &= 0 &&\text{(Gauss's law for magnetism)}\\[6pt]
\nabla\times\mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} &&\text{(Faraday's law)}\\[6pt]
\nabla\times\mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t} &&\text{(Ampère–Maxwell law)}
\end{aligned}
$$

$$
\begin{aligned}
\oint_{\partial V}\mathbf{E}\cdot d\mathbf{A} &= \frac{1}{\varepsilon_0}\int_V \rho\,dV \\[6pt]
\oint_{\partial V}\mathbf{B}\cdot d\mathbf{A} &= 0 \\[6pt]
\oint_{\partial S}\mathbf{E}\cdot d\boldsymbol{\ell} &= -\frac{d}{dt}\iint_S \mathbf{B}\cdot d\mathbf{A} \\[6pt]
\oint_{\partial S}\mathbf{B}\cdot d\boldsymbol{\ell} &= \mu_0\iint_S \mathbf{J}\cdot d\mathbf{A} + \mu_0\varepsilon_0\frac{d}{dt}\iint_S \mathbf{E}\cdot d\mathbf{A}
\end{aligned}
$$

$$
\begin{aligned}
\nabla\cdot\mathbf{D} &= \rho_{\mathrm{free}} \\[6pt]
\nabla\cdot\mathbf{B} &= 0 \\[6pt]
\nabla\times\mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\[6pt]
\nabla\times\mathbf{H} &= \mathbf{J}_{\mathrm{free}} + \frac{\partial \mathbf{D}}{\partial t}
\end{aligned}
$$

$$
\nabla\cdot\mathbf{J} + \frac{\partial \rho}{\partial t} = 0
$$

See [[The Integral]], [[The Differential]].
# References
1. [The Maxwell Equations - Part of the Feynman Lectures](https://www.feynmanlectures.caltech.edu/II_18.html)