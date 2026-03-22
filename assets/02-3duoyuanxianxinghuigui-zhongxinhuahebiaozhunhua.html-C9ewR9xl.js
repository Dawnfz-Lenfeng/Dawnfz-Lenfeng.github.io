import{_ as n,c as i,f as t,o as e}from"./app-Bsr--nlC.js";const s={};function r(d,a){return e(),i("div",null,a[0]||(a[0]=[t(`<h1 id="_02-3多元线性回归-中心化和标准化" tabindex="-1"><a class="header-anchor" href="#_02-3多元线性回归-中心化和标准化"><span>02-3多元线性回归-中心化和标准化</span></a></h1><h2 id="_1-中心化和标准化" tabindex="-1"><a class="header-anchor" href="#_1-中心化和标准化"><span>1. 中心化和标准化</span></a></h2><div class="custom-container definition"><p class="custom-container-title">Definition (中心化)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><div class="math-block" data-tex="X_{ij}&#39;=X_{ij}-\\bar{X}_{j},\\quad Y_{i}&#39;=Y_{i}-\\bar{Y}"></div></div></div><div class="custom-container theorem"><p class="custom-container-title">Theorem (中心化性质)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>中心化后<span class="math-inline" data-tex="\\hat{\\beta}&#39;_{0}=0"></span>，<span class="math-inline" data-tex="\\hat{\\beta}&#39;_{i}=\\hat{\\beta}_{i}"></span>，<span class="math-inline" data-tex="i=1,\\dots,p"></span>。</p></div></div><p><strong>证明</strong></p><div class="custom-container lemma"><p class="custom-container-title">Lemma (分块矩阵的逆)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>设分块矩阵<div class="math-block" data-tex="M=\\begin{pmatrix} A &amp; B \\\\ C &amp; D\\end{pmatrix}"></div>则<div class="math-block" data-tex="\\begin{align*}M^{-1} &amp;= \\begin{pmatrix} I &amp; -A^{-1}B \\\\ 0 &amp; I \\end{pmatrix}\\begin{pmatrix} A^{-1} &amp; 0 \\\\ I &amp; S^{-1}  \\end{pmatrix}\\begin{pmatrix} I &amp; 0\\\\ -CA^{-1} &amp; I \\end{pmatrix}\\\\&amp; =\\begin{pmatrix} A^{-1}+A^{-1}BS^{-1}CA^{-1} &amp; -A^{-1}BS^{-1}\\\\ -S^{-1}CA^{-1} &amp; S^{-1} \\end{pmatrix}\\end{align*}"></div>其中<span class="math-inline" data-tex="S=D-CA^{-1}B"></span>为<span class="math-inline" data-tex="M"></span>关于<span class="math-inline" data-tex="A"></span>的舒尔补。</p></div></div><p>考虑<div class="math-block" data-tex="\\begin{align*}
\\tilde{X} = \\begin{pmatrix}
\\boldsymbol{1}  &amp; X
\\end{pmatrix}
\\end{align*}"></div>其中<span class="math-inline" data-tex="X"></span>为没有添加常数项的自变量。此时<div class="math-block" data-tex="\\begin{align*} \\\\
\\tilde{X}^{T}\\tilde{X} &amp; = \\begin{pmatrix}
\\boldsymbol{1}^{T}  \\\\ X^{T}
\\end{pmatrix}\\begin{pmatrix}
\\boldsymbol{1} &amp; X
\\end{pmatrix} \\\\
 &amp; = \\begin{pmatrix}
n &amp; n\\bar{X}^{T} \\\\
n\\bar{X} &amp; X^{T}X
\\end{pmatrix}
\\end{align*}"></div>注意到<div class="math-block" data-tex="\\tilde{X}^{T}Y=\\begin{pmatrix}
\\boldsymbol{1}^{T} \\\\
X^{T}
\\end{pmatrix}Y=\\begin{pmatrix}
n\\bar{Y} \\\\
X^{T}Y
\\end{pmatrix}"></div>因此<div class="math-block" data-tex="\\begin{align*}
\\tilde{\\boldsymbol{\\beta}} &amp; =(\\tilde{X}^{T}\\tilde{X})^{-1}(\\tilde{X}^{T}Y) \\\\
 &amp; =\\begin{pmatrix}
n &amp; n\\bar{X}^{T} \\\\
n\\bar{X} &amp; X^{T}X
\\end{pmatrix}^{-1}\\begin{pmatrix}
n\\bar{Y} \\\\
X^{T}Y
\\end{pmatrix}
\\end{align*}"></div>由引理<div class="math-block" data-tex="\\begin{align*}
\\tilde{\\boldsymbol{\\beta}} &amp; =\\begin{pmatrix}
I  &amp; -\\bar{X}^{T} \\\\ 0&amp; I 
\\end{pmatrix}\\begin{pmatrix}
\\frac{1}{n} &amp;0 \\\\
0  &amp; (X^{T}X-n\\bar{X}\\bar{X}^{T})^{-1}
\\end{pmatrix} \\begin{pmatrix}
I  &amp; 0 \\\\
-\\bar{X}  &amp; I
\\end{pmatrix}\\begin{pmatrix}
n\\bar{Y} \\\\
X^{T}Y
\\end{pmatrix} \\\\
 &amp; = \\begin{pmatrix}
I  &amp; -\\bar{X}^{T} \\\\ 0&amp; I 
\\end{pmatrix}\\begin{pmatrix}
\\frac{1}{n} &amp;0 \\\\
0  &amp; (X^{T}X-n\\bar{X}\\bar{X}^{T})^{-1}
\\end{pmatrix}\\begin{pmatrix}
n\\bar{Y} \\\\
X^{T}Y-n\\bar{X}\\bar{Y}
\\end{pmatrix} \\\\
 &amp; = \\begin{pmatrix}
I  &amp; -\\bar{X}^{T} \\\\ 0&amp; I 
\\end{pmatrix} \\begin{pmatrix}
\\bar{Y} \\\\
(X^{T}X-n\\bar{X}\\bar{X}^{T})^{-1}(X^{T}Y-n\\bar{X}\\bar{Y})
\\end{pmatrix} \\\\
 &amp; =\\begin{pmatrix}
\\bar{Y}-\\bar{X}^{T}\\boldsymbol{\\beta} \\\\
(X^{T}(I-A)X)^{-1}(X^{T}(I-A)Y)
\\end{pmatrix}
\\end{align*}"></div>注意到<div class="math-block" data-tex="\\begin{align*}
X&#39; &amp; =(I-A)X \\\\
Y&#39; &amp; =(I-A)Y
\\end{align*}"></div>由幂等性证毕。</p><div class="custom-container definition"><p class="custom-container-title">Definition (标准化)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><div class="math-block" data-tex="\\begin{align*} X_{ij}^{*}=\\frac{X_{ij}-\\bar{X}_{j}}{\\sqrt{ L_{jj} } } \\\\ Y_{i}^{* }=\\frac{Y_{i}-\\bar{Y}}{\\sqrt{ L_{yy} }} \\end{align*}"></div></div></div><div class="custom-container theorem"><p class="custom-container-title">Theorem (标准化性质)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>标准化后<span class="math-inline" data-tex="\\hat{\\beta}_{0}^{*}=0"></span>，<span class="math-inline" data-tex="\\hat{\\beta}_{i}^{*}= \\frac{\\sqrt{ L_{jj} }}{\\sqrt{ L_{yy} }}\\hat{\\beta}_{j}"></span>，<span class="math-inline" data-tex="j=1,\\dots,p"></span>。</p></div></div><p><strong>证明</strong><br> 已证中心化情况，故不妨设<span class="math-inline" data-tex="\\bar{X}=\\bar{Y}=0"></span>。此时设<div class="math-block" data-tex="L_{x}=\\mathrm{diag}( L_{11} ,\\dots, L_{pp} )"></div>因此<div class="math-block" data-tex="X^{*}=XL_{x}^{-1/2}"></div>此时<div class="math-block" data-tex="\\begin{align*}
\\boldsymbol{\\hat{\\beta} }^{*} &amp; =  \\frac{1}{\\sqrt{ L_{yy} }} ((X^{*})^{T}(X^{*}))^{-1}(X^{*})^{T}Y \\\\
 &amp; = \\frac{1}{\\sqrt{ L_{yy} }} (L_{x}^{-1/2}X^{T}XL_{x}^{-1/2})^{-1}L_{x}^{-1/2}X^{T}Y \\\\
 &amp; = \\frac{1}{L_{yy}} L_{x}^{1/2} (X^{T}X)^{-1}X^{T}Y \\\\
&amp;= \\sqrt{ \\frac{L_{x}}{L_{yy}}     }\\boldsymbol{\\hat{\\beta} }
\\end{align*}"></div>故证毕。</p><h2 id="_2-相关性矩阵与偏相关系数" tabindex="-1"><a class="header-anchor" href="#_2-相关性矩阵与偏相关系数"><span>2. 相关性矩阵与偏相关系数</span></a></h2><div class="custom-container definition"><p class="custom-container-title">Definition (相关性矩阵)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>设 <span class="math-inline" data-tex="\\tilde{X} = (Y,X)"></span> 为包含因变量的增广矩阵，则相关性矩阵为：<div class="math-block" data-tex="r=\\left(\\begin{matrix} 1 &amp;  r_{Y1}  &amp;  r_{Y2}  &amp;  \\dots  &amp; r_{Yp} \\\\ r_{1Y}  &amp; 1 &amp;  r_{12}  &amp;  \\dots  &amp; r_{1p} \\\\ \\vdots  &amp;  \\vdots  &amp;  \\vdots&amp;  \\ddots &amp; \\vdots \\\\ r_{pY}  &amp;  r_{p1}  &amp; r_{p 2} &amp;  \\dots  &amp; 1 \\end{matrix}\\right)=\\tilde{X}^{*T}\\tilde{X}^*=L^{-1/2}\\tilde{X}^T(I-A)\\tilde{X}L^{-1/2}"></div>Y与X的相关性系数可以表示为：<div class="math-block" data-tex="r_{Yj} = \\frac{L_{Yj}}{\\sqrt{L_{YY}L_{jj}}} = \\frac{\\sum_{i=1}^n (Y_i-\\bar{Y})(X_{ij}-\\bar{X}_j)}{\\sqrt{\\sum_{i=1}^n (Y_i-\\bar{Y})^2\\sum_{i=1}^n (X_{ij}-\\bar{X}_j)^2}}"></div>X之间的相关性系数为：<div class="math-block" data-tex="r_{jk} = \\frac{L_{jk}}{\\sqrt{L_{jj}L_{kk}}} = \\frac{\\sum_{i=1}^n (X_{ij}-\\bar{X}_j)(X_{ik}-\\bar{X}_k)}{\\sqrt{\\sum_{i=1}^n (X_{ij}-\\bar{X}_j)^2\\sum_{i=1}^n (X_{ik}-\\bar{X}_k)^2}}"></div></p></div></div><div class="custom-container definition"><p class="custom-container-title">Definition (偏决定系数)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><div class="math-block" data-tex="\\begin{align*} R^{2}_{Yj} &amp; =\\frac{SSE_{1,\\dots,j-1,j+1,\\dots,p}-SSE_{1,\\dots,p}}{SSE_{1,\\dots,j-1,j+1,\\dots,p}} \\\\  &amp; = \\frac{Y^{T}(H-H_{-j})Y}{Y^{T}(I-H_{-j})Y}\\end{align*}"></div></div></div><div class="custom-container definition"><p class="custom-container-title">Definition (偏相关系数)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><div class="math-block" data-tex="r_{Yj} = \\frac{X_j^T(I-H_{-j})Y}{\\sqrt{X_j^T(I-H_{-j})X_j \\cdot Y^T(I-H_{-j})Y}}"></div><p>符号与回归系数符号相同。</p></div></div><div class="custom-container theorem"><p class="custom-container-title">Theorem (偏相关系数与偏决定系数的关系)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1></div></div><p><strong>证明</strong><br> 类似于t检验和偏F检验<div class="math-block" data-tex="\\begin{align*}
r_{Y_{j}}^{2} &amp; =\\frac{Y^{T}r_{j}r_{j}^{T}Y}{r_{j}^{T}r_{j}} \\frac{1}{Y^{T}(I-H_{-j})Y} \\\\
 &amp; =\\frac{Y^{T}(H-H_{-j})Y}{Y^{T}(I-H_{-j})Y} \\\\
 &amp; = R_{Y_{j}}^{2}
\\end{align*}"></div></p>`,16)]))}const p=n(s,[["render",r],["__file","02-3duoyuanxianxinghuigui-zhongxinhuahebiaozhunhua.html.vue"]]),c=JSON.parse('{"path":"/series/courses/huiguifenxi/02-3duoyuanxianxinghuigui-zhongxinhuahebiaozhunhua.html","title":"02-3多元线性回归-中心化和标准化","lang":"zh-CN","frontmatter":{"date":"2024-11-03T00:00:00.000Z"},"headers":[{"level":2,"title":"1. 中心化和标准化","slug":"_1-中心化和标准化","link":"#_1-中心化和标准化","children":[]},{"level":2,"title":"2. 相关性矩阵与偏相关系数","slug":"_2-相关性矩阵与偏相关系数","link":"#_2-相关性矩阵与偏相关系数","children":[]}],"git":{"createdTime":1737707068000,"updatedTime":1765630636000,"contributors":[{"name":"Dawnfz-Lenfeng","email":"2912706234@qq.com","commits":2}]},"filePathRelative":"series/courses/回归分析/02-3多元线性回归-中心化和标准化.md"}');export{p as comp,c as data};
