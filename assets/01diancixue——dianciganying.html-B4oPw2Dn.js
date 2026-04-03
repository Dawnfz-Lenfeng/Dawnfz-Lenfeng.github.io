import{_ as t,c as n,f as i,o as e}from"./app-DcoxJz42.js";const c={};function s(l,a){return e(),n("div",null,a[0]||(a[0]=[i(`<h1 id="_01电磁学——电磁感应" tabindex="-1"><a class="header-anchor" href="#_01电磁学——电磁感应"><span>01电磁学——电磁感应</span></a></h1><p>==<em>不要忘记线圈匝数!!!</em>==</p><p><strong>楞次定律</strong> 变化磁通量产生电动势<div class="math-block" data-tex="\\varepsilon= - \\frac{d\\phi}{dt}=-\\frac{d}{dt} \\iint_{S} \\vec{B}\\cdot d\\vec{S}"></div>感生电动势<div class="math-block" data-tex="\\varepsilon_{ind}= -\\iint_{S} \\frac{ \\partial \\vec{B} }{ \\partial t } \\cdot d\\vec{S} "></div>动生电动势<div class="math-block" data-tex="\\varepsilon_{mot}= \\int_{a(-)}^{b(+)} \\vec{v}\\times \\vec{B} \\cdot \\, d\\vec{l} "></div></p><p><strong>例1</strong> 长直导线载有导线<span class="math-inline" data-tex="I"></span>, 旁边有一与它共面的矩形线圈. 求感应电动势.<br><img src="https://raw.githubusercontent.com/Dawnfz-Lenfeng/imgs/master/20251213220039297.png" alt=""></p><p><strong>法一</strong> 注意到<div class="math-block" data-tex="B= \\frac{\\mu_{0}I}{2\\pi(x+l)}"></div>故<div class="math-block" data-tex="d\\phi = BdS = \\frac{\\mu_{0}bI}{2\\pi} \\frac{1}{x+l} dl"></div>此时<div class="math-block" data-tex="\\begin{align*}
\\phi &amp; = \\frac{\\mu_{0}bI}{2\\pi} \\int _{0}^{a} \\frac{1}{x+l} \\, dl \\\\
 &amp; = \\frac{\\mu_{0}bl}{2\\pi}( \\ln(a+x)-\\ln x)
\\end{align*} "></div>故<div class="math-block" data-tex="\\begin{align*}
\\varepsilon= -N\\frac{d\\phi}{dt}  &amp; = N\\frac{\\mu_{0}bI}{2\\pi}\\left( \\frac{1}{x}- \\frac{1}{a+x}\\right) \\cdot v \\\\
 &amp; = \\frac{\\mu_{0}NIab}{2\\pi x(x+a)}v
\\end{align*}"></div><br><strong>法二</strong> 用动生电动势<div class="math-block" data-tex="\\begin{align*}
\\varepsilon_{AB} &amp; = \\int_{A}^{B}  \\vec{v}\\times \\vec{B} \\cdot d\\vec{l}  \\\\
 &amp; = \\frac{\\mu_{0}I}{2\\pi x} bv
\\end{align*}"></div>同理<div class="math-block" data-tex="\\begin{align*}
\\varepsilon _{CD} &amp; = \\int _{C}^{D}  \\vec{v}\\times \\vec{B} \\cdot d\\vec{l}   \\\\
 &amp; = -\\frac{\\mu_{0}I}{2\\pi(x+a)}bv
\\end{align*} "></div>故<div class="math-block" data-tex="\\begin{align*}
\\varepsilon &amp; =N(\\varepsilon_{AB}+\\varepsilon_{CD}) \\\\
 &amp; = \\frac{\\mu_{0}NI}{2\\pi x}\\left( \\frac{1}{x} -\\frac{1}{x+a} \\right)bv \\\\
 &amp; = \\frac{\\mu_{0}NIab}{2\\pi x(x+a)}v
\\end{align*}"></div></p><p><strong>例2</strong> 长度为<span class="math-inline" data-tex="L"></span>在磁场中旋转, 求电动势.<br><img src="https://raw.githubusercontent.com/Dawnfz-Lenfeng/imgs/master/20251213220155145.png" alt=""></p><p><strong>解</strong><br> 由动生电动势<div class="math-block" data-tex="\\begin{align*}
\\varepsilon_{OA} &amp; =\\int_{0}^{L} \\vec{v}\\times \\vec{B} \\cdot \\, d\\vec{l}  \\\\
 &amp; = - Bw\\int_{0}^{L} l \\, dl  \\\\
 &amp; = -\\frac{1}{2}BwL^{2}
\\end{align*}"></div></p><p><strong>例3</strong> 无限长直载流螺线管<span class="math-inline" data-tex="n"></span>, 半径为<span class="math-inline" data-tex="R"></span>, 电流为<span class="math-inline" data-tex="I=\\alpha t"></span>. 求感应电动势.</p><p><strong>解</strong><br> 由先前结论<div class="math-block" data-tex="B= \\mu_{0}nI"></div>故<div class="math-block" data-tex="\\begin{align*}
\\varepsilon &amp; = -\\iint \\frac{ \\partial \\vec{B} }{ \\partial t } \\cdot d\\vec{S}  \\\\
 &amp; = \\mu_{0}n\\alpha \\cdot \\pi r^{2}
\\end{align*}"></div>注意到<div class="math-block" data-tex="\\varepsilon= \\oint_{L}\\vec{E} \\cdot d\\vec{l}=E \\cdot 2\\pi r"></div>故<div class="math-block" data-tex="E= \\frac{\\mu_{0}n\\alpha r}{2}"></div>当在螺线管外面时<div class="math-block" data-tex="\\varepsilon=\\mu_{0}n\\alpha \\cdot \\pi R^{2} = E\\cdot 2\\pi r"></div>故此时<div class="math-block" data-tex="E= \\frac{\\mu_{0}n\\alpha R^{2}}{2r}"></div></p><p><strong>例4</strong> 例1中改成<span class="math-inline" data-tex="I=I_{0}\\cos \\omega t"></span>.</p><p><strong>解</strong><br> 此时<div class="math-block" data-tex="\\begin{align*}
\\varepsilon_{ind} &amp; = - \\iint \\frac{ \\partial \\vec{B} }{ \\partial t }  \\cdot d\\vec{S}   \\\\
 &amp; = -  \\int _{0}^{a} \\frac{ \\partial  }{ \\partial t } \\left( \\frac{\\mu_{0}I}{2\\pi(x+l)}  \\right)\\, bdl  \\\\
 &amp; =  \\frac{\\mu_{0}b}{2\\pi}\\omega I_{0}\\sin\\omega t \\int _{0}^{a} \\frac{1}{l+x} \\, dl \\\\
 &amp; =   \\frac{\\mu_{0}bI_{0}\\omega \\sin\\omega t}{2\\pi} \\ln\\left( \\frac{x+a}{x} \\right)
\\end{align*}"></div>动生<div class="math-block" data-tex="\\varepsilon_{mot}= \\frac{\\mu_{0}Ibav}{2\\pi x(x+a)}"></div></p>`,11)]))}const r=t(c,[["render",s],["__file","01diancixue——dianciganying.html.vue"]]),p=JSON.parse('{"path":"/series/courses/wuli/01diancixue-dianciganying.html","title":"01电磁学——电磁感应","lang":"zh-CN","frontmatter":{"date":"2024-06-10T00:00:00.000Z"},"headers":[],"git":{"createdTime":1765677614000,"updatedTime":1765677614000,"contributors":[{"name":"Dawnfz-Lenfeng","email":"2912706234@qq.com","commits":1}]},"filePathRelative":"series/courses/物理/01电磁学——电磁感应.md"}');export{r as comp,p as data};
