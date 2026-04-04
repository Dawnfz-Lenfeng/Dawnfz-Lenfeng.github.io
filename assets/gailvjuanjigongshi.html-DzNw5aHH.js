import{_ as t,c as n,f as i,o as l}from"./app-DHGpQ4MI.js";const e={};function s(r,a){return l(),n("div",null,a[0]||(a[0]=[i(`<h1 id="概率卷积公式" tabindex="-1"><a class="header-anchor" href="#概率卷积公式"><span>概率卷积公式</span></a></h1><p>在概率论问题中, 我们常常会遇到已知多个随机变量的概率密度, 而随机变量通过函数关系构成一个新的随机变量, 求这个新随机变量的概率密度的问题. 下面的卷积公式给出了一个比较方便的解答, 当然这里是针对二元情况, 多元情况是类似的.</p><h2 id="_1-卷积公式" tabindex="-1"><a class="header-anchor" href="#_1-卷积公式"><span>1. 卷积公式</span></a></h2><p>设<span class="math-inline" data-tex="(X, Y)"></span>为二维连续性随机变量, 概率密度为<span class="math-inline" data-tex="f(x, y)"></span>, 则<span class="math-inline" data-tex="Z = X+Y"></span>仍为连续性随机变量, 其概率密度为<div class="math-block" data-tex="f_{Z}(z) = \\int_{-\\infty}^{\\infty} f(x, z-x) \\, dx "></div>或者<div class="math-block" data-tex="f_{Z}(z) = \\int_{-\\infty}^{\\infty} f(z-y, y) \\, dy "></div><br> 特别地, 当<span class="math-inline" data-tex="X"></span>与<span class="math-inline" data-tex="Y"></span>相互独立时, 设<span class="math-inline" data-tex="(X, Y)"></span>关于<span class="math-inline" data-tex="X"></span>, <span class="math-inline" data-tex="Y"></span>的边际概率密度分别为<span class="math-inline" data-tex="f_{X}(x)"></span>, <span class="math-inline" data-tex="f_{Y}(y)"></span>, 此时有<div class="math-block" data-tex="f_{Z} = \\int_{-\\infty}^{\\infty} f_{X}(x)f_{Y}(z-x) \\, dx = \\int_{-\\infty}^{\\infty} f_{X}(z-y)f_{Y}(y) \\, dy"></div>此时我们称这两个公式为<span class="math-inline" data-tex="f_{X}"></span>与<span class="math-inline" data-tex="f_{Y}"></span>的<strong>卷积公式</strong>, 记为<span class="math-inline" data-tex="f_{X} * f_{Y}"></span>.</p><hr><p><strong>证明</strong><br> 设<span class="math-inline" data-tex="Z"></span>的分布函数为<span class="math-inline" data-tex="F_{Z}(z)"></span>, 此时有<div class="math-block" data-tex="F_{Z}(z) = P(Z &lt; z) = \\iint_{D} f(x, y)\\, dxdy"></div>积分区域为<span class="math-inline" data-tex="D = \\{ (x, y) \\mid x+y &lt; z\\}"></span>, 我们采用二重积分换元法来证明这个问题. 即设<div class="math-block" data-tex="\\begin{align*}
u &amp;= x \\\\
v &amp;= x+y
\\end{align*}"></div>即<div class="math-block" data-tex="\\begin{align*}
x &amp;= u \\\\
y &amp;= v-u
\\end{align*}"></div>此时积分区域变为<span class="math-inline" data-tex="D&#39; = \\{(u, v) \\mid -\\infty &lt; u &lt; +\\infty, v &lt; z \\}"></span>, 其对应雅可比式为<div class="math-block" data-tex="\\frac{ \\partial (x, y) }{ \\partial (u, v)} = \\left | \\begin{matrix} \\frac{ \\partial x }{ \\partial u } &amp; \\frac{ \\partial x }{ \\partial v } \\\\
\\frac{ \\partial y }{ \\partial u }  &amp; \\frac{ \\partial y }{ \\partial v }    \\end{matrix} \\right |  = \\left | \\begin{matrix} 1 &amp; 0 \\\\
-1  &amp; 1 \\end{matrix} \\right | = 1 "></div>因此<div class="math-block" data-tex="F_{Z}(z) = \\iint_{D&#39;} f(u, v-u) \\left\\lvert  \\frac{ \\partial (x, y) }{ \\partial (u, v) }   \\right\\rvert \\, dudv = \\int_{-\\infty}^{z} \\left( \\int_{-\\infty}^{\\infty} f(u, v-u) \\, du  \\right) \\, dv "></div>故可求出<span class="math-inline" data-tex="Z"></span>概率密度为<div class="math-block" data-tex="f_{Z}(z) = \\frac{dF_{Z}(z)}{dz} = \\int_{-\\infty}^{\\infty} f(u, z-u) \\, du = \\int_{-\\infty}^{\\infty} f(x, z-x) \\, dx"></div></p><hr><p>事实上, 我们可以借助概率密度变换公式来更简洁地解决这个问题.</p><p>类似于上面的证明, 我们额外引入一个随机变量, 使得前后随机变量个数相同, 即设<div class="math-block" data-tex="\\begin{align*}
W &amp;= X \\\\
Z &amp;= X +Y
\\end{align*}"></div>此时有<div class="math-block" data-tex="\\begin{align*}
X &amp;= W \\\\
Y &amp;= Z - W
\\end{align*}"></div>雅可比式为<div class="math-block" data-tex="\\frac{ \\partial (x, y) }{ \\partial (w, z) } = \\left | \\begin{matrix} 1 &amp; 0 \\\\
-1 &amp; 1\\end{matrix} \\right | = 1 "></div>因此我们可以直接写出联合密度公式<div class="math-block" data-tex="g(w,z) = f(x, y)\\left\\lvert  \\frac{ \\partial (x, y) }{ \\partial (w, z) }   \\right\\rvert =f(w, z-w)"></div>因此随机变量<span class="math-inline" data-tex="Z"></span>的边缘概率密度为<div class="math-block" data-tex="g(z) = \\int_{-\\infty}^{\\infty} f(w, z-w) \\, dw =\\int_{-\\infty}^{\\infty} f(x, z-x) \\, dx "></div></p><hr><p>值得一提的是, 这种引入额外变量, 使得前后变量个数(维数)相同的技巧是比较常见而深刻的. 另一个经典的例子是处理斐波那契数列<div class="math-block" data-tex="a_{n} = a_{n-1} + a_{n-2}"></div>我们也可以引入额外的相等变量, 即化为<div class="math-block" data-tex="\\begin{pmatrix}
a_{n} \\\\
a_{n-1}
\\end{pmatrix} = \\begin{pmatrix}
1 &amp; 1 \\\\
1 &amp; 0
\\end{pmatrix}\\begin{pmatrix}
a_{n-1} \\\\
a_{n-2}
\\end{pmatrix}"></div>此时求递推的关系转化成了矩阵的幂的形式, 即<div class="math-block" data-tex="\\begin{pmatrix}
a_{n} \\\\
a_{n-1}
\\end{pmatrix} = \\begin{pmatrix}
1 &amp; 1 \\\\
1 &amp; 0
\\end{pmatrix}^{2}\\begin{pmatrix}
a_{n-2} \\\\
a_{n-3}
\\end{pmatrix} = \\dots =
\\begin{pmatrix}
1 &amp; 1 \\\\
1 &amp; 0
\\end{pmatrix}^{n-2}\\begin{pmatrix}
a_{2} \\\\
a_{1}
\\end{pmatrix}"></div>此时问题转化为只需求解矩阵<span class="math-inline" data-tex="\\begin{pmatrix}1 &amp; 1 \\\\ 1 &amp; 0\\end{pmatrix}^{n-2}"></span>即可.</p><h2 id="_2-广义卷积公式" tabindex="-1"><a class="header-anchor" href="#_2-广义卷积公式"><span>2. 广义卷积公式</span></a></h2><p>更一般地, 设<span class="math-inline" data-tex="Z=z(X,Y)"></span>, 且有 <span class="math-inline" data-tex="X = x(Y,Z)"></span>, <span class="math-inline" data-tex="Y=y(Z, X)"></span>, 此时<span class="math-inline" data-tex="Z"></span>的概率密度可表示为<div class="math-block" data-tex="f_{Z}(z) = \\int_{-\\infty}^{\\infty} f(x, y(z, x)) \\left\\lvert  \\frac{ \\partial( y(z, x) )}{ \\partial z }   \\right\\rvert  \\, dx = \\int_{-\\infty}^{\\infty} f(x(y, z), y) \\left\\lvert  \\frac{ \\partial x(y, z) }{ \\partial z }   \\right\\rvert  \\, dy"></div></p><hr><p><strong>证明</strong><br> 证明是类似的. 我们同样引入<div class="math-block" data-tex="\\begin{align*}
W &amp;= X \\\\
Z &amp;= z(X, Y)
\\end{align*}"></div>此时有<div class="math-block" data-tex="\\begin{align*}
X &amp;= W \\\\
Y &amp;= y(W, Z)
\\end{align*}"></div>雅可比式为<div class="math-block" data-tex="\\frac{ \\partial (x,y) }{ \\partial (w,z) } =\\left | \\begin{matrix} 1 &amp; 0 \\\\
	\\frac{ \\partial y }{ \\partial w }  &amp; \\frac{ \\partial y }{ \\partial z }  \\end{matrix} \\right | =\\frac{ \\partial y }{ \\partial z } "></div>因此联合概率密度为<div class="math-block" data-tex="g(w, z) = f(x, y)\\left\\lvert  \\frac{ \\partial (x,y) }{ \\partial (w,z) }  \\right\\rvert =f(w, y(w,z))\\left\\lvert  \\frac{ \\partial y }{ \\partial z }   \\right\\rvert "></div>故<span class="math-inline" data-tex="Z"></span>边缘概率密度为<div class="math-block" data-tex="g(z) = \\int_{-\\infty}^{\\infty} f(w, y(w, z))\\left\\lvert  \\frac{ \\partial y }{ \\partial z }   \\right\\rvert  \\, dw =\\int_{-\\infty}^{\\infty} f(x, y(x, z)) \\left\\lvert  \\frac{ \\partial (y(z,x)) }{ \\partial z }   \\right\\rvert    \\, dx "></div></p><hr><p>下面给出一些常见的变换形式.</p><p>当<span class="math-inline" data-tex="Z = aX+bY"></span>时, 有<div class="math-block" data-tex="f_{Z}(z) = \\int_{-\\infty}^{\\infty} f\\left( x, \\frac{z-ax}{b} \\right) \\frac{1}{\\lvert b \\rvert }\\, dx =\\int_{-\\infty}^{\\infty} f\\left( \\frac{z-by}{a}, y \\right) \\frac{1}{\\lvert a \\rvert }\\, dy "></div><br> 当<span class="math-inline" data-tex="Z = \\frac{Y}{X}"></span>时, 有<div class="math-block" data-tex="f_{Z}(z) = \\int_{-\\infty}^{\\infty} f(x, zx) \\lvert x \\rvert \\, dx = \\int_{-\\infty}^{\\infty} f\\left( \\frac{y}{z}, y \\right) \\frac{\\lvert y \\rvert }{z^{2}}\\, dy "></div><br> 当<span class="math-inline" data-tex="Z=XY"></span>时, 有<div class="math-block" data-tex="f_{Z}(z) = \\int_{-\\infty}^{\\infty} f\\left( x, \\frac{z}{x} \\right) \\frac{1}{\\lvert x \\rvert }\\, dx =\\int_{-\\infty}^{\\infty} f\\left( \\frac{z}{y}, y \\right) \\frac{1}{\\lvert y \\rvert }\\, dy "></div></p>`,18)]))}const p=t(e,[["render",s],["__file","gailvjuanjigongshi.html.vue"]]),f=JSON.parse('{"path":"/series/study/gailvlun/gailvjuanjigongshi.html","title":"概率卷积公式","lang":"zh-CN","frontmatter":{"date":"2024-03-29T00:00:00.000Z"},"headers":[{"level":2,"title":"1. 卷积公式","slug":"_1-卷积公式","link":"#_1-卷积公式","children":[]},{"level":2,"title":"2. 广义卷积公式","slug":"_2-广义卷积公式","link":"#_2-广义卷积公式","children":[]}],"git":{"createdTime":1765677614000,"updatedTime":1775230581000,"contributors":[{"name":"Dawnfz-Lenfeng","email":"2912706234@qq.com","commits":1}]},"filePathRelative":"series/study/概率论/概率卷积公式.md"}');export{p as comp,f as data};
