(this["webpackJsonptbf-db-reactjs"]=this["webpackJsonptbf-db-reactjs"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),c=(a(28),a(10)),i=a(5),o=a(1),m=a(2),u=a(4),d=a(3),b=(a(29),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["RI-TBF_SEF_Allplan_Liste","RI-TBF_SEF_Apparateliste","RI-TBF_SEF_Armaturenliste","RI-TBF_SEF_Elektrokomponentenliste","RI-TBF_SEF_Messstellenliste","RI-TBF_SEF_PlancalNova_Liste","RI-TBF_SEF_Revit_Liste","RI-TBF_SEF_Rohrleitungsliste","RI-TBF_SEF_Stoffstromliste","Masterliste","SEF_E-Verbraucherliste","SEF_Messstellenliste","SEF_Armaturenliste","SEF_Ausr\xfcstungsliste"]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Importieren"),e.map((function(e){return l.a.createElement(c.b,{key:e,to:{pathname:"/import",state:{table:e}},className:"btn btn-success btn-block my-2"},"RI-TBF_SEF_Apparateliste"===e||"RI-TBF_SEF_Armaturenliste"===e||"RI-TBF_SEF_Elektroangaben"===e||"RI-TBF_SEF_Messstellenliste"===e?e.replace("TBF_SEF_",""):e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))})))))}}]),a}(n.Component)),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["RI-TBF_SEF_Allplan_Liste","RI-TBF_SEF_Apparateliste","RI-TBF_SEF_Armaturenliste","RI-TBF_SEF_Elektroangaben","RI-TBF_SEF_Elektrokomponentenliste","RI-TBF_SEF_Messstellenliste","RI-TBF_SEF_PlancalNova_Liste","RI-TBF_SEF_Revit_Liste","RI-TBF_SEF_Rohrleitungsliste","RI-TBF_SEF_Stoffstromliste","Verfahrenstechnikangaben","Masterliste"]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Bearbeiten"),e.map((function(e){return l.a.createElement(c.b,{key:e,to:{pathname:"/eingabe",state:{table:e}},className:"btn btn-warning btn-block my-2"},"RI-TBF_SEF_Apparateliste"===e||"RI-TBF_SEF_Armaturenliste"===e||"RI-TBF_SEF_Elektroangaben"===e||"RI-TBF_SEF_Messstellenliste"===e?e.replace("TBF_SEF_",""):e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))})))))}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).exportTable=function(){var e="";"SEF_E-Verbraucherliste"===n.state.table&&(e="https://tbf-db-backend.ep-webdesign.de/renderEVerbraucherliste.php"),"SEF_Messstellenliste"===n.state.table&&(e="https://tbf-db-backend.ep-webdesign.de/renderMessstellenliste.php"),"SEF_Armaturenliste"===n.state.table&&(e="https://tbf-db-backend.ep-webdesign.de/renderArmaturenliste.php"),"SEF_Ausr\xfcstungsliste"===n.state.table&&(e="https://tbf-db-backend.ep-webdesign.de/renderAusruestungsliste.php"),fetch(e).then((function(e){e.blob().then((function(e){var t=window.URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download=n.state.table+"_"+Date.now()+".pdf",a.click()}))}))},n.state={table:n.props.table},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.table;return l.a.createElement("button",{onClick:this.exportTable,className:"btn btn-secondary btn-block my-2"},e.replace("_"," "))}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["SEF_E-Verbraucherliste","SEF_Messstellenliste","SEF_Armaturenliste","SEF_Ausr\xfcstungsliste"]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Erzeugen"),e.map((function(e){return l.a.createElement(p,{key:e,table:e})})))))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["RI-TBF_SEF_Allplan_Liste","RI-TBF_SEF_Apparateliste","RI-TBF_SEF_Armaturenliste","RI-TBF_SEF_Elektroangaben","RI-TBF_SEF_Elektrokomponentenliste","RI-TBF_SEF_Messstellenliste","RI-TBF_SEF_PlancalNova_Liste","RI-TBF_SEF_Revit_Liste","RI-TBF_SEF_Rohrleitungsliste","RI-TBF_SEF_Stoffstromliste"]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Auswerten"),e.map((function(e){return l.a.createElement(c.b,{key:e,to:{pathname:"/import",state:{table:e}},className:"btn btn-primary btn-block my-2"},e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))})))))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).exportTable=function(){fetch("https://tbf-db-backend.ep-webdesign.de/exportTables.php?table="+n.state.table).then((function(e){e.blob().then((function(e){var t=window.URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download="_Neubau_"+n.state.table+"_Datenbank.xlsx",a.click()}))}))},n.state={table:n.props.table},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.table;return l.a.createElement("button",{onClick:this.exportTable,className:"btn btn-danger btn-block my-2"},"RI-TBF_SEF_Apparateliste"===e||"RI-TBF_SEF_Armaturenliste"===e||"RI-TBF_SEF_Elektroangaben"===e||"RI-TBF_SEF_Messstellenliste"===e?e.replace("TBF_SEF_",""):e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["RI-TBF_SEF_Allplan_Liste","RI-TBF_SEF_Apparateliste","RI-TBF_SEF_Armaturenliste","RI-TBF_SEF_Elektroangaben","RI-TBF_SEF_Elektrokomponentenliste","RI-TBF_SEF_Messstellenliste","RI-TBF_SEF_PlancalNova_Liste","RI-TBF_SEF_Revit_Liste","RI-TBF_SEF_Rohrleitungsliste","RI-TBF_SEF_Stoffstromliste","Gesamtdatenbank","SEF_E-Verbraucherliste","SEF_Messstellenliste","SEF_Armaturenliste","SEF_Ausr\xfcstungsliste"]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card p-0"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Export"),e.map((function(e){return l.a.createElement(h,{key:e,table:e})})))))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("div",{className:"row"},l.a.createElement(b,null),l.a.createElement(E,{setRedirect:this.renderTable}),l.a.createElement(F,null),l.a.createElement(f,null),l.a.createElement(_,null)))}}]),a}(n.Component),S=a(13),T=a(21);a(34),a(35);function R(e,t){var a=this,n=new FormData;n.append("table",e),n.append("file",t),fetch("https://tbf-db-backend.ep-webdesign.de/importTable.php",{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){a.setState({data:e,file:null}),document.querySelector(".upload").classList.add("done"),document.querySelector(".upload").classList.remove("drop","drag"),setTimeout((function(){return document.querySelector(".upload").classList.remove("done")}),1e3)}),(function(e){a.setState({data:e,file:null})}))}var B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.table,file:null,data:null},R=R.bind(Object(S.a)(n)),document.getElementById("root").classList.remove("container-fluid"),n}return Object(m.a)(a,[{key:"componentWillUnmount",value:function(){document.getElementById("root").classList.add("container-fluid"),this.setState({data:null})}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".upload");t.addEventListener("dragover",(function(){this.classList.add("drag"),this.classList.remove("drop","done")})),t.addEventListener("dragleave",(function(){})),this.submit=function(a){e.setState({file:a.target.files[0]}),e.setState({data:null});var n=e.state.file.name,r=e.state.table;Object(T.confirmAlert)({customUI:function(a){var s=a.onClose;return l.a.createElement("div",{className:"custom-ui"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Tabelle importieren")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Soll die Datei: ",l.a.createElement("br",null),l.a.createElement("span",{className:"text-danger"},n)," ",l.a.createElement("br",null),"wirklich in die Tabelle:\xa0",l.a.createElement("span",{className:"text-danger"},r.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))," importiert werden?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.state.file&&(t.classList.remove("drag"),t.classList.add("drop"),R(e.state.table,e.state.file)),s()}},"Ja"),l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){e.setState({file:null}),s()}},"Nein")))))}})},t.addEventListener("drop",this.submit.bind(this),!1),t.addEventListener("change",this.submit.bind(this),!1)}},{key:"render",value:function(){var e,t=this.state.data;return t&&(e=l.a.createElement("div",{className:"message"},l.a.createElement("p",null,t[0]),l.a.createElement("p",null,t[1]),l.a.createElement("p",null,t[2]),l.a.createElement("p",null,t[3]),l.a.createElement("p",null,t[4])),console.log(e)),l.a.createElement("section",null,l.a.createElement("div",{className:"upload"},l.a.createElement("input",{type:"file",title:"",accept:".xlsx",className:"drop-here"}),l.a.createElement("div",{className:"text text-drop text-center"},".xlsx Datei ",l.a.createElement("br",null),"hier ablegen ",l.a.createElement("br",null),"oder klicken ",l.a.createElement("br",null),"zum importieren"),l.a.createElement("div",{className:"text text-upload"},"uploading"),l.a.createElement("svg",{className:"progress-wrapper",width:"300",height:"300"},l.a.createElement("circle",{className:"progress",r:"115",cx:"150",cy:"150"})),l.a.createElement("svg",{className:"check-wrapper",width:"130",height:"130"},l.a.createElement("polyline",{className:"check",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})),l.a.createElement("div",{className:"shadow"})),e)}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.table;return l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("h5",{className:"card-title text-center"},"Import f\xfcr ",l.a.createElement("u",null,e.replace("RI-TBF_SEF_","").replace("_Liste"," Liste"))),l.a.createElement(B,{table:e})))}}]),a}(n.Component),k=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,54))})),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={table:n.props.location.state.table,tableData:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tbf-db-backend.ep-webdesign.de/renderTables.php?table="+this.state.table).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,tableData:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.tableData,a=e.isLoaded,r=e.error,s=e.table;return r?l.a.createElement("div",null,"Error: ",r.message):a?l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"L\xe4dt...")},l.a.createElement(k,{tableData:t,table:s})):l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-border",style:{Width:"3rem",Height:"3rem"},role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),g=l.a.createElement(c.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:v}),l.a.createElement(i.a,{path:"/import",component:I}),l.a.createElement(i.a,{path:"/eingabe",component:N}),l.a.createElement(i.a,{path:"/erzeugen",component:p}),l.a.createElement(i.a,{path:"/export",component:h}));s.a.render(g,document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.d07c204e.chunk.js.map