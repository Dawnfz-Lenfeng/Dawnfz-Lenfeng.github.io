import{_,c as p,a as i,e as n,b as e,d as s,f as r,r as l,o as m}from"./app-B9WrmhrB.js";const X={};function d(x,a){const t=l("RouteLink");return m(),p("div",null,[a[5]||(a[5]=i("h1",{id:"使用矩阵推导一元线性回归相关公式",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#使用矩阵推导一元线性回归相关公式"},[i("span",null,"使用矩阵推导一元线性回归相关公式")])],-1)),i("p",null,[a[2]||(a[2]=n("在")),e(t,{to:"/series/courses/%E5%9B%9E%E5%BD%92%E5%88%86%E6%9E%90/%E3%80%90%E5%9B%9E%E5%BD%92%E5%88%86%E6%9E%90%E3%80%9101%E4%B8%80%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92.html"},{default:s(()=>a[0]||(a[0]=[n("【回归分析】01一元线性回归")])),_:1}),a[3]||(a[3]=n("中，一元线性回归的相关公式是通过求和符号进行推导的，虽然直观但过程较为繁琐。而在")),e(t,{to:"/series/courses/%E5%9B%9E%E5%BD%92%E5%88%86%E6%9E%90/%E3%80%90%E5%9B%9E%E5%BD%92%E5%88%86%E6%9E%90%E3%80%9102%E5%A4%9A%E5%85%83%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92.html"},{default:s(()=>a[1]||(a[1]=[n("【回归分析】02多元线性回归")])),_:1}),a[4]||(a[4]=n("中，给出了使用矩阵表示的一般情况，这种方法更加简洁明了。"))]),a[6]||(a[6]=r(`<p>为了进一步说明矩阵方法的优越性，接下来我们以一元线性回归为例，使用矩阵形式重新推导，目标是得到与求和符号推导相同的结果，同时简化计算过程。</p><h2 id="_1-一元情况" tabindex="-1"><a class="header-anchor" href="#_1-一元情况"><span>1. 一元情况</span></a></h2><h3 id="_1-1-计算" tabindex="-1"><a class="header-anchor" href="#_1-1-计算"><span>1.1 <span class="math-inline" data-tex="(X^{T}X)^{-1}"></span>计算</span></a></h3><p>首先考虑<span class="math-inline" data-tex="(X^{T}X)^{-1}"></span>，先设<div class="math-block" data-tex="X=\\begin{pmatrix}
1_{n} &amp; X
\\end{pmatrix}"></div>因此<div class="math-block" data-tex="\\begin{align*}
(X^{T}X)^{-1} &amp; =\\left( \\begin{pmatrix}
1_{n}^{T} \\\\ X^{T}
\\end{pmatrix}\\begin{pmatrix}
1_{n}&amp;X
\\end{pmatrix} \\right)^{-1} \\\\
 &amp; = \\begin{pmatrix}
n  &amp; n\\bar{X} \\\\
n\\bar{X}  &amp; X^{T}X
\\end{pmatrix}^{-1} \\\\
 &amp; = \\frac{1}{L_{xx}}\\begin{pmatrix}
\\frac{1}{n}\\sum_{i = 1}^{n} X_{i}^{2}  &amp; -\\bar{X} \\\\
-\\bar{X}  &amp; 1
\\end{pmatrix}  \\\\
 &amp; =\\frac{1}{L_{xx}}\\begin{pmatrix}
\\frac{L_{xx}}{n}+\\bar{X}^{2} &amp; -\\bar{X} \\\\
-\\bar{X} &amp; 1
\\end{pmatrix} \\\\
&amp; = \\begin{pmatrix}
\\frac{1}{n} &amp;  \\\\
&amp; 0
\\end{pmatrix}+ \\frac{1}{L_{xx}}\\begin{pmatrix}
\\bar{X}^{2} &amp; -\\bar{X} \\\\
-\\bar{X} &amp; 1
\\end{pmatrix}
\\end{align*}"></div></p><h3 id="_1-2-计算" tabindex="-1"><a class="header-anchor" href="#_1-2-计算"><span>1.2 <span class="math-inline" data-tex="\\hat{\\beta}"></span>计算</span></a></h3><p>考虑<div class="math-block" data-tex="\\begin{align*}
\\hat{\\beta}  &amp; =(X^{T}X)^{-1}XY \\\\
 &amp; = (X^{T}X)^{-1}\\begin{pmatrix}
1_{n}^{T} \\\\
X^{T}
\\end{pmatrix}Y \\\\
 &amp; = \\begin{pmatrix}
\\bar{Y} \\\\
0
\\end{pmatrix}+\\frac{1}{L_{xx}}\\begin{pmatrix}
\\bar{X}^{2} &amp; -\\bar{X} \\\\
-\\bar{X} &amp; 1
\\end{pmatrix}\\begin{pmatrix}
n\\bar{Y} \\\\
\\sum_{i = 1}^{n} X_{i}Y_{i}
\\end{pmatrix}
\\end{align*}"></div>接下来分开计算<div class="math-block" data-tex="\\begin{align*}
\\hat{\\beta} _{1} &amp; =\\frac{1}{L_{xx}}\\left( \\sum_{i = 1}^{n} X_{i}Y_{i}-n\\bar{X}\\bar{Y} \\right) \\\\
 &amp; = \\frac{L_{xy}}{L_{xx}}
\\end{align*}"></div>而<div class="math-block" data-tex="\\begin{align*}
\\hat{\\beta} _{0} &amp; =\\bar{Y}-\\frac{\\bar{X}}{L_{xx}}\\left( \\sum_{i = 1}^{n} X_{i}Y_{i}-n\\bar{X}\\bar{Y} \\right) \\\\
 &amp; = \\bar{Y}-\\bar{X} \\hat{\\beta}_{1} 
\\end{align*}"></div><br> 再计算方差。由于<div class="math-block" data-tex="Var(\\hat{\\beta} )=(X^{T}X)^{-1}\\sigma^{2}"></div>因此<span class="math-inline" data-tex="\\hat{\\beta}"></span>方差正好对应<span class="math-inline" data-tex="(X^{T}X)^{-1}"></span>对角元，协方差对应非对角元，故非常容易得到<div class="math-block" data-tex="\\begin{align*}
Var(\\hat{\\beta_{0}} ) &amp; =\\left( \\frac{1}{n}+\\frac{\\bar{X}^{2}}{L_{xx}} \\right)\\sigma^{2} \\\\
Var(\\hat{\\beta_{1}} ) &amp; =\\frac{\\sigma^{2 }}{L_{xx}} \\\\
Cov(\\hat{\\beta} _{0},\\hat{\\beta}_{1} )&amp;= -\\frac{\\bar{X}}{L_{xx}}\\sigma^{2}
\\end{align*}"></div></p><h3 id="_1-3-投影矩阵计算" tabindex="-1"><a class="header-anchor" href="#_1-3-投影矩阵计算"><span>1.3 投影矩阵<span class="math-inline" data-tex="H"></span>计算</span></a></h3><p>根据已有<span class="math-inline" data-tex="(X^{T}X)^{-1}"></span>，我们接着计算投影矩阵<span class="math-inline" data-tex="H"></span>。此时<div class="math-block" data-tex="\\begin{align*}
H &amp; =X(X^{T}X)^{-1}X^{T} \\\\
 &amp; = A + \\frac{1}{L_{xx}}\\begin{pmatrix}
1_{n} &amp; X
\\end{pmatrix}\\begin{pmatrix}
\\bar{X}^{2} &amp; -\\bar{X} \\\\
-\\bar{X} &amp; 1
\\end{pmatrix}\\begin{pmatrix}
1_{n}^{T} \\\\
X^{T}
\\end{pmatrix} \\\\
 &amp; = A+ \\frac{1}{L_{xx}}\\left( \\bar{X}^{2}1_{n}1_{n}^{T} -\\bar{X}X 1_{n}^{T}-\\bar{X} 1_{n}X^{T}+XX^{T}\\right) \\\\
 &amp; =A+ \\frac{(X-\\bar{X})(X-\\bar{X})^{T}}{L_{xx}} \\\\
 &amp; =A+\\frac{(I-A)XX^{T}(I-A)}{L_{xx}}
\\end{align*}"></div>其中<span class="math-inline" data-tex="A=\\frac{1}{n}1_{n}1_{n}^{T}"></span>。</p><h2 id="_2-一般情况" tabindex="-1"><a class="header-anchor" href="#_2-一般情况"><span>2. 一般情况</span></a></h2><p>在很多情况下，我们需要对<span class="math-inline" data-tex="X"></span>中的某个分量进行计算，因此，类似于一元线性回归的情况，我们可以对<span class="math-inline" data-tex="X"></span>进行矩阵分块处理。</p><p>在计算开始之前，我们先设<div class="math-block" data-tex="X=\\begin{pmatrix}
X_{-i}  &amp;  X_{i}
\\end{pmatrix}"></div>其中<span class="math-inline" data-tex="X_{i}"></span>表示<span class="math-inline" data-tex="X"></span>中的某一列，<span class="math-inline" data-tex="X_{-i}"></span>表示除去该列以外的部分。</p><h3 id="_2-1-计算" tabindex="-1"><a class="header-anchor" href="#_2-1-计算"><span>2.1 <span class="math-inline" data-tex="(X^{T}X)^{-1}"></span>计算</span></a></h3><p>考虑<div class="math-block" data-tex="\\begin{align*}
(X^{T}X)^{-1} &amp; =\\left( \\begin{pmatrix}
X_{-i}^{T} \\\\
X_{i}^{T}
\\end{pmatrix}\\begin{pmatrix}
X_{-i} &amp; X_{i}
\\end{pmatrix} \\right)^{-1} \\\\
 &amp; = \\begin{pmatrix}
X_{-i}^{T}X_{-i}  &amp;  X_{-i}^{T}X_{i} \\\\
X_{i}^{T}X_{-i} &amp; X_{i}^{T}X_{i}
\\end{pmatrix}^{-1} \\\\
 &amp; = \\begin{pmatrix}
A  &amp; B \\\\
C  &amp; D
\\end{pmatrix}
\\end{align*}"></div>其中<div class="math-block" data-tex="\\begin{align*}
A &amp; =  (X_{-i}^{T}X_{-i})^{-1}+(X_{-i}^{T}X_{-i})^{-1}(X_{-i}^{T}X_{i})S^{-1}(X_{i}^{T}X_{-i})(X_{-i}^{T}X_{-i})^{-1}\\\\
B &amp; = -(X_{-i}^{T}X_{-i})^{-1}(X_{-i}^{T}X_{i})S^{-1}\\\\
C &amp; = -S^{-1}(X_{i}^{T}X_{-i})(X_{-i}^{T}X_{-i})^{-1} \\\\
D &amp; = S^{-1}
\\end{align*}"></div>而<div class="math-block" data-tex="S=X_{i}^{T}X_{i}-X_{i}^{T}X_{-i}(X_{-i}^{T}X_{-i})^{-1}X_{-i}^{T}X_{i}=X_{i}^{T}(I-H_{-i})X_{i}"></div></p><h3 id="_2-2-计算" tabindex="-1"><a class="header-anchor" href="#_2-2-计算"><span>2.2 <span class="math-inline" data-tex="\\hat{\\beta}_{i}"></span>计算</span></a></h3><p>由上式<div class="math-block" data-tex="\\begin{align*}
\\hat{\\beta_{i}}  &amp; =\\begin{pmatrix}
C &amp; D
\\end{pmatrix}\\begin{pmatrix}
X_{-i}^{T} \\\\
X_{i}^{T}
\\end{pmatrix}Y \\\\
 &amp; = (CX_{-i}^{T}+DX_{i}^{T})Y \\\\
 &amp; =\\frac{X_{i}^{T}-(X_{i}^{T}X_{-i})(X_{-i}^{T}X_{-i}^{-1})X_{-i}^{T}}{X_{i}^{T}(I-H_{-i})X_{i}}Y \\\\
 &amp; = \\frac{X_{i}^{T}(I-H_{-i})Y}{X_{i}^{T}(I-H_{-i})X_{i}}
\\end{align*}"></div><br> 再计算方差，即为<span class="math-inline" data-tex="(X^{T}X)^{-1}"></span>最后一个对角元<div class="math-block" data-tex="Var(\\hat{\\beta_{i}} )=\\frac{\\sigma^{2}}{X_{i}^{T}(I-H_{-i})X_{i}}"></div></p><h3 id="_2-3-投影矩阵计算" tabindex="-1"><a class="header-anchor" href="#_2-3-投影矩阵计算"><span>2.3 投影矩阵<span class="math-inline" data-tex="H"></span>计算</span></a></h3><p>注意到<div class="math-block" data-tex="\\begin{align*}
H &amp; =X(X^{T}X)^{-1}X^{T} \\\\
 &amp; =\\begin{pmatrix}
X_{-i} &amp; X_{i}
\\end{pmatrix}\\begin{pmatrix}
A  &amp; B \\\\
C &amp; D
\\end{pmatrix}\\begin{pmatrix}
X_{-i}^{T} \\\\
X_{i}^{T}
\\end{pmatrix} \\\\
 &amp; =X_{-i}AX_{-i}^{T}+X_{-i}BX_{i}^{T}+X_{i}CX_{-i}^{T}+X_{i}DX_{i}^{T} \\\\
 &amp; = H_{-i} + \\frac{H_{-i}(X_{i}X_{i}^{T})H_{-i}-H_{-i}X_{i}X_{i}^{T}-X_{i}X_{i}^{T}H_{-i}+X_{i}X_{i}^{T}}{X_{i}^{T}(I-H_{-i})X_{i}} \\\\
 &amp; =H_{-i}+ \\frac{(I-H_{-i})X_{i}X_{i}^{T}(I-H_{-i})}{X_{i}^{T}(I-H_{-i})X_{i}}
\\end{align*}"></div></p><h3 id="_2-4-证明" tabindex="-1"><a class="header-anchor" href="#_2-4-证明"><span>2.4 <span class="math-inline" data-tex="t^2 = F_j"></span> 证明</span></a></h3><p>由定义<div class="math-block" data-tex="t_{j}=\\frac{\\hat{\\beta}_{j}}{\\sqrt{ c_{jj} }\\hat{\\sigma}}"></div>而我们已经求出<div class="math-block" data-tex="\\begin{align*} \\\\
\\hat{\\beta} _{j} &amp; = \\frac{X_{j}^{T}(I-H_{-j})Y}{X_{j}^{T}(I-H_{-j})X_{j}} \\\\
c_{jj} &amp; =\\frac{1}{X_{j}^{T}(I-H_{-j})X_{j}}
\\end{align*}"></div>另一方面<div class="math-block" data-tex="F_{j}=\\frac{\\Delta_{j}}{SSE / (n-p-1)}"></div>而<div class="math-block" data-tex="\\Delta_{j}=Y^{T}(H-H_{-j})Y"></div><br> 因此<div class="math-block" data-tex="\\begin{align*}
t_{j}^{2} &amp; = \\frac{(\\hat{\\beta} _{j})^{2}}{c_{jj} \\hat{\\sigma^{2}}} \\\\
 &amp; = \\frac{Y^{T}((I-H_{-j})X_{j})^{2}Y}{X_{j}^{T}(I-H_{-j})X_{j}} \\frac{1}{SSE / (n-p-1)} \\\\
 &amp; = \\frac{Y^{T}(H-H_{-j})Y}{SSE / n-p-1} \\\\
 &amp; = F_{j}
\\end{align*}"></div></p>`,19))])}const c=_(X,[["render",d],["__file","shiyongjuzhentuidaoyiyuanxianxinghuiguixiangguangongshi.html.vue"]]),b=JSON.parse('{"path":"/series/courses/huiguifenxi/shiyongjuzhentuidaoyiyuanxianxinghuiguixiangguangongshi.html","title":"使用矩阵推导一元线性回归相关公式","lang":"zh-CN","frontmatter":{"date":"2025-01-06T00:00:00.000Z"},"headers":[{"level":2,"title":"1. 一元情况","slug":"_1-一元情况","link":"#_1-一元情况","children":[{"level":3,"title":"1.1 计算","slug":"_1-1-计算","link":"#_1-1-计算","children":[]},{"level":3,"title":"1.2 计算","slug":"_1-2-计算","link":"#_1-2-计算","children":[]},{"level":3,"title":"1.3 投影矩阵计算","slug":"_1-3-投影矩阵计算","link":"#_1-3-投影矩阵计算","children":[]}]},{"level":2,"title":"2. 一般情况","slug":"_2-一般情况","link":"#_2-一般情况","children":[{"level":3,"title":"2.1 计算","slug":"_2-1-计算","link":"#_2-1-计算","children":[]},{"level":3,"title":"2.2 计算","slug":"_2-2-计算","link":"#_2-2-计算","children":[]},{"level":3,"title":"2.3 投影矩阵计算","slug":"_2-3-投影矩阵计算","link":"#_2-3-投影矩阵计算","children":[]},{"level":3,"title":"2.4  证明","slug":"_2-4-证明","link":"#_2-4-证明","children":[]}]}],"git":{"createdTime":1737707068000,"updatedTime":1737877726000,"contributors":[{"name":"Dawnfz-Lenfeng","email":"2912706234@qq.com","commits":1}]},"filePathRelative":"series/courses/回归分析/使用矩阵推导一元线性回归相关公式.md"}');export{c as comp,b as data};
