(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,,,,,function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){"use strict";a.r(c);var t=a(0),n=a(1),l=a.n(n),i=a(2),s=a.n(i),r=(a(12),a(13),a(5)),o=a(4),b=a(3);function d(e){var c=e.title,a=e.showModal,n=e.playAgain;return a?s.a.createPortal(Object(t.jsxs)(l.a.Fragment,{children:[Object(t.jsx)("div",{className:"ModalLoad"}),Object(t.jsxs)("div",{className:"OverlayLoad",children:[Object(t.jsx)("p",{children:c}),Object(t.jsx)("button",{onClick:n,children:"Play again"})]})]}),document.getElementById("portal")):null}function j(e){var c=e.showModalGame,a=e.info,n=e.play;return c?s.a.createPortal(Object(t.jsx)(l.a.Fragment,{children:Object(t.jsxs)("div",{className:"OverlayLoad OverlayLoadGame Game",children:[Object(t.jsx)("p",{children:"Tic-Tac-Toe"}),Object(t.jsx)("button",{onClick:n,children:"START"}),Object(t.jsx)("button",{onClick:a,children:"INFO"})]})}),document.getElementById("portal")):null}function O(e){var c=e.title,a=e.showModalTip,n=e.closeModalTip;if(!a)return null;return setTimeout((function(){n()}),2e3),s.a.createPortal(Object(t.jsxs)(l.a.Fragment,{children:[Object(t.jsx)("div",{className:"ModalLoad ModalLoadTip"}),Object(t.jsx)("div",{className:"OverlayLoadTip OverlayLoad",children:Object(t.jsx)("p",{children:c})})]}),document.getElementById("portal"))}a(14),a(15);function u(){var e=Object(n.useState)(!1),c=Object(b.a)(e,2),a=c[0],l=c[1],i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],m=s[1],h=Object(n.useState)(!0),v=Object(b.a)(h,2),x=v[0],f=v[1],p=Object(n.useState)(""),g=Object(b.a)(p,2),y=g[0],N=g[1],X=Object(n.useState)(!0),k=Object(b.a)(X,2),C=k[0],T=k[1],M=Object(n.useState)({a1:"",a2:"",a3:"",b1:"",b2:"",b3:"",c1:"",c2:"",c3:""}),L=Object(b.a)(M,2),S=L[0],w=L[1],E=Object(n.useRef)((function(){}));E.current=function(){"X"===S.a1&&"X"===S.a2&&"X"===S.a3||"X"===S.b1&&"X"===S.b2&&"X"===S.b3||"X"===S.c1&&"X"===S.c2&&"X"===S.c3||"X"===S.a1&&"X"===S.b2&&"X"===S.c3||"X"===S.a1&&"X"===S.b1&&"X"===S.c1||"X"===S.a2&&"X"===S.b2&&"X"===S.c2||"X"===S.a3&&"X"===S.b3&&"X"===S.c3||"X"===S.a3&&"X"===S.b2&&"X"===S.c1?(N("player1 has Won!"),l(!0)):"O"===S.a1&&"O"===S.a2&&"O"===S.a3||"O"===S.b1&&"O"===S.b2&&"O"===S.b3||"O"===S.c1&&"O"===S.c2&&"O"===S.c3||"O"===S.a1&&"O"===S.b2&&"O"===S.c3||"O"===S.a1&&"O"===S.b1&&"O"===S.c1||"O"===S.a2&&"O"===S.b2&&"O"===S.c2||"O"===S.a3&&"O"===S.b3&&"O"===S.c3||"O"===S.a3&&"O"===S.b2&&"O"===S.c1?(N("player2 has Won!"),l(!0)):function(){for(var e=0,c=Object.entries(S);e<c.length;e++){if(""===Object(b.a)(c[e],2)[1])return!1}return!0}()&&(N("GAME IS TIE!!"),l(!0))};var F=function(){w((function(e){var c=Object.keys(S).forEach((function(e){S[e]=""}));return Object(o.a)(Object(o.a)({},e),{},{fill:c})})),l(!1),f(!1)},I=function(e){e.preventDefault(),console.log(e.target.id),console.log(e.target.name),""===S[e.target.id]?(w((function(c){return Object(o.a)(Object(o.a)({},c),{},Object(r.a)({},e.target.id,C?"X":"O"))})),T((function(e){return!e})),N(C?"player2 turn":"player1 turn"),m(!0)):(N("Can't click here!"),m(!0))};return Object(n.useEffect)((function(){E.current()}),[S]),Object(t.jsxs)("div",{className:"game",children:[Object(t.jsx)("div",{className:"game-board",children:Object(t.jsxs)("div",{className:"board",children:[Object(t.jsxs)("div",{className:"line1",children:[Object(t.jsx)("div",{className:"tile",id:"a1",name:"a1",onClick:I,value:S.a1,children:S.a1}),Object(t.jsx)("div",{className:"tile",id:"a2",name:"a2",onClick:I,value:S.a2,children:S.a2}),Object(t.jsx)("div",{className:"tile",id:"a3",name:"a3",onClick:I,value:S.a3,children:S.a3})]}),Object(t.jsxs)("div",{className:"line2",children:[Object(t.jsx)("div",{className:"tile",id:"b1",name:"b1",onClick:I,value:S.b1,children:S.b1}),Object(t.jsx)("div",{className:"tile",id:"b2",name:"b2",onClick:I,value:S.b2,children:S.b2}),Object(t.jsx)("div",{className:"tile",id:"b3",name:"b3",onClick:I,value:S.b3,children:S.b3})]}),Object(t.jsxs)("div",{className:"line3",children:[Object(t.jsx)("div",{className:"tile",id:"c1",name:"c1",onClick:I,value:S.c1,children:S.c1}),Object(t.jsx)("div",{className:"tile",id:"c2",name:"c2",onClick:I,value:S.c2,children:S.c2}),Object(t.jsx)("div",{className:"tile",id:"c3",name:"c3",onClick:I,value:S.c3,children:S.c3})]})]})}),Object(t.jsxs)("div",{className:"game-players",children:[Object(t.jsx)("p",{className:"player1",style:{backgroundColor:C?"green":"red"},children:"Player 1"}),Object(t.jsx)("p",{className:"player2",style:{backgroundColor:C?"red":"green"},children:"Player 2"})]}),Object(t.jsx)(d,{title:y,showModal:a,playAgain:F}),Object(t.jsx)(j,{showModalGame:x,play:F}),Object(t.jsx)(O,{showModalTip:u,closeModalTip:function(){m(!1)},title:y})]})}var m=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(u,{})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(c){var a=c.getCLS,t=c.getFID,n=c.getFCP,l=c.getLCP,i=c.getTTFB;a(e),t(e),n(e),l(e),i(e)}))};s.a.render(Object(t.jsx)(l.a.StrictMode,{children:Object(t.jsx)(m,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.806d66a8.chunk.js.map