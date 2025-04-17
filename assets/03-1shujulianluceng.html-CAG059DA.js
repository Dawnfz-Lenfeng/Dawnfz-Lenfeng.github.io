import{_ as o,c as p,e,a as s,d as n,b as t,w as i,r as c,o as m}from"./app-CydEHEY4.js";const d={},h={class:"custom-container definition"},g={class:"custom-container-content"},u={class:"custom-container definition"},v={class:"custom-container-content"},f={class:"custom-container theorem"},b={class:"custom-container-content"},y={class:"custom-container definition"},x={class:"custom-container-content"},k={class:"custom-container theorem"},_={class:"custom-container-content"};function D(P,a){const l=c("eq"),r=c("eqn");return m(),p("div",null,[a[28]||(a[28]=e('<h1 id="_03-1数据链路层" tabindex="-1"><a class="header-anchor" href="#_03-1数据链路层"><span>03-1数据链路层</span></a></h1><h2 id="_1-数据链路层的设计" tabindex="-1"><a class="header-anchor" href="#_1-数据链路层的设计"><span>1. 数据链路层的设计</span></a></h2><h3 id="_1-1-数据链路层的功能" tabindex="-1"><a class="header-anchor" href="#_1-1-数据链路层的功能"><span>1.1 数据链路层的功能</span></a></h3><ul><li><strong>成帧</strong>（Framing）：也叫组帧。将比特划分成数据帧来检测和纠正物理层在传输中可能出现的错误。</li><li><strong>差错控制</strong>（Error Control）：处理传输中出现的差错</li><li><strong>流量控制</strong>（Flow Control）：确保发送方的发送速率不大于接收方的处理速率</li></ul><h3 id="_1-2-数据链路层提供的服务" tabindex="-1"><a class="header-anchor" href="#_1-2-数据链路层提供的服务"><span>1.2 数据链路层提供的服务</span></a></h3><ul><li><strong>无确认无连接服务</strong>（ Unacknowledged connectionless ）</li><li><strong>有确认无连接服务</strong>（ Acknowledged connectionless ）</li><li><strong>有确认有连接服务</strong>（Acknowledged connection-oriented）</li></ul><h2 id="_2-成帧" tabindex="-1"><a class="header-anchor" href="#_2-成帧"><span>2. 成帧</span></a></h2><ul><li><strong>字节计数法</strong>：固定长度字节为一帧</li><li><strong>带字节填充的定界符法</strong>：使用定界符（FLAG），比如 01111110，即 0x7E，用于区分前后两个不同的帧</li><li><strong>带比特填充的定界符法</strong>：定界符：两个0比特之间，连续6个1比特，即01111110，0x7E</li><li><strong>物理层编码违例</strong>：选择的定界符不会在数据部分出现</li></ul><h3 id="_2-1-基于帧进行的差错控制" tabindex="-1"><a class="header-anchor" href="#_2-1-基于帧进行的差错控制"><span>2.1 基于帧进行的差错控制</span></a></h3><p>链路存在的问题</p><ul><li><strong>差错</strong>（incorrect）：数据发送错误</li><li><strong>丢失</strong>（lost）：接收方未收到</li><li><strong>乱序</strong>（out of order）：先发后到，后发先到</li><li><strong>重复</strong>（repeatedly delivery）：一次发送，多次接收</li></ul><p>解决方法</p><ul><li><strong>确认</strong>：接收方校验数据，并给发送法应答</li><li><strong>定时器</strong>：发送方启用定时器，防止丢失</li><li><strong>顺序号</strong>：接收方检查序号，防止乱序递交，重复递交</li></ul><h3 id="_2-2-基于帧进行的流量控制" tabindex="-1"><a class="header-anchor" href="#_2-2-基于帧进行的流量控制"><span>2.2 基于帧进行的流量控制</span></a></h3><p>问题</p><ul><li>接收方的接收缓冲区溢出</li></ul><p>解决方案</p><ul><li>基于反馈的流量控制</li><li>基于速率的浏览控制</li></ul><h2 id="_3-差错控制" tabindex="-1"><a class="header-anchor" href="#_3-差错控制"><span>3. 差错控制</span></a></h2><ul><li><strong>码字</strong>：一个包含m个数据位和r个校验位的n位单元</li><li><strong>码率</strong>：码字中不含冗余部分所占的比例，可以用m/n表示</li></ul><div class="custom-container definition"><p class="custom-container-title">Definition (海明距离 Hamming distance)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>两个码字之间不同对应比特的数目</p></div></div><div class="custom-container theorem"><p class="custom-container-title">Theorem (海明距离编码)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>为了检查出d个错（比特错），可以使用海明距离为 <strong>d+1</strong> 的编码</li><li>为了纠正d个错，可以使用海明距离为 <strong>2d+1</strong> 的编码</li></ul></div></div><h3 id="_3-1-检错码" tabindex="-1"><a class="header-anchor" href="#_3-1-检错码"><span>3.1 检错码</span></a></h3><ul><li>在被发送的数据块中，包含一些冗余信息，但这些信息只能使接收方推断是否发生错误，但不能推断哪位发生错误，接收方可以请求发送方重传数据</li></ul><div class="custom-container definition"><p class="custom-container-title">Definition (奇偶校验 Parity Check)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>增加1位校验位，可以检查奇数位错误</p></div></div><div class="custom-container definition"><p class="custom-container-title">Definition (校验和 Checksum)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>发送方进行 16 位二进制补码求和运算，计算结果取反，随数据一同发送。</li><li>接收方进行 16 位二进制补码求和运算（包含校验和），结果非全1，则检测到错误。</li></ul></div></div>',26)),s("div",h,[a[5]||(a[5]=s("p",{class:"custom-container-title"},"Definition (循环冗余校验 Cyclic Redundancy Check，CRC)",-1)),s("div",g,[a[4]||(a[4]=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#"},[s("span")])],-1)),s("ul",null,[s("li",null,[a[1]||(a[1]=n("双方规定多项式")),t(l,null,{default:i(()=>a[0]||(a[0]=[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])],-1)])),_:1})]),a[2]||(a[2]=s("li",null,"将原始数据D乘以2n （相当于在D后面添加 n 个 0），产生k+n位二进制位模式，",-1)),a[3]||(a[3]=s("li",null,"用G对该位模式做模2除，得到余数R（n位，不足n位前面用0补齐）即为CRC校验码",-1))])])]),a[29]||(a[29]=s("h3",{id:"_3-2-纠错码",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-2-纠错码"},[s("span",null,"3.2 纠错码")])],-1)),a[30]||(a[30]=s("ul",null,[s("li",null,"发送方在每个数据块中加入足够的冗余信息，使得接收方能够判断接收到的数据是否有错，并能纠正错误（定位出错的位置）")],-1)),s("div",u,[a[13]||(a[13]=s("p",{class:"custom-container-title"},"Definition (海明码)",-1)),s("div",v,[a[12]||(a[12]=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#"},[s("span")])],-1)),s("ul",null,[a[11]||(a[11]=s("li",null,[n("海明码在 "),s("strong",null,"数据位（Data bits）"),n(" 中插入 "),s("strong",null,"冗余校验位（Parity bits）"),n("，这些校验位用于错误检测和纠正。")],-1)),s("li",null,[a[7]||(a[7]=n("海明码的校验位存放在 ")),t(l,null,{default:i(()=>a[6]||(a[6]=[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8491em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8491em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])])])])])])])])],-1)])),_:1}),a[8]||(a[8]=n(" 位置（即 1、2、4、8…），这些校验位计算 ")),a[9]||(a[9]=s("strong",null,"特定比特的奇偶性",-1)),a[10]||(a[10]=n("。"))])])])]),s("div",f,[a[21]||(a[21]=s("p",{class:"custom-container-title"},"Theorem (海明码冗余位数计算)",-1)),s("div",b,[a[20]||(a[20]=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#"},[s("span")])],-1)),s("p",null,[a[17]||(a[17]=n("设计单比特纠错海明码：给定")),t(l,null,{default:i(()=>a[14]||(a[14]=[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])],-1)])),_:1}),a[18]||(a[18]=n("个信息位，")),t(l,null,{default:i(()=>a[15]||(a[15]=[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])],-1)])),_:1}),a[19]||(a[19]=n("个校验位，纠正单比特错，需满足")),s("section",null,[t(r,null,{default:i(()=>a[16]||(a[16]=[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7977em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])],-1)])),_:1})])])])]),a[31]||(a[31]=e('<div class="custom-container definition"><p class="custom-container-title">Definition (RS码)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>RS会将需要编码的流数据重新排列为以符号（Symbol）为单位的数据块</li><li>m表示符号的大小，如 m=4 表示每个符号由4位二进制数组成</li><li>对于一个(n, k)RS编码，k为原始数据符号数，n-k为校验符号数</li><li>n-k=2t，t表示能够纠正的错误数</li></ul></div></div><p><img src="https://raw.githubusercontent.com/Dawnfz-Lenfeng/imgs/master/20250315142606055.png" alt=""></p><h2 id="_4-基本的数据链路层协议" tabindex="-1"><a class="header-anchor" href="#_4-基本的数据链路层协议"><span>4. 基本的数据链路层协议</span></a></h2><h3 id="_4-1-乌托邦式单工协议" tabindex="-1"><a class="header-anchor" href="#_4-1-乌托邦式单工协议"><span>4.1 乌托邦式单工协议</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (乌托邦式单工协议假设)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>单工协议：数据单向运输</li><li>完美信道：帧不会丢失或受损</li><li>始终就绪：发送方/接收方的网络层始终处于就绪状态</li><li>瞬间完成：发送方/接收方能够生成/处理无穷多数据</li></ul></div></div><p>乌托邦：</p><ul><li>不处理任何流量控制或纠错工作</li><li>接近于无确认的无连接服务，必须依赖更高层次解决上述问题</li></ul><div class="custom-container definition"><p class="custom-container-title">Definition (乌托邦式单工协议)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>发送方</p><ul><li>在循环中不停发送</li><li>在网络层获得数据</li><li>封装成帧</li><li>交给物理层</li><li>完成一次发送<br> 接收方</li><li>在循环中持续接收</li><li>等待帧到达</li><li>从物理层获得帧</li><li>解封装，将帧中的数据传递给网络层</li><li>完成一次接收</li></ul></div></div><h3 id="_4-2-无错信道的停等式协议" tabindex="-1"><a class="header-anchor" href="#_4-2-无错信道的停等式协议"><span>4.2 无错信道的停等式协议</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (无错信道的停等式协议假设)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>不再假设接收方能够处理以无限高速进来的数据</li><li>但假设通信信道不会出错，并且数据传输保持单向，但需要双向传输链路（半双工物理信道）</li></ul></div></div><div class="custom-container definition"><p class="custom-container-title">Definition (无错信道的停等式协议)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>发送方发送一帧后暂停，等待确认到达后发送下一帧。接收方完成接收后，回复确认接收。<br> 发送方</p><ul><li>完成一帧发送</li><li>等待确认到达</li><li>确认到达后，发送下一帧<br> 接收方</li><li>完成一帧接收后</li><li>交给物理层一个哑帧</li><li>作为成功接收上一帧的确认</li></ul></div></div><h3 id="_4-3-有错信道上的单工停等式协议" tabindex="-1"><a class="header-anchor" href="#_4-3-有错信道上的单工停等式协议"><span>4.3 有错信道上的单工停等式协议</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (有错信道上的单工停等式协议假设)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>通信信道可能出错，导致：</p><ul><li>帧在传输过程中可能会被损坏，接收方能够检测出来</li><li>帧在传输过程中可能会丢失，永远不可能到达接收方</li></ul></div></div><div class="custom-container definition"><p class="custom-container-title">Definition (有错信道上的单工停等式协议)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>发送方</p><ul><li>初始化帧序号0，发送帧</li><li>等待：正确的确认/错误的确认/超时</li><li>正确确认：发送下一帧</li><li>超时/错误确认：重发<br> 接收方</li><li>初始化期待0号帧</li><li>等待帧达到</li><li>正确帧：交给网络层，并发送该帧确认</li><li>错误帧：发送上一个成功接受帧的确认</li></ul></div></div>',14)),s("div",y,[a[24]||(a[24]=s("p",{class:"custom-container-title"},"Definition (信道利用率)",-1)),s("div",x,[a[23]||(a[23]=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#"},[s("span")])],-1)),s("section",null,[t(r,null,{default:i(()=>a[22]||(a[22]=[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1297em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])],-1)])),_:1})])])]),a[32]||(a[32]=e('<h2 id="_5-流量控制" tabindex="-1"><a class="header-anchor" href="#_5-流量控制"><span>5. 流量控制</span></a></h2><div class="custom-container definition"><p class="custom-container-title">Definition (滑动窗口)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>发送窗口（SWND）：在收到对方确认的信息之前，可以连续发出的最多数据帧数</li><li>接收窗口（RWND）：可以连续接收的最多数据帧数</li></ul></div></div><h3 id="_5-1-回退n-go-back-n-协议" tabindex="-1"><a class="header-anchor" href="#_5-1-回退n-go-back-n-协议"><span>5.1 回退N（Go-Back-N）协议</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (回退N协议)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>发送窗口大于1，接收窗口为1。当接收端受到一个出错帧或乱序帧，丢弃所有的后续真，并且不为这些帧发送确认。发送端超时后，重传所有未被确认的帧</p></div></div><h3 id="_5-2-选择性重传-selective-repeat-协议" tabindex="-1"><a class="header-anchor" href="#_5-2-选择性重传-selective-repeat-协议"><span>5.2 选择性重传（Selective Repeat）协议</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (选择性重传协议)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>发送窗口大于1，接受窗口大于1。若发送方发出连续的若干帧后，收到对其中一帧的否认帧，或某一帧的定时器超时，则只重传改出错帧或计时器超时的数据帧。</p></div></div>',6)),s("div",k,[a[27]||(a[27]=s("p",{class:"custom-container-title"},"Theorem (选择重传协议滑动窗口长度)",-1)),s("div",_,[a[26]||(a[26]=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#"},[s("span")])],-1)),s("section",null,[t(r,null,{default:i(()=>a[25]||(a[25]=[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"SWND")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mop mtight"},[s("span",{class:"mtight"},"m"),s("span",{class:"mtight"},"a"),s("span",{class:"mtight"},"x")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"RWND")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mop mtight"},[s("span",{class:"mtight"},"m"),s("span",{class:"mtight"},"a"),s("span",{class:"mtight"},"x")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])])])])])],-1)])),_:1})])])]),a[33]||(a[33]=e('<h2 id="_6-数据链路协议实例" tabindex="-1"><a class="header-anchor" href="#_6-数据链路协议实例"><span>6. 数据链路协议实例</span></a></h2><h3 id="_6-1-ppp协议" tabindex="-1"><a class="header-anchor" href="#_6-1-ppp协议"><span>6.1 PPP协议</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (PPP协议)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>PPP协议，全称是 <strong>Point-to-Point Protocol（点对点协议）</strong>，是一种在<strong>两个节点之间直接通信</strong>的网络层下的<strong>数据链路层协议</strong>，用于建立、配置、维护和拆除点对点连接。</p></div></div><p><img src="https://raw.githubusercontent.com/Dawnfz-Lenfeng/imgs/master/20250328210957260.png" alt=""></p><div class="custom-container definition"><p class="custom-container-title">Definition (字节填充)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><ul><li>避免在信息字段中出现和标志字段一样的比特组合（0X7E）</li><li>当PPP使用异步传输时，定义转义字符0X7D，并使用字节填充</li><li>将信息字段中出现的0x7E 字节转变成为2字节序列(0x7D, 0x5E)</li><li>若信息字段中出现一个0x7D 字节, 则将其转变成为2字节序列(0x7D, 0x5D)</li><li>若信息字段中出现 ASCII 码的控制字符（即数值小于 0x20 的字符），则在该字符前面要加入一个 0x7D 字节，同时将该字符的编码加以改变<br> 在发送端进行了字节填充，链路上传递的信息字节数超过原来的信息字节数。接收端进行字节填充相反的工作，恢复为原来的信息</li></ul></div></div><p><img src="https://raw.githubusercontent.com/Dawnfz-Lenfeng/imgs/master/20250328211717623.png" alt=""></p><div class="custom-container definition"><p class="custom-container-title">Definition (零比特填充)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>PPP协议用在SONET/SDH链路时，使用同步传输（一连串的比特连续传送），不是异步传输（逐个字符地传送）</p><ul><li>信息字段中出现了和标志字段 F 完全一样的 8 比特组合（0x7E）</li><li>发送端在 5 个连 1 之后填入 0 比特再发送出去；</li><li>在接收端把 5 个连 1 之后的 0 比特删除</li></ul></div></div><p><img src="https://raw.githubusercontent.com/Dawnfz-Lenfeng/imgs/master/20250328211954585.png" alt=""></p><h3 id="_6-2-pppoe" tabindex="-1"><a class="header-anchor" href="#_6-2-pppoe"><span>6.2 PPPoE</span></a></h3><div class="custom-container definition"><p class="custom-container-title">Definition (PPPoE（Point-to-Point Protocol over Ethernet）)</p><div class="custom-container-content"><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><p>提供在以太网链路上的PPP连接</p></div></div>',10))])}const w=o(d,[["render",D]]),N=JSON.parse('{"path":"/series/courses/jisuanjiwangluo/03-1shujulianluceng.html","title":"03-1数据链路层","lang":"zh-CN","frontmatter":{"date":"2025-03-13T00:00:00.000Z"},"headers":[{"level":2,"title":"1. 数据链路层的设计","slug":"_1-数据链路层的设计","link":"#_1-数据链路层的设计","children":[{"level":3,"title":"1.1 数据链路层的功能","slug":"_1-1-数据链路层的功能","link":"#_1-1-数据链路层的功能","children":[]},{"level":3,"title":"1.2 数据链路层提供的服务","slug":"_1-2-数据链路层提供的服务","link":"#_1-2-数据链路层提供的服务","children":[]}]},{"level":2,"title":"2. 成帧","slug":"_2-成帧","link":"#_2-成帧","children":[{"level":3,"title":"2.1 基于帧进行的差错控制","slug":"_2-1-基于帧进行的差错控制","link":"#_2-1-基于帧进行的差错控制","children":[]},{"level":3,"title":"2.2 基于帧进行的流量控制","slug":"_2-2-基于帧进行的流量控制","link":"#_2-2-基于帧进行的流量控制","children":[]}]},{"level":2,"title":"3. 差错控制","slug":"_3-差错控制","link":"#_3-差错控制","children":[{"level":3,"title":"3.1 检错码","slug":"_3-1-检错码","link":"#_3-1-检错码","children":[]},{"level":3,"title":"3.2 纠错码","slug":"_3-2-纠错码","link":"#_3-2-纠错码","children":[]}]},{"level":2,"title":"4. 基本的数据链路层协议","slug":"_4-基本的数据链路层协议","link":"#_4-基本的数据链路层协议","children":[{"level":3,"title":"4.1 乌托邦式单工协议","slug":"_4-1-乌托邦式单工协议","link":"#_4-1-乌托邦式单工协议","children":[]},{"level":3,"title":"4.2 无错信道的停等式协议","slug":"_4-2-无错信道的停等式协议","link":"#_4-2-无错信道的停等式协议","children":[]},{"level":3,"title":"4.3 有错信道上的单工停等式协议","slug":"_4-3-有错信道上的单工停等式协议","link":"#_4-3-有错信道上的单工停等式协议","children":[]}]},{"level":2,"title":"5. 流量控制","slug":"_5-流量控制","link":"#_5-流量控制","children":[{"level":3,"title":"5.1 回退N（Go-Back-N）协议","slug":"_5-1-回退n-go-back-n-协议","link":"#_5-1-回退n-go-back-n-协议","children":[]},{"level":3,"title":"5.2 选择性重传（Selective Repeat）协议","slug":"_5-2-选择性重传-selective-repeat-协议","link":"#_5-2-选择性重传-selective-repeat-协议","children":[]}]},{"level":2,"title":"6. 数据链路协议实例","slug":"_6-数据链路协议实例","link":"#_6-数据链路协议实例","children":[{"level":3,"title":"6.1 PPP协议","slug":"_6-1-ppp协议","link":"#_6-1-ppp协议","children":[]},{"level":3,"title":"6.2 PPPoE","slug":"_6-2-pppoe","link":"#_6-2-pppoe","children":[]}]}],"git":{"createdTime":1743169601000,"updatedTime":1744868692000,"contributors":[{"name":"Dawnfz-Lenfeng","email":"2912706234@qq.com","commits":1}]},"filePathRelative":"series/courses/计算机网络/03-1数据链路层.md"}');export{w as comp,N as data};
