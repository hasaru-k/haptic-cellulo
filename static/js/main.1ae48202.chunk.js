(this["webpackJsonphaptic-cellulo"]=this["webpackJsonphaptic-cellulo"]||[]).push([[0],{138:function(e,t,n){},140:function(e,t,n){},441:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(20),s=n.n(a),r=(n(138),n(35)),i=n(36),l=n(38),d=n(37),h=(n(139),n(140),n(445)),u=n(443),j=n(81),p=n.n(j),b=n(132),f=n(444),x=n(442),v=(n.p,n(3));var m=function(e){return Object(v.jsx)("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0,src:e.src,height:"100%",width:"100%",style:{display:"block",boxShadow:"0px 1px 17px 0px #ffffff38",borderRadius:"5px"}})};var O=function(e){return console.log("x=".concat(e.x,",y=").concat(e.y)),Object(v.jsxs)("div",{children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(m,{src:e.src}),Object(v.jsx)(f.a.Caption,{style:{marginTop:"10px"},children:e.caption})]}),Object(v.jsxs)(h.a,{variant:"dark",style:{fontSize:"1rem",width:"100%"},disabled:!0,children:[Object(v.jsx)(x.a,{animation:"grow",variant:"light",size:"sm",style:{marginRight:"3%"}}),"Location: (x=",Math.round(e.x),", y=",Math.round(e.y),", theta=",Math.round(e.theta),")"]}),Object(v.jsxs)(h.a,{variant:"dark",style:{fontSize:"1rem",width:"100%"},disabled:!0,children:["Last updated at ",null===e.lastFetched?"":e.lastFetched]})]})},y=n.p+"static/media/nucleus.4a8c0d4e.mp4",g=n.p+"static/media/mitochondrion.e87f2a95.mp4",k=n.p+"static/media/golgi_body.810b2da0.mp4",S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).intervalId=0,o.state={error:null,isLoaded:!1,x:"",y:"",theta:"",location:y,caption:"Location: nucleus. The knowledge centre of the cell.",lastFetched:null},o}return Object(i.a)(n,[{key:"updateLocation",value:function(e){e.x<15?this.setState({location:y,caption:"The knowledge centre of the cell."}):e.x<100?this.setState({location:g,caption:"The powerhouse of the cell."}):this.setState({location:k,caption:"The packaging warehouse of the cell."})}},{key:"fetchPose",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.name,fetch("https://cellulo-live.herokuapp.com/pose?name=".concat(t)).then((function(e){return e.json()})).then((function(e){if("success"===e.type){var t=e.content,o=new Date;n.setState({isLoaded:!0,x:t.x,y:t.y,theta:t.theta,lastFetched:o.toLocaleTimeString("en-US")}),n.updateLocation(t)}else console.log("Non-success:"+JSON.stringify(e))}),(function(e){n.setState({isLoaded:!0,error:e})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.fetchPose.bind(this),500),this.fetchPose()}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,o=e.x,c=e.y,a=e.theta,s=e.location,r=e.caption,i=e.lastFetched;return"bloop"===this.props.name&&console.log("x=".concat(o,",y=").concat(c)),t?Object(v.jsxs)("div",{children:["Error: ",t.message]}):n?Object(v.jsx)("div",{children:Object(v.jsx)(O,{src:s,caption:r,lastFetched:i,name:this.props.name,x:o,y:c,theta:a})}):Object(v.jsx)("div",{children:"Loading..."})}}]),n}(c.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={selectedRobot:""},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;null==this.props.queryRobot&&fetch("https://cellulo-live.herokuapp.com/robots/").then((function(e){return e.json()})).then((function(t){if("success"===t.type){var n=t.content;e.setState({isLoaded:!0,robots:n,selectedRobot:n[0]})}else console.log("Non-success:"+JSON.stringify(t))}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"setSelectedRobot",value:function(e){this.setState({selectedRobot:e})}},{key:"renderFromQueryString",value:function(){var e=this.props.queryRobot;return Object(v.jsxs)("div",{children:[Object(v.jsxs)(h.a,{variant:"dark",style:{fontSize:"1.5rem",width:"100%",marginBottom:"20px"},disabled:!0,children:["Player ",e]}),Object(v.jsx)(S,{name:e})]})}},{key:"renderFromApi",value:function(){var e=this,t=this.state,n=t.error,o=t.isLoaded,c=t.robots,a=t.selectedRobot;return n?Object(v.jsxs)("div",{children:["Error: ",n.message]}):o?Object(v.jsxs)("div",{children:[Object(v.jsx)(S,{name:a}),Object(v.jsxs)(u.a.Group,{children:[Object(v.jsx)(u.a.Label,{children:"Tracking player:"}),Object(v.jsx)(u.a.Control,{as:"select",onChange:function(t){return e.setSelectedRobot(t.target.value)},children:c.map((function(e,t){return Object(v.jsx)("option",{children:e},t)}))})]})]}):Object(v.jsx)("div",{children:"Loading..."})}},{key:"render",value:function(){return null!=this.props.queryRobot?this.renderFromQueryString():this.renderFromApi()}}]),n}(c.a.Component);n(145);function L(e){return new URLSearchParams(window.location.search).get(e)}var F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)("p",{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(w,{queryRobot:L("left")})}),Object(v.jsx)("div",{className:"col offset-1",children:Object(v.jsx)(w,{queryRobot:L("right")})})]})})]})})}}]),n}(c.a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,446)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),R()}},[[441,1,2]]]);
//# sourceMappingURL=main.1ae48202.chunk.js.map