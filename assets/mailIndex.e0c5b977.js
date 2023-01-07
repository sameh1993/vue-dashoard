var S=Object.defineProperty,N=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var x=(s,t,l)=>t in s?S(s,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[t]=l,v=(s,t)=>{for(var l in t||(t={}))C.call(t,l)&&x(s,l,t[l]);if(m)for(var l of m(t))D.call(t,l)&&x(s,l,t[l]);return s},b=(s,t)=>N(s,T(t));import{u as _,c as P}from"./compose.f5119e33.js";import{_ as k,g as F,o as r,c as o,d as a,t as n,F as $,h as M,n as L,p as w,b as y,i as d,a as I,m as V,r as g,e as u,T as A,w as H}from"./index.06fb8460.js";const R={setup(){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],t=_(),l=t.index,f=F(t.newItem);function h(){t.updateNew("smsm",1)}return{monthNames:s,news:f,updateItem:h,indexMsg:l}},props:["msgs"],data(){return{msgsType:"all",paginationLimit:10,currentPage:1,pagesCount:Math.ceil(this.msgs.length/this.paginationLimit)}},computed:{msgsTypes(){return this.msgsType},currentMsgs(){return this.msgsTypes=="work"?this.msgs.filter(s=>s.type=="work"):this.msgsTypes=="family"?this.msgs.filter(s=>s.type=="family"):this.msgsTypes=="social"?this.msgs.filter(s=>s.type=="social"):this.msgsTypes=="promotions"?this.msgs.filter(s=>s.type=="promotions"):this.msgsTypes=="primary"?this.msgs.filter(s=>s.type=="primary"):this.msgsTypes=="forums"?this.msgs.filter(s=>s.type=="forums"):this.msgs},current(){const s=this.currentPage*this.paginationLimit,t=(this.currentPage-1)*this.paginationLimit;return console.log(t,s),this.currentMsgs.slice(t,s)},pageCountComputed(){let s=this.currentMsgs.length/this.paginationLimit;return String(s).includes(".")?+s.toFixed():s}},methods:{refresh(){this.$forceUpdate()},increase(){this.currentPage>=this.pagesCount||(this.currentPage=this.currentPage+1)},decrease(){this.currentPage<=1||(this.currentPage=this.currentPage-1)}}},e=s=>(w("data-v-c233dfa0"),s=s(),y(),s),E={class:"col-md-8 mailbox-content tab-content tab-content-in"},q={class:"tab-pane active text-style",id:"tab1"},U={class:"mailbox-border"},W={class:"mail-toolbar clearfix"},Y={class:"float-left"},B=e(()=>a("i",{class:"fa fa-refresh"},null,-1)),J=[B],G=e(()=>a("div",{class:"dropdown dropdown-inbox"},[a("a",{href:"#",title:"",class:"border btn btn-default","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-cog icon_8"}),a("i",{class:"fa fa-chevron-down icon_8"}),a("div",{class:"ripple-wrapper"})]),a("ul",{class:"dropdown-menu float-right"},[a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-pencil-square-o icon_9"}),d(" Edit ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-calendar icon_9"}),d(" Schedule ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-download icon_9"}),d(" Download ")])]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#",class:"font-red",title:""},[a("i",{class:"fa fa-times",icon_9:""}),d(" Delete ")])])])],-1)),z=e(()=>a("div",{class:"clearfix"},null,-1)),O={class:"float-right custom"},j={class:"text-muted m-r-sm"},K={class:"btn-group m-r-sm mail-hidden-options",style:{display:"inline-block"}},Q={class:"btn-group"},X=e(()=>a("a",{class:"border btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-tags"}),d(),a("span",{class:"caret"})],-1)),Z={class:"dropdown-menu dropdown-menu-right",role:"menu"},aa=e(()=>a("li",null,"socail",-1)),sa=e(()=>a("li",{class:"divider"},null,-1)),ta={class:"btn-group"},da=e(()=>a("i",{class:"fa fa-angle-left"},null,-1)),ea=[da],la=e(()=>a("i",{class:"fa fa-angle-right"},null,-1)),ca=[la],ia=e(()=>a("div",{class:"clearfix"},null,-1)),na={class:"table tab-border"},ra=e(()=>a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})],-1)),oa={class:"hidden-xs"},fa={class:"hidden-xs"},ha=e(()=>a("td",null,null,-1)),pa=e(()=>a("td",null," 10 march ",-1)),ua={class:"tab-pane text-style",id:"tab2"},ma={class:"mailbox-border"},xa={class:"mail-toolbar clearfix"},va={class:"float-left"},ba={class:"btn btn_1 btn-default mrg5R"},ga=e(()=>a("div",{class:"dropdown dropdown-inbox"},[a("a",{href:"#",title:"",class:"btn btn-default","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-cog icon_8"}),a("i",{class:"fa fa-chevron-down icon_8"}),a("div",{class:"ripple-wrapper"})]),a("ul",{class:"dropdown-menu float-right"},[a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-pencil-square-o icon_9"}),d(" Edit ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-calendar icon_9"}),d(" Schedule ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-download icon_9"}),d(" Download ")])]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#",class:"font-red",title:""},[a("i",{class:"fa fa-times",icon_9:""}),d(" Delete ")])])])],-1)),_a=e(()=>a("div",{class:"clearfix"},null,-1)),ka=e(()=>a("div",{class:"float-right"},[a("span",{class:"text-muted m-r-sm"},"Showing 20 of 346 "),a("div",{class:"btn-group m-r-sm mail-hidden-options",style:{display:"inline-block"}},[a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-folder"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Social")]),a("li",null,[a("a",{href:"#"},"Forums")]),a("li",null,[a("a",{href:"#"},"Updates")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Spam")]),a("li",null,[a("a",{href:"#"},"Trash")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"New")])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-tags"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Work")]),a("li",null,[a("a",{href:"#"},"Family")]),a("li",null,[a("a",{href:"#"},"Social")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Primary")]),a("li",null,[a("a",{href:"#"},"Promotions")]),a("li",null,[a("a",{href:"#"},"Forums")])])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-left"})]),a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-right"})])]),a("div",{class:"clearfix"})],-1)),wa=I('<table class="table tab-border" data-v-c233dfa0><tbody data-v-c233dfa0><tr class="unread checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star icon-state-warning" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Dropbox </td><td data-v-c233dfa0> Consectetuer adipiscing elit </td><td data-v-c233dfa0></td><td data-v-c233dfa0> 02 march </td></tr><tr class="unread checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star icon-state-warning" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Adobe </td><td data-v-c233dfa0> Nemo enim ipsam voluptatem </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 8 march </td></tr><tr class="unread checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star icon-state-warning" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Apple </td><td data-v-c233dfa0> Hai Neha.How are You </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 4 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Microsoft </td><td data-v-c233dfa0> Nemo enim ipsam voluptatem </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 1 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Microsoft </td><td data-v-c233dfa0> Lorem ipsum dolor sit amet </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 15 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star icon-state-warning" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Dropbox </td><td data-v-c233dfa0> Nemo enim ipsam voluptatem </td><td data-v-c233dfa0></td><td data-v-c233dfa0> 10 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Dropbox </td><td data-v-c233dfa0> Lorem ipsum dolor sit amet </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 14 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Dropbox </td><td data-v-c233dfa0> Nemo enim ipsam voluptatem </td><td data-v-c233dfa0></td><td data-v-c233dfa0> 11 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Dropbox </td><td data-v-c233dfa0> Lorem ipsum dolor sit amet </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 20 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Dropbox </td><td data-v-c233dfa0> Nemo enim ipsam voluptatem </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 25 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Twitter </td><td data-v-c233dfa0> Consectetuer adipiscing elit </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 26 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Twitter </td><td data-v-c233dfa0> Nemo enim ipsam voluptatem </td><td data-v-c233dfa0></td><td data-v-c233dfa0> 28 march </td></tr><tr class="read checked" data-v-c233dfa0><td class="hidden-xs" data-v-c233dfa0><input type="checkbox" class="checkbox" data-v-c233dfa0></td><td class="hidden-xs" data-v-c233dfa0><i class="fa fa-star icon-state-warning" data-v-c233dfa0></i></td><td class="hidden-xs" data-v-c233dfa0> Twitter </td><td data-v-c233dfa0> Lorem ipsum dolor sit amet </td><td data-v-c233dfa0><i class="fa fa-paperclip" data-v-c233dfa0></i></td><td data-v-c233dfa0> 06 march </td></tr></tbody></table>',1),ya=e(()=>a("div",{class:"tab-pane text-style",id:"tab3"},[a("div",{class:"mailbox-border"},[a("div",{class:"mail-toolbar clearfix"},[a("div",{class:"float-left"},[a("div",{class:"btn btn_1 btn-default mrg5R"},[a("i",{class:"fa fa-refresh"})]),a("div",{class:"dropdown dropdown-inbox"},[a("a",{href:"#",title:"",class:"btn btn-default","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-cog icon_8"}),a("i",{class:"fa fa-chevron-down icon_8"}),a("div",{class:"ripple-wrapper"})]),a("ul",{class:"dropdown-menu float-right"},[a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-pencil-square-o icon_9"}),d(" Edit ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-calendar icon_9"}),d(" Schedule ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-download icon_9"}),d(" Download ")])]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#",class:"font-red",title:""},[a("i",{class:"fa fa-times",icon_9:""}),d(" Delete ")])])])]),a("div",{class:"clearfix"})]),a("div",{class:"float-right"},[a("span",{class:"text-muted m-r-sm"},"Showing 20 of 346 "),a("div",{class:"btn-group m-r-sm mail-hidden-options",style:{display:"inline-block"}},[a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-folder"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Social")]),a("li",null,[a("a",{href:"#"},"Forums")]),a("li",null,[a("a",{href:"#"},"Updates")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Spam")]),a("li",null,[a("a",{href:"#"},"Trash")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"New")])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-tags"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Work")]),a("li",null,[a("a",{href:"#"},"Family")]),a("li",null,[a("a",{href:"#"},"Social")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Primary")]),a("li",null,[a("a",{href:"#"},"Promotions")]),a("li",null,[a("a",{href:"#"},"Forums")])])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-left"})]),a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-right"})])]),a("div",{class:"clearfix"})])]),a("table",{class:"table tab-border"},[a("tbody",null,[a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Consectetuer adipiscing elit "),a("td"),a("td",null," 02 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Adobe "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 8 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Apple "),a("td",null," Hai Neha.How are You "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 4 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Microsoft "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 1 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Google "),a("td",null," Lorem Ipsum is simply "),a("td"),a("td",null," 12 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Microsoft "),a("td",null," Consectetuer adipiscing elit "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 16 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Nemo enim ipsam voluptatem "),a("td"),a("td",null," 10 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Twitter "),a("td",null," Lorem ipsum dolor sit amet "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 06 march ")])])])])],-1)),Sa=e(()=>a("div",{class:"tab-pane text-style",id:"tab4"},[a("div",{class:"mailbox-border"},[a("div",{class:"mail-toolbar clearfix"},[a("div",{class:"float-left"},[a("div",{class:"btn btn_1 btn-default mrg5R border"},[a("i",{class:"fa fa-refresh"})]),a("div",{class:"dropdown dropdown-inbox"},[a("a",{href:"#",title:"",class:"btn btn-default","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-cog icon_8"}),a("i",{class:"fa fa-chevron-down icon_8"}),a("div",{class:"ripple-wrapper"})]),a("ul",{class:"dropdown-menu float-right"},[a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-pencil-square-o icon_9"}),d(" Edit ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-calendar icon_9"}),d(" Schedule ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-download icon_9"}),d(" Download ")])]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#",class:"font-red",title:""},[a("i",{class:"fa fa-times",icon_9:""}),d(" Delete ")])])])]),a("div",{class:"clearfix"})]),a("div",{class:"float-right"},[a("span",{class:"text-muted m-r-sm"},"Showing 20 of 346 "),a("div",{class:"btn-group m-r-sm mail-hidden-options",style:{display:"inline-block"}},[a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-folder"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Social")]),a("li",null,[a("a",{href:"#"},"Forums")]),a("li",null,[a("a",{href:"#"},"Updates")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Spam")]),a("li",null,[a("a",{href:"#"},"Trash")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"New")])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-tags"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Work")]),a("li",null,[a("a",{href:"#"},"Family")]),a("li",null,[a("a",{href:"#"},"Social")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Primary")]),a("li",null,[a("a",{href:"#"},"Promotions")]),a("li",null,[a("a",{href:"#"},"Forums")])])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-left"})]),a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-right"})])]),a("div",{class:"clearfix"})])]),a("table",{class:"table tab-border"},[a("tbody",null,[a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Adobe "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 8 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Apple "),a("td",null," Hai Neha.How are You "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 4 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Microsoft "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 1 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Google "),a("td",null," Lorem Ipsum is simply "),a("td"),a("td",null," 12 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Microsoft "),a("td",null," Consectetuer adipiscing elit "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 16 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Nemo enim ipsam voluptatem "),a("td"),a("td",null," 10 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Twitter "),a("td",null," Lorem ipsum dolor sit amet "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 06 march ")])])])])],-1)),Na=e(()=>a("div",{class:"tab-pane text-style",id:"tab5"},[a("div",{class:"mailbox-border"},[a("div",{class:"mail-toolbar clearfix"},[a("div",{class:"float-left"},[a("div",{class:"btn btn_1 btn-default mrg5R"},[a("i",{class:"fa fa-refresh"})]),a("div",{class:"dropdown dropdown-inbox"},[a("a",{href:"#",title:"",class:"btn btn-default","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-cog icon_8"}),a("i",{class:"fa fa-chevron-down icon_8"}),a("div",{class:"ripple-wrapper"})]),a("ul",{class:"dropdown-menu float-right"},[a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-pencil-square-o icon_9"}),d(" Edit ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-calendar icon_9"}),d(" Schedule ")])]),a("li",null,[a("a",{href:"#",title:""},[a("i",{class:"fa fa-download icon_9"}),d(" Download ")])]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#",class:"font-red",title:""},[a("i",{class:"fa fa-times",icon_9:""}),d(" Delete ")])])])]),a("div",{class:"clearfix"})]),a("div",{class:"float-right"},[a("span",{class:"text-muted m-r-sm"},"Showing 20 of 346 "),a("div",{class:"btn-group m-r-sm mail-hidden-options",style:{display:"inline-block"}},[a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-folder"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Social")]),a("li",null,[a("a",{href:"#"},"Forums")]),a("li",null,[a("a",{href:"#"},"Updates")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Spam")]),a("li",null,[a("a",{href:"#"},"Trash")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"New")])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false"},[a("i",{class:"fa fa-tags"}),d(),a("span",{class:"caret"})]),a("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},[a("li",null,[a("a",{href:"#"},"Work")]),a("li",null,[a("a",{href:"#"},"Family")]),a("li",null,[a("a",{href:"#"},"Social")]),a("li",{class:"divider"}),a("li",null,[a("a",{href:"#"},"Primary")]),a("li",null,[a("a",{href:"#"},"Promotions")]),a("li",null,[a("a",{href:"#"},"Forums")])])])]),a("div",{class:"btn-group"},[a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-left"})]),a("a",{class:"btn btn-default"},[a("i",{class:"fa fa-angle-right"})])]),a("div",{class:"clearfix"})])]),a("table",{class:"table tab-border"},[a("tbody",null,[a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Apple "),a("td",null," Hai Neha.How are You "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 4 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Microsoft "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 1 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Lorem ipsum dolor sit amet "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 20 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 25 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Twitter "),a("td",null," Consectetuer adipiscing elit "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 26 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Twitter "),a("td",null," Nemo enim ipsam voluptatem "),a("td"),a("td",null," 28 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star icon-state-warning"})]),a("td",{class:"hidden-xs"}," Twitter "),a("td",null," Lorem ipsum dolor sit amet "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 06 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Twitter "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 8 march ")]),a("tr",{class:"unread checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Consectetuer adipiscing elit "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 10 march ")]),a("tr",{class:"read checked"},[a("td",{class:"hidden-xs"},[a("input",{type:"checkbox",class:"checkbox"})]),a("td",{class:"hidden-xs"},[a("i",{class:"fa fa-star"})]),a("td",{class:"hidden-xs"}," Dropbox "),a("td",null," Nemo enim ipsam voluptatem "),a("td",null,[a("i",{class:"fa fa-paperclip"})]),a("td",null," 16 march ")])])])])],-1));function Ta(s,t,l,f,h,i){return r(),o("div",E,[a("div",q,[a("div",U,[a("div",W,[a("div",Y,[a("div",{onClick:t[0]||(t[0]=c=>i.refresh()),class:"btn btn_1 btn-default mrg5R border"},J),G,z]),a("div",O,[a("span",j,"Showing "+n(this.currentPage)+" of "+n(this.pageCountComputed),1),a("div",K,[a("div",Q,[X,a("ul",Z,[a("li",{onClick:t[1]||(t[1]=c=>this.msgsType="work")},"work"),a("li",{onClick:t[2]||(t[2]=c=>this.msgsType="family")}," family"),aa,sa,a("li",{onClick:t[3]||(t[3]=c=>this.msgsType="primary")},"Primary"),a("li",{onClick:t[4]||(t[4]=c=>this.msgsType="promotions")},"Promotions"),a("li",{onClick:t[5]||(t[5]=c=>this.msgsType="forums")},"Forums")])])]),a("div",ta,[a("a",{onClick:t[6]||(t[6]=c=>i.decrease()),class:"btn btn-default border"},ea),a("a",{onClick:t[7]||(t[7]=c=>i.increase()),class:"btn btn-default border"},ca)]),ia])]),a("table",na,[a("tbody",null,[(r(!0),o($,null,M(i.current,(c,p)=>(r(),o("tr",{key:p,class:"unread checked"},[ra,a("td",oa,[a("i",{class:L(["fa fa-star",c.star?"icon-state-warning":""])},null,2)]),a("td",fa,n(c.sender),1),a("td",null,n(c.content),1),ha,pa]))),128))])])])]),a("div",ua,[a("div",ma,[a("div",xa,[a("div",va,[a("div",ba,[a("i",{onClick:t[8]||(t[8]=()=>{}),class:"fa fa-refresh"})]),ga,_a]),ka]),wa])]),ya,Sa,Na])}var Ca=k(R,[["render",Ta],["__scopeId","data-v-c233dfa0"]]);const Da={components:{composeComp:P,MsgDetails:Ca},data(){return{view:"inbox"}},computed:b(v({},V(_,["inbox","sentItem","draft"])),{getView(){return this.view},getMsgs(){if(this.getView=="sentItem")return this.sentItem;if(this.getView=="draft")return this.draft;if(this.getView=="important")return this.inbox.filter(s=>s.star==!0);if(this.getView=="delete")return this.draft;if(this.getView=="inbox")return this.inbox}}),methods:{fetchView(s){this.view=s}},mounted(){this.emitter.on("setView",s=>{console.log(s),this.view=s})}},Pa=s=>(w("data-v-244b6e77"),s=s(),y(),s),Fa={class:"inner-block"},$a={class:"inbox"},Ma=Pa(()=>a("h2",null," indox ",-1));function La(s,t,l,f,h,i){const c=g("compose-comp"),p=g("msg-details");return r(),o("div",Fa,[a("div",$a,[Ma,u(c),u(A,{name:"fade"},{default:H(()=>[u(p,{msgs:this.getMsgs},null,8,["msgs"])]),_:1})])])}var Ha=k(Da,[["render",La],["__scopeId","data-v-244b6e77"]]);export{Ha as default};
