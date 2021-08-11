(this["webpackJsonphaptic-cellulo"]=this["webpackJsonphaptic-cellulo"]||[]).push([[0],{120:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var r,i=n(0),a=n.n(i),o=n(18),s=n.n(o),c=(n(120),n(21)),l=n(22),d=n(24),h=n(23),u=(n(80),n(81),n(28)),p=n(114),j=n(241),b=n(115),m=n(30),y=n(240),g=n(236),x=n(2);!function(e){e[e.UNSENT=0]="UNSENT",e[e.IN_FLIGHT=1]="IN_FLIGHT",e[e.SENT=2]="SENT"}(r||(r={}));var f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(c.a)(this,n),(i=t.call(this,e)).submitResults=function(e,t,n){i.setState({sendingState:r.IN_FLIGHT});fetch("https://cellulo-live.herokuapp.com/results/?player=".concat(e,"&partner=").concat(t,"&answers=").concat(n.join(",")),{method:"POST"}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){throw new Error(e)})).then((function(e){i.setState({sendingState:r.SENT})}))},i.setChecked=function(e,t){var n=i.state.answers,r=i.props.player.zone,a=n.get(e);void 0!==a&&(a.isChecked=t.checked,a.zone=t.checked?r:"?",i.setState({answers:n}),t.blur())},i.renderTooltip=function(e){return Object(x.jsx)(y.a,Object(u.a)(Object(u.a)({body:!0},e),{},{children:Object(x.jsx)("div",{style:{padding:"10px",width:"10rem"},children:"To lock in an answer, you and your partner must select the same organelle using your robots."})}))};var a=new Map;return m.forEach((function(e,t){a.set(t,{isChecked:!1,zone:"?"})})),i.state={answers:a,sendingState:r.UNSENT},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.answers,n=this.state.sendingState,i=Array.from(t.values()).map((function(e){return e.zone})),a=[this.props.player,this.props.partner],o=this.props.player.zone===this.props.partner.zone,s=i.every((function(e){return"?"!==e}));return console.log(m),Object(x.jsxs)("div",{style:{paddingLeft:"20%",paddingRight:"20%",paddingBottom:"20px"},children:[Object(x.jsxs)(p.a,{variant:"dark",style:{fontSize:"1.4rem",width:"100%",marginBottom:"5px"},disabled:!0,children:[Object(x.jsx)(g.a,{placement:"left",trigger:"hover",delay:{show:250,hide:400},overlay:this.renderTooltip,children:Object(x.jsx)(p.a,{variant:"dark",style:{fontSize:"0.9em",marginRight:"10px"},children:"\u24d8"})}),"For each question, move your robot to the organelle on the map that you think is the correct answer."]}),Object(x.jsx)("div",{}),m.map((function(i,s){var c,l,d,h,u,y,g;return Object(x.jsxs)("div",{style:{marginTop:"10px"},children:[Object(x.jsxs)(p.a,{variant:"dark mt-2",style:{fontSize:"1.2rem",width:"100%",textAlign:"left",marginBottom:"15px",marginTop:"15px"},disabled:!0,children:[s+1,". ",i.Q]}),Object(x.jsxs)(j.a,{type:"checkbox",style:{alignItems:"center",animation:(null===(c=t.get(s))||void 0===c?void 0:c.isChecked)?"":"pulse 1s infinite",width:"80%"},children:[n===r.SENT?Object(x.jsx)(b.a,{disabled:n===r.SENT,value:m.length,style:{pointerEvents:"none",marginRight:"2px"},variant:(null===(l=t.get(s))||void 0===l?void 0:l.zone)===m[s].A?"success":"danger",children:(null===(d=t.get(s))||void 0===d?void 0:d.zone)===m[s].A?"Correct":"Correct answer: ".concat(m[s].A)}):null,a.map((function(e,i){var a,c,l;return Object(x.jsx)(b.a,{disabled:n===r.SENT,value:m.length+1+i,style:{pointerEvents:"none",marginRight:"2px"},variant:(null===(a=t.get(s))||void 0===a?void 0:a.isChecked)?"primary":o?"info":"light",children:(null===(c=t.get(s))||void 0===c?void 0:c.isChecked)?"".concat(e.name,": ").concat(null===(l=t.get(s))||void 0===l?void 0:l.zone):"".concat(e.name,": ").concat(e.zone)})})),Object(x.jsx)(b.a,{disabled:n===r.SENT,id:"toggle-check",checked:null===(h=t.get(s))||void 0===h?void 0:h.isChecked,variant:(null===(u=t.get(s))||void 0===u?void 0:u.isChecked)?"primary":o?"info":"danger",value:s,style:{pointerEvents:(null===(y=t.get(s))||void 0===y?void 0:y.isChecked)||o?"auto":"none"},onChange:function(t){return e.setChecked(s,t.currentTarget)},children:(null===(g=t.get(s))||void 0===g?void 0:g.isChecked)?"Unlock":o?"Lock in":"Settle on an answer"})]})]},s)})),Object(x.jsxs)(p.a,{variant:"dark",style:{fontSize:"1rem",width:"100%",marginTop:"20px"},disabled:!0,children:["Your answers: [",i.join(", "),"]"]}),Object(x.jsx)(p.a,{style:{marginTop:"20px",width:"50%"},disabled:!s||n!==r.UNSENT,onClick:function(t){return e.submitResults(e.props.player.name,e.props.partner.name,i)},variant:"success",children:s?n===r.UNSENT?"Submit":n===r.IN_FLIGHT?"Submitting...":"Submitted":"Lock in an answer for each question."})]})}}]),n}(a.a.Component),v=n(238),O=n(235),w=n(237),k=n(239),T=n(234);var S=function(e){return Object(x.jsx)("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0,src:e.src,height:"100%",width:"100%",style:{boxShadow:"0px 1px 17px 0px #ffffff38",borderRadius:"5px"}})},z=n(8),C=n(7),A=n.n(C),N=function(e){return Object(x.jsxs)(z.a,{indicators:!1,touch:!1,interval:null,children:[Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"## The packaging warehouse of the cell."}),Object(x.jsx)(A.a,{children:"#### Did you know?"}),Object(x.jsx)(A.a,{children:"The golgi body is named after its discoverer, Camillo Golgi. It appears as a set of stacked membranes!"}),Object(x.jsx)(A.a,{children:"**Read ahead** to find out what this mysterious organelle does."})]}),Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"**What does it do?**"}),Object(x.jsx)(A.a,{children:"The golgi body helps process and package ***proteins*** and ***lipid*** (fat) molecules."}),Object(x.jsx)(A.a,{children:"In particular, it readies proteins for export, to be jettisoned outside of the cell."})]})]})},E=function(e){return Object(x.jsxs)(z.a,{indicators:!1,touch:!1,interval:null,children:[Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"## The liquid medium contained within a cell."}),Object(x.jsx)(A.a,{children:"The main component of cytosol is **water**."}),Object(x.jsx)(A.a,{children:"Suspended within the cytosol are various ***organelles*** - move your robot to these to learn more."})]}),Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"#### Did you know?"}),Object(x.jsx)(A.a,{children:"That's not all! The cytosol also contains **dissolved ions**, **small molecules**, and **proteins**."})]})]})},I=function(e){return Object(x.jsxs)(z.a,{indicators:!1,touch:!1,interval:null,children:[Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"## The control centre of the cell."}),Object(x.jsx)(A.a,{children:"The nucleus contains most of the cell's genetic material inside DNA structures known as ***chromosomes***."}),Object(x.jsx)(A.a,{children:"Inside the nucleus, DNA is transcribed into ***messenger RNA*** which leaves the nucleus through small pores."})]}),Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"The messenger RNA is ***translated*** elsewhere into proteins, which have important roles to play - for instance, controlling your hair colour!"}),Object(x.jsx)(A.a,{children:"The nucleus is also responsible for reproduction (AKA ***cell division***)."})]})]})},L=function(e){return Object(x.jsxs)(z.a,{indicators:!1,touch:!1,interval:null,children:[Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"## The powerhouse of the cell."}),Object(x.jsx)(A.a,{children:"Mitochondria generate the **chemical energy** to power the cell's biochemical reactions."}),Object(x.jsx)(A.a,{children:"This energy is stored in a small molecule called ***ATP: adenosine triphosphate***."})]}),Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"**Did you know?**"}),Object(x.jsx)(A.a,{children:"Mitochondria contain their own DNA, in the form of small, circular chromosomes. These are only inherited from the mother!"})]})]})},F=function(e){return Object(x.jsxs)(z.a,{indicators:!1,touch:!1,interval:null,children:[Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"## The lord of destruction of the cell."}),Object(x.jsx)(A.a,{children:"Lysosomes contain ***digestive enzymes*** which break down excess or worn-out cell parts."}),Object(x.jsx)(A.a,{children:"They are also involved in a rather morbid process called ***apoptosis***. Read ahead to find out what this is."})]}),Object(x.jsxs)(z.a.Item,{style:{width:"70%",marginLeft:"15%",textAlign:"center"},children:[Object(x.jsx)(A.a,{children:"***Apoptosis***: Programmed cell death."}),Object(x.jsx)(A.a,{children:"If the cell is damaged beyond repair, lysosomes can help it self-destruct in a process called apoptosis, or programmed cell death."})]})]})};function P(e){switch(e){case"golgiBody":return Object(x.jsx)(N,{});case"nucleus":return Object(x.jsx)(I,{});case"lysosome":return Object(x.jsx)(F,{});case"mitochondrion":return Object(x.jsx)(L,{});case"cytosol":case"undefined":return Object(x.jsx)(E,{});default:throw new Error("Undefined behaviour for zone: "+e)}}var R,B=function(e){return Object(x.jsx)(y.a,Object(u.a)(Object(u.a)({body:!0},e),{},{children:Object(x.jsx)("div",{style:{padding:"10px",width:"10rem"},children:"A description of the organelle which your robot is currently located on."})}))},Q=function(e){return Object(x.jsxs)("div",{style:{paddingBottom:"10px"},children:[Object(x.jsx)(k.a,{style:{marginBottom:"-3px",marginTop:"-5px"},children:Object(x.jsx)(S,{src:e.src})}),Object(x.jsxs)(p.a,{variant:"dark mt-2",style:{fontSize:"0.7em",width:"100%",textAlign:"left"},disabled:!0,children:[Object(x.jsx)(g.a,{placement:"left",trigger:"hover",delay:{show:250,hide:400},overlay:B,children:Object(x.jsx)(p.a,{variant:"dark",style:{fontSize:"0.9em",display:"block"},children:"\u24d8"})}),P(e.zone)]}),Object(x.jsxs)(p.a,{variant:"dark mt-2",style:{fontSize:"1rem",width:"100%"},disabled:!0,children:[Object(x.jsx)(T.a,{animation:"grow",variant:"light",size:"sm",style:{marginRight:"3%"}}),"Last updated at ",null===e.lastFetched?"":e.lastFetched]})]})},M=n.p+"static/media/nucleus.ddd8d8e8.mp4",q=n.p+"static/media/mitochondrion.e87f2a95.mp4",D=n.p+"static/media/golgi_body.48b36d1d.mp4",G=n.p+"static/media/lysosome.6aab8551.mp4",U=n.p+"static/media/cytosol.5d6e8b37.mp4",K={nucleus:{graphic:M},mitochondrion:{graphic:q},golgiBody:{graphic:D},lysosome:{graphic:G},"?":{graphic:U},cytosol:{graphic:U}},H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(Q,{src:K[this.props.player.zone].graphic,lastFetched:this.props.player.lastFetched,name:this.props.player.name,x:this.props.player.x,y:this.props.player.y,theta:this.props.player.theta,zone:"?"===this.props.player.zone?"cytosol":this.props.player.zone})})}}]),n}(a.a.Component),W=n(79),_=["Find out who discovered the golgi body","Establish what the cytosol is composed of","Locate the control centre of the cell","Find the energy centre of the cell","Pinpoint the organelle with digestive enzymes"],J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(c.a)(this,n),(r=t.call(this,e)).setChecked=function(e,t){var n=r.state.isChecked;n.set(e,t.checked),r.setState({isChecked:n})},r.renderTooltip=function(e){return Object(x.jsx)(y.a,Object(u.a)(Object(u.a)({body:!0},e),{},{children:Object(x.jsx)("div",{style:{padding:"10px",width:"10rem"},children:"A checklist of points you should explore together before starting the quiz."})}))};var i=new Map;return _.forEach((function(e,t){i.set(t,!1)})),r.state={isChecked:i},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isChecked;return Object(x.jsxs)(W.a,{style:{fontSize:"1rem",color:"#b9b9b9",padding:"1em",backgroundColor:"#343a40",borderRadius:"10px",fontFamily:"helvetica"},children:[Object(x.jsx)(g.a,{placement:"left",trigger:"hover",delay:{show:250,hide:400},overlay:this.renderTooltip,children:Object(x.jsx)(p.a,{variant:"dark",style:{fontSize:"0.9em",display:"block"},children:"\u24d8"})}),Object(x.jsx)("h4",{style:{display:"block"},children:"Tasks"}),_.map((function(t,n){return Object(x.jsx)("div",{className:"mb-3",children:Object(x.jsx)(W.a.Check,{type:"checkbox",label:t,onChange:function(t){return e.setChecked(n,t.currentTarget)}})},n)})),Array.from(t.values()).every((function(e){return e}))?Object(x.jsx)(p.a,{variant:"success",style:{pointerEvents:"none"},children:"Great! You can start the quiz."}):null]})}}]),n}(a.a.Component);!function(e){e[e.Test=0]="Test",e[e.Explore=1]="Explore"}(R||(R={}));var Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).startQuiz=function(){r.setState({showModal:!1,startedQuiz:!0})},r.keepExploring=function(){r.setState({key:"explore",showModal:!1})},r.state={mode:R.Explore,key:"explore",showModal:!1,startedQuiz:!1},r}return Object(l.a)(n,[{key:"changeMode",value:function(e){this.setState({mode:e})}},{key:"setKey",value:function(e){var t=e,n="quiz"===e;this.setState({key:null===t?"explore":t,showModal:n})}},{key:"render",value:function(){var e=this,t=this.state.key,n=this.state.showModal,r=this.state.startedQuiz;return console.log("ActiveKey:"),console.log(t),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h2",{style:{paddingTop:"15px",color:"#b9b9b9",fontFamily:"helvetica"},children:"Haptic Cellulo"}),Object(x.jsxs)(v.a,{activeKey:t,onSelect:function(t){return e.setKey(t)},style:{marginTop:"-20px",marginBottom:"30px",fontSize:"1rem",width:"65%"},children:[Object(x.jsx)(O.a,{eventKey:"explore",title:"Explore Cell Map",disabled:!!r,children:Object(x.jsxs)("div",{className:"gridContainer",style:{borderRadius:"10px",margin:"0%"},children:[Object(x.jsx)("div",{className:"guideBox",children:Object(x.jsx)(J,{})}),Object(x.jsx)("div",{className:"mainApp",children:Object(x.jsx)(H,{player:this.props.player,partner:this.props.partner})})]})}),Object(x.jsx)(O.a,{eventKey:"quiz",title:"Start Quiz",disabled:!!r,children:Object(x.jsx)(f,{player:this.props.player,partner:this.props.partner})})]}),Object(x.jsxs)(w.a,{show:n,backdrop:"static",keyboard:!1,children:[Object(x.jsx)(w.a.Header,{closeButton:!0,children:Object(x.jsx)(w.a.Title,{children:"Quiz"})}),Object(x.jsx)(w.a.Body,{children:"Are you ready to start the quiz? Once you begin, you cannot return to the learning activity."}),Object(x.jsxs)(w.a.Footer,{children:[Object(x.jsx)(p.a,{variant:"secondary",onClick:this.keepExploring,children:"Keep exploring"}),Object(x.jsx)(p.a,{variant:"primary",onClick:this.startQuiz,children:"Yes, start the quiz"})]})]})]})}},{key:"renderContent",value:function(){}}]),n}(a.a.Component);function V(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new URLSearchParams(window.location.search).get(e);if(t&&null===n)throw new Error("Query parameter ".concat(e," not provided"));return n}var X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(c.a)(this,n),(r=t.call(this,e)).intervalId=0,r.fetchGamePlayer=function(e){return fetch("https://cellulo-live.herokuapp.com/pose?name=".concat(e)).then((function(e){return e.json()})).then((function(t){if("success"===t.type){var n=t.content,r=new Date;return{name:e,zone:n.zone,x:n.x,y:n.y,theta:n.theta,lastFetched:r.toLocaleTimeString("en-US")}}console.log("Non-success:"+JSON.stringify(t))}),(function(e){throw new Error(e)}))},r.fetchPose=function(){console.log(r.state);var e=r.state.player.name;r.fetchGamePlayer(e).then((function(e){void 0!==e&&r.setState({player:e})}));var t=r.state.partner.name;r.fetchGamePlayer(t).then((function(e){void 0!==e&&r.setState({partner:e})}))};var i={name:V("player"),zone:"?",x:0,y:0,theta:0,lastFetched:"Not fetched"},a={name:V("partner"),zone:"?",x:0,y:0,theta:0,lastFetched:"Not fetched"};return r.state={player:i,partner:a},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.fetchPose.bind(this),500),this.fetchPose()}},{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.player,n=e.partner;return Object(x.jsx)(Y,{player:t,partner:n})}}]),n}(a.a.Component),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(X,{})}),document.getElementById("root")),Z()},30:function(e){e.exports=JSON.parse('[{"Q":"Which organelle contains most of the cell\'s genetic material, encoding for traits such as hair colour?","A":"nucleus"},{"Q":"To which organelle would a protein arrive at to be packaged for export from the cell?","A":"golgiBody"},{"Q":"Where is chemical energy or ATP (adenosine triphosphate) produced?","A":"mitochondrion"},{"Q":"Which organelle is capable of destroying the cell?","A":"lysosome"},{"Q":"What is the space in which all organelles reside?","A":"cytosol"}]')},81:function(e,t,n){}},[[229,1,2]]]);
//# sourceMappingURL=main.dd2f1990.chunk.js.map