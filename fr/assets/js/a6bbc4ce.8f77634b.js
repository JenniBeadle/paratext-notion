"use strict";(self.webpackChunkparatext_notion=self.webpackChunkparatext_notion||[]).push([[7840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"7.PN",sidebar_position:55,slug:"/0005eed2-5a5c-44ef-a106-ede7eeb0b7be"},o=void 0,i={unversionedId:"Training-Manual/Stage-2/PN",id:"Training-Manual/Stage-2/PN",title:"7.PN",description:"Introduction",source:"@site/docs/Training-Manual/Stage-2/7.PN.md",sourceDirName:"Training-Manual/Stage-2",slug:"/0005eed2-5a5c-44ef-a106-ede7eeb0b7be",permalink:"/paratext-notion/fr/0005eed2-5a5c-44ef-a106-ede7eeb0b7be",draft:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{title:"7.PN",sidebar_position:55,slug:"/0005eed2-5a5c-44ef-a106-ede7eeb0b7be"},sidebar:"defaultSidebar",previous:{title:"00-Stage-2",permalink:"/paratext-notion/fr/2b958353-82ab-4f8a-ae31-874e2c4b229a"},next:{title:"9.GL",permalink:"/paratext-notion/fr/136d3b5e-b136-45b0-90b6-5c84a0aa7f5d"}},s={},p=[{value:"7.1 Run the Biblical Terms tool",id:"71-run-the-biblical-terms-tool",level:3},{value:"7.2 Guess Renderings for proper nouns",id:"72-guess-renderings-for-proper-nouns",level:3},{value:"7.3 Adapt names",id:"73-adapt-names",level:3},{value:"7.4 Ensure your text is consistent",id:"7.4-Confirm",level:3},{value:"7.5 Add an alternative rendering",id:"75-add-an-alternative-rendering",level:3},{value:"7.6 Dealing with verses that do not have the name translated",id:"76-dealing-with-verses-that-do-not-have-the-name-translated",level:3},{value:"7.7 Recall",id:"77-recall",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Introduction"),"\nIn this module, you will check that the proper names have been transliterated consistently. There are two ways to do this. One way is to have Paratext guess the proper names based on statistical analysis of a model text. The other way is to tell Paratext the changes for specific characters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Where we are"),"\nYou have (or are working on) the rules for transliterating the names."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why this is important"),"\nYou want to be consistent so that is clear who is being referred to in the text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What you are going to do"),"\nYou will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"filter the Major Biblical terms list on Names."),(0,r.kt)("li",{parentName:"ul"},"EITHER use the ",(0,r.kt)("strong",{parentName:"li"},"Guess renderings")," tool to guess the appropriate rendering of the names."),(0,r.kt)("li",{parentName:"ul"},"OR use the ",(0,r.kt)("strong",{parentName:"li"},"Adapt Names")," tool to enter your transliteration rules for each letter."),(0,r.kt)("li",{parentName:"ul"},"edit and approve the individual names."),(0,r.kt)("li",{parentName:"ul"},"add the approved names as proposed names in the Biblical terms list."),(0,r.kt)("li",{parentName:"ul"},"work through the Biblical Terms list to ensure that all the verses are consistent.")),(0,r.kt)("h3",{id:"71-run-the-biblical-terms-tool"},"7.1 Run the Biblical Terms tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click in your project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Biblical Terms \u2026"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open list of terms")," - ",(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"Biblical terms")," > ",(0,r.kt)("strong",{parentName:"p"},"Select Biblical terms list")," - Double-click the ",(0,r.kt)("strong",{parentName:"p"},"Major Biblical Terms")," list"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Choose your reference text as a comparative text")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comparative Texts")),(0,r.kt)("p",null,"button on the toolbar."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose your reference text, then click")),(0,r.kt)("p",null,"\u2192 (right arrow). - Click"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OK")),(0,r.kt)("p",null,"."),(0,r.kt)("p",null,"The terms column is in Greek (or Hebrew) by default. You can see the terms in a roman script by using the ",(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"View")," menu > ",(0,r.kt)("strong",{parentName:"p"},"Transliterate terms"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change various settings")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the second filter button")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Chapters Assigned to Me")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Filter for names")," - Click the first filter button - Choose ",(0,r.kt)("strong",{parentName:"p"},"New Filter")," - In the dialog box, under ",(0,r.kt)("strong",{parentName:"p"},"Categories\u2026")," - Select ",(0,r.kt)("strong",{parentName:"p"},"Names")," - Click ",(0,r.kt)("strong",{parentName:"p"},"OK")),(0,r.kt)("h3",{id:"72-guess-renderings-for-proper-nouns"},"7.2 Guess Renderings for proper nouns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Guess renderings")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Paratext will add renderings to any terms which do not have a rendering (with an orange background)")))),(0,r.kt)("li",{parentName:"ul"},"You will need to approve these renderings (see 7.4)")),(0,r.kt)("h3",{id:"73-adapt-names"},"7.3 Adapt names"),(0,r.kt)("p",null,"Adapting names should be done in the early stages of a translation project, before you have approved renderings of proper names. Otherwise you can use the guess renderings (see above)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Adapt Names")),(0,r.kt)("li",{parentName:"ul"},"Choose the language of your reference text (e.g.\xa0English or fran\xe7ais)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The Name Adaptation dialogue is displayed"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enter the changes for the individual letters (or letter clusters)"),"  - In the left pane, fill in the \u201cAdapted Character\u201d column for the individual letters or letter clusters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Then revise and approve the Adapted Name"),"  - Work through the ",(0,r.kt)("strong",{parentName:"p"},"Adapted name")," column in the right pane. - For each name, if the adapted name is incorrect, click on the name in the ",(0,r.kt)("strong",{parentName:"p"},"Adapted Name")," column, - Edit the name and click ",(0,r.kt)("strong",{parentName:"p"},"OK")," - Once the name is correct, click in the ",(0,r.kt)("strong",{parentName:"p"},"Approved")," column. - Click ",(0,r.kt)("strong",{parentName:"p"},"OK"),"."),(0,r.kt)("p",null,"Paratext 9 will propose a name (in red) in the rendering column of the biblical terms tool."),(0,r.kt)("h3",{id:"7.4-Confirm"},"7.4 Ensure your text is consistent"),(0,r.kt)("p",null,"You need to work through the list and confirm that all the verses use the name consistently."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the name in the top pane."),(0,r.kt)("li",{parentName:"ul"},"Click on a verse in the lower pane which doesn\u2019t have the proposed form of the name."),(0,r.kt)("li",{parentName:"ul"},"Click on the Edit link"),(0,r.kt)("li",{parentName:"ul"},"Correct as necessary, then click ",(0,r.kt)("strong",{parentName:"li"},"Close")),(0,r.kt)("li",{parentName:"ul"},"Repeat for each name.")),(0,r.kt)("h3",{id:"75-add-an-alternative-rendering"},"7.5 Add an alternative rendering"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the name in the top pane."),(0,r.kt)("li",{parentName:"ul"},"Select the word(s) in your text"),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add rendering")," button or ",(0,r.kt)("strong",{parentName:"li"},"Ctrl"),"+",(0,r.kt)("strong",{parentName:"li"},"A")," \u2014\u2013")),(0,r.kt)("h3",{id:"76-dealing-with-verses-that-do-not-have-the-name-translated"},"7.6 Dealing with verses that do not have the name translated"),(0,r.kt)("p",null,"There are times when a verse is correctly translated even though you have not used the name. For example, a pronoun is used instead of the name. In this case you need to tell Paratext 9 that it is correct (that is, deny that the rendering is missing)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the red cross at the left of the verse reference",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The cross turn into green tick (4a.Check) with a red cross")," ."))),(0,r.kt)("li",{parentName:"ul"},"If you clicked on the red cross by mistake, click again on the icon")),(0,r.kt)("p",null,"Paratext 9 does not find names in the introductions, headings, footnotes, captions or glossary. (You could use the Word List to find possible mistakes.)"),(0,r.kt)("h3",{id:"77-recall"},"7.7 Recall"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To transliterate proper names, you ",(0,r.kt)("strong",{parentName:"li"},"_"),(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"}," the ")),(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"____")))," list on names."),(0,r.kt)("li",{parentName:"ul"},"Then use the ",(0,r.kt)("strong",{parentName:"li"},"___")," menu and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"____"))," command."),(0,r.kt)("li",{parentName:"ul"},"After entering the ",(0,r.kt)("em",{parentName:"li"},"**")," changes then _**____ the adapted names."),(0,r.kt)("li",{parentName:"ul"},"Paratext 9 then enters a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"__"))," rendering for all the names."),(0,r.kt)("li",{parentName:"ul"},"You then work through the list ",(0,r.kt)("strong",{parentName:"li"},"____"),(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"}," and/or adding renderings and making sure that all verses are ")),(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"____")),"."),(0,r.kt)("li",{parentName:"ul"},"You can add a rendering by selecting the text and pressing ",(0,r.kt)("strong",{parentName:"li"},"Ctrl"),"+__."),(0,r.kt)("li",{parentName:"ul"},"If a pronoun is used you can ",(0,r.kt)("strong",{parentName:"li"},"__")," the rending by clicking on the . :::info ","[Answers: filter, Major Biblical Terms, names, Tools, Adapt Names, character, approve, proposed, correcting, consistent, A, deny]"," :::")))}m.isMDXComponent=!0}}]);