"use strict";(self.webpackChunktina_airbnb=self.webpackChunktina_airbnb||[]).push([[649],{7108:function(n,e,i){var t=i(2791),r=i(2709),o=i(184),s=(0,t.memo)((function(n){var e=n.width,i=void 0===e?12:e,t=n.height,s=void 0===t?12:t;return(0,o.jsx)("svg",{viewBox:"0 0 18 18",role:"img","aria-hidden":"false","aria-label":"previous",focusable:"false",style:(0,r.Z)("height: ".concat(s,"px; width: ").concat(i,"px; display: block; fill: currentcolor;")),children:(0,o.jsx)("path",{d:"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z",fillRule:"evenodd"})})}));e.Z=s},3469:function(n,e,i){var t=i(2791),r=i(2709),o=i(184),s=(0,t.memo)((function(n){var e=n.width,i=void 0===e?12:e,t=n.height,s=void 0===t?12:t;return(0,o.jsx)("svg",{viewBox:"0 0 18 18",role:"img","aria-hidden":"false","aria-label":"next",focusable:"false",style:(0,r.Z)("height: ".concat(s,"px; width: ").concat(i,"px; display: block; fill: currentcolor;")),children:(0,o.jsx)("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",fillRule:"evenodd"})})}));e.Z=s},8525:function(n,e,i){i.d(e,{Z:function(){return j}});var t,r,o=i(885),s=i(2791),l=i(168),a=i(7939),c=a.ZP.div(t||(t=(0,l.Z)(["\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: ",";\n  padding: 8px; //section-rooms \u642d\u914d\u8bbe\u7f6e\u8d1fmargin-8px\n\n  .inner {\n    width: 100%;\n  }\n  .slider {\n    position: relative;\n    cursor: pointer;\n\n    &:hover {\n      .control {\n        display: flex;\n      }\n    }\n    .control {\n      position: absolute;\n      z-index: 1;\n      left: 0;\n      right: 0;\n      top: 0;\n      display: none;\n      justify-content: space-between;\n      bottom: 0;\n      color: #fff;\n\n      .btn {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 83px;\n        height: 100%;\n        background: linear-gradient(\n          to left,\n          transparent 0%,\n          rgba(0, 0, 0, 0.25) 100%\n        );\n        &.right {\n          background: linear-gradient(\n            to right,\n            transparent 0%,\n            rgba(0, 0, 0, 0.25) 100%\n          );\n        }\n      }\n    }\n\n    .indicator {\n      position: absolute;\n      z-index: 9;\n      bottom: 10px;\n      width: 30%;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n\n      .item {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 20%;\n\n        .dot {\n          width: 6px;\n          height: 6px;\n          background-color: #fff;\n          border-radius: 50%;\n\n          &.active {\n            width: 8px;\n            height: 8px;\n          }\n        }\n      }\n    }\n  }\n\n  .cover {\n    position: relative;\n    box-sizing: border-box;\n    padding: 66.66% 8px 0; // \u56fa\u5b9a\u56fe\u7247\u7684\u9ad8\u662f\u5bbd\u7684 \u201c\u4e09\u5206\u4e4b\u4e8c\u201d\n    border-radius: 3px;\n    overflow: hidden;\n\n    img {\n      position: absolute; //\u4f7f\u5f97\u56fe\u7247\u7684\u4f4d\u7f6e\u9f50\u5e73\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; //\u9632\u6b62\u56fe\u7247\u88ab\u538b\u7f29\n    }\n  }\n\n  .desc {\n    margin: 10px 0 5px;\n    font-size: 12px;\n    font-weight: 700;\n    color: ",'; //\u52a8\u6001\u7684\u5f15\u5165message\u7684text_color\n    //\u7ed3\u5408index\u7684\u52a8\u6001\u5f15\u5165verifyColor ={itemDate?.verify_info?.text_color || "#39576a"}\n  }\n  .name {\n    font-size: 16px;\n    font-weight: 700;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  .price {\n    margin: 8px 0;\n  }\n\n  .bottom {\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    font-weight: 600;\n    color: ',";\n\n    .count {\n      margin: 0 2px 0 4px;\n    }\n\n    .name {\n      font-size: 16px;\n      font-weight: 700;\n\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n    }\n\n    .price {\n      margin: 8px 0;\n    }\n\n    .bottom {\n      display: flex;\n      align-items: center;\n      font-size: 10px;\n      font-weight: 600;\n      color: ",";\n\n      .count {\n        margin: 0 2px 0 4px;\n      }\n\n      .MuiRating-decimal {\n        margin-right: -2px;\n      }\n    }\n  }\n"])),(function(n){return n.itemWidth}),(function(n){return n.verifyColor}),(function(n){return n.theme.text.primaryColor}),(function(n){return n.theme.text.primaryColor})),d=i(2256),f=i(2905),x=i(7108),u=i(3469),m=a.ZP.div(r||(r=(0,l.Z)(["\n  overflow: hidden;\n\n  .i-content {\n    position: relative;\n    display: flex;\n    transition: transform 200ms ease;\n\n    > * {\n      flex-shrink: 0;\n    }\n  }\n"]))),h=i(184),p=(0,s.memo)((function(n){var e=n.selectIndex,i=void 0===e?0:e,t=(0,s.useRef)();return(0,s.useEffect)((function(){var n=t.current.children[i],e=n.offsetLeft,r=n.clientWidth,o=t.current.clientWidth,s=e+.5*r-.5*o;s<0&&(s=0);var l=t.current.scrollWidth-o;s>l&&(s=l),t.current.style.transform="translate(".concat(-s,"px)")}),[i]),(0,h.jsx)(m,{children:(0,h.jsx)("div",{className:"i-content",ref:t,children:n.children})})})),v=i(1694),g=i.n(v),b=(0,s.memo)((function(n){var e,i,t,r,l,a=n.itemData,m=n.itemWidth,v=void 0===m?"25%":m,b=(0,s.useState)(0),j=(0,o.Z)(b,2),w=j[0],y=j[1],Z=(0,s.useRef)();function k(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n?Z.current.next():Z.current.prev();var e=n?w+1:w-1,i=a.picture_urls.length;e<0&&(e=i-1),e>i-1&&(e=0),y(e)}var N=(0,h.jsx)("div",{className:"cover",children:(0,h.jsx)("img",{src:a.picture_url,alt:""})}),I=(0,h.jsxs)("div",{className:"slider",children:[(0,h.jsxs)("div",{className:"control",children:[(0,h.jsx)("div",{className:"btn left",onClick:function(n){return k(!1)},children:(0,h.jsx)(x.Z,{width:"25",height:"25"})}),(0,h.jsx)("div",{className:"btn right",onClick:function(n){return k(!0)},children:(0,h.jsx)(u.Z,{width:"25",height:"25"})})]}),(0,h.jsx)("div",{className:"indicator",children:(0,h.jsx)(p,{selectIndex:w,children:null===(e=a.picture_urls)||void 0===e?void 0:e.map((function(n,e){return(0,h.jsx)("div",{className:"item",children:(0,h.jsx)("span",{className:g()("dot",{active:w===e})})},n)}))})}),(0,h.jsx)(f.Z,{dots:!1,ref:Z,children:null===a||void 0===a||null===(i=a.picture_urls)||void 0===i?void 0:i.map((function(n){return(0,h.jsx)("div",{className:"cover",children:(0,h.jsx)("img",{src:n,alt:""})},n)}))})]});return(0,h.jsx)(c,{verifyColor:(null===a||void 0===a||null===(t=a.verify_info)||void 0===t?void 0:t.text_color)||"#39576a",itemWidth:v,children:(0,h.jsxs)("div",{className:"inner",children:[a.picture_urls?I:N,(0,h.jsx)("div",{className:"desc",children:a.verify_info.messages.join(".")}),(0,h.jsx)("div",{className:"name",children:a.name}),(0,h.jsxs)("div",{className:"price",children:["\xa5",a.price,"/\u665a"]}),(0,h.jsxs)("div",{className:"bottom",children:[(0,h.jsx)(d.Z,{name:"read-only",defaultValue:null!==(r=a.star_rating)&&void 0!==r?r:5,precision:.5,readOnly:!0,sx:{fontSize:"8px",color:"#00848A",marginRight:"-1px"}}),(0,h.jsx)("span",{className:"count",children:a.reviews_count}),a.bottom_info&&(0,h.jsxs)("span",{className:"extra",children:["-",null===(l=a.bottom_info)||void 0===l?void 0:l.content]})]})]})})})),j=b},6649:function(n,e,i){i.r(e),i.d(e,{default:function(){return en}});var t,r=i(2791),o=i(5048),s=i(168),l=i(7939),a=l.ZP.div(t||(t=(0,s.Z)(["\n  > .content {\n    //\u76f4\u63a5\u5b50\u5143\u7d20\u8bbe\u7f6e\u6837\u5f0f >\n    width: 1032px;\n    margin: 0 auto;\n  }\n  .good-price {\n    margin-top: 30px;\n  }\n"])));function c(n){return!!Object.keys(n).length}var d,f,x,u,m,h,p,v,g,b,j,w=i(190),y=i(3109),Z=l.ZP.div(d||(d=(0,s.Z)(["\n  height: 529px;\n  background: url(",") center/cover; //\u8bbe\u7f6e\u5c45\u4e2d\u548c\u56fe\u7247\u5927\u5c0f\n  /* background: url(",") center/cover; */\n  //\u9700\u8981require\u8fdb\u884c\u5305\u88f9\uff0c\u662f\u4e00\u4e2ajs\u4ee3\u7801 \u5219\u9700\u8981\u52a0\u4e0a$. */\n  // \u5982\u679c\u662f\u6700\u65e9\u671fwebpack 5\u70b9\u51e0\u4ee5\u4e0a\uff0c \u56e0\u4e3a\u8fd4\u56de\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4f7f\u7528\u9700\u8981\u5728\u672b\u5c3e\u51faurl(&{coverImag})\u52a0\u4e0a.default\u5bfb\u627e\u5230\u8def\u5f84\n"])),y,i(3109)),k=i(184),N=(0,r.memo)((function(n){return(0,k.jsx)(Z,{children:(0,k.jsx)("div",{children:"HomeBanner"})})})),I=l.ZP.div(f||(f=(0,s.Z)(["\n  color: #222;\n  .title {\n    font-size: 22px;\n    font-weight: 700;\n    margin-bottom: 16px;\n  }\n  .subtitle {\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n  & :hover {\n    cursor: pointer;\n  }\n"]))),_=(0,r.memo)((function(n){var e=n.title,i=n.subtitle;return(0,k.jsxs)(I,{children:[(0,k.jsx)("h2",{className:"title",children:e}),i&&(0,k.jsx)("div",{className:"subtitle",children:i})]})})),z=i(8525),C=l.ZP.div(x||(x=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -8px; //\u9ad8\u548c\u5bbd\u540c\u65f6\u8bbe\u7f6e\u5e03\u5c40\n  //\u548croom-item\u642d\u914d\u8bbe\u7f6eflex\u5e03\u5c40\n"]))),P=(0,r.memo)((function(n){var e,i=n.roomList,t=void 0===i?[]:i,r=n.itemWidth;return(0,k.jsx)(C,{children:null===t||void 0===t||null===(e=t.slice(0,8))||void 0===e?void 0:e.map((function(n){return(0,k.jsx)(z.Z,{itemData:n,itemWidth:r},n.id)}))})})),D=l.ZP.div(u||(u=(0,s.Z)(["\n  margin-top: 30px;\n"]))),W=i(2709),S=(0,r.memo)((function(){return(0,k.jsx)("svg",{viewBox:"0 0 18 18",role:"presentation","aria-hidden":"true",focusable:"false",style:(0,W.Z)("height: 10px; width: 10px; fill: currentcolor;"),children:(0,k.jsx)("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",fillRule:"evenodd"})})})),R=i(7689),L=l.ZP.div(m||(m=(0,s.Z)(["\n  margin-top: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  .info {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    font-size: 17px;\n    font-weight: 700;\n    color: ",";\n    & :hover {\n      text-decoration: underline;\n    }\n    .text {\n      margin-right: 6px;\n    }\n  }\n"])),(function(n){return n.color})),B=(0,r.memo)((function(n){var e=n.name,i="\u663e\u793a\u5168\u90e8";e&&(i="\u663e\u793a\u66f4\u591a".concat(e,"\u623f\u6e90"));var t=(0,R.s0)();return(0,k.jsx)(L,{color:e?"pink":"#000",children:(0,k.jsxs)("div",{className:"info",onClick:function(){t("/entire")},children:[(0,k.jsx)("span",{className:"text",children:i}),(0,k.jsx)(S,{})]})})})),E=(0,r.memo)((function(n){var e=n.infoData;return(0,k.jsxs)(D,{children:[(0,k.jsx)(_,{title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle}),(0,k.jsx)(P,{roomList:null===e||void 0===e?void 0:e.list,itemWidth:"25%"}),(0,k.jsx)(B,{})]})})),O=i(885),q=l.ZP.div(h||(h=(0,s.Z)([""]))),A=i(7108),H=i(3469),M=l.ZP.div(p||(p=(0,s.Z)(["\n  position: relative; //\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u624d\u80fd\u83b7\u53d6item\u672c\u8eab\u7684\u4f4d\u7f6e/\u4e0d\u662fbody\u7684\u4f4d\u7f6e\u3002\u7236\u7ec4\u4ef6\u76f8\u5bf9\n  padding: 8px 0;\n  .scroll {\n    overflow: hidden; // \u5d4c\u5957\uff0c\u4e5f\u5c31\u662f\u6ed1\u52a8\u7684item\uff0c\u81ea\u8eab\u8d85\u51fa\u540e\u9690\u85cf\u3002\u9632\u6b62\u7bad\u5934\u7b26\u53f7\u8d85\u51fa\u540e\u663e\u793a\u4e0d\u5b8c\u5168\n    .scroll-content {\n      display: flex;\n      transition: transform 250ms ease;\n    }\n  }\n  .control {\n    //\u6309\u94ae\u7edf\u4e00\u7684\u683c\u5f0f\u8bbe\u7f6e\n    position: absolute; //\u5b50\u7ec4\u4ef6\u7edd\u5bf9\u5b9a\u4f4d\n    z-index: 9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    text-align: center;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #fff;\n    background: #fff;\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);\n    cursor: pointer;\n\n    &.left {\n      left: 0;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    &.right {\n      right: -5px;\n      top: 50%;\n      transform: translate(50%, -50%);\n    }\n  } //\u5782\u76f4\u65b9\u5411\u5c45\u4e2d\u3002top:50% transform:translate(0,-50% \u4e0a\u4e0b\u65b9\u5411\u81ea\u8eab\u9ad8\u5ea6\u5411\u4e0a\u79fb\u52a850%\u3002)\n"]))),U=(0,r.memo)((function(n){var e=(0,r.useState)(!1),i=(0,O.Z)(e,2),t=i[0],o=i[1],s=(0,r.useState)(!1),l=(0,O.Z)(s,2),a=l[0],c=l[1],d=(0,r.useState)(0),f=(0,O.Z)(d,2),x=f[0],u=f[1],m=(0,r.useRef)(),h=(0,r.useRef)();function p(n){var e=n?x+1:x-1,i=h.current.children[e].offsetLeft;h.current.style.transform="translate(-".concat(i,"px)"),u(e),c(m.current>i),o(i>0)}return(0,r.useEffect)((function(){var n=h.current.scrollWidth-h.current.clientWidth;m.current=n,c(n>0)}),[n.children]),(0,k.jsxs)(M,{children:[t&&(0,k.jsx)("div",{className:"control left",onClick:function(n){return p(!1)},children:(0,k.jsx)(A.Z,{})}),a&&(0,k.jsx)("div",{className:"control right",onClick:function(n){return p(!0)},children:(0,k.jsx)(H.Z,{})}),(0,k.jsx)("div",{className:"scroll",children:(0,k.jsx)("div",{className:"scroll-content",ref:h,children:n.children})})]})})),V=i(1694),$=i.n(V),F=l.ZP.div(v||(v=(0,s.Z)(["\n  .item {\n    box-sizing: border-box;\n    flex-basis: 120px;\n    flex-shrink: 0;\n    padding: 10px 14px;\n    margin-right: 16px;\n    border-radius: 10px;\n    font-size: 17px;\n    text-align: center;\n    border: 0.5px solid white;\n    white-space: nowrap;\n    cursor: pointer;\n    ","\n  }\n  & :last-child {\n    margin-right: 0;\n  }\n  .active {\n    color: #fff;\n    background-color: pink;\n    /* background-color: ","; */\n  }\n"])),(function(n){return n.theme.mixin.boxShadow}),(function(n){return n.theme.color.secondaryColor})),G=(0,r.memo)((function(n){var e=n.tabNames,i=void 0===e?[]:e,t=n.tabClick,o=(0,r.useState)(0),s=(0,O.Z)(o,2),l=s[0],a=s[1];return i.push("ab","bc","cd","de"),(0,k.jsx)(F,{children:(0,k.jsx)(U,{children:i.map((function(n,e){return(0,k.jsx)("div",{className:$()("item",{active:e===l}),onClick:function(i){return function(n,e){a(n),t(n,e)}(e,n)},children:n},e)}))})})})),J=(0,r.memo)((function(n){var e,i,t=n.infoData,o=Object.keys(t.dest_list)[0],s=(0,r.useState)(o),l=(0,O.Z)(s,2),a=l[0],c=l[1],d=null===(e=t.dest_address)||void 0===e?void 0:e.map((function(n){return n.name})),f=(0,r.useCallback)((function(n,e){c(e)}),[]);return(0,k.jsxs)(q,{children:[(0,k.jsx)(_,{title:t.title,subtitle:t.subtitle}),(0,k.jsx)(G,{tabNames:d,tabClick:f}),(0,k.jsx)(P,{roomList:null===(i=t.dest_list)||void 0===i?void 0:i[a],itemWidth:"33.33333%"}),(0,k.jsx)(B,{name:a})]})})),K=l.ZP.div(g||(g=(0,s.Z)(["\n  flex-shrink: 0;\n  width: 20%;\n\n  .inner {\n    padding: 8px;\n\n    .item-info {\n      position: relative;\n      border: 3px;\n      overflow: hidden;\n    }\n  }\n  .cover {\n    width: 100%;\n  }\n  .bg-cover {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 60%;\n    background-color: linear-gradient(\n      -200deg,\n      rgba(0, 0, 0, 0) 10%,\n      rgb(0, 0, 0) 100%\n    );\n  }\n  .info {\n    position: absolute;\n    left: 8px;\n    right: 8px;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 24px 32px;\n    color: #fff;\n  }\n  .city {\n    font-size: 15px;\n    font-weight: 600;\n  }\n  .price {\n    font-size: 15px;\n    margin-top: 5px;\n  }\n"]))),Q=(0,r.memo)((function(n){var e=n.itemData;return(0,k.jsx)(K,{children:(0,k.jsx)("div",{className:"inner",children:(0,k.jsxs)("div",{className:"item-info",children:[(0,k.jsx)("img",{className:"cover",src:e.picture_url,alt:""}),(0,k.jsx)("div",{className:"bg-cover"}),(0,k.jsxs)("div",{className:"info",children:[(0,k.jsx)("div",{className:"city",children:e.city}),(0,k.jsxs)("div",{className:"price",children:["\u5747\u4ef7 ",e.price]})]})]})})})})),T=l.ZP.div(b||(b=(0,s.Z)(["\n  margin-top: 10px;\n\n  .longfor-list {\n    display: flex;\n    margin: 0 -8px; //-8px \u5de6\u8fb9\u5bf9\u9f50\n  }\n"]))),X=(0,r.memo)((function(n){var e=n.infoData;return(0,k.jsxs)(T,{children:[(0,k.jsx)(_,{title:e.title,subtitle:e.subtitle}),(0,k.jsx)("div",{className:"longfor-list",children:(0,k.jsx)(U,{children:e.list.map((function(n){return(0,k.jsx)(Q,{itemData:n},n.city)}))})})]})})),Y=l.ZP.div(j||(j=(0,s.Z)(["\n  margin-top: 30px;\n\n  .room-list {\n    display: flex;\n    margin: 0 -8px;\n  }\n"]))),nn=(0,r.memo)((function(n){var e=n.infoData;return(0,k.jsxs)(Y,{children:[(0,k.jsx)(_,{title:e.title,subtitle:e.subtitle}),(0,k.jsx)("div",{className:"room-list",children:(0,k.jsx)(U,{children:e.list.map((function(n){return(0,k.jsx)(z.Z,{itemData:n,itemWidth:"20%"},n.id)}))})}),(0,k.jsx)(B,{})]})})),en=(0,r.memo)((function(){var n=(0,o.I0)();(0,r.useEffect)((function(){n((0,w.d7)())}),[n]);var e=(0,o.v9)((function(n){return{goodPriceInfo:n.home.goodPriceInfo,highScoreInfo:n.home.highScoreInfo,discountInfo:n.home.discountInfo,recommendInfo:n.home.recommendInfo,longforInfo:n.home.longforInfo,plusInfo:n.home.plusInfo}}),o.wU),i=e.goodPriceInfo,t=e.highScoreInfo,s=e.discountInfo,l=e.recommendInfo,d=e.longforInfo,f=e.plusInfo;return(0,k.jsxs)(a,{children:[(0,k.jsx)(N,{}),(0,k.jsxs)("div",{className:"content",children:[c(s)&&(0,k.jsx)(J,{infoData:s}),c(l)&&(0,k.jsx)(J,{infoData:l}),c(d)&&(0,k.jsx)(X,{infoData:d}),(0,k.jsx)(E,{infoData:i}),(0,k.jsx)(E,{infoData:t}),c(f)&&(0,k.jsx)(nn,{infoData:f})]})]})}))},3109:function(n,e,i){n.exports=i.p+"static/media/cover_01.293232bc7bb8539118a8.jpeg"}}]);
//# sourceMappingURL=649.768ae7b3.chunk.js.map