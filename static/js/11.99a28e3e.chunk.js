(this.webpackJsonpbrunel=this.webpackJsonpbrunel||[]).push([[11],{109:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var t=e.className,a=e.cssModule,n=e.color,c=e.body,l=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.c)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!n&&(i?"border":"bg")+"-"+n),a);return r.a.createElement(p,Object(o.a)({},b,{className:f,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},110:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(t,"card-header"),a);return r.a.createElement(n,Object(o.a)({},c,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},111:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.c)(u()(t,"card-body"),a);return r.a.createElement(c,Object(o.a)({},l,{className:i,ref:n}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},112:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(t,"card-text"),a);return r.a.createElement(n,Object(o.a)({},c,{className:l}))};m.propTypes=p,m.defaultProps={tag:"p"},t.a=m},320:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(t,"card-title"),a);return r.a.createElement(n,Object(o.a)({},c,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},60:function(e,t,a){"use strict";a.r(t);var o=a(25),s=a(0),n=a.n(s),r=a(26),c=a(61),l=a(62),i=a(66),u=a(64),d=a(65),p=a(73),m=a.n(p),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={graphs:e.graphs,current_graph:0,slow_physics:e.slow_physics,fast_physics:e.fast_physics,options:e.options,network:{}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onClick",value:function(){var e=this.state.current_graph,t=this.state.graphs,a=this.state.network,o=this.state.fast_physics,s=this.state.slow_physics;(e+=1)>t.length-1&&(e=0);var n=a.getViewPosition(),c=a.getScale();a.setOptions({physics:!1});var l=a.getPositions();a.setData(t[e]);for(var i=0,u=Object.entries(l);i<u.length;i++){var d=u[i],p=Object(r.a)(d,2),m=p[0],b=p[1];a.moveNode(m,b.x,b.y)}a.moveTo({position:n,scale:c}),setTimeout((function(){a.setOptions({physics:s})}),100),setTimeout((function(){a.setOptions({physics:o})}),350),this.setState({current_graph:e})}},{key:"render",value:function(){var e=this,t=this.state.graphs[0];return n.a.createElement("div",null,n.a.createElement("button",{className:"graph-buttton",onClick:function(){e.onClick()}},"Click Me!"),n.a.createElement(m.a,{graph:t,options:this.state.options,events:{},focus:this.props.anchor,getNetwork:function(t){return e.setState({network:t})}}))}}]),t}(n.a.Component),f=a(89),g=a(90),h=a(91),v=a(109),y=a(110),O=a(111),j=a(112),E=a(320);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}var w=["John","James","Jane","Janet","Jason"],x=[{nodes:[{id:w[0],label:w[0],title:"{people[0]} tootip text"},{id:w[1],label:w[1],title:"node 2 tootip text"},{id:w[2],label:w[2],title:"node 3 tootip text"},{id:w[3],label:w[3],title:"node 4 tootip text"},{id:w[4],label:w[4],title:"node 5 tootip text"}],edges:[{from:w[0],to:w[1]},{from:w[1],to:w[2]},{from:w[2],to:w[3]},{from:w[3],to:w[4]}]},{nodes:[{id:w[0],label:w[0],title:"node 1 tootip text"},{id:w[1],label:w[1],title:"node 2 tootip text"},{id:w[2],label:w[2],title:"node 2 tootip text"},{id:w[3],label:w[3],title:"node 2 tootip text"},{id:w[4],label:w[4],title:"node 2 tootip text"}],edges:[{from:w[0],to:w[3]},{from:w[2],to:w[4]},{from:w[1],to:w[2]}]},{nodes:[{id:w[0],label:w[0],title:"node 1 tootip text"},{id:w[1],label:w[1],title:"node 1 tootip text"},{id:w[2],label:w[2],title:"node 1 tootip text"},{id:w[3],label:w[3],title:"node 1 tootip text"},{id:w[4],label:w[4],title:"node 1 tootip text"}],edges:[{from:w[0],to:w[3],dashes:!0,color:"red",smooth:{type:"curvedCW"}},{from:w[3],to:w[0],width:4,color:"blue",smooth:{type:"curvedCW"}},{from:w[0],to:w[4],dashes:!0,color:"red"},{from:w[1],to:w[2]}]}],M={enabled:!0,barnesHut:{gravitationalConstant:-50,centralGravity:0,springLength:50,springConstant:.02,damping:.2,avoidOverlap:.5},maxVelocity:30,minVelocity:.2,solver:"barnesHut",stabilization:{enabled:!0,iterations:100,updateInterval:10,onlyDynamicEdges:!1,fit:!0},timestep:.5,adaptiveTimestep:!0},P=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},M);P.timestep=.1;var T={height:"450px",width:"100%",layout:{randomSeed:42},manipulation:{enabled:!1,initiallyActive:!1},interaction:{navigationButtons:!0},edges:{shadow:!0,smooth:{enabled:!0,type:"continuous",roundness:.3},width:.5},physics:M},k={select:function(e){var t=e.nodes,a=e.edges;console.log(t),console.log(a)}};t.default=function(e){return n.a.createElement("div",null,n.a.createElement(f.a,null,n.a.createElement(g.a,null,n.a.createElement(h.a,null,n.a.createElement(v.a,null,n.a.createElement(y.a,{align:"center"},"A Great Britain's Social Network")))),n.a.createElement(g.a,null,n.a.createElement(h.a,null,n.a.createElement(v.a,{body:!0,outline:!0,color:"secondary",style:{height:"550px"}},n.a.createElement(O.a,null,n.a.createElement(b,{graph:x[0],graphs:x,options:T,events:k,slow_physics:P,fast_physics:M,getNetwork:function(e){}})))),n.a.createElement(h.a,{xs:"4"},n.a.createElement(v.a,{body:!0,outline:!0,color:"secondary",style:{height:"550px"}},n.a.createElement(y.a,{align:"center"},"Isambard Kingdom Brunel"),n.a.createElement("p",null,"Imagine this is a picture!"),n.a.createElement(O.a,null,n.a.createElement(j.a,null,"Information about Brunel. This could be a long description giving some background and information. Maybe also show the dates and times of change etc..."))))),n.a.createElement(g.a,null,n.a.createElement(h.a,null,n.a.createElement(v.a,null,n.a.createElement(E.a,{align:"center"},"See the source ",n.a.createElement("a",{href:"https://github.com/chryswoods/brunel"},"on GitHub")))))))}},89:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,n=e.fluid,c=e.tag,l=Object(s.a)(e,["className","cssModule","fluid","tag"]),i=Object(d.c)(u()(t,n?"container-fluid":"container"),a);return r.a.createElement(c,Object(o.a)({},l,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},90:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p={tag:d.e,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},m=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,i=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.c)(u()(t,n?"no-gutters":null,l?"form-row":"row"),a);return r.a.createElement(c,Object(o.a)({},i,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},91:function(e,t,a){"use strict";var o=a(3),s=a(7),n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=a(12),u=a.n(i),d=a(2),p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),b={tag:d.e,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,n=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(t,o){var s=e[t];if(delete l[t],s||""===s){var n=!o;if(Object(d.a)(s)){var r,c=n?"-":"-"+t+"-",p=g(n,t,s.size);i.push(Object(d.c)(u()(((r={})[p]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),a))}else{var m=g(n,t,s);i.push(m)}}})),i.length||i.push("col");var p=Object(d.c)(u()(t,i),a);return r.a.createElement(c,Object(o.a)({},l,{className:p}))};h.propTypes=b,h.defaultProps=f,t.a=h}}]);
//# sourceMappingURL=11.99a28e3e.chunk.js.map