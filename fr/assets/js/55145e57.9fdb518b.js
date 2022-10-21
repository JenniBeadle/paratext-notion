"use strict";(self.webpackChunkparatext_notion=self.webpackChunkparatext_notion||[]).push([[4958],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(a),d=r,h=k["".concat(p,".").concat(d)]||k[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"8. SP \u2013 Spell Checking",sidebar_position:9},l=void 0,o={unversionedId:"Training-Manual/Stage-2/SP",id:"Training-Manual/Stage-2/SP",title:"8. SP \u2013 Spell Checking",description:"Introduction",source:"@site/docs/Training-Manual/03-Stage-2/8.SP.md",sourceDirName:"Training-Manual/03-Stage-2",slug:"/Training-Manual/Stage-2/SP",permalink:"/paratext-notion/fr/Training-Manual/Stage-2/SP",draft:!1,editUrl:"https://github.com/JenniBeadle/paratext-notion/tree/main/docs/Training-Manual/03-Stage-2/8.SP.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"8. SP \u2013 Spell Checking",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"7. PN \u2013 Proper Names",permalink:"/paratext-notion/fr/Training-Manual/Stage-2/PN"},next:{title:"9. GL - Glossary",permalink:"/paratext-notion/fr/Training-Manual/Stage-2/GL"}},p={},s=[{value:"8.1 Configure the word list",id:"81-configure-the-word-list",level:3},{value:"8.3 Spell checking \u2013 current book",id:"83-spell-checking--current-book",level:3},{value:"8.4 Spell checking \u2013 from the wordlist",id:"84-spell-checking--from-the-wordlist",level:3},{value:"8.5 Spelling discussion note",id:"85-spelling-discussion-note",level:3}],c={toc:s};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Introduction"),"\nThis module explains how to check for spelling mistakes in the text you have typed into your project in Paratext 9."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Where we are"),"\nYou have typed your text in Paratext 9 and have done some checks but there may still be spelling mistakes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why is this important?"),"\nIt is important to correct any spelling mistakes so that your text will communicate clearly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What you are going to do")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure the wordlist to build up a base of correct words."),(0,r.kt)("li",{parentName:"ul"},"Work through your text with red squiggly lines showing words that Paratext does not know are correct."),(0,r.kt)("li",{parentName:"ul"},"Work through your wordlist, either correcting mistakes or telling Paratext 9 that the words are correct."),(0,r.kt)("li",{parentName:"ul"},"Use a variety of checks from the word list."),(0,r.kt)("li",{parentName:"ul"},"Add a spelling discussion note to words that need further discussion before deciding on a correct spelling.")),(0,r.kt)("h3",{id:"81-configure-the-word-list"},"8.1 Configure the word list"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before you can check the spelling, it is important to have a base of words that are known to be correct. There are three things we can do: :::"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Approve the spelling of common words")),(0,r.kt)("p",{parentName:"admonition"},"In Paratext"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Wordlist"))),(0,r.kt)("p",{parentName:"admonition"},"In the Wordlist"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Approve spelling of common words")),(0,r.kt)("li",{parentName:"ul"},"Enter a number"))),(0,r.kt)("p",null,"The number is the number of times the words must appear to automatically mark it as being spelled correctly. The default is 100 but you can choose more (if you have doubts about the text) or less (if you are confident about the accuracy of the typist). :::"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Yes")," (to confirm that you cannot undo)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Check the words that Paratext thinks are incorrect")),(0,r.kt)("p",null,"In the Wordlist (",(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab")," under ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"Word List"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"Spell Check > All checks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"A list of word s is displayed.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on a word in the top pane.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the word is correct \u2013 click the green checkbox  at the top of the column"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(847).Z,width:"29",height:"25"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the word is incorrect, but Paratext 9 has suggested the correct word, then click the blue link for the correct word.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the word is incorrect, and Paratext 9 hasn\u2019t suggested the correct word, click on the red checkbox  and correct the word. (See 9.3)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4638).Z,width:"29",height:"29"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Check similarly spelled words")),(0,r.kt)("p",null,"In the Wordlist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Find Similar Words")),(0,r.kt)("li",{parentName:"ul"},"Enter letters which sound alike separated by / (e.g. s/sh/z)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Depending on your language, tick or untick \u201cIgnore all diacritics when comparing words\u201d. :::"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"A list of words is displayed.")))),(0,r.kt)("li",{parentName:"ul"},"Correct the words (as described above).")),(0,r.kt)("h3",{parentName:"admonition",id:"82mc"},"8.2 Spell checking \u2013 from the text"),(0,r.kt)("p",{parentName:"admonition"},"In Paratext"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"View")," > ",(0,r.kt)("strong",{parentName:"li"},"Display spelling")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A progress meter is displayed initially, then all the words that are either unknown or incorrect have red squiggly lines underneath. :::\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Making corrections")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Paratext 9 will underline in red the words that have not been approved in the word list. This either means that the word is misspelled or unknown. :::"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Right-click a word which is underlined in either red or grey"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"A dialogue is displayed")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4762).Z,width:"244",height:"328"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Either type the correction in the box or select the correct word from the list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"OK"))))),(0,r.kt)("p",null,"When possible, it is better to use the spelling check even when making minor corrections as Paratext 9 will remember the correction and you can apply the correction if it happens again. :::"),(0,r.kt)("p",null,"When there is more than one correction, a dialog box is displayed.\nChoose as appropriate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Yes")," = changes this verse and looks for the next"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No")," = skips this verse and looks for the next"),(0,r.kt)("li",{parentName:"ul"},"Yes to all \u2013 ",(0,r.kt)("strong",{parentName:"li"},"is dangerous"),", use with caution"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cancel")," = stops further changes")),(0,r.kt)("h3",{id:"83-spell-checking--current-book"},"8.3 Spell checking \u2013 current book"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"Tools")," > ",(0,r.kt)("strong",{parentName:"p"},"Spell Check Current Book")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"A window appears with a list of some words in the current book.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(607).Z,width:"800",height:"712"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make corrections as explained above 8.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"More items available")," to see additional words.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Continue as needed."))),(0,r.kt)("h3",{id:"84-spell-checking--from-the-wordlist"},"8.4 Spell checking \u2013 from the wordlist"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using the checks")),(0,r.kt)("p",null,"In the Wordlist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"Tools"),"> ",(0,r.kt)("strong",{parentName:"p"},"Spell check >"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose the desired check (see descriptions below)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2764).Z,width:"298",height:"273"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"A list of words is displayed"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make the corrections as needed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"More items available")," to see more words.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Continue as needed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the list is finished, a message is displayed"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3114).Z,width:"527",height:"128"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All checks")," This runs all of the checks. This is very useful as it will find all types of errors especially words with multiple types of errors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Missing Capitals")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A list of words is displayed which have capitalised forms but are not always capitalised (that is both forms are used). The list shows the word with a lower case, then the capitalised form below it, which has a blue link to the word"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5282).Z,width:"1179",height:"80"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the blue link to the capitalised form"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3838).Z,width:"1178",height:"45"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the appropriate blue link.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Show incorrect")," (to see the verses)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"The two forms are acceptable")," (to accept both forms)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Capitalise All")," (to correct all the words)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Single Character Typos"),"\nA list of words is displayed with links to other words which are similar but only have one letter different."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unusual Letter Combinations"),"\nA list of words is displayed which have unusual combination of letters (such as consonant or vowel clusters \u2026)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Diacritic Errors"),"\nA list of words is displayed with links to other words which are the same except for the diacritics."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Common Typos"),'\nA list of words is displayed which have the same type of problem which have already been corrected in other words. E.g. if you have already corrected "teh" as "the", and it finds "tehm" it will suggest "them".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unknown Morphology"),"\nA list of words is displayed which the computer has not been able to guess the morphology based on other words."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Find incorrectly joined or split words ")," In the Wordlist (",(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"Tools")," \u2013 Wordlist)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"Tools"),"> ",(0,r.kt)("strong",{parentName:"p"},"Find Incorrectly Joined or Split Words")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3109).Z,width:"381",height:"222"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type in any punctuation which can be in the middle of a word e.g. - '")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"OK")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"A list of words is displayed with similar words grouped together.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4329).Z,width:"1225",height:"723"})))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Correct a word which was incorrectly marked")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find the word in the list (using the filter if necessary)"),(0,r.kt)("li",{parentName:"ul"},"Click on the line to see the word in context"),(0,r.kt)("li",{parentName:"ul"},"Click the correct spelling status.")),(0,r.kt)("h3",{id:"85-spelling-discussion-note"},"8.5 Spelling discussion note"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have not made a final decision on the spelling, you can add a spelling discussion note. :::"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Double-click on the note icon (in the first column)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6476).Z,width:"922",height:"304"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type in the note")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assign the note as necessary.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"OK"),".")))))}m.isMDXComponent=!0},3114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1135575298-fa96b7129d6604f5c40be87529685dd4.png"},5282:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1224325008-18466b970b6d261cbae00adc266e7fb5.png"},4762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1461085526-26d59afc4fd84aa21efb15b3a697ae8f.png"},3109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1732941414-4e3682024603c2188a15f401f9922210.png"},3838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1891598628-a215e99c0215c21e19e1a052996ec409.png"},4638:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAALnSURBVEhLzVVNT1pREMW2m9YE5OM9ePB4RokooYv+KxcmbNgqEEFFIaRVQHGFNiaN3TVpF/34G902tUmb7to00aRpnc4ZuM2FPOSpqZXkZHLnnpnz5t6Zi4/+w09EfT7fjWFAtNPp/HPcftG9vT2B256CF45nUT3RqKReOIAnUZWgWq3S6urqgG+YUyqVaHNz05WjMFZUBdbrdbIsi4J+P62trVGH/bu7u7InlteFQoGCk5Nkx+PC1+N1XCiqAhqNBjmOQ0+mDHprJGjajFKlUhGhVqsldmVlhaKBAL0zbDoKxYSPOD2PwkhREIHqxgbN2rYI/p6ep3Nnnl5G4uSYJpXLZdrnKpeXl0UQ/nPmgHcUjlHKTtL6+vrfXJ5EYct8hwYnPA5bRMk0fYzPEvWFU7EYLS4ukh0Myhr+k/7+c+abgSnXHhgpqhPxtVGu7JCPjZx0LzF/wAtUfPeeWKx7gmnhgY84PY/ChaKACsAdmoZBT/vCX1jglIU+JVJisYYf++DJnWvxOsaKAhLIwB0muTMP+OhOWeArC35LzonFGn6bOxw88N0EAU+iALp0n5MsLS3RA98EnbDQd3tOKoT9wPY++/P5vPDa7bZrHsCTqJpDdGkyEqFXPBan/Qp/9O0ZVwp/ik/i2pWqo8Xgq7FA03zmys7YvrdmxGINvxqnK9+pCigWiz1BQ43FjDTNATdNcOKO2F5Xw8/jxDw8IJfuXkUssWCEn7Y3/BLhYejNaa9LE9Eo5XI5saqr1Ry/Zr7pD8ic6/mAsZXWazV6lMnQY36RfvFLgyPEHGIs5EViDizWMse8/5NFi/4wPVxYkHjPlepA52azWX4KTTqOWBRTd8bJpEvZYg3/Mx4bCIIv77JLvrGi6itbzSZluOJQKOT+L8MW/nA4LDzw9XgdnipVgdvb27S1tTXgG+bU+DibOzuuHAVPosMYlWyUfxiXEkXScYm9CF+p0uvidojeFESv2+3SzaJLfwB57zRbptuX5QAAAABJRU5ErkJggg=="},6476:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/355615303-dc65d1ab41d9cd72acbbbd23a18b3e1a.png"},847:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAKSSURBVEhL1dNNbxJRFAZgf0AJShRLoS20RajGRfkKpOnGVmP5Ch1aunJpSHBBQoLRuFXjXzFpda9Go+KeNoS0/6B8LSBdFBh4veeQGwlQhBY1vpMJk8zlPnPOnLkigr8Rco6OEnz+/2i73eZzUP4I2o0NgieOtlot/i2Xy6hWq3zdC08U7QZXVlawurqKaq0fnhgqwUqlAo/Hg5svXNA9voO1tTWcnp7yPQlPBJVgqVSC2+2GPu3AciaG5e8xhl1uF04KJ4zSORJKm8qNe9MNulwu6J8K8EcMlj2/QHdw7ZEN6xvrKFfKvI4yEiqer3P0DIQEi8UigzcEaBcVWvY3BbwL7fYiAoEA6vU6r5MZinI7xJFMJpFKpfhaQt2gw+GA/pmTW2rZ9zOs3V5CMBhEvdkBux94KEohcOqeCZrNOaTTaYhGo9ls8r1CoQCn0ynAzjv8BS4iFArhrHHG63o7NBClRTRxiScJaO7PwvZJgf3bDqY2TFyxKmCqkD4L/fOeCqOLCIfDAyuU6UPlouPjY2g0GhheeWGnwRCb3vqsQPNgFvF4HF6fl0G7GJZxQEofSpGLDw8PMWM2CtgH21ex+Xs/rB+2cD1xF9MvvbB+UWB5R1MqQGUBkUgEDbXB/z0PpAxEKXJQstkspk0GGF4LWLTYvLfJrbZ+jGBBgLczYkq3OmCz1XnXw0DKuShFVVWeWIJn5qli0WrRTvPbh1w1fYcEKooyUoUyQ1GKhKnVhjkjpgnO7MAu2q2NdEC1rfLaUUDKb1GKhA8ODmCcN8Hwxoeru0uIRqOipeOBlJFQCsGUXC4HnU7H36F6AZAyMkqRw5XP51Gr1fh6XJAyFkq5CNKbsVEKVXwZ/ELoZfOP0QR+ArcJjbz4r+BGAAAAAElFTkSuQmCC"},607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/728910448-42410b80bc5d2a7c5bdb9fa6a9004a07.png"},2764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/847244784-4faa02c4cf89709bdd93860b849c7bfb.png"},4329:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/884319725-85f8c3c8b387e768601c9fda607c1b4c.png"}}]);