(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{206:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(36),o=n.n(s),i=(n(95),n(12)),l=n.n(i),d=n(22),j=n(3),u=n(37),h=n(24),b={backgroundColor:"#000000",backgroundImage:"linear-gradient(147deg, #000000 0%, #012C48 74%)",headerfontColor:"#012C48",fontSize:"50px",headerBackground:"cyan",color:"cyan"},f={backgroundColor:" #757f9a;",backgroundImage:"linear-gradient(to right, #757f9a, #d7dde8);",headerfontColor:"cyan",headerBackground:"#012C48"},O=Object(h.b)(c||(c=Object(u.a)(["\nhtml\n{\n    height : 100%;\n    background-size: cover;\n    \n}\nbody\n{   \n    background-color : ",";\n    background-image : ",";    \n    background-repeat : no-repeat;\n    background-attachment: fixed;\n    color : ",";\n    \n    \n}\nheader\n{\n    background-color : ",";\n    color : ","\n}\nfooter\n{\n    background-color : ",";\n    color : ","\n}\n\n\n\n\n\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.backgroundImage}),(function(e){return e.theme.color}),(function(e){return e.theme.headerBackground}),(function(e){return e.theme.headerfontColor}),(function(e){return e.theme.headerBackground}),(function(e){return e.theme.headerfontColor})),x=n(89),p=n(1),g=function(e){var t,n=[];for(var c in e){if(t){var a={x:c,y:e[c]-t};n.push(a)}t=e[c]}return n};var v=function(e){var t=Object(a.useState)({}),n=Object(j.a)(t,2),c=(n[0],n[1]),r=e.country;console.log(r),console.log(e.data);var s,o,i,u="timeline"in e.data;return u?(console.log(u),s=e.data.timeline.cases,o=e.data.timeline.deaths,i=e.data.timeline.recovered):u||(s=e.data.cases,o=e.data.deaths,i=e.data.recovered),console.log(s,o,i),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://disease.sh/v3/covid-19/historical/".concat(""===r?"all":r,"?lastdays=120"),console.log(t),e.next=4,fetch(t).then((function(e){e.json()})).then((function(e){return c(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(p.jsx)(x.a,{data:{datasets:[{label:"deaths",backgroundColor:"rgba(255,0,0, 0.2)",borderColor:"#ff0000",data:g(o),fill:!0},{label:"recovered",backgroundColor:"rgba(0,255,0, 0.2)",borderColor:"#00ff00",data:g(i),fill:!0},{label:"cases",backgroundColor:"rgba(0,0,255, 0.2)",borderColor:"#0000ff",data:g(s),fill:!0}]}})},m=n(213),y=n(214),C=n(217),k=n(218),S=n(215),N=n(216),w=(n(79),n(6)),T=n.n(w),I=n(86),z=n(87),E=n(13),D=T.a.icon({iconUrl:I.a,shadowUrl:z.a});function B(e){var t=e.coords,n=Object(m.a)();return n.setView([t.lat,t.lng],n.getZoom()),null}T.a.Marker.prototype.options.icon=D;var F=function(e){var t=e.countries,n=e.center,c=e.zoom,a=e.data,r="";return"countryInfo"in a&&(r=a.countryInfo.flag),Object(p.jsx)("div",{className:"map",children:Object(p.jsxs)(y.a,{center:n,zoom:c,children:[Object(p.jsx)(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(p.jsx)(B,{coords:n}),t.map((function(e){return Object(p.jsx)(k.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:"red",fillColor:"{255,0,0}",fillOpacity:.5,radius:e.active/2})})),Object(p.jsx)(S.a,{position:n,children:Object(p.jsxs)(N.a,{className:"popup",children:[r?Object(p.jsx)("img",{src:r,alt:"flag",width:"100px",height:"70px"}):"",Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"phead",children:"Country"})," : ",r?a.country:"Worldwide",Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"phead",children:"Active Cases"})," : ",Object(p.jsx)(E.a,{value:a.active,thousandSeparator:!0,disabled:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"phead",children:"Deaths"})," : ",Object(p.jsx)(E.a,{value:a.deaths,thousandSeparator:!0,disabled:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"phead",children:"Recovered Cases"})," : ",Object(p.jsx)(E.a,{value:a.recovered,thousandSeparator:!0,disabled:!0})]})})]})})};var G=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries?sort=todayDeaths",{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(p.jsx)("div",{children:n.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[Object(p.jsx)("img",{src:e.countryInfo.flag,style:{height:"10px",width:"14px"},alt:"flags"}),"  ",e.country]}),Object(p.jsx)("td",{children:e.todayDeaths})]},e.countryInfo.iso2)}))})};var M=function(e){return Object(p.jsxs)("div",{className:"cardStyling ",children:[Object(p.jsx)("h2",{style:{textAlign:"center"},children:e.heading}),Object(p.jsx)("h2",{children:e.count})]})};var R,A=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://corona.lmao.ninja/v2/countries?yesterday=0&sort=todayCases",{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(p.jsx)("table",{children:n.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[Object(p.jsx)("img",{src:e.countryInfo.flag,style:{height:"10px",width:"14px"},alt:"flag"}),"  ",e.country]}),Object(p.jsx)("td",{children:e.todayCases})]},e.countryInfo.iso2)}))})},J=(n(206),n(38)),L=n(88),P=n(56),U=h.c.div(R||(R=Object(u.a)(["\nbackground : fixed;"])));var W=function(){var e=Object(a.useState)("dark"),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)({lat:.80746,lng:-40.4796}),x=Object(j.a)(u,2),g=x[0],m=x[1],y=Object(a.useState)(3),C=Object(j.a)(y,2),k=C[0],S=C[1],N=Object(a.useState)([]),w=Object(j.a)(N,2),T=w[0],I=w[1],z=Object(a.useState)(""),D=Object(j.a)(z,2),B=D[0],R=D[1],W=Object(a.useState)(""),V=Object(j.a)(W,2),Z=V[0],q=V[1],H=Object(a.useState)({}),K=Object(j.a)(H,2),Q=K[0],X=K[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){i(e)})),$("")}),[]),Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){return I(e)}))}),[]);var Y=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,q(n),c="https://disease.sh/v3/covid-19/countries/"+n,e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){m({lat:e.countryInfo.lat,lng:e.countryInfo.long}),S(4),i(e),R(e.country)}));case 5:$(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://disease.sh/v3/covid-19/historical/".concat(""==t?"all":t),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){X(e),console.log(Q)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(h.a,{theme:"light"===n?f:b,children:[Object(p.jsx)(O,{}),Object(p.jsxs)(U,{children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{className:"dbhead",children:"Covid-19 World Tracker"}),Object(p.jsxs)("label",{class:"switch",style:{marginRight:"20px"},children:[Object(p.jsx)("input",{type:"checkbox"}),Object(p.jsx)("span",{class:"slider round",onClick:function(){c("light"===n?"dark":"light")}})]})]}),Object(p.jsxs)("div",{className:"parentDiv",children:[Object(p.jsxs)("div",{className:"centerColumn",children:[Object(p.jsxs)("div",{className:"cardClass",children:[Object(p.jsx)(M,{heading:"Total Cases",count:Object(p.jsx)(E.a,{className:"cardfigures",thousandSeparator:!0,value:o.cases,disabled:!0})}),Object(p.jsx)(M,{heading:"Total Recovered",count:Object(p.jsx)(E.a,{className:"cardfigures",thousandSeparator:!0,value:o.recovered,disabled:!0})}),Object(p.jsx)(M,{heading:"Total Deaths",count:Object(p.jsx)(E.a,{className:"cardfigures",thousandSeparator:!0,value:o.deaths,disabled:!0})})]}),Object(p.jsxs)("div",{className:"centerClass",children:[Object(p.jsx)("div",{children:Object(p.jsxs)("select",{value:B.country,onChange:Y,children:[Object(p.jsx)("option",{children:" Select Country"}),T.map((function(e){return Object(p.jsx)("option",{children:e.country},e.countryInfo.iso)}))]})}),Object(p.jsx)(F,{countries:T,center:g,zoom:k,data:o})]})]}),Object(p.jsxs)("div",{className:"rightpane",children:[Object(p.jsx)("div",{children:Object(p.jsx)(v,{className:"graph",data:Q,country:Z})}),Object(p.jsxs)("div",{className:"tablediv",children:[Object(p.jsxs)("div",{className:"caseTableContainer",children:[Object(p.jsx)("h1",{children:"Today Cases"}),Object(p.jsx)("div",{className:"casesTable",children:Object(p.jsx)(A,{})})]}),Object(p.jsxs)("div",{className:"caseTableContainer",children:[Object(p.jsx)("h1",{children:"Today Deaths"}),Object(p.jsx)("div",{className:"casesTable",children:Object(p.jsx)(G,{})})]})]})]})]}),Object(p.jsxs)("footer",{children:[Object(p.jsx)("h2",{style:{fontSize:"25px"},children:"Creator :TG |@2021"}),Object(p.jsx)("small",{style:{fontSize:"15px",margin:"0px",padding:"0px"},children:"*****The data has been taken from the diseases.sh api*****"}),Object(p.jsxs)("ul",{className:"contact",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://github.com/TanyaGupta1901",children:Object(p.jsx)(J.a,{color:"light"==n?"cyan":"#012C48",icon:P.a})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"https://www.linkedin.com/in/tanya-gupta-b40621197/",children:Object(p.jsx)(J.a,{color:"light"==n?"cyan":"#012C48",icon:P.b})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"mailto:tgcommercial@gmail.com",children:Object(p.jsx)(J.a,{color:"light"==n?"cyan":"#012C48",icon:L.a})})})]})]})]})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root")),V()},95:function(e,t,n){}},[[211,1,2]]]);
//# sourceMappingURL=main.1fb023b6.chunk.js.map