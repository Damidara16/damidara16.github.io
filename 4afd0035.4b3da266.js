(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{157:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(o),p=r,m=l["".concat(a,".").concat(p)]||l[p]||h[p]||i;return o?n.a.createElement(m,s(s({ref:t},c),{},{components:o})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},97:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),i=(o(0),o(157)),a=["components"],s={id:"how-it-discounts-works",title:"How Discounts Work",custom_edit_url:null,hide_title:!0},u={unversionedId:"rewards/how-it-discounts-works",id:"rewards/how-it-discounts-works",isDocsHomePage:!1,title:"How Discounts Work",description:"How Discount Work",source:"@site/docs/rewards/RW9.md",slug:"/rewards/how-it-discounts-works",permalink:"/rewards/how-it-discounts-works",editUrl:null,version:"current",sidebar:"someSidebar",previous:{title:"How Rewards Work",permalink:"/rewards/how-it-rewards-works"},next:{title:"How To Manage A Reward",permalink:"/rewards/managing-reward"}},c=[{value:"How Discount Work",id:"how-discount-work",children:[]},{value:"Control Order Flow",id:"control-order-flow",children:[]},{value:"Discount features",id:"discount-features",children:[]}],d={toc:c};function l(e){var t=e.components,o=Object(n.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-discount-work"},"How Discount Work"),Object(i.b)("p",null,"Discounts is a base object that you may be familiar with in Square. We've taken a step further and extended its functionally, by allowing your discount to be more precise and targeted. You're also able to manipulate the Craspa discount, to control a customer's order flow."),Object(i.b)("p",null,"The Craspa Discount consists of Square ID which is the ID of a discount made in your Square and is required. The discount rule type, to determine if the discount should be applied to an item or the cart. The amount discounted, either a percentage or dollar amount in cents. How tax should be applied and the name of the discount. You have the option to require a cart minimum for a discount. These fields operate the same way they do in Square, however with the addition of cart minimum and discount rule being exclusive to the Craspa Platform."),Object(i.b)("p",null,"The discount object has its own base data to determine what the discount is, however the way to use a discount, is to either attach to a special or create a reward. The reason why you create an additional object is that the discount can be reusable and allows shared data across its child objects. A reward is a discount applied to a set of customers, exclusive to the applied customers and single-use, and a special is a banner ad attached to a menu, available to everyone and multi-use. Reference how rewards work for details on rewards."),Object(i.b)("p",null,"Whenever you create a new discount in Craspa, it will also create one in Square."),Object(i.b)("h2",{id:"control-order-flow"},"Control Order Flow"),Object(i.b)("p",null,'You can control the order flow of your customer for discounts with the discount rule type of item and item cart. The discount object comes with the required items and discounted items feature. For example, say you want to buy 2 apples and get the 3rd free. First, you create a discount for 100% off, then. you create 2 required items for the apples and 1 discounted item for the apples. The 2 required items will be priced at full price and the 1 discounted will have the discount applied. The way the order flow is controlled is that your customer will be directed to add the 2 apples and then the last apple in one workflow. if the workflow is cancelled, all items added during the process will be removed. This allows you to control the order flow of customers.\nYou can also extend this functionally to not use discounted items and no discount will be applied. For example, you have a special "Try our new burger and fries", you\'ll create a discount with any discount and create 2 two required items for the burger and fries and the discount will be ignored since there are no discounted items provided. Also the same if you just want a discounted item with no previous full priced items, just create only discounted items and all items will be discounted. The required items and discounted items are not both required concurrently however, either is required for discounts with the discount rule type of item and item cart.'),Object(i.b)("p",null,"A required/discounted item can either an item or a category, providing the most flexibility for the discount."),Object(i.b)("h2",{id:"discount-features"},"Discount features"),Object(i.b)("p",null,"You can customize a discount, by limiting the menus allowed to use the discount. This provides you with an extra level of security so that your customers don't use a discount for a menu that is not currently active. You also can provide a description of the discount, so that your customer knows what the discount is outside of the name of the discount. We've provided a feature that allows you to generate an automatic description based on the discount details and its items."),Object(i.b)("p",null,"Discount Rule Type:\nItem: The discount will only be able to the discounted items, cart minimum will be ignored\nitem cart: The discount will only be able to the discounted items, but a cart minimum is required and has to be satisfied to complete checkout\ncart: apply the discount to the whole cart and optional required a cart minimum"))}l.isMDXComponent=!0}}]);