import{_ as n,c as s,f as t,o as e}from"./app-59WV7vgm.js";const i={};function p(l,a){return e(),s("div",null,a[0]||(a[0]=[t(`<h1 id="用「schur补」理解「cholesky分解」" tabindex="-1"><a class="header-anchor" href="#用「schur补」理解「cholesky分解」"><span>用「Schur补」理解「Cholesky分解」</span></a></h1><h2 id="_1-schur-补" tabindex="-1"><a class="header-anchor" href="#_1-schur-补"><span>1. Schur 补</span></a></h2><h3 id="_1-1-定义" tabindex="-1"><a class="header-anchor" href="#_1-1-定义"><span>1.1 定义</span></a></h3><p>设<span class="math-inline" data-tex="M"></span>为<span class="math-inline" data-tex="n\\times n"></span>的矩阵, 可分块为<div class="math-block" data-tex="M=\\begin{pmatrix}
A &amp; B \\\\
C &amp; D
\\end{pmatrix}"></div>其中<span class="math-inline" data-tex="A"></span>为<span class="math-inline" data-tex="k\\times k"></span>的矩阵, <span class="math-inline" data-tex="D"></span>为<span class="math-inline" data-tex="(n-k)\\times(n-k)"></span>的矩阵.</p><p>假设<span class="math-inline" data-tex="A"></span>是可逆的, 则<span class="math-inline" data-tex="M"></span>相对于<span class="math-inline" data-tex="A"></span>的 Schur 补定义为<div class="math-block" data-tex="S=D-CA^{-1}B"></div>同理, 如果<span class="math-inline" data-tex="D"></span>是可逆的, 则<span class="math-inline" data-tex="M"></span>相对于<span class="math-inline" data-tex="D"></span>的 Schur 补为<div class="math-block" data-tex="S&#39;=A-BD^{-1}C"></div></p><hr><h3 id="_1-2-性质" tabindex="-1"><a class="header-anchor" href="#_1-2-性质"><span>1.2 性质</span></a></h3><p>我们注意到, 设<div class="math-block" data-tex="L=\\begin{pmatrix}
I_{k} &amp; -A^{-1}B \\\\
O &amp; I_{n-k}
\\end{pmatrix}"></div>此时<div class="math-block" data-tex="ML=\\begin{pmatrix}
A &amp; B \\\\
C &amp; D
\\end{pmatrix}\\begin{pmatrix}
I_{k} &amp; -A^{-1}B \\\\
O &amp; I_{n-k}
\\end{pmatrix}=\\begin{pmatrix}
A &amp; O \\\\
C &amp; D-CA^{-1}B
\\end{pmatrix} = \\begin{pmatrix}
A &amp; O \\\\
C &amp; S
\\end{pmatrix}"></div>故显然 Schur 补有以下性质<div class="math-block" data-tex="\\det(M)=\\det(A)\\cdot \\det(S)"></div>同理也有<div class="math-block" data-tex="\\det(M)=\\det(D)\\cdot \\det(S&#39;)"></div>因此我们可以还得到推论: 如果已知<span class="math-inline" data-tex="A"></span>可逆, 则<span class="math-inline" data-tex="M"></span>可逆性与<span class="math-inline" data-tex="A"></span>的 Schur 补的可逆性相同.</p><hr><p>同时, 如果<span class="math-inline" data-tex="M"></span>也正定, 则容易证明<span class="math-inline" data-tex="M"></span>关于任何一个主子块的 Schur 补也正定.</p><p>这是因为我们设<div class="math-block" data-tex="\\begin{align*}
M&amp;=\\begin{pmatrix}
A &amp; B \\\\
B^{T} &amp; C
\\end{pmatrix} \\\\
P &amp;= \\begin{pmatrix}
I_{k} &amp; -A^{-1}B \\\\
O &amp; I_{n-k}
\\end{pmatrix}
\\end{align*}"></div>此时<div class="math-block" data-tex="\\begin{align*}
P^{T}MP&amp;=\\begin{pmatrix}
I_{k} &amp; O \\\\
-B^{T}A^{-1} &amp; I_{n-k}
\\end{pmatrix}\\begin{pmatrix}
A &amp; B \\\\
B^{T} &amp; C
\\end{pmatrix}\\begin{pmatrix}
I_{k} &amp; -A^{-1}B \\\\
O &amp; I_{n-k}
\\end{pmatrix} \\\\
&amp;=\\begin{pmatrix}
A &amp; O \\\\
O &amp; C-B^{T}A^{-1}B
\\end{pmatrix} \\\\
&amp;=\\begin{pmatrix}
A &amp; O \\\\
O &amp; S
\\end{pmatrix}
\\end{align*} \\tag{1}"></div>因此<span class="math-inline" data-tex="M"></span>与<span class="math-inline" data-tex="\\begin{pmatrix} A &amp; O \\\\ O &amp; S\\end{pmatrix}"></span>合同, 因此<span class="math-inline" data-tex="\\begin{pmatrix} A &amp; O \\\\ O &amp; S\\end{pmatrix}"></span>也正定, 故不难得出<span class="math-inline" data-tex="A"></span>和<span class="math-inline" data-tex="S"></span>也正定. 故证毕(值得一提的是, 这里我们顺便证明了正定矩阵所有顺序主子式大于 0).</p><p>根据<span class="math-inline" data-tex="(1)"></span>, 我们还得到了一个重要的性质, 即<strong>当<span class="math-inline" data-tex="M"></span>为对称矩阵时, <span class="math-inline" data-tex="M"></span>任一主子块与其 Schur 补组成的对角块矩阵与<span class="math-inline" data-tex="M"></span>合同</strong>. 这便是我们理解 Cholesky 分解的关键.</p><h2 id="_2-cholesky-分解" tabindex="-1"><a class="header-anchor" href="#_2-cholesky-分解"><span>2. Cholesky 分解</span></a></h2><h3 id="_2-1-定义" tabindex="-1"><a class="header-anchor" href="#_2-1-定义"><span>2.1 定义</span></a></h3><p>对于一个给定的对称正定矩阵<span class="math-inline" data-tex="A"></span>, Cholesky 分解能够将<span class="math-inline" data-tex="A"></span>分解为一个下三角矩阵<span class="math-inline" data-tex="L"></span>和其转置的乘积, 即<div class="math-block" data-tex="A=LL^{T}"></div>其中<span class="math-inline" data-tex="L"></span>为下三角矩阵.</p><hr><h3 id="_2-2-证明" tabindex="-1"><a class="header-anchor" href="#_2-2-证明"><span>2.2 证明</span></a></h3><p>设<span class="math-inline" data-tex="A"></span>为<span class="math-inline" data-tex="n\\times n"></span>的对称正定矩阵. 下面我们考虑归纳法.</p><p>对于<span class="math-inline" data-tex="n=1"></span>, 即<span class="math-inline" data-tex="A=(a_{11})"></span>, 且<span class="math-inline" data-tex="a_{11}&gt;0"></span>(因为<span class="math-inline" data-tex="A"></span>正定). 只需取<span class="math-inline" data-tex="L=(\\sqrt{ a_{11} })"></span>即可.</p><p>假设对于所有<span class="math-inline" data-tex="n-1"></span>维对称正定矩阵存在 Cholesky 分解, 下面证明对于<span class="math-inline" data-tex="n"></span>维也成立.</p><p>我们设<div class="math-block" data-tex="A_{n}=\\begin{pmatrix} a_{11}  &amp; \\boldsymbol{\\alpha}^{T} \\\\ \\boldsymbol{\\alpha}&amp; A_{n-1}\\end{pmatrix}"></div>下面考虑<span class="math-inline" data-tex="A_{n}"></span>对于<span class="math-inline" data-tex="a_{11}"></span>的 Schur 补<div class="math-block" data-tex="S=A_{n-1}-\\frac{1}{a_{11}}\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{T}"></div>根据 Schur 补的性质, 我们知道<span class="math-inline" data-tex="S"></span>也是正定的, 因此有存在下三角矩阵<span class="math-inline" data-tex="L_{S}"></span>, 使得<div class="math-block" data-tex="S=L_{S}L_{S}^{T}"></div>根据<span class="math-inline" data-tex="(1)"></span>式, 我们也考虑<div class="math-block" data-tex="P=\\begin{pmatrix}
1 &amp; -\\frac{1}{a_{11}}\\boldsymbol{\\alpha}^{T} \\\\
O &amp; I_{n-1}
\\end{pmatrix}"></div>此时有<div class="math-block" data-tex="P^{T}A_{n}P=\\begin{pmatrix}
a_{11} &amp; O \\\\
O &amp; S
\\end{pmatrix}=\\begin{pmatrix}
a_{11} &amp; O \\\\
O &amp; L_{S}L_{S}^{T}
\\end{pmatrix}=\\begin{pmatrix}
\\sqrt{ a_{11} } &amp; O \\\\
O &amp; L_{S}
\\end{pmatrix}\\begin{pmatrix}
\\sqrt{ a_{11} } &amp; O \\\\
O &amp; L_{S}^{T}
\\end{pmatrix}=Q^{T}Q \\tag{2}
"></div>因此<div class="math-block" data-tex="\\begin{align*}
A_{n} &amp;= (P^{T})^{-1}Q^{T}QP^{-1} \\\\
&amp;= (QP^{-1})^{T}(QP^{-1})
\\end{align*}"></div>故令<div class="math-block" data-tex="L_{n} = (QP^{-1})^{T}= \\left( \\begin{pmatrix}
\\sqrt{ a_{11} } &amp; O \\\\
O &amp; L_{S}^{T}
\\end{pmatrix}\\begin{pmatrix}
1 &amp; \\frac{1}{a_{11}}\\boldsymbol{\\alpha}^{T} \\\\
O &amp; I_{n-1}
\\end{pmatrix} \\right)^{T}=\\begin{pmatrix}
\\sqrt{ a_{11} } &amp; O \\\\
\\frac{1}{\\sqrt{ a_{11} }}\\boldsymbol{\\alpha} &amp; L_{S}
\\end{pmatrix}"></div>即为所求. 故证毕</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结"><span>3. 总结</span></a></h2><p>回顾证明过程, 我们可以为 Cholesky 的递推过程作出一个合理的解释.</p><p>Cholesky 分解本质上可以视为一种通过逐步“挖孔”并利用 Schur 补来简化问题的策略. 在每一步分解中, 选取矩阵的一个元素(如矩阵的首元素<span class="math-inline" data-tex="a_{11}"></span>)和相关行列(如对应的向量<span class="math-inline" data-tex="\\boldsymbol{\\alpha}^{T}"></span>和<span class="math-inline" data-tex="\\boldsymbol{\\alpha}"></span>), 相当于在矩阵中移除这一部分, 此时剩余部分正好构成首元素<span class="math-inline" data-tex="a_{11}"></span>的 Schur 补. 而根据 Schur 补正交延续的性质, 便自然地变成了一种逐步递推关系.</p>`,24)]))}const d=n(i,[["render",p],["__file","yong「Schurbu」lijie「Choleskyfenjie」.html.vue"]]),h=JSON.parse('{"path":"/series/zhihu/xianxingdaishu/yong-Schurbu-lijie-Choleskyfenjie.html","title":"用「Schur补」理解「Cholesky分解」","lang":"zh-CN","frontmatter":{"date":"2024-04-14T00:00:00.000Z"},"headers":[{"level":2,"title":"1. Schur 补","slug":"_1-schur-补","link":"#_1-schur-补","children":[{"level":3,"title":"1.1 定义","slug":"_1-1-定义","link":"#_1-1-定义","children":[]},{"level":3,"title":"1.2 性质","slug":"_1-2-性质","link":"#_1-2-性质","children":[]}]},{"level":2,"title":"2. Cholesky 分解","slug":"_2-cholesky-分解","link":"#_2-cholesky-分解","children":[{"level":3,"title":"2.1 定义","slug":"_2-1-定义","link":"#_2-1-定义","children":[]},{"level":3,"title":"2.2 证明","slug":"_2-2-证明","link":"#_2-2-证明","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1765677614000,"updatedTime":1765677614000,"contributors":[{"name":"Dawnfz-Lenfeng","email":"2912706234@qq.com","commits":1}]},"filePathRelative":"series/zhihu/线性代数/用「Schur补」理解「Cholesky分解」.md"}');export{d as comp,h as data};
