(this["webpackJsonphaptic-cellulo"]=this["webpackJsonphaptic-cellulo"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"Q":"Which organelle contains its own form of DNA which is inherited maternally?","A":"Mitochondria"}]')},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(19),c=n.n(a),s=(n(26),n(7)),i=n(8),l=n(10),d=n(9),h=(n(27),n(28),n(39)),u=n(37),j=n(16),b=n.n(j),p=n(20),f=n(38),x=n(35),m=n(2);var v,O=function(e){return Object(m.jsx)("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0,src:e.src,height:"100%",width:"100%",style:{display:"block",boxShadow:"0px 1px 17px 0px #ffffff38",borderRadius:"5px"}})},y=function(e){return console.log("x=".concat(e.x,",y=").concat(e.y)),Object(m.jsxs)("div",{children:[Object(m.jsxs)(f.a,{children:[Object(m.jsx)(O,{src:e.src}),Object(m.jsx)(f.a.Caption,{style:{marginTop:"10px"},children:e.caption})]}),Object(m.jsxs)(h.a,{variant:"dark",style:{fontSize:"1rem",width:"100%"},disabled:!0,children:[Object(m.jsx)(x.a,{animation:"grow",variant:"light",size:"sm",style:{marginRight:"3%"}}),"Location: (x=",Math.round(e.x),", y=",Math.round(e.y),", theta=",Math.round(e.theta),")"]}),Object(m.jsxs)(h.a,{variant:"dark",style:{fontSize:"1rem",width:"100%"},disabled:!0,children:["Last updated at ",null===e.lastFetched?"":e.lastFetched]})]})},g=n.p+"static/media/nucleus.4a8c0d4e.mp4",k=n.p+"static/media/mitochondrion.e87f2a95.mp4",S=n.p+"static/media/golgi_body.810b2da0.mp4",w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).intervalId=0,o.state={error:null,isLoaded:!1,x:"",y:"",theta:"",location:g,caption:"Location: nucleus. The knowledge centre of the cell.",lastFetched:null},o}return Object(i.a)(n,[{key:"updateLocation",value:function(e){e.x<15?this.setState({location:g,caption:"The knowledge centre of the cell."}):e.x<100?this.setState({location:k,caption:"The powerhouse of the cell."}):this.setState({location:S,caption:"The packaging warehouse of the cell."})}},{key:"fetchPose",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t,n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.name,fetch("https://cellulo-live.herokuapp.com/pose?name=".concat(t)).then((function(e){return e.json()})).then((function(e){if("success"===e.type){var t=e.content,o=new Date;n.setState({isLoaded:!0,x:t.x,y:t.y,theta:t.theta,lastFetched:o.toLocaleTimeString("en-US")}),n.updateLocation(t)}else console.log("Non-success:"+JSON.stringify(e))}),(function(e){n.setState({isLoaded:!0,error:e})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.fetchPose.bind(this),500),this.fetchPose()}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,o=e.x,r=e.y,a=e.theta,c=e.location,s=e.caption,i=e.lastFetched;return"bloop"===this.props.name&&console.log("x=".concat(o,",y=").concat(r)),t?Object(m.jsxs)("div",{children:["Error: ",t.message]}):n?Object(m.jsx)("div",{children:Object(m.jsx)(y,{src:c,caption:String(s),lastFetched:String(i),name:String(this.props.name),x:Number(o),y:Number(r),theta:Number(a)})}):Object(m.jsx)("div",{children:"Loading..."})}}]),n}(r.a.Component),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={isLoaded:!1,robots:[],selectedRobot:"",error:null},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;null==this.props.queryRobot&&fetch("https://cellulo-live.herokuapp.com/robots/").then((function(e){return e.json()})).then((function(t){if("success"===t.type){var n=t.content;e.setState({isLoaded:!0,robots:n,selectedRobot:n[0]})}else console.log("Non-success:"+JSON.stringify(t))}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"setSelectedRobot",value:function(e){this.setState({selectedRobot:e})}},{key:"renderFromQueryString",value:function(){var e=this.props.queryRobot;return Object(m.jsxs)("div",{children:[Object(m.jsxs)(h.a,{variant:"dark",style:{fontSize:"1.5rem",width:"100%",marginBottom:"20px"},disabled:!0,children:["Player ",e]}),Object(m.jsx)(w,{name:e})]})}},{key:"renderFromApi",value:function(){var e=this,t=this.state,n=t.error,o=t.isLoaded,r=t.robots,a=t.selectedRobot;return n?Object(m.jsxs)("div",{children:["Error: ",n.message]}):o?Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{name:a}),Object(m.jsxs)(u.a.Group,{children:[Object(m.jsx)(u.a.Label,{children:"Tracking player:"}),Object(m.jsx)(u.a.Control,{as:"select",onChange:function(t){return e.setSelectedRobot(t.target.value)},children:r.map((function(e,t){return Object(m.jsx)("option",{children:e},t)}))})]})]}):Object(m.jsx)("div",{children:"Loading..."})}},{key:"render",value:function(){return null!=this.props.queryRobot?this.renderFromQueryString():this.renderFromApi()}}]),n}(r.a.Component),N=n(36),R=n(17),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={responses:[]},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){this.state.responses;return console.log(R),Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{variant:"dark",style:{fontSize:"1.5rem",width:"100%",marginBottom:"20px"},disabled:!0,children:"Learning Activity"}),Object(m.jsx)(h.a,{variant:"dark",style:{fontSize:"1.5rem",width:"100%",marginBottom:"20px"},disabled:!0,children:"For each question, place your robot to the organelle on the map that you consider to be the correct answer."}),Object(m.jsx)("div",{}),R.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)(h.a,{variant:"dark",style:{fontSize:"1.5rem",width:"100%",marginBottom:"20px"},disabled:!0,children:[t+1,". ",e.Q]}),Object(m.jsx)("div",{}),Object(m.jsxs)(N.a,{horizontal:!0,style:{color:"black",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(m.jsx)(N.a.Item,{children:"Robot A says: Mitochondria"}),")",Object(m.jsx)(N.a.Item,{children:"Robot B says: Ribosomes"}),")"]})]},t)}))]})}}]),n}(r.a.Component);function T(e){return new URLSearchParams(window.location.search).get(e)}!function(e){e[e.Test=0]="Test",e[e.Explore=1]="Explore"}(v||(v={}));var C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={mode:v.Explore},o}return Object(i.a)(n,[{key:"changeMode",value:function(e){this.setState({mode:e})}},{key:"render",value:function(){var e=this.state.mode;return console.log(e),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("p",{}),Object(m.jsx)("div",{className:"container",children:this.renderContent(e)})]})})}},{key:"renderExplore",value:function(){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(L,{queryRobot:T("left")})}),Object(m.jsx)("div",{className:"col offset-1",children:Object(m.jsx)(L,{queryRobot:T("right")})})]})}},{key:"renderTest",value:function(){return Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(F,{robots:[]})})})}},{key:"renderContent",value:function(e){switch(e){case v.Explore:return this.renderExplore();case v.Test:return this.renderTest();default:throw"Unknown mode "+e}}}]),n}(r.a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),M()}},[[34,1,2]]]);
//# sourceMappingURL=main.2cd65690.chunk.js.map