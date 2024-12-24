"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{7401:(e,r,t)=>{t.d(r,{A:()=>a});var o=t(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:d="",children:c,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:a?24*Number(i)/Number(n):i,className:l("lucide",d),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),a=(e,r)=>{let t=(0,o.forwardRef)((t,s)=>{let{className:a,...d}=t;return(0,o.createElement)(i,{ref:s,iconNode:r,className:l("lucide-".concat(n(e)),a),...d})});return t.displayName="".concat(e),t}},8068:(e,r,t)=>{t.d(r,{s:()=>s,t:()=>l});var o=t(2115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function s(...e){return o.useCallback(l(...e),e)}},8166:(e,r,t)=>{t.d(r,{A:()=>s,q:()=>l});var o=t(2115),n=t(5155);function l(e,r){let t=o.createContext(r),l=e=>{let{children:r,...l}=e,s=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(t.Provider,{value:s,children:r})};return l.displayName=e+"Provider",[l,function(n){let l=o.useContext(t);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${e}\``)}]}function s(e,r=[]){let t=[],l=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return l.scopeName=e,[function(r,l){let s=o.createContext(l),i=t.length;t=[...t,l];let a=r=>{let{scope:t,children:l,...a}=r,d=t?.[e]?.[i]||s,c=o.useMemo(()=>a,Object.values(a));return(0,n.jsx)(d.Provider,{value:c,children:l})};return a.displayName=r+"Provider",[a,function(t,n){let a=n?.[e]?.[i]||s,d=o.useContext(a);if(d)return d;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(l,...r)]}},3360:(e,r,t)=>{t.d(r,{hO:()=>a,sG:()=>i});var o=t(2115),n=t(7650),l=t(2317),s=t(5155),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,i=o?l.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},2317:(e,r,t)=>{t.d(r,{DX:()=>s});var o=t(2115),n=t(8068),l=t(5155),s=o.forwardRef((e,r)=>{let{children:t,...n}=e,s=o.Children.toArray(t),a=s.find(d);if(a){let e=a.props.children,t=s.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(i,{...n,ref:r,children:t})});s.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,n.t)(r,e):e})}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===a}},1524:(e,r,t)=>{t.d(r,{c:()=>n});var o=t(2115);function n(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}},6611:(e,r,t)=>{t.d(r,{N:()=>n});var o=t(2115),n=globalThis?.document?o.useLayoutEffect:()=>{}},1027:(e,r,t)=>{t.d(r,{F:()=>s});var o=t(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,s=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==t?void 0:t[e],o=null==i?void 0:i[e];if(null===r)return null;let l=n(r)||n(o);return s[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,a,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},3463:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},9795:(e,r,t)=>{t.d(r,{QP:()=>H});let o=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{a(t,o,e,r)}),o},a=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){a(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,s=e=>{let t;let s=[],i=0,a=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===i){if(c===n&&(o||e.slice(d,d+l)===r)){s.push(e.slice(a,d)),a=d+l;continue}if("/"===c){t=d;continue}}"["===c?i++:"]"===c&&i--}let d=0===s.length?e:e.substring(a),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:s,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:t&&t>a?t-a:void 0}};return t?e=>t({className:e,parseClassName:s}):s},f=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},m=e=>({cache:p(e.cacheSize),parseClassName:b(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),i="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:a,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(r),p=!!u,b=o(p?c.substring(0,u):c);if(!b){if(!p||!(b=o(c))){i=r+(i.length>0?" "+i:i);continue}p=!1}let m=f(a).join(":"),g=d?m+"!":m,h=g+b;if(l.includes(h))continue;l.push(h);let v=n(b,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(g+r)}i=r+(i.length>0?" "+i:i)}return i};function v(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,N=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>O(e)||z.has(e)||k.test(e),S=e=>B(e,"length",F),O=e=>!!e&&!Number.isNaN(Number(e)),R=e=>B(e,"number",O),A=e=>!!e&&Number.isInteger(Number(e)),G=e=>e.endsWith("%")&&O(e.slice(0,-1)),M=e=>w.test(e),_=e=>j.test(e),W=new Set(["length","size","percentage"]),I=e=>B(e,W,X),V=e=>B(e,"position",X),D=new Set(["image","url"]),L=e=>B(e,D,Q),T=e=>B(e,"",Z),q=()=>!0,B=(e,r,t)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},F=e=>N.test(e)&&!C.test(e),X=()=>!1,Z=e=>E.test(e),Q=e=>$.test(e);Symbol.toStringTag;let H=function(e,...r){let t,o,n;let l=function(i){return o=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(i)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=x("colors"),r=x("spacing"),t=x("blur"),o=x("brightness"),n=x("borderColor"),l=x("borderRadius"),s=x("borderSpacing"),i=x("borderWidth"),a=x("contrast"),d=x("grayscale"),c=x("hueRotate"),u=x("invert"),p=x("gap"),b=x("gradientColorStops"),f=x("gradientColorStopPositions"),m=x("inset"),g=x("margin"),h=x("opacity"),v=x("padding"),y=x("saturate"),w=x("scale"),k=x("sepia"),z=x("skew"),j=x("space"),N=x("translate"),C=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",M,r],W=()=>[M,r],D=()=>["",P,S],B=()=>["auto",O,M],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",M],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[O,M];return{cacheSize:500,separator:":",theme:{colors:[q],spacing:[P,S],blur:["none","",_,M],brightness:K(),borderColor:[e],borderRadius:["none","","full",_,M],borderSpacing:W(),borderWidth:D(),contrast:K(),grayscale:H(),hueRotate:K(),invert:H(),gap:W(),gradientColorStops:[e],gradientColorStopPositions:[G,S],inset:$(),margin:$(),opacity:K(),padding:W(),saturate:K(),scale:K(),sepia:H(),skew:K(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",M]}],container:["container"],columns:[{columns:[_]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),M]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",A,M]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",M]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",A,M]}],"grid-cols":[{"grid-cols":[q]}],"col-start-end":[{col:["auto",{span:["full",A,M]},M]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[q]}],"row-start-end":[{row:["auto",{span:[A,M]},M]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",M]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",M]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",M,r]}],"min-w":[{"min-w":[M,r,"min","max","fit"]}],"max-w":[{"max-w":[M,r,"none","full","min","max","fit","prose",{screen:[_]},_]}],h:[{h:[M,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[M,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[M,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[M,r,"auto","min","max","fit"]}],"font-size":[{text:["base",_,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",R]}],"font-family":[{font:[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",M]}],"line-clamp":[{"line-clamp":["none",O,R]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",P,M]}],"list-image":[{"list-image":["none",M]}],"list-style-type":[{list:["none","disc","decimal",M]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",P,S]}],"underline-offset":[{"underline-offset":["auto",P,M]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",M]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),V]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",I]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},L]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:X()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[P,M]}],"outline-w":[{outline:[P,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[P,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_,T]}],"shadow-color":[{shadow:[q]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",_,M]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",M]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",M]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",M]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[A,M]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",M]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",M]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",M]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[P,S,R]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);