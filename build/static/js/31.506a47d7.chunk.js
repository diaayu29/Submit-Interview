(window.webpackJsonp=window.webpackJsonp||[]).push([[31,129],{1189:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(33);function l(){var e=Object(o.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return e},e}var i=t(27).c.div(l());n.default=function(e){return r.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1233:function(e){e.exports=[{key:"HIJ12345"},{key:"HIJ12346"},{key:"HIJ12347"}]},1931:function(e,n,t){},2663:function(e,n,t){"use strict";t.r(n);var a=t(20),r=t(21),o=t(1141),l=t(29),i=t(1142),c=t(1),u=t.n(c),s=t(1189),m=t(1233),p=t(18),d=t.n(p),h=(t(1931),t(97)),f=t.n(h),y=t(1196);function g(e){return JSON.stringify(e&&e.format(b))}var b="h:mm a";f()().hour(0).minute(0);var v=function(){return!1===E?console.log("gagal"):u.a.createElement(y.a,{showSecond:!1,className:"xxx",onChange:function(){for(var e=0;e<m.length;e++)fetch("https://bv-online-assessment.herokuapp.com/api/bookings/"+m[0].key+"/update-eta",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({arrival_time:{onChange:g}})}).then(function(e){return e.json()}).then(function(e){return console.log(e)})},format:b,use12Hours:!0,inputReadOnly:!0})};var k=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{onClick:function(e){e.target.innerText="(Thank you! Your host has been informed about your arrival)"}},"(Please set yor arrival time)"))};var E=function(){for(var e=document.getElementsByClassName("SearchKey")[0],n=function(n){e.value!==m[n].key?(e.nextSibling.style.color="red",d.a.render(u.a.createElement("div",null,u.a.createElement("p",null,"Should be combination of numbers & alphabets")),document.getElementById("printData"))):e.value===m[n].key&&fetch("https://bv-online-assessment.herokuapp.com/api/bookings").then(function(e){return e.json()}).then(function(t){e.nextSibling.style.color="black",d.a.render(u.a.createElement("div",null,u.a.createElement("img",{src:t[n].profile_picture}),u.a.createElement("p",null,"Hi, ",t[n].guest_name),u.a.createElement("p",null,"Thank you for booking with Bukit Vista. Here are the details of yor current booking :"),u.a.createElement("p",null,"Property Name : ",t[n].property_name),u.a.createElement("span",null,"Check in date : ",t[n].check_in_date),u.a.createElement("span",null,"Check out date : ",t[n].check_out_date),u.a.createElement("p",{id:"ArrivalTime"},"Arrival time : ",u.a.createElement(v,null)," ",u.a.createElement(k,null))),document.getElementById("printData"))})},t=0;t<m.length;t++)n(t)};t.d(n,"default",function(){return x});var x=function(e){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(s.default,null,u.a.createElement("div",{className:"Coba",id:"Coba",style:{display:"block",margin:"auto"}},u.a.createElement("h4",null,"Your Booking Code"),u.a.createElement("input",{placeholder:"KJSH87HGDK",className:"SearchKey",onInput:E}),u.a.createElement("div",{id:"printData"})))}}]),n}(c.Component)}}]);
//# sourceMappingURL=31.506a47d7.chunk.js.map