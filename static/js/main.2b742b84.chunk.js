(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(8),i=n.n(a),s=n(2),r=n(3),c=n(5),o=n(4),l=n(1),m=n.n(l),u=(n(13),n(14),n(15),n(7)),p=n.n(u),h=n(0),j=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={counter:0,step:3,frameSize:3,itemWidth:130,animationDuration:1e3},t.nextButton=function(){var e=t.state,n=e.step,a=e.frameSize,i=e.counter;i-a-n>=-10?t.setState({counter:i-n}):t.setState({counter:-10+a})},t.prevButton=function(){var e=t.state,n=e.step,a=e.counter;a+n<=0?t.setState({counter:a+n}):t.setState({counter:0})},t.setImageSize=function(e){t.setState({itemWidth:+e.target.value})},t.setFrameSize=function(e){t.setState({frameSize:+e.target.value}),t.state.frameSize<1&&t.setState({frameSize:1})},t.setStep=function(e){t.setState({step:+e.target.value})},t.setAnimationDuration=function(e){t.setState({animationDuration:+e.target.value}),t.state.animationDuration<100&&t.setState({animationDuration:0})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.frameSize,a=e.counter,i=e.step,s=e.itemWidth,r=e.animationDuration,c=this.props.images;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"Carousel",children:Object(h.jsx)("div",{className:"Carousel-container",style:{width:"".concat(n*s,"px")},children:Object(h.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(a,"px)"),marginLeft:"".concat(a*s,"px"),transition:"".concat(r,"ms"),width:"".concat(n*s,"px")},children:c.map((function(t,e){return Object(h.jsx)("li",{className:"Carousel__list-img",children:Object(h.jsx)("img",{src:t,alt:(e+1).toString(),style:{width:"".concat(s,"px")}})},t)}))})})}),Object(h.jsxs)("div",{className:"Control-panel",children:[Object(h.jsxs)("div",{className:"Control-panel__buttons buttons",children:[Object(h.jsx)("button",{type:"button",onClick:function(){t.prevButton()},className:p()("buttons__prev-button",{disabled:0===a}),disabled:0===a}),Object(h.jsx)("button",{type:"button",className:p()("buttons__next-button",{disabled:a<=-c.length+i}),onClick:function(){t.nextButton()},disabled:a<=-c.length+i})]}),Object(h.jsxs)("label",{htmlFor:"width",children:["Change Image Width:"," "]}),Object(h.jsx)("input",{id:"width",type:"range",value:s,step:10,min:10,max:400,placeholder:"Set an image size",className:"Control-panel__setItemWidth",onChange:this.setImageSize}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"frameSize",children:["Change FrameSize:"," "]}),Object(h.jsx)("input",{id:"frameSize",type:"range",min:1,max:c.length,value:n,placeholder:"Set a frame size",className:"Control-panel__setFrame",onChange:this.setFrameSize}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"step",children:["Scroll Step:"," "]}),Object(h.jsx)("input",{id:"step",type:"range",min:1,max:c.length,value:i,placeholder:"Set scroll step",className:"Control-panel__setStep",onChange:this.setStep}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"animation",children:["Animation duration:"," "]}),Object(h.jsx)("input",{id:"animation",type:"range",min:0,max:5e3,step:100,value:r,placeholder:"Set animation duration",className:"Control-panel__animationTime",onChange:this.setAnimationDuration})]})]})}}]),n}(m.a.Component),b=j,g=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{children:["Carousel with"," ",t.length," ","images"]}),Object(h.jsx)(b,{images:t})]})}}]),n}(m.a.Component),d=g;i.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2b742b84.chunk.js.map