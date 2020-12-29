(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{162:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return y}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),p=a,y=d["".concat(i,".").concat(p)]||d[p]||h[p]||r;return o?n.a.createElement(y,c(c({ref:t},u),{},{components:o})):n.a.createElement(y,c({ref:t},u))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<r;u++)i[u]=o[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},87:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return s}));var a=o(3),n=o(7),r=(o(0),o(162)),i={id:"Walkthrough",title:"Walkthrough",custom_edit_url:null,slug:"/"},c={unversionedId:"home/Walkthrough",id:"home/Walkthrough",isDocsHomePage:!1,title:"Walkthrough",description:"Creating account",source:"@site/docs/home/HM1.md",slug:"/",permalink:"/",editUrl:null,version:"current",sidebar:"someSidebar",next:{title:"Support Team",permalink:"/home/support"}},l=[{value:"Creating account",id:"creating-account",children:[]},{value:"Linking Square",id:"linking-square",children:[]},{value:"Create a Location",id:"create-a-location",children:[]},{value:"Create a rank",id:"create-a-rank",children:[]},{value:"Create A Discount",id:"create-a-discount",children:[]},{value:"Create A Menu",id:"create-a-menu",children:[]},{value:"Upload Asset",id:"upload-asset",children:[]},{value:"Create An App",id:"create-an-app",children:[]},{value:"Request App",id:"request-app",children:[]}],u={toc:l};function s(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"creating-account"},"Creating account"),Object(r.b)("p",null,"First starting off with an account. Currently only one user can have an account per company, however in the future as company owner you'll be able to create sudo or sub accounts for your employees to control or access your Craspa company data. To create an account, you'll need an invite link. If you don't have a invite link you can request one by contacting our support team. Using your invite link, you'll be able to create an account. Go to the invite in your brower, you may face issue if your using a safari or internet explorer. You'll see your options on your invite page, select create account to go to the account creation wizard. Follow the account creation wizard and provide all the requested information. The wizard is four steps and at the end you'll be asked to create your account. Click create account at the bottom right of the account creation wizard. If you provided the right information you'll see a green success alert at the bottom of your screen and then direct to the login page."),Object(r.b)("h2",{id:"linking-square"},"Linking Square"),Object(r.b)("p",null,"To link your Square, log in into your newly created account. The admin will prevent you accessing any part of admin if your Square is not linked. After logging in you'll see be directed to link your Square, make sure that your already logged into your Square account during process else Square will direct you to a error page, click the link Square button at the bottom right of the box. You'll be directed to Square's OAuth page, here you'll see all the permission your giving us access to, if have any questions about why need certain permissions you can contact our support team for more info. If your ready to allow us permission, click the allow button at the bottom of the OAuth page."),Object(r.b)("h2",{id:"create-a-location"},"Create a Location"),Object(r.b)("p",null,"Now that you've created an account and linked your Square, its time to create a location. A location is a central component of Square and Craspa, you'll use a location to devise orders, menus, rewards, and more. To create a location click the Company tab on your sidebar and click locations, your sidebar is how you'll navigate through your Craspa Admin. You'll see a blank page because you haven't imported any locations, import your first location by clicking the import location button at the top right of the page. A module will appear prompting you to import location, the reason you import locations and not create is so that we can link all your data with Square and you'll be able to view all your locations data in Square also. Follow the prompt to import a location, all fields are required. Click the locations select to view all your locations in Square account, select the location you wish to import. After importing your location, you'll be view it by clicking on the 3 dots button on the location item and clicking view.\nTo understand more about how locations work and how to use locations, view the location section of the documentation."),Object(r.b)("h2",{id:"create-a-rank"},"Create a rank"),Object(r.b)("p",null,"A big part of OAL is loyalty, you'll want to use loyalty to help increase customer retention by gamifying their ordering experience. As of now the type of loyalty is limit to ranks, however in the future we'll allow a more flexible loyalty program that find fits your brand the best. Ranks are determined by points and points earned are determined by the customers ranks. You control how point each rank gets and how many ranks there are. Points are not spendable, they're used to track a customers spending and which rank they should be in. For more information about how ranks work, view the loyalty section of the documentation. Navigate to loyalty tab in your sidebar and click to expand the loyalty tab, click manage loyalty to view all your ranks. By default each account is given a default rank with the name default with a minimum point of zero. You can change name, color, points per dollar of the default rank however it can not be deleted or have its minimum points changed. Create a new rank by clicking the create new rank at the top of the page, a module will appear prompting to enter the new ranks details. Click create rank button to view the new rank in your rank list."),Object(r.b)("h2",{id:"create-a-discount"},"Create A Discount"),Object(r.b)("p",null,"After creating a rank, you'll want to reward your customers. A discount object can be confusing at first at how it however it easier than it sounds. A discount object has 3 parts, discounted items, required items, and discount details. Discounted items are used to determine which items a customer should use and are the items that discount applys to, discounted items are optional. Required items are the same as discounted items how ever priced at full price and not discounted. Discount details determine how much an item or cart should be discounted, and if a cart minimum is required."),Object(r.b)("h2",{id:"create-a-menu"},"Create A Menu"),Object(r.b)("p",null,"Your half way through the Walkthrough, now you'll create a menu but first you'll need categories. You should already have some categories in your Square account, these will be used to create a category in your admin. Navigate to the menu tab on the sidebar and click categories. Here you'll see all your categories, click create category at the top of the admin and a module will appear. You'll use this module to create a category, enter in a name and select which category this newly created object will belong to, then click create. After successfully creating a category, you'll be directed to select an icon. The icon will be presented on your OAL app with associated category. Now you create a menu, navigate to menus sub tab under the Menu tab in the sidebar and click the create menu button. A dropdown will appear give your menu a name, select if you want it active, and then click create.\nYou'll be directed to the menus detail, from here you'll be able to set the location allowed to access the menu, set specials, categories, and highlighted items. First we'll start off by setting the location, click the location box to get a dropdown of all your locations. Select the locations you want access to the menu by clicking on the location item, this will add the location to menu, then click save changes to confirm the change. Next we'll set categories, categories are set the same way you set locations, select the category we previously made and save changes. Now you'll create a special, by clicking add on the special box. A module will appear prompting you to create a slogan for the special, choose an expiration date for special, upload an image and select the discount for the special. The discount isn\u2019t an indication of a reward or discounted object, you can manipulate a discount to have your customer purchase a certain set of items with no discount. Reference how to create a discount for more info. Lastly create a highlighted item. Click the add button, a dropdown will appear, provide the item name, description, an image of the item, then choose the item from the dropdown item list linked to  your square items, then choose a variation of that item. Your highlighted item image is required but doesnt have to be of the item, you can use any image that may entice your customers. The item name and description will be displayed to the user on the app and explicit to Craspa, however items select from a category list will be the name associated with Square object. Once you're done click create item, once the item is created you can view all highlighted items for the menu you can edit the item by clicking the three dots and clicking edit or you can delete the item.\nNow you have your menu completed, you now add it to a date menu or to a day schedule."),Object(r.b)("h2",{id:"upload-asset"},"Upload Asset"),Object(r.b)("p",null,"Upload your assets, such as logos, to your admin so they we create a customized theme for OAL based on your assets. You'll have two parts to uploading an asset."),Object(r.b)("p",null,"You can set your app icon, by selecting upload asset at the top of the asset page in the admin. There a module will appear, you'll use the same module to upload app assets and your app icon. However to make sure your uploading the right asset to the right place, you'll select what kind of asset your uploading. Select app icon for asset type, then click the upload button and upload your app icon. Reading the warning at the top of module, you'll see that your app icon has to be a 1024px by 1024px png, uploading any other content outside those limits for the app icon will raise an error, preventing you from uploading the image."),Object(r.b)("p",null,"##App Asset\nTo upload an asset that'll be used for creating your OAL, click the upload asset button at the top of asset page in the admin. There a module will appear, click on asset type select to change the asset type to \"app asset\". Then click on the upload to upload your asset. You can only upload a png with no max of 3500px by 3500px. Once you've uploaded your asset, it appear on your app asset slider on the asset page."),Object(r.b)("h2",{id:"create-an-app"},"Create An App"),Object(r.b)("p",null,"Navigate to the Order Ahead + Loyalty tab in the sidebar, select \u201cCreate New OA+L\u201d in the top right corner to get started with building your app, where you'll be directed to the app wizard. You'll create your app within under 10 steps using the app wizard. The first screen on the app wizard, will ask you to select which template you would like to use for your app, once you have selected a template, the next screen will ask you to choose an onboarding screen design that will help the customer understand how the app works. These screens are used to when a new users signs up and may need information about what your app offers. We provde you with 3 default onboarding screens, that provides a basic understanding of the app. You optionally provide your message and add 2 extra onboard screens. You will choose a color scheme, create a header text, and write a subtext for each onboarding screen you wish to have. Once you have created all your onboarding screens, you will then be directed to the screen where you will select tab icons for your app. Once you are finished, click submit to finish the process."),Object(r.b)("h2",{id:"request-app"},"Request App"),Object(r.b)("p",null,"To request your app to created, go to your asset page and select request app update. This will alert us that you want your app made and have set and provided all the required information. You'll receive a confirmation email about your request, we'll then work on making app and send you an email once its ready and will also send invite to email on your invite list. Once your ready to have your app live, contact our support team and we'll make your app live."),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null))}s.isMDXComponent=!0}}]);