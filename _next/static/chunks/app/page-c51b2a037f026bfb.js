(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9505:(e,t,i)=>{Promise.resolve().then(i.bind(i,8518))},8518:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>K});var a=i(7437),s=i(2265),n=i(8606),r=i(4839);class o{dispose(){this.isCounting=!1,this.span&&this.span.remove(),this.intervalID&&clearInterval(this.intervalID)}init(e){if(this.current=e,this.span=document.createElement("span"),this.span.textContent=this.rate.toString(),this.current&&(this.elemCreated=!0,this.current.insertAdjacentElement("afterbegin",this.span),this.useMemo)){let t=e.textContent;if(t){this.maxNum=parseInt(t);let e=Math.floor(.1*this.maxNum);this.firstThreshold=this.maxNum-e;let i=Math.floor(.02*this.maxNum);this.secondThreshold=this.maxNum-i;for(let e=0;e<=this.maxNum;e++)this.numArr.push(e.toString())}else for(let e=0;e<=this.maxNum;e++)this.numArr.push(e.toString())}}startCounting(){this.isCounting&&setTimeout(()=>{this._countUp1(0)},500)}_countUp1(e){this.intervalID=setInterval(()=>{this.current&&(this.current.textContent=this.numArr[e]),e++,this.firstThreshold<e&&(this.intervalID&&clearInterval(this.intervalID),this.isCounting&&setTimeout(()=>{this._countUp2(e)},1))},1)}_countUp2(e){this.intervalID=setInterval(()=>{this.current&&(this.current.textContent=this.numArr[e]),e++,this.secondThreshold<e&&(this.intervalID&&clearInterval(this.intervalID),this.isCounting&&setTimeout(()=>{this._countUp3(e)},50))},50)}_countUp3(e){this.intervalID=setInterval(()=>{this.current&&(this.current.textContent=this.numArr[e]),e++,this.maxNum<e&&this.intervalID&&clearInterval(this.intervalID)},100)}constructor(e){this.useMemo=!0,this.numArr=[],this.elemCreated=!1,this.isCounting=!0,this.current=null,this.rate=e,this.span=null,this.firstThreshold=908,this.secondThreshold=989,this.maxNum=1009,this.intervalID=null}}let l=(0,r.Z)("flex-1","flex","gap-4","items-center","justify-center","xl:justify-start"),h=(0,r.Z)("text-2xl","xl:text-4xl","font-extrabold","text-[var(--peach-palette4)]","bg-gradient-to-r","from-[#1b9aaa]","to-[#06d6a0]","bg-clip-text","text-transparent"),c=(0,r.Z)("max-w-24","leading-snug","text-[var(--peach-palette4)]"),d=e=>{let t=s.useRef(null),[i,r]=s.useState(!1),d=new o(e.rate);return s.useEffect(()=>{if(!d.elemCreated&&i){let e=t.current;e&&(d.init(e),d.startCounting())}return()=>{d.elemCreated&&i&&d.dispose()}},[i]),s.useEffect(()=>{i||r(!0)},[]),(0,a.jsxs)(n.E.div,{className:l,variants:e.variants,children:[(0,a.jsx)("span",{className:h,ref:t}),(0,a.jsxs)("p",{className:c,children:[e.name,(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-[var(--peach-palette1)]",children:"(max)"})]})]})},u=[{name:"AtCoder",rate:1190},{name:"Codeforces",rate:1538},{name:"CodeChef",rate:1845},{name:"LeetCode",rate:1897}],m={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:1,staggerChildren:.25}}},x=()=>{let e=u.map((e,t)=>(0,a.jsx)(d,{variants:m,name:e.name,rate:e.rate,index:t},t));return(0,a.jsx)("div",{className:"stats pt-4 pb-12 xl:pt-0 xl:pb-0",children:(0,a.jsx)("div",{className:"mx-auto",children:(0,a.jsx)(n.E.div,{className:"flex flex-wrap gap-6 max-w-4/5 mx-auto xl:max-w-none",variants:m,initial:"initial",animate:"animate",children:e})})})},g=["Engineer","Game Developer","Composer","2D/3D Artist","Gardener"],v=g.length;class f{dispose(){this.cursor&&(this.cursor.remove(),this.elemCreated=!1),this.intervalID&&clearInterval(this.intervalID),this.isTyping=!1,this.current&&(this.current.textContent="")}init(e){this.current=e,this.cursor=document.createElement("span"),this.cursor.classList.add("animating-cursor"),this.cursor.textContent="|",this.current&&(this.current.insertAdjacentElement("afterend",this.cursor),this.elemCreated=!0,this.isTyping=!0)}startTyping(){v<=this.index&&(this.index=0),this.isTyping&&setTimeout(()=>{this._typeText(g[this.index])},500)}_typeText(e){let t=0,i=e.length;this.intervalID=setInterval(()=>{this.current&&(this.current.textContent+=e[t++]),i<=t&&(this.intervalID&&clearInterval(this.intervalID),this.isTyping&&setTimeout(()=>{this._eraseText()},500))},100)}_eraseText(){let e=null;if(this.current&&(e=this.current.textContent),e){let t=e.length;this.intervalID=setInterval(()=>{this.current&&(this.current.textContent=e.substring(0,t--)),t<0&&(this.intervalID&&clearInterval(this.intervalID),this.index++,this.isTyping&&this.startTyping())},50)}}constructor(){this.index=0,this.intervalID=null,this.isTyping=!1,this.elemCreated=!1,this.current=null,this.cursor=null}}var p=i(7776),y=i(7161),w=i(4093),b=i(9582);class P{loadAudioBuffer(){new p.mTL().load("./assets/10.mp3",e=>{this.audio.setBuffer(e),this.audio.setLoop(!0),this.audio.setVolume(.5),this.audioContext=this.audio.context,this.bufferLength=this.audioAnalyser.data.length})}collectAudioData(){this.frequencyArray=this.audioAnalyser.getFrequencyData()}analyzeFrequency(){let e=Math.floor(this.lowFrequency*this.bufferLength/this.audioContext.sampleRate),t=Math.floor(this.midFrequency*this.bufferLength/this.audioContext.sampleRate),i=Math.floor(this.midFrequency*this.bufferLength/this.audioContext.sampleRate),a=Math.floor(this.highFrequency*this.bufferLength/this.audioContext.sampleRate),s=Math.floor(this.highFrequency*this.bufferLength/this.audioContext.sampleRate),n=this.bufferLength-1,r=this.normalizeValue(this.calculateAverage(this.frequencyArray,e,t)),o=this.normalizeValue(this.calculateAverage(this.frequencyArray,i,a)),l=this.normalizeValue(this.calculateAverage(this.frequencyArray,s,n));this.frequencyData.low=r,this.frequencyData.mid=o,this.frequencyData.high=l}calculateAverage(e,t,i){let a=0;for(let s=t;s<=i;s++)a+=e[s];return a/(i-t+1)}normalizeValue(e){return e/256}update(){this.audio.isPlaying&&(this.collectAudioData(),this.analyzeFrequency())}constructor(){this.frequencyArray=new Uint8Array,this.frequencyData={low:0,mid:0,high:0},this.lowFrequency=10,this.midFrequency=150,this.highFrequency=9e3,this.smoothedLowFrequency=0,this.bufferLength=0,this.audioContext=new AudioContext;let e=new p.SJI;this.audio=new p.BbS(e),this.audioAnalyser=new p.kqm(this.audio,1024)}}let z="Icosahedron",j="TorusKnot",M="Torus",C=z;class I extends p.Tme{dispose(){this.holder.remove(this.mesh),this.container.remove(this.holder),this.icosaGeom.dispose(),this.boxGeom.dispose(),this.torusKnotGeom.dispose(),this.torusGeom.dispose(),this.material.dispose(),this.audioManager.audio.isPlaying&&this.stop()}createManagers(){this.audioManager.loadAudioBuffer()}async play(){this.audioManager.audio.isPlaying||(this.audioManager.audio.play(),await this.detectBPM(this.audioManager.audio.buffer))}pause(){this.audioManager.audio.isPlaying&&this.audioManager.audio.pause()}stop(){this.audioManager.audio.isPlaying&&this.audioManager.audio.stop()}createSphere(){C!=z&&(this.holder.remove(this.mesh),C=z,this.mesh.geometry=this.icosaGeom,this.material.needsUpdate=!0,this.holder.add(this.mesh),b.ZP.to(this.holder.rotation,{duration:5,y:Math.PI/2,ease:"elastic.out(0.2)"}))}createBox(){"Box"!=C&&(this.holder.remove(this.mesh),C="Box",this.mesh.geometry=this.boxGeom,this.material.needsUpdate=!0,this.holder.add(this.mesh),b.ZP.to(this.holder.rotation,{duration:3,x:Math.random()*Math.PI,z:Math.random()*Math.PI*2,ease:"none"}))}createTorusKnot(){C!=j&&(this.holder.remove(this.mesh),C=j,this.mesh.geometry=this.torusKnotGeom,this.material.needsUpdate=!0,this.holder.add(this.mesh),b.ZP.to(this.holder.rotation,{duration:5,x:Math.random()*Math.PI/2,z:Math.random()*Math.PI,ease:"elastic.out(0.8)"}))}createTorus(){C!=M&&(this.holder.remove(this.mesh),C=M,this.mesh.geometry=this.torusGeom,this.material.needsUpdate=!0,this.holder.add(this.mesh),b.ZP.to(this.holder.rotation,{duration:2,x:Math.random()*Math.PI,y:Math.random()*Math.PI*2,ease:"elastic.out(0.4)"}))}resetMesh(){.25>Math.random()?this.createSphere():.5>Math.random()?this.createBox():.75>Math.random()?this.createTorusKnot():this.createTorus()}onBPMBeat(){if(this.audioManager.audio.isPlaying){let e=this.interval/1e3;.3>Math.random()&&b.ZP.to(this.holder.rotation,{duration:.8>Math.random()?15:e,z:Math.random()*Math.PI,ease:"elastic.out(0.2)"}),.3>Math.random()&&this.resetMesh()}}update(){this.audioManager.audio.isPlaying&&(this.audioManager.update(),this.container.rotation.x+=.01,this.container.rotation.y+=.00333)}setBPM(e){this.interval=6e4/e,this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval(()=>{this.onBPMBeat()},this.interval)}async detectBPM(e){if(!e)return;let{bpm:t}=await (0,w.a)(e);this.setBPM(t)}constructor(e){super(),this.isSmall=e,this.holder=new p.Tme,this.container=new p.Tme,this.container.add(this.holder),this.add(this.container),this.uniforms={u_time:{value:0},u_frequency:{value:0}},this.material=new p.jyz({uniforms:this.uniforms,vertexShader:"\n        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n        vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }\n        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n        vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }\n        float pnoise(vec3 P, vec3 rep) {\n          vec3 Pi0 = mod(floor(P), rep);\n          vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);\n          Pi0 = mod289(Pi0);\n          Pi1 = mod289(Pi1);\n          vec3 Pf0 = fract(P);\n          vec3 Pf1 = Pf0 - vec3(1.0);\n          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n          vec4 iy = vec4(Pi0.yy, Pi1.yy);\n          vec4 iz0 = Pi0.zzzz;\n          vec4 iz1 = Pi1.zzzz;\n\n          vec4 ixy = permute(permute(ix) + iy);\n          vec4 ixy0 = permute(ixy + iz0);\n          vec4 ixy1 = permute(ixy + iz1);\n\n          vec4 gx0 = ixy0 * (1.0 / 7.0);\n          vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n          gx0 = fract(gx0);\n          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n          vec4 sz0 = step(gz0, vec4(0.0));\n          gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n          gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n          vec4 gx1 = ixy1 * (1.0 / 7.0);\n          vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n          gx1 = fract(gx1);\n          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n          vec4 sz1 = step(gz1, vec4(0.0));\n          gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n          gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n          g000 *= norm0.x;\n          g010 *= norm0.y;\n          g100 *= norm0.z;\n          g110 *= norm0.w;\n          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n          g001 *= norm1.x;\n          g011 *= norm1.y;\n          g101 *= norm1.z;\n          g111 *= norm1.w;\n\n          float n000 = dot(g000, Pf0);\n          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n          float n111 = dot(g111, Pf1);\n\n          vec3 fade_xyz = fade(Pf0);\n          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n          return 2.2 * n_xyz;\n        }\n        attribute float size;\n        varying vec3 vPosition;\n        uniform float u_frequency;\n        uniform float u_time;\n        void main() {\n          float noise = 3.0 * pnoise(position + u_time, vec3(10.0));\n          float displacement = (u_frequency / 30.) * (noise / 10.);\n          vec3 newPosition = position + normal * displacement;\n          vPosition = newPosition;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n          gl_PointSize = size;\n        }\n      ",fragmentShader:"\n        varying vec3 vPosition;\n        void main() {\n          float gradient = (vPosition.y + 4.0) / 8.0;\n          vec3 startColor = vec3(0.10588235294117647, 0.6039215686274509, 0.6666666666666666);\n          vec3 endColor = vec3(0.023529411764705882, 0.8392156862745098, 0.6274509803921569);\n          vec3 color = mix(startColor, endColor, gradient);\n          gl_FragColor = vec4(color, 1.0);\n        }\n      ",side:p.ehD,transparent:!0,wireframe:!0}),this.material.needsUpdate=!0,this.icosaGeom=new p.cJO(4,e?20:30),y.$1(this.icosaGeom),this.mesh=new p.Kj0(this.icosaGeom,this.material),this.boxGeom=new p.DvJ(5,5,5,e?20:30,e?20:30,e?20:30),y.$1(this.boxGeom),this.torusKnotGeom=new p.FE5(3,.5,e?200:300,e?20:30,2,3),y.$1(this.torusKnotGeom),this.torusGeom=new p.XvJ(3,.75,e?13:20,e?100:150,2*Math.PI),y.$1(this.torusGeom),this.audioManager=new P,this.holder.add(this.mesh),this.interval=500,this.intervalId=null,this.createManagers()}}let N={initial:{y:-1e3,opacity:0},animate:{y:0,opacity:1,transition:{duration:1}}},_=e=>{let[t,i]=s.useState(!1),r=s.useRef(null);return s.useEffect(()=>{if(r.current&&t){let t=new p.xsS,i=new p.cPb(45,1,.1,1e3),a=new p.CP7({canvas:r.current,antialias:!0,alpha:!0});a.setSize(e.width,e.height),a.setPixelRatio(window.devicePixelRatio),i.position.set(0,-2,14),i.lookAt(0,0,0);let s=new I(e.isSmall);t.add(s);let n=()=>{s.audioManager.audio.isPlaying?s.pause():s.play()};r.current.addEventListener("click",n);let o=new p.SUY,l=-1,h=()=>{l=requestAnimationFrame(h),s.uniforms.u_time.value=o.getElapsedTime(),s.uniforms.u_frequency.value=s.audioManager.audioAnalyser.getAverageFrequency(),s.update(),a.render(t,i)};return h(),()=>{cancelAnimationFrame(l),a.domElement.remove(),a.forceContextLoss(),a.dispose(),s.dispose(),r.current&&r.current.removeEventListener("click",n)}}},[t]),s.useEffect(()=>{t||i(!0)},[]),(0,a.jsx)(n.E.canvas,{className:"max-w-[500px] max-h-[500px]",ref:r,variants:N,initial:"initial",animate:"animate"})},A={initial:{x:-500,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:.1}}},T=()=>{let[e,t]=s.useState(!1),[i,r]=s.useState(!1),[o,l]=s.useState(500),[h,c]=s.useState(500);s.useEffect(()=>{if("undefined"!=typeof window){let e=window.innerWidth;window.innerHeight<1e3&&e<400?(t(!0),r(!0),l(250),c(250)):e<800&&(r(!0),l(330),c(330))}return()=>{}},[]);let d=s.useRef(null),[u,m]=s.useState(!1),g=new f;return s.useEffect(()=>{if(!g.elemCreated&&u){let e=d.current;e&&(g.init(e),g.startTyping())}return()=>{g.elemCreated&&u&&g.dispose()}},[u]),s.useEffect(()=>{u||m(!0)},[]),(0,a.jsx)("div",{className:"hero bg-[var(--pantone-2024)] w-full h-full  min-h-screen",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"flex flex-col xl:flex-row items-center justify-between xl:pb-24",children:[(0,a.jsxs)(n.E.div,{className:"text-center xl:text-left order-2 xl:order-none",variants:A,initial:"initial",animate:"animate",children:[(0,a.jsxs)(n.E.h1,{className:"text-3xl md:text-5xl lg:text-5xl xl:text-7xl xl:leading-tight font-semibold mb-6",variants:A,children:["Hello I'm ",(0,a.jsx)("br",{})," ",(0,a.jsx)("span",{className:"text-[var(--peach-palette1)]",children:"Jun Ishibashi"})]}),(0,a.jsxs)(n.E.h3,{className:"text-left xl:ml-0 ml-20 text-lg md:text-3xl xl:text-3xl xl:leading-tight font-medium mb-6",variants:A,children:["Occasionally ",(0,a.jsx)("span",{className:"ml-2",ref:d})]}),(0,a.jsx)(n.E.p,{className:"max-w-[500px] mb-9 text-xs md:text-base text-[var(--peach-palette4)]",variants:A,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,a.jsx)("div",{className:"order-1 xl:order-none mb-8 md:mb-0",children:(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)(_,{isExtraSmall:e,isSmall:i,width:o,height:h})})})]}),(0,a.jsx)(x,{})]})})};var E=i(3887),q=i(2218),D=i(6164);function S(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,D.m6)((0,r.W)(t))}let k=(0,q.j)("relative w-full rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50",{variants:{variant:{default:"bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),G=s.forwardRef((e,t)=>{let{className:i,variant:s,...n}=e;return(0,a.jsx)("div",{ref:t,role:"alert",className:S(k({variant:s}),i),...n})});G.displayName="Alert";let F=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("h5",{ref:t,className:S("mb-1 font-medium leading-none tracking-tight",i),...s})});F.displayName="AlertTitle";let L=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("div",{ref:t,className:S("text-sm [&_p]:leading-relaxed",i),...s})});L.displayName="AlertDescription";var B=i(3781);let U={initial:{x:"-50%",y:-500},show:{y:0,transition:{delay:1}},hide:{y:-500,transition:{delay:5}}},R=()=>{let[e,t]=s.useState(!1);return(0,a.jsx)(n.E.div,{className:"alert-hero top-[20px] left-[50%] fixed mx-auto z-50",variants:U,initial:"initial",animate:e?"hide":"show",onAnimationComplete:()=>t(!0),children:(0,a.jsxs)(G,{className:"alert",children:[(0,a.jsx)(B.Hfo,{size:20,color:"blue"}),(0,a.jsx)(F,{className:"text-blue-800",children:"Clicking the sphere will trigger the music to play!"}),(0,a.jsx)(L,{children:'"10\xb0c" by しゃろう@Sharou.'})]})})},K=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R,{}),(0,a.jsx)(E.default,{}),(0,a.jsx)(T,{})]})},3887:(e,t,i)=>{"use strict";i.d(t,{default:()=>f});var a=i(7437),s=i(7138),n=i(6463),r=i(2265),o=i(8606);let l={closed:{rotate:0},open:{rotate:45}},h={closed:{opacity:1},open:{opacity:0}},c={closed:{rotate:0},open:{rotate:-45}},d=e=>{let t=(0,n.usePathname)();return(0,a.jsxs)("button",{title:"Click to open navigations",type:"button",className:"w-10 h-8 flex flex-col justify-between z-50 relative",onClick:()=>e.setOpen(e=>!e),children:[(0,a.jsx)(o.E.div,{variants:l,className:"".concat("/"===t?"bg-black":"bg-white"," w-10 h-1 rounded origin-left")}),(0,a.jsx)(o.E.div,{variants:h,className:"".concat("/"===t?"bg-black":"bg-white"," w-10 h-1 rounded")}),(0,a.jsx)(o.E.div,{variants:c,className:"".concat("/"===t?"bg-black":"bg-white"," w-10 h-1 rounded origin-left")})]})},u=[{name:"home",path:"/"},{name:"about",path:"/about"}],m={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},x={open:{y:0,rotate:0,opacity:1,transition:{duration:.5}},closed:{y:100,rotate:90,opacity:0,transition:{duration:.5}}},g=()=>{let e=(0,n.usePathname)();return(0,a.jsx)(o.E.div,{className:"links absolute w-full h-full flex flex-col items-center justify-center gap-5",variants:m,children:u.map((t,i)=>(0,a.jsx)(o.E.a,{className:"".concat(t.path===e?"text-[var(--peach-palette1)] border-b-2 border-[var(--peach-palette1)]":"text-black"," text-xl md:text-5xl capitalize"),href:t.path,variants:x,whileHover:{scale:1.1},whileTap:{scale:.95},style:{transformOrigin:"top left"},children:t.name},i))})},v=()=>{let e=(0,n.usePathname)(),[t,i]=r.useState(!1);return(0,a.jsx)("nav",{children:(0,a.jsxs)(o.E.div,{className:"links flex flex-col items-center justify-center",animate:t?"open":"closed",children:[(0,a.jsx)(o.E.div,{className:"".concat("/"===e?"bg-white/70":"bg-white/25"," linkgs-bg fixed top-0 right-0 bottom-0 w-[200px] md:w-[400px] z-30"),variants:{open:{clipPath:"circle(2000px at 400px 0px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(0px at 400px 0px)",transition:{type:"spring",stiffness:400,damping:40}}},children:(0,a.jsx)(g,{})}),(0,a.jsx)(d,{setOpen:i})]})})},f=()=>{let e=(0,n.usePathname)();return(0,a.jsx)("header",{className:"bg-transparent mx-auto py-8 xl:py-12 fixed top-0 right-0 left-0 w-full z-10",children:(0,a.jsxs)("div",{className:"mx-auto px-[5vw] flex justify-between items-center",children:[(0,a.jsx)(s.default,{href:"/",children:(0,a.jsxs)("h1",{className:"".concat("/"===e?"text-[var(--peach-palette4)]":"text-white"," text-4xl font-semibold"),children:["Jun",(0,a.jsx)("span",{className:"text-[var(--peach-palette1)]",children:"."})]})}),(0,a.jsx)("div",{className:"mobile-nav",children:(0,a.jsx)(v,{})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[689,779,922,517,138,212,130,215,744],()=>t(9505)),_N_E=e.O()}]);