(()=>{var e={};e.id=334,e.ids=[334],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},9201:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=r(260),n=r(8203),a=r(5155),i=r.n(a),o=r(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(s,l);let d=["",{children:["trending",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9505)),"/home/keel/CascadeProjects/forum-new/src/app/trending/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/home/keel/CascadeProjects/forum-new/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/keel/CascadeProjects/forum-new/src/app/trending/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/trending/page",pathname:"/trending",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6276:(e,s,r)=>{Promise.resolve().then(r.bind(r,9505))},9012:(e,s,r)=>{Promise.resolve().then(r.bind(r,8093))},8361:(e,s,r)=>{"use strict";r.d(s,{A:()=>t});let t=(0,r(1680).A)("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]])},9334:(e,s,r)=>{"use strict";var t=r(8686);r.o(t,"useParams")&&r.d(s,{useParams:function(){return t.useParams}}),r.o(t,"useRouter")&&r.d(s,{useRouter:function(){return t.useRouter}}),r.o(t,"useSearchParams")&&r.d(s,{useSearchParams:function(){return t.useSearchParams}})},8093:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>o});var t=r(5512),n=r(4133),a=r(596),i=r(3858);function o(){let{threads:e}=(0,i.l)(),s=[...e].sort((e,s)=>s.upvotes-e.upvotes);return(0,t.jsxs)("div",{className:"min-h-screen bg-background",children:[(0,t.jsx)(n.F,{}),(0,t.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Trending Discussions"}),(0,t.jsxs)("div",{className:"grid gap-4",children:[s.map(e=>(0,t.jsx)(a.B,{thread:e,currentUserId:"user-1"},e.id)),0===s.length&&(0,t.jsxs)("div",{className:"text-center py-12",children:[(0,t.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"No trending threads"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"There are no threads available at the moment."})]})]})]})]})}},596:(e,s,r)=>{"use strict";r.d(s,{B:()=>w});var t=r(5512),n=r(8009),a=r(8361),i=r(1680);let o=(0,i.A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),l=(0,i.A)("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);var d=r(3858),c=r(9400),u=r(5223),p=r(883),m=r(5002),x=r(2803),h=r(1917);let v=(0,x.v)(e=>({reports:[],bannedUsers:[],setReports:s=>e({reports:s}),setBannedUsers:s=>e({bannedUsers:s}),submitReport:e=>{h.z.emit("moderation:report",e)},resolveReport:(s,r)=>{h.z.emit("moderation:resolveReport",{reportId:s,action:r}),e(e=>({reports:e.reports.map(e=>e.id===s?{...e,status:"resolve"===r?"resolved":"dismissed"}:e)}))},banUser:(s,r,t)=>{let n=t?new Date(Date.now()+1e3*t).toISOString():null;h.z.emit("moderation:banUser",{userId:s,reason:r,bannedUntil:n}),e(e=>({bannedUsers:[...e.bannedUsers,{userId:s,reason:r,bannedAt:new Date().toISOString(),bannedUntil:n}]}))},unbanUser:s=>{h.z.emit("moderation:unbanUser",{userId:s}),e(e=>({bannedUsers:e.bannedUsers.filter(e=>e.userId!==s)}))},removeContent:(e,s)=>{h.z.emit("moderation:removeContent",{type:e,id:s})}}));var f=r(4195);function j({className:e,...s}){return(0,t.jsx)("div",{className:(0,f.cn)("animate-pulse rounded-md bg-muted",e),...s})}var g=r(9334),b=r(8531),N=r.n(b);function w({thread:e,currentUserId:s,isLoading:r=!1}){let[i,x]=n.useState(""),[h,b]=n.useState(!1),{submitReport:w}=v(),y=(0,d.l)(e=>e.upvoteThread);return((0,g.useRouter)(),r)?(0,t.jsxs)("div",{className:"rounded-lg border p-4 space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(j,{className:"h-8 w-8 rounded-full"}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(j,{className:"h-4 w-24"}),(0,t.jsx)(j,{className:"h-3 w-16"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(j,{className:"h-6 w-3/4"}),(0,t.jsx)(j,{className:"h-20 w-full"})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,t.jsx)(j,{className:"h-8 w-24"}),(0,t.jsx)(j,{className:"h-8 w-24"})]})]}):e?(0,t.jsx)(N(),{href:`/post/${e.id}`,className:"block",children:(0,t.jsxs)("div",{className:"rounded-lg border p-4 space-y-2 hover:bg-accent/50 transition-colors",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("img",{src:e.author.avatar,alt:e.author.name,className:"h-8 w-8 rounded-full"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium",children:e.author.name}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:new Date(e.createdAt).toLocaleDateString()})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(c.$,{variant:"ghost",size:"sm",className:(0,f.cn)("hover:bg-muted p-0 h-8 w-8",e.hasUpvoted&&"text-blue-500"),onClick:()=>{e&&y(e.id)},children:(0,t.jsx)(a.A,{className:"h-6 w-6"})}),(0,t.jsxs)(u.rI,{children:[(0,t.jsx)(u.ty,{asChild:!0,children:(0,t.jsxs)(c.$,{variant:"ghost",size:"icon",children:[(0,t.jsx)(o,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"More options"})]})}),(0,t.jsx)(u.SQ,{align:"end",children:(0,t.jsxs)(p.lG,{open:h,onOpenChange:b,children:[(0,t.jsx)(p.zM,{asChild:!0,children:(0,t.jsxs)(u._2,{onSelect:e=>e.preventDefault(),children:[(0,t.jsx)(l,{className:"mr-2 h-4 w-4"}),"Report"]})}),(0,t.jsxs)(p.Cf,{children:[(0,t.jsxs)(p.c7,{children:[(0,t.jsx)(p.L3,{children:"Report Thread"}),(0,t.jsx)(p.rr,{children:"Please provide a reason for reporting this thread. Our moderators will review your report."})]}),(0,t.jsx)(m.T,{value:i,onChange:e=>x(e.target.value),placeholder:"Enter your reason for reporting...",className:"min-h-[100px]"}),(0,t.jsxs)(p.Es,{children:[(0,t.jsx)(c.$,{variant:"outline",onClick:()=>b(!1),children:"Cancel"}),(0,t.jsx)(c.$,{onClick:()=>{e&&(w({threadId:e.id,reportedUserId:e.author.name,reporterUserId:s,reason:i}),b(!1),x(""))},disabled:!i.trim(),children:"Submit Report"})]})]})]})})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold",children:e.title}),(0,t.jsx)("p",{className:"mt-2 text-muted-foreground",children:e.content})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,t.jsxs)(c.$,{variant:"outline",size:"sm",children:[e.upvotes," Upvotes"]}),(0,t.jsxs)(c.$,{variant:"outline",size:"sm",children:[e.comments," Comments"]}),e.categories.map(e=>(0,t.jsx)("span",{className:"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",children:e},e))]})]})}):null}},5002:(e,s,r)=>{"use strict";r.d(s,{T:()=>i});var t=r(5512),n=r(8009),a=r(4195);let i=n.forwardRef(({className:e,...s},r)=>(0,t.jsx)("textarea",{className:(0,a.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...s}));i.displayName="Textarea"},9505:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/keel/CascadeProjects/forum-new/src/app/trending/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/keel/CascadeProjects/forum-new/src/app/trending/page.tsx","default")}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[834,523,139,29],()=>r(9201));module.exports=t})();