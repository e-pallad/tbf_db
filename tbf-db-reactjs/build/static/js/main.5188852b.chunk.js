(this["webpackJsonptbf-db-reactjs"]=this["webpackJsonptbf-db-reactjs"]||[]).push([[1],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(27),a(10)),i=a(5),o=a(1),m=a(2),u=a(4),d=a(3),b=(a(28),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:n.props.items},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card p-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Importieren"),e.map((function(e){return r.a.createElement(s.b,{key:e,to:{pathname:"/import",state:{table:e}},className:"btn btn-success btn-block my-2"},"RI-TBF_SEF_Apparateliste"===e||"RI-TBF_SEF_Armaturenliste"===e||"RI-TBF_SEF_Elektroangaben"===e?e.replace("TBF_SEF_",""):e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))})))))}}]),a}(n.Component)),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:n.props.items},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card p-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Bearbeiten"),e.map((function(e){return r.a.createElement(s.b,{key:e,to:{pathname:"/eingabe",state:{table:e}},className:"btn btn-warning btn-block my-2"},"RI-TBF_SEF_Apparateliste"===e||"RI-TBF_SEF_Armaturenliste"===e||"RI-TBF_SEF_Elektroangaben"===e?e.replace("TBF_SEF_",""):e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))})))))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["SEF_E-Verbraucherliste","SEF_Messstellenliste","SEF_Amaturenlsite","SEF_Ausr\xfcstungsliste"]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card p-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Erzeugen"),e.map((function(e){return r.a.createElement(s.b,{key:e,to:{pathname:"/create",state:{table:e}},className:"btn btn-secondary btn-block my-2"},e.replace("_"," "))})))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:n.props.items},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card p-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Auswerten"),e.map((function(e){return r.a.createElement(s.b,{key:e,to:{pathname:"/import",state:{table:e}},className:"btn btn-primary btn-block my-2"},e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))})))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).exportTable=function(){fetch("https://tbf-db-backend.ep-webdesign.de/exportTables.php?table="+n.state.table).then((function(e){e.blob().then((function(e){var t=window.URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download=n.state.table+"_"+Date.now()+".csv",a.click()}))}))},n.state={table:n.props.table},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.table;return r.a.createElement("button",{onClick:this.exportTable,className:"btn btn-danger btn-block my-2"},"RI-TBF_SEF_Apparateliste"===e||"RI-TBF_SEF_Armaturenliste"===e||"RI-TBF_SEF_Elektroangaben"===e?e.replace("TBF_SEF_",""):e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:n.props.items},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card p-0"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Export"),e.map((function(e){return r.a.createElement(f,{key:e,table:e})})))))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tbf-db-backend.ep-webdesign.de/fetchTables.php").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.tables})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"d-flex justify-content-center flex-column align-items-stretch w-75"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement(b,{items:n}),r.a.createElement(p,{setRedirect:this.renderTable,items:n}),r.a.createElement(h,{setRedirect:this.renderTable,items:n}),r.a.createElement(E,{items:n}),r.a.createElement(v,{items:n}))):r.a.createElement("div",null,"L\xe4dt...")}}]),a}(n.Component),O=a(13);a(33);function y(e,t){var a=this,n=new FormData;n.append("table",e),n.append("file",t),fetch("https://tbf-db-backend.ep-webdesign.de/importTable.php",{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){a.setState({data:e,file:null}),document.querySelector(".upload").classList.add("done"),document.querySelector(".upload").classList.remove("drop","drag"),setTimeout((function(){return document.querySelector(".upload").classList.remove("done")}),3e3),console.log(a.state.file)}),(function(e){a.setState({data:e,file:null})}))}var _=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.table,file:null,data:null},y=y.bind(Object(O.a)(n)),document.getElementById("root").classList.remove("container-fluid"),n}return Object(m.a)(a,[{key:"componentWillUnmount",value:function(){document.getElementById("root").classList.add("container-fluid")}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".upload");t.addEventListener("dragover",(function(){this.classList.add("drag"),this.classList.remove("drop","done")})),t.addEventListener("dragleave",(function(){})),this.setFile=function(a){e.setState({file:a.target.files[0]}),e.setState({data:null}),e.state.file&&(t.classList.remove("drag"),t.classList.add("drop"),y(e.state.table,e.state.file))},t.addEventListener("drop",this.setFile.bind(this),!1),t.addEventListener("change",this.setFile.bind(this),!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",title:"",accept:".csv",className:"drop-here"}),r.a.createElement("div",{className:"text text-drop text-center"},".csv Datei ",r.a.createElement("br",null),"hier ablegen ",r.a.createElement("br",null),"oder klicken ",r.a.createElement("br",null),"zum importieren"),r.a.createElement("div",{className:"text text-upload"},"uploading"),r.a.createElement("svg",{className:"progress-wrapper",width:"300",height:"300"},r.a.createElement("circle",{className:"progress",r:"115",cx:"150",cy:"150"})),r.a.createElement("svg",{className:"check-wrapper",width:"130",height:"130"},r.a.createElement("polyline",{className:"check",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})),r.a.createElement("div",{className:"shadow"}))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.table;return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("h5",{className:"card-title text-center"},"Import f\xfcr ",r.a.createElement("u",null,e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))),r.a.createElement(_,{table:e})))}}]),a}(n.Component),F=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,51))})),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table,tableData:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tbf-db-backend.ep-webdesign.de/renderTables.php?table="+this.state.table).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,tableData:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.tableData,a=e.isLoaded,c=e.error,l=e.table;return c?r.a.createElement("div",null,"Error: ",c.message):a?r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"L\xe4dt...")},r.a.createElement(F,{tableData:t,table:l})):r.a.createElement("div",null,"L\xe4dt...")}}]),a}(n.Component),g=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,52))})),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table,tableData:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tbf-db-backend.ep-webdesign.de/createTables.php?table="+this.state.table).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,tableData:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.tableData,a=e.isLoaded,c=e.error,l=e.table;return c?r.a.createElement("div",null,"Error: ",c.message):a?r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"L\xe4dt...")},r.a.createElement(g,{tableData:t,table:l})):r.a.createElement("div",null,"L\xe4dt...")}}]),a}(n.Component),S=r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(i.a,{path:"/import",component:k}),r.a.createElement(i.a,{path:"/eingabe",component:L}),r.a.createElement(i.a,{path:"/erzeugen",component:N}),r.a.createElement(i.a,{path:"/export",component:f}));l.a.render(S,document.getElementById("root"))}},[[22,2,3]]]);
//# sourceMappingURL=main.5188852b.chunk.js.map