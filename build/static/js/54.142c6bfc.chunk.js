(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1491:function(n,t,e){"use strict";var a=e(1266);t.a=a.a},2186:function(n,t,e){},2658:function(n,t,e){"use strict";e.r(t);var a=e(20),r=e(21),i=e(1141),o=e(29),c=e(1142),l=e(1),s=e.n(l),d=e(1143),p=e(82),m=e(2665),h=e(1136),f=e(1153),u=e(22),x=e(184),g=e(127),b=e(372),j=e(189),v=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contact,e=n.deleteContact,a="";return t.firstName&&(a="".concat(t.firstName," ")),t.lastName&&(a="".concat(a).concat(t.lastName)),a||(a="No Name"),s.a.createElement(b.a,{title:"Sure to delete ".concat(a,"?"),okText:"DELETE",cancelText:"No",onConfirm:function(){Object(j.a)("error","".concat(a," Deleted"),""),e(t.id)}},s.a.createElement(f.b,{icon:"close",type:"default",className:"isoDeleteBtn"}))}}]),t}(l.Component),O=e(0),y=e(33),C=e(27),w=e(5),N=e(14),E=e(49);function k(){var n=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .isoNoResultMsg {\n    padding: 15px 20px;\n    text-align: center;\n    color: ",";\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  .isoSearchBar {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 69px;\n      padding: 0 20px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid ",";\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ",";\n      ",";\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n\n      &:hover,\n      &:focus {\n        border-color: "," !important;\n      }\n\n      &::-webkit-input-placeholder {\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: 10px;\n    right: auto;\n    color: ",";\n  }\n\n  .isoContactList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .contactListScrollbar {\n      height: calc(100vh - 200px);\n\n      @media only screen and (max-width: 767px) {\n        max-height: 60vh;\n      }\n    }\n\n    .isoSingleContact {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 15px 20px;\n      padding-right: ",";\n      padding-left: ",";\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n      cursor: pointer;\n\n      &.active {\n        background-color: ",";\n      }\n\n      &:last-child {\n        border-bottom: 0;\n      }\n\n      .isoAvatar {\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: ",";\n        margin-left: ",";\n        flex-shrink: 0;\n        overflow: hidden;\n        ",";\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoContactName {\n        h3 {\n          font-size: 15px;\n        }\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin-right: ",";\n        margin-left: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 20px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 0;\n    }\n  }\n"]);return k=function(){return n},n}var I=C.c.div(k(),Object(w.palette)("secondary",2),Object(w.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"inherit"},Object(w.palette)("border",0),Object(N.b)("none"),Object(N.a)(),Object(N.c)(),Object(w.palette)("border",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"20px":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"20px"},Object(w.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(w.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},Object(N.a)("50%"),function(n){return"rtl"===n["data-rtl"]?"inherit":"20px"},function(n){return"rtl"===n["data-rtl"]?"20px":"inherit"},Object(w.palette)("secondary",2),Object(w.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"5px"},function(n){return"rtl"===n["data-rtl"]?"5px":"inherit"},Object(w.palette)("grayscale",0),Object(N.c)(),Object(w.palette)("primary",0),Object(w.palette)("grayscale",0)),z=Object(E.a)(I),B=e(370);var L=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this,n))).singleContact=e.singleContact.bind(Object(u.a)(Object(u.a)(e))),e.onChange=e.onChange.bind(Object(u.a)(Object(u.a)(e))),e.state={search:""},e}return Object(c.a)(t,n),Object(r.a)(t,[{key:"singleContact",value:function(n){var t=this.props,e=t.seectedId,a=t.deleteContact,r=t.changeContact,i=e===n.id?"active":"";return s.a.createElement("div",{key:n.id,className:"".concat(i," isoSingleContact"),onClick:function(){return r(n.id)}},s.a.createElement("div",{className:"isoAvatar"},n.avatar?s.a.createElement("img",{alt:"#",src:n.avatar}):""),s.a.createElement("div",{className:"isoContactName"},s.a.createElement("h3",null,n.name?n.name:"No Name")),s.a.createElement(v,{deleteContact:a,contact:n}))}},{key:"onChange",value:function(n){this.setState({search:n.target.value})}},{key:"render",value:function(){var n=this,t=this.state.search,e=function(n,t){return(t=t.toUpperCase())?n.filter(function(n){return n.name.toUpperCase().includes(t)}):n}(this.props.contacts,t);return s.a.createElement(z,{className:"isoContactListWrapper"},s.a.createElement(g.b,{placeholder:this.context.intl.formatMessage({id:"contactlist.searchContacts"}),value:t,onChange:this.onChange,className:"isoSearchBar"}),e&&e.length>0?s.a.createElement("div",{className:"isoContactList"},s.a.createElement(B.a,{className:"contactListScrollbar"},e.map(function(t){return n.singleContact(t)}))):s.a.createElement("span",{className:"isoNoResultMsg"},s.a.createElement(x.a,{id:"Component.contacts.noOption"})))}}]),t}(l.Component);function A(){var n=Object(y.a)(["\n  width: 100%;\n  height: calc(100% - 145px);\n  padding: 0 35px;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 20px;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    flex-direction: column;\n  }\n\n  .isoContactCardHead {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 120px;\n    flex-shrink: 0;\n    margin-right: ",";\n    margin-left: ",";\n    flex-shrink: 0;\n\n    @media only screen and (max-width: 600px) {\n      margin-bottom: 20px;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      margin-bottom: 20px;\n    }\n\n    .isoPersonImage {\n      width: 120px;\n      height: 120px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10px;\n      overflow: hidden;\n      ",";\n\n      .avatar-uploader {\n        width: 100%;\n        height: 100%;\n      }\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .isoPersonName {\n      font-size: 15px;\n      font-weight: 500;\n      color: ",";\n      line-height: 1.5;\n      margin: 0;\n    }\n  }\n\n  .isoContactInfoWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      padding: 20px 0;\n    }\n\n    .isoContactCardInfos {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      align-items: baseline;\n      flex-direction: row;\n      margin-bottom: 15px;\n\n      @media only screen and (max-width: 430px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n\n      .isoInfoLabel {\n        font-size: 14px;\n        font-weight: 500;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        margin-right: ",";\n        margin-left: ",";\n        text-align: ",";\n        min-width: 80px;\n        position: relative;\n\n        @media only screen and (max-width: 430px) {\n          margin-bottom: 5px;\n          margin-right: ",";\n          margin-left: ",";\n          padding-right: ",";\n          padding-left: ",";\n          min-width: 0;\n        }\n\n        &::after {\n          content: ':';\n          position: absolute;\n          right: ",";\n          left: ",";\n        }\n      }\n\n      .isoInfoDetails {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        text-align: ",";\n      }\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: inherit;\n        height: 36px;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n\n      textarea {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 24px;\n        height: 210px;\n        padding: 10px 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n    }\n  }\n"]);return A=function(){return n},n}L.contextTypes={intl:O.PropTypes.object.isRequired};var S=C.c.div(A(),function(n){return"rtl"===n["data-rtl"]?"inherit":"50px"},function(n){return"rtl"===n["data-rtl"]?"50px":"inherit"},Object(N.a)("5px"),Object(w.palette)("text",0),Object(w.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(w.palette)("text",2),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(w.palette)("text",2),Object(w.palette)("border",0),Object(N.b)("none"),Object(N.a)("3px"),Object(N.c)(),Object(w.palette)("primary",0),Object(N.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(w.palette)("primary",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("text",2),Object(w.palette)("border",0),Object(N.b)("none"),Object(N.a)("3px"),Object(N.c)(),Object(w.palette)("primary",0),Object(N.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(w.palette)("primary",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0),Object(w.palette)("grayscale",0)),P=Object(E.a)(S),D=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contact,e=n.otherAttributes,a=t.name?t.name:"No Name",r=[];return e.forEach(function(n){var e=t[n.value];e&&r.push(s.a.createElement("div",{className:"isoContactCardInfos",key:n.value},s.a.createElement("p",{className:"isoInfoLabel"},"".concat(n.title)),s.a.createElement("p",{className:"isoInfoDetails"},e)))}),s.a.createElement(P,{className:"isoContactCard"},s.a.createElement("div",{className:"isoContactCardHead"},s.a.createElement("div",{className:"isoPersonImage"},t.avatar?s.a.createElement("img",{alt:"#",src:t.avatar}):""),s.a.createElement("h1",{className:"isoPersonName"},a)),s.a.createElement("div",{className:"isoContactInfoWrapper"},r))}}]),t}(l.Component),T=e(1150),W=e(1491);e(2186);function M(n){return"image/jpeg"===n.type?n.size/1024/1024<2?(Object(j.a)("success","Image uploaded successfully!",""),!0):(Object(j.a)("error","Image must smaller than 2MB!",""),!1):(Object(j.a)("error","You can only upload JPG file!",""),!1)}var U=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.contact,a=t.otherAttributes,r=e.name?e.name:"No Name",i=[];return[{value:"firstName",title:"First Name"},{value:"lastName",title:"Last Name"}].concat(Object(T.a)(a)).forEach(function(t){var a=e[t.value],r=function(a){e[t.value]=a.target.value;var r="";e.firstName&&(r="".concat(e.firstName," ")),e.lastName&&(r="".concat(r).concat(e.lastName)),e.name=r,n.props.editContact(e)};"note"===t.value?i.push(s.a.createElement("div",{className:"isoContactCardInfos",key:t.value},s.a.createElement("p",{className:"isoInfoLabel"},"".concat(t.title)),s.a.createElement(g.c,{placeholder:"".concat(t.title),value:a,type:"textarea",rows:5,onChange:function(n){return r(n)}}))):i.push(s.a.createElement("div",{className:"isoContactCardInfos",key:t.value},s.a.createElement("p",{className:"isoInfoLabel"},"".concat(t.title)),s.a.createElement(g.d,{placeholder:"".concat(t.title),value:a,onChange:function(n){return r(n)}})))}),s.a.createElement(P,{className:"isoContactCard"},s.a.createElement("div",{className:"isoContactCardHead"},s.a.createElement("div",{className:"isoPersonImage"},s.a.createElement(W.a,{className:"avatar-uploader",name:"avatar",showUploadList:!1,beforeUpload:M,action:""},e.avatar?s.a.createElement("img",{src:e.avatar,alt:"",className:"avatar"}):"",s.a.createElement(h.a,{type:"plus",className:"avatar-uploader-trigger"}))),s.a.createElement("h1",{className:"isoPersonName"},r)),s.a.createElement("div",{className:"isoContactInfoWrapper"},i))}}]),t}(l.Component),H=e(397);function J(){var n=Object(y.a)(["\n  padding: 50px 35px;\n  display: flex;\n  "," @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 30px;\n  }\n\n  .isoContactListBar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    background: #ffffff;\n    border: 1px solid ",";\n    width: 320px;\n    overflow: hidden;\n    overflow-y: auto;\n\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      margin-bottom: 20px;\n      min-width: 0 !important;\n      max-width: 100% !important;\n      flex: 0 !important;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 270px !important;\n      flex: 0 0 270px !important;\n    }\n  }\n\n  .isoContactBoxWrapper {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    background-color: #ffffff;\n    border: 1px solid ",";\n    border-left: ",";\n    border-right: ",";\n    position: relative;\n\n    .isoContactBox {\n      width: 100%;\n      height: 100%;\n    }\n\n    .contactBoxScrollbar {\n      height: calc(100vh - 225px);\n    }\n\n    .isoContactControl {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 30px;\n      background-color: #ffffff;\n\n      @media only screen and (max-width: 767px) {\n        padding: 30px 20px;\n      }\n\n      button:not(.isoAddContactBtn) {\n        font-size: 16px;\n        color: ",";\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ",";\n        margin-left: ",";\n        margin-right: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        i {\n          width: 100%;\n        }\n\n        span {\n          display: none;\n        }\n\n        &:first-child {\n          margin-left: ",";\n          margin-right: ",";\n        }\n\n        &:hover {\n          color: ",";\n          background-color: ",";\n        }\n      }\n\n      .isoAddContactBtn {\n        background-color: ",";\n        border: 0;\n        height: 30px;\n        padding: 0 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n  }\n"]);return J=function(){return n},n}var R=C.c.div(J(),"",Object(w.palette)("border",0),Object(w.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(w.palette)("secondary",0),Object(w.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"-1px"},function(n){return"rtl"===n["data-rtl"]?"-1px":"inherit"},Object(N.a)(),Object(N.c)(),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(w.palette)("primary",0),Object(w.palette)("grayscale",7),Object(w.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(N.a)("3px"),Object(N.c)(),Object(w.palette)("primary",1)),V=Object(E.a)(R),q=p.a.changeContact,F=p.a.addContact,G=p.a.editContact,Y=p.a.deleteContact,K=p.a.viewChange,Q=m.a.Content,X=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contacts,e=n.seectedId,a=n.editView,r=n.changeContact,i=n.addContact,o=n.editContact,c=n.deleteContact,l=n.viewChange,d=e?t.filter(function(n){return n.id===e})[0]:null;return s.a.createElement(V,{className:"isomorphicContacts",style:{background:"none"}},s.a.createElement("div",{className:"isoContactListBar"},s.a.createElement(L,{contacts:t,seectedId:e,changeContact:r,deleteContact:c})),s.a.createElement(m.a,{className:"isoContactBoxWrapper"},d?s.a.createElement(Q,{className:"isoContactBox"},s.a.createElement("div",{className:"isoContactControl"},s.a.createElement(f.b,{type:"default",onClick:function(){return l(!a)}},a?s.a.createElement(h.a,{type:"check"}):s.a.createElement(h.a,{type:"edit"})," "),s.a.createElement(v,{deleteContact:c,contact:d}),s.a.createElement(f.b,{type:"primary",onClick:i,className:"isoAddContactBtn"},s.a.createElement(x.a,{id:"contactlist.addNewContact"}))),s.a.createElement(B.a,{className:"contactBoxScrollbar"},a?s.a.createElement(U,{contact:d,editContact:o,otherAttributes:H.b}):s.a.createElement(D,{contact:d,otherAttributes:H.b}))):s.a.createElement("div",{className:"isoContactControl"},s.a.createElement(f.b,{type:"primary",onClick:i,className:"isoAddContactBtn"},s.a.createElement(x.a,{id:"contactlist.addNewContact"})))))}}]),t}(l.Component);t.default=Object(d.c)(function(n){var t=n.Contacts;return{contacts:t.contacts,seectedId:t.seectedId,editView:t.editView}},{changeContact:q,addContact:F,editContact:G,deleteContact:Y,viewChange:K})(X)}}]);
//# sourceMappingURL=54.142c6bfc.chunk.js.map