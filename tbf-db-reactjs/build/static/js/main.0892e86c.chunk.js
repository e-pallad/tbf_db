(this["webpackJsonptbf-db-reactjs"]=this["webpackJsonptbf-db-reactjs"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),c=(a(28),a(10)),i=a(5),o=a(1),m=a(2),u=a(4),b=a(3);a(29);function d(e){return e.tables.map((function(e){return 1===e.importieren?l.a.createElement(c.b,{key:e.tablename,to:{pathname:"/import",state:{table:e.tablename}},className:"btn btn-success btn-block my-2"},e.alias):null}))}var p=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tables:n.props.tables},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.tables;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Importieren"),l.a.createElement(d,{tables:e}))))}}]),a}(n.Component);function h(e){return e.tables.map((function(e){return 1===e.bearbeiten?l.a.createElement(c.b,{key:e.tablename,to:{pathname:"/eingabe",state:{table:e.tablename}},className:"btn btn-warning btn-block my-2"},e.alias):null}))}var f=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tables:n.props.tables},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.tables;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Bearbeiten"),l.a.createElement(h,{tables:e}))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).exportTable=function(){var e="";"SEF_E-Verbraucherliste"===n.state.table&&(e="https://tbf-db-backend.ep-projekte.de/renderEVerbraucherliste.php"),"SEF_Messstellenliste"===n.state.table&&(e="https://tbf-db-backend.ep-projekte.de/renderMessstellenliste.php"),"SEF_Armaturenliste"===n.state.table&&(e="https://tbf-db-backend.ep-projekte.de/renderArmaturenliste.php"),"SEF_Ausr\xfcstungsliste"===n.state.table&&(e="https://tbf-db-backend.ep-projekte.de/renderAusruestungsliste.php"),fetch(e).then((function(e){e.blob().then((function(e){var t=window.URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download=n.state.table+"_"+Date.now()+".pdf",a.click()}))}))},n.state={table:n.props.table,alias:n.props.alias},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.alias;return l.a.createElement("button",{onClick:this.exportTable,className:"btn btn-secondary btn-block my-2"},e)}}]),a}(n.Component);function v(e){return e.tables.map((function(e){return 1===e.erzeugen?l.a.createElement(E,{key:e.tablename,alias:e.alias,table:e.tablename}):null}))}var j=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tables:n.props.tables},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.tables;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Erzeugen"),l.a.createElement(v,{tables:e}))))}}]),a}(n.Component);function N(e){return e.tables.map((function(e){return 1===e.auswerten?l.a.createElement(c.b,{key:e.tablename,to:{pathname:"/import",state:{table:e.tablename}},className:"btn btn-primary btn-block my-2"},e.alias):null}))}var k=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tables:n.props.tables},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.tables;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Auswerten"),l.a.createElement(N,{tables:e}))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).exportTable=function(){fetch("https://tbf-db-backend.ep-projekte.de/exportTables.php?table="+n.state.table).then((function(e){e.blob().then((function(e){var t=window.URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download="_Neubau_"+n.state.table+"_Datenbank.xlsx",a.click()}))}))},n.state={table:n.props.table,alias:n.props.alias},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.alias;return l.a.createElement("button",{onClick:this.exportTable,className:"btn btn-danger btn-block my-2"},e)}}]),a}(n.Component);function O(e){return e.tables.map((function(e){return 1===e.exportieren?l.a.createElement(y,{key:e.tablename,table:e.tablename,alias:e.alias}):null}))}var g=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tables:n.props.tables},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.tables;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Export"),l.a.createElement(O,{tables:e}))))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tables:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tbf-db-backend.ep-projekte.de/fetchTables.php").then((function(e){return e.json()})).then((function(e){var t=[];return e.map((function(e){t.push({tablename:e[0],alias:e[1],importieren:parseInt(e[2],10),bearbeiten:parseInt(e[3],10),auswerten:parseInt(e[4],10),exportieren:parseInt(e[5],10),erzeugen:parseInt(e[6],10)})})),t})).then((function(t){e.setState({tables:t})}))}},{key:"render",value:function(){return this.state.tables.length<=0?l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("strong",null,"L\xe4dt..."),l.a.createElement("div",{className:"spinner-border ms-auto",role:"status","aria-hidden":"true"})))):l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("div",{className:"row"},l.a.createElement(p,{tables:this.state.tables}),l.a.createElement(f,{setRedirect:this.renderTable,tables:this.state.tables}),l.a.createElement(k,{tables:this.state.tables}),l.a.createElement(g,{tables:this.state.tables}),l.a.createElement(j,{tables:this.state.tables})))}}]),a}(n.Component),L=a(13),w=a(21),S=(a(34),a(35),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.table,file:null,data:null},n.uploadFile=n.uploadFile.bind(Object(L.a)(n)),document.getElementById("root").classList.remove("container-fluid"),n}return Object(m.a)(a,[{key:"uploadFile",value:function(e,t){var a=this,n=new FormData;n.append("table",e),n.append("file",t),fetch("https://tbf-db-backend.ep-projekte.de/importTable.php",{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){a.setState({data:e,file:null}),document.querySelector(".upload").classList.add("done"),document.querySelector(".upload").classList.remove("drop","drag"),setTimeout((function(){return document.querySelector(".upload").classList.remove("done")}),1e3)}),(function(e){a.setState({data:e,file:null})}))}},{key:"componentWillUnmount",value:function(){document.getElementById("root").classList.add("container-fluid"),this.setState({data:null})}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".upload");t.addEventListener("dragover",(function(){this.classList.add("drag"),this.classList.remove("drop","done")})),t.addEventListener("dragleave",(function(){})),this.submit=function(a){e.setState({file:a.target.files[0]}),e.setState({data:null});var n=e.state.file.name,r=e.state.table;Object(w.confirmAlert)({customUI:function(a){var s=a.onClose;return l.a.createElement("div",{className:"custom-ui"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Tabelle importieren")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Soll die Datei: ",l.a.createElement("br",null),l.a.createElement("span",{className:"text-danger"},n)," ",l.a.createElement("br",null),"wirklich in die Tabelle:\xa0",l.a.createElement("span",{className:"text-danger"},r.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))," importiert werden?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.state.file&&(t.classList.remove("drag"),t.classList.add("drop"),e.uploadFile(e.state.table,e.state.file)),s()}},"Ja"),l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){e.setState({file:null}),s()}},"Nein")))))}})},t.addEventListener("drop",this.submit.bind(this),!1),t.addEventListener("change",this.submit.bind(this),!1)}},{key:"render",value:function(){var e,t=this.state.data;return t&&(e=l.a.createElement("div",{className:"message"},l.a.createElement("p",null,t[0]),l.a.createElement("p",null,t[1]),l.a.createElement("p",null,t[2]),l.a.createElement("p",null,t[3]),l.a.createElement("p",null,t[4])),console.log(e)),l.a.createElement("section",null,l.a.createElement("div",{className:"upload"},l.a.createElement("input",{type:"file",title:"",accept:".xlsx",className:"drop-here"}),l.a.createElement("div",{className:"text text-drop text-center"},".xlsx Datei ",l.a.createElement("br",null),"hier ablegen ",l.a.createElement("br",null),"oder klicken ",l.a.createElement("br",null),"zum importieren"),l.a.createElement("div",{className:"text text-upload"},"uploading"),l.a.createElement("svg",{className:"progress-wrapper",width:"300",height:"300"},l.a.createElement("circle",{className:"progress",r:"115",cx:"150",cy:"150"})),l.a.createElement("svg",{className:"check-wrapper",width:"130",height:"130"},l.a.createElement("polyline",{className:"check",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})),l.a.createElement("div",{className:"shadow"})),e)}}]),a}(n.Component)),C=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.table;return l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("h5",{className:"card-title text-center"},"Import f\xfcr ",l.a.createElement("u",null,e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))),l.a.createElement(S,{table:e})))}}]),a}(n.Component),T=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,54))})),_=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table,tableData:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tbf-db-backend.ep-projekte.de/renderTables.php?table="+this.state.table).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,tableData:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.tableData,a=e.isLoaded,r=e.error,s=e.table;return r?l.a.createElement("div",null,"Error: ",r.message):a?l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"L\xe4dt...")},l.a.createElement(T,{tableData:t,table:s})):l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-border",style:{Width:"3rem",Height:"3rem"},role:"status"},l.a.createElement("span",{className:"sr-only"},"L\xe4dt...")))}}]),a}(n.Component),F=l.a.createElement(c.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:x}),l.a.createElement(i.a,{path:"/import",component:C}),l.a.createElement(i.a,{path:"/eingabe",component:_}),l.a.createElement(i.a,{path:"/erzeugen",component:E}),l.a.createElement(i.a,{path:"/export",component:y}));s.a.render(F,document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0892e86c.chunk.js.map