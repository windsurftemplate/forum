exports.id=29,exports.ids=[29],exports.modules={9727:()=>{},7990:()=>{},7625:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3219,23)),Promise.resolve().then(s.t.bind(s,4863,23)),Promise.resolve().then(s.t.bind(s,5155,23)),Promise.resolve().then(s.t.bind(s,802,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,8530,23)),Promise.resolve().then(s.t.bind(s,8921,23))},777:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6959,23)),Promise.resolve().then(s.t.bind(s,3875,23)),Promise.resolve().then(s.t.bind(s,8903,23)),Promise.resolve().then(s.t.bind(s,7174,23)),Promise.resolve().then(s.t.bind(s,4178,23)),Promise.resolve().then(s.t.bind(s,7190,23)),Promise.resolve().then(s.t.bind(s,1365,23))},5632:(e,t,s)=>{Promise.resolve().then(s.bind(s,8157)),Promise.resolve().then(s.bind(s,1752))},3776:(e,t,s)=>{Promise.resolve().then(s.bind(s,6729)),Promise.resolve().then(s.bind(s,1492))},4133:(e,t,s)=>{"use strict";s.d(t,{F:()=>L});var a=s(5512),r=s(8531),n=s.n(r),o=s(9400),i=s(8009),d=s(6873),l=s(7555),c=s(5748),m=s(4195),u=s(883);let p=i.forwardRef(({className:e,...t},s)=>(0,a.jsx)(c.uB,{ref:s,className:(0,m.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...t}));p.displayName=c.uB.displayName;let h=({children:e,...t})=>(0,a.jsx)(u.lG,{...t,children:(0,a.jsx)(u.Cf,{className:"overflow-hidden p-0 shadow-lg",children:(0,a.jsx)(p,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:e})})}),f=i.forwardRef(({className:e,...t},s)=>(0,a.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,a.jsx)(d.A,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,a.jsx)(c.uB.Input,{ref:s,className:(0,m.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...t})]}));f.displayName=c.uB.Input.displayName;let x=i.forwardRef(({className:e,...t},s)=>(0,a.jsx)(c.uB.List,{ref:s,className:(0,m.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...t}));x.displayName=c.uB.List.displayName;let g=i.forwardRef((e,t)=>(0,a.jsx)(c.uB.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));g.displayName=c.uB.Empty.displayName;let v=i.forwardRef(({className:e,...t},s)=>(0,a.jsx)(c.uB.Group,{ref:s,className:(0,m.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...t}));v.displayName=c.uB.Group.displayName,i.forwardRef(({className:e,...t},s)=>(0,a.jsx)(c.uB.Separator,{ref:s,className:(0,m.cn)("-mx-1 h-px bg-border",e),...t})).displayName=c.uB.Separator.displayName;let b=i.forwardRef(({className:e,...t},s)=>(0,a.jsx)(c.uB.Item,{ref:s,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t}));b.displayName=c.uB.Item.displayName;var j=s(5223);let y=(0,s(2803).v)(e=>({searchQuery:"",filters:{categories:[],sortBy:"recent",timeRange:"all"},searchResults:[],setSearchQuery:t=>e({searchQuery:t}),setFilters:t=>e(e=>({filters:{...e.filters,...t}})),setSearchResults:t=>e({searchResults:t})}));var N=s(3858);let w=["Web Development","Machine Learning","DevOps","Mobile Development","Data Science","Cybersecurity","Cloud Computing","Artificial Intelligence"],k=[{value:"recent",label:"Most Recent"},{value:"popular",label:"Most Popular"},{value:"mostCommented",label:"Most Commented"}],C=[{value:"today",label:"Today"},{value:"week",label:"This Week"},{value:"month",label:"This Month"},{value:"all",label:"All Time"}],P=[{category:"Popular Searches",items:[{id:"1",text:"Next.js tutorials"},{id:"2",text:"React best practices"},{id:"3",text:"TypeScript tips"}]},{category:"Categories",items:[{id:"4",text:"Web Development"},{id:"5",text:"Machine Learning"},{id:"6",text:"DevOps"}]},{category:"Trending",items:[{id:"7",text:"AI developments"},{id:"8",text:"Cloud computing"},{id:"9",text:"Cybersecurity"}]}];function R(){let[e,t]=i.useState(!1),{searchQuery:s,filters:r,setSearchQuery:n,setFilters:c}=y(),{threads:m}=(0,N.l)(),u=e=>{n(e),m.filter(t=>{let s=t.title.toLowerCase().includes(e.toLowerCase())||t.content.toLowerCase().includes(e.toLowerCase()),a=0===r.categories.length||t.categories.some(e=>r.categories.includes(e));return s&&a})};return i.useEffect(()=>{let e=e=>{"k"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t(e=>!e))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("div",{className:"relative w-full",children:[(0,a.jsx)(d.A,{className:"absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"}),(0,a.jsx)("input",{placeholder:"Search threads... (Press ⌘K)",value:s,onChange:e=>u(e.target.value),className:"w-full rounded-md border border-input pl-8 pr-4 py-2 text-sm",onFocus:()=>t(!0)})]}),(0,a.jsxs)(j.rI,{children:[(0,a.jsx)(j.ty,{asChild:!0,children:(0,a.jsx)(o.$,{variant:"outline",size:"icon",children:(0,a.jsx)(l.A,{className:"h-4 w-4"})})}),(0,a.jsxs)(j.SQ,{align:"end",className:"w-56",children:[(0,a.jsx)(j.lp,{children:"Filter Threads"}),(0,a.jsx)(j.mB,{}),(0,a.jsx)(j.lp,{className:"text-sm font-medium",children:"Categories"}),w.map(e=>(0,a.jsx)(j.hO,{checked:r.categories.includes(e),onCheckedChange:t=>{c({categories:t?[...r.categories,e]:r.categories.filter(t=>t!==e)})},children:e},e)),(0,a.jsx)(j.mB,{}),(0,a.jsx)(j.lp,{className:"text-sm font-medium",children:"Sort By"}),(0,a.jsx)(j.Hr,{value:r.sortBy,onValueChange:e=>c({sortBy:e}),children:k.map(e=>(0,a.jsx)(j.Ht,{value:e.value,children:e.label},e.value))}),(0,a.jsx)(j.mB,{}),(0,a.jsx)(j.lp,{className:"text-sm font-medium",children:"Time Range"}),(0,a.jsx)(j.Hr,{value:r.timeRange,onValueChange:e=>c({timeRange:e}),children:C.map(e=>(0,a.jsx)(j.Ht,{value:e.value,children:e.label},e.value))})]})]}),(0,a.jsxs)(h,{open:e,onOpenChange:t,children:[(0,a.jsx)(f,{placeholder:"Type to search...",value:s,onValueChange:u}),(0,a.jsxs)(x,{children:[(0,a.jsx)(g,{children:"No results found."}),P.map(e=>(0,a.jsx)(v,{heading:e.category,children:e.items.map(e=>(0,a.jsx)(b,{onSelect:()=>u(e.text),children:(0,a.jsx)("span",{children:e.text})},e.id))},e.category))]})]})]})}var _=s(2411),S=s(2848),B=s(3371);function T(){let{setTheme:e}=(0,B.D)();return(0,a.jsxs)(j.rI,{children:[(0,a.jsx)(j.ty,{asChild:!0,children:(0,a.jsxs)(o.$,{variant:"ghost",size:"icon",children:[(0,a.jsx)(_.A,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(S.A,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,a.jsxs)(j.SQ,{align:"end",children:[(0,a.jsx)(j._2,{onClick:()=>e("light"),children:"Light"}),(0,a.jsx)(j._2,{onClick:()=>e("dark"),children:"Dark"}),(0,a.jsx)(j._2,{onClick:()=>e("system"),children:"System"})]})]})}var z=s(6928),A=s(5737);function I(){let{notifications:e,unreadCount:t,markAsRead:s}=(0,A.i)(),r=e=>{switch(e){case"comment":return"\uD83D\uDCAC";case"upvote":return"⬆️";case"mention":return"@";case"reply":return"↩️";default:return"\uD83D\uDD14"}};return(0,a.jsxs)(j.rI,{children:[(0,a.jsx)(j.ty,{asChild:!0,children:(0,a.jsxs)(o.$,{variant:"ghost",size:"icon",className:"relative",children:[(0,a.jsx)(z.A,{className:"h-[1.2rem] w-[1.2rem]"}),t>0&&(0,a.jsx)("span",{className:"absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center",children:t})]})}),(0,a.jsxs)(j.SQ,{className:"w-80",children:[(0,a.jsxs)(j.lp,{className:"flex items-center justify-between",children:["Notifications",t>0&&(0,a.jsxs)("span",{className:"text-xs text-muted-foreground",children:[t," unread"]})]}),(0,a.jsx)(j.mB,{}),(0,a.jsx)(j.I,{children:0===e.length?(0,a.jsx)(j._2,{children:"No notifications"}):e.map(e=>(0,a.jsxs)(j._2,{className:"flex flex-col items-start gap-1 p-4 cursor-pointer",onClick:()=>s(e.id),children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 w-full",children:[(0,a.jsx)("span",{className:"text-lg",children:r(e.type)}),(0,a.jsx)("span",{className:"font-medium flex-1",children:e.title}),!e.read&&(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-blue-500"})]}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.message}),(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:e.time})]},e.id))}),e.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.mB,{}),(0,a.jsx)(j._2,{className:"text-center",children:"View all notifications"})]})]})]})}function L(){return(0,a.jsx)("nav",{className:"border-b bg-background",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 h-14 flex items-center justify-between gap-4",children:[(0,a.jsx)(n(),{href:"/",className:"flex items-center gap-2 font-semibold text-lg",children:(0,a.jsx)("span",{children:"Forum"})}),(0,a.jsxs)("div",{className:"hidden md:flex items-center gap-6",children:[(0,a.jsx)(n(),{href:"/",className:"text-sm font-medium",children:"Home"}),(0,a.jsx)(n(),{href:"/categories",className:"text-sm font-medium",children:"Categories"}),(0,a.jsx)(n(),{href:"/trending",className:"text-sm font-medium",children:"Trending"})]}),(0,a.jsx)("div",{className:"flex-1 max-w-lg",children:(0,a.jsx)(R,{})}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(I,{}),(0,a.jsx)(T,{}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(o.$,{variant:"ghost",size:"sm",children:"Sign In"}),(0,a.jsx)(o.$,{size:"sm",children:"Sign Up"})]})]})]})})}},6729:(e,t,s)=>{"use strict";s.d(t,{SocketProvider:()=>o});var a=s(5512);s(8009),s(1917);var r=s(3858),n=s(5737);function o({children:e}){return(0,r.l)(e=>e.updateThread),(0,n.i)(e=>e.addNotification),(0,a.jsx)(a.Fragment,{children:e})}},1492:(e,t,s)=>{"use strict";s.d(t,{ThemeProvider:()=>n});var a=s(5512);s(8009);var r=s(3371);function n({children:e,...t}){return(0,a.jsx)(r.N,{...t,children:e})}},9400:(e,t,s)=>{"use strict";s.d(t,{$:()=>l});var a=s(5512),r=s(8009),n=s(2705),o=s(1643),i=s(4195);let d=(0,o.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...o},l)=>{let c=r?n.DX:"button";return(0,a.jsx)(c,{className:(0,i.cn)(d({variant:t,size:s,className:e})),ref:l,...o})});l.displayName="Button"},883:(e,t,s)=>{"use strict";s.d(t,{Cf:()=>u,Es:()=>h,L3:()=>f,c7:()=>p,lG:()=>d,rr:()=>x,zM:()=>l});var a=s(5512),r=s(8009),n=s(7553),o=s(4269),i=s(4195);let d=n.bL,l=n.l9,c=n.ZL;n.bm;let m=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.hJ,{ref:s,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));m.displayName=n.hJ.displayName;let u=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(c,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(n.UC,{ref:r,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,(0,a.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(o.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));u.displayName=n.UC.displayName;let p=({className:e,...t})=>(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});p.displayName="DialogHeader";let h=({className:e,...t})=>(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});h.displayName="DialogFooter";let f=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.hE,{ref:s,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));f.displayName=n.hE.displayName;let x=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.VY,{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",e),...t}));x.displayName=n.VY.displayName},5223:(e,t,s)=>{"use strict";s.d(t,{Hr:()=>p,Ht:()=>g,I:()=>u,SQ:()=>h,_2:()=>f,hO:()=>x,lp:()=>v,mB:()=>b,rI:()=>c,ty:()=>m});var a=s(5512),r=s(8009),n=s(1036),o=s(9905),i=s(4849),d=s(3689),l=s(4195);let c=n.bL,m=n.l9,u=n.YJ;n.ZL,n.Pb;let p=n.z6;r.forwardRef(({className:e,inset:t,children:s,...r},i)=>(0,a.jsxs)(n.ZP,{ref:i,className:(0,l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...r,children:[s,(0,a.jsx)(o.A,{className:"ml-auto h-4 w-4"})]})).displayName=n.ZP.displayName,r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.G5,{ref:s,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})).displayName=n.G5.displayName;let h=r.forwardRef(({className:e,sideOffset:t=4,...s},r)=>(0,a.jsx)(n.ZL,{children:(0,a.jsx)(n.UC,{ref:r,sideOffset:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})}));h.displayName=n.UC.displayName;let f=r.forwardRef(({className:e,inset:t,...s},r)=>(0,a.jsx)(n.q7,{ref:r,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...s}));f.displayName=n.q7.displayName;let x=r.forwardRef(({className:e,children:t,checked:s,...r},o)=>(0,a.jsxs)(n.H_,{ref:o,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:s,...r,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(i.A,{className:"h-4 w-4"})})}),t]}));x.displayName=n.H_.displayName;let g=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(n.hN,{ref:r,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...s,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(d.A,{className:"h-2 w-2 fill-current"})})}),t]}));g.displayName=n.hN.displayName;let v=r.forwardRef(({className:e,inset:t,...s},r)=>(0,a.jsx)(n.JU,{ref:r,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...s}));v.displayName=n.JU.displayName;let b=r.forwardRef(({className:e,...t},s)=>(0,a.jsx)(n.wv,{ref:s,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",e),...t}));b.displayName=n.wv.displayName},1917:(e,t,s)=>{"use strict";s.d(t,{z:()=>n});var a=s(2226);class r{constructor(){this.socket=null,this.socket=(0,a.io)("http://localhost:3001",{autoConnect:!1,reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3}),this.socket.on("connect",()=>{console.log("Connected to WebSocket server")}),this.socket.on("disconnect",()=>{console.log("Disconnected from WebSocket server")}),this.socket.on("error",e=>{console.error("WebSocket error:",e)})}static getInstance(){return r.instance||(r.instance=new r),r.instance}connect(){this.socket&&this.socket.connect()}disconnect(){this.socket&&this.socket.disconnect()}emit(e,t){this.socket&&this.socket.emit(e,t)}on(e,t){this.socket&&this.socket.on(e,t)}off(e,t){this.socket&&this.socket.off(e,t)}}let n=r.getInstance()},4195:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(2281),r=s(4805);function n(...e){return(0,r.QP)((0,a.$)(e))}},5737:(e,t,s)=>{"use strict";s.d(t,{i:()=>a});let a=(0,s(2803).v)(e=>({notifications:[],unreadCount:0,addNotification:t=>e(e=>({notifications:[t,...e.notifications],unreadCount:e.unreadCount+1})),markAsRead:t=>e(e=>({notifications:e.notifications.map(e=>e.id===t?{...e,read:!0}:e),unreadCount:Math.max(0,e.unreadCount-1)})),markAllAsRead:()=>e(e=>({notifications:e.notifications.map(e=>({...e,read:!0})),unreadCount:0}))}))},3858:(e,t,s)=>{"use strict";s.d(t,{l:()=>n});var a=s(2803),r=s(1917);let n=(0,a.v)(e=>({threads:[],setThreads:t=>e({threads:t}),updateThread:t=>{e(e=>({threads:e.threads.map(e=>e.id===t.threadId?{...e,...void 0!==t.upvotes&&{upvotes:t.upvotes},...void 0!==t.comments&&{comments:t.comments},...void 0!==t.hasUpvoted&&{hasUpvoted:t.hasUpvoted}}:e)}))},upvoteThread:e=>{r.z.emit("thread:upvote",{threadId:e})}}))},1354:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>d,viewport:()=>l});var a=s(2740),r=s(7339),n=s.n(r);s(1135);var o=s(1752),i=s(8157);let d={title:"Forum",description:"A modern forum for discussions and knowledge sharing",metadataBase:new URL("http://localhost:3000")},l={themeColor:[{media:"(prefers-color-scheme: light)",color:"white"},{media:"(prefers-color-scheme: dark)",color:"black"}],width:"device-width",initialScale:1};function c({children:e}){return(0,a.jsx)("html",{lang:"en",suppressHydrationWarning:!0,children:(0,a.jsx)("body",{className:n().className,children:(0,a.jsx)(o.ThemeProvider,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,a.jsx)(i.SocketProvider,{children:e})})})})}},8157:(e,t,s)=>{"use strict";s.d(t,{SocketProvider:()=>a});let a=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call SocketProvider() from the server but SocketProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/keel/CascadeProjects/forum-new/src/components/providers/socket-provider.tsx","SocketProvider")},1752:(e,t,s)=>{"use strict";s.d(t,{ThemeProvider:()=>a});let a=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/keel/CascadeProjects/forum-new/src/components/theme/theme-provider.tsx","ThemeProvider")},1135:()=>{}};