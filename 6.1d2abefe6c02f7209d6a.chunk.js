(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{360:function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},e.apply(this,arguments)}n.exports=e},361:function(n,t,e){var r=e(712);n.exports=function(n,t){if(null==n)return{};var e,o,i=r(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)e=c[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}},712:function(n,t){n.exports=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}},720:function(n,t,e){"use strict";e.r(t);var r=e(8),o=e.n(r),i=e(360),c=e.n(i),a=e(361),s=e.n(a),u=e(10),p=e.n(u),l=e(12),f=e.n(l),h=e(25),d=e.n(h),b=e(26),m=e.n(b),y=e(27),O=e.n(y),v=e(1),w=e.n(v),g=e(21),j=e(55),x=e(40).a,E=function(n){var t=n.isAuthenticated,e=n.children,r=n.component,o=s()(n,["isAuthenticated","children","component"]);return w.a.createElement(j.a,c()({},o,{render:function(n){return t?r?w.a.createElement(r,n):e:w.a.createElement(x,{to:{pathname:"/auth/login",state:{from:n.location}}})}}))},k=function(n){function t(){return p()(this,t),d()(this,m()(t).apply(this,arguments))}return O()(t,n),f()(t,[{key:"render",value:function(){var n=this.props,t=n.session,e=s()(n,["session"]);return w.a.createElement(E,c()({isAuthenticated:t.isAuthenticated},e))}}]),t}(v.Component);t.default=Object(g.connect)(function(n,t){return o()({session:n.session},t)})(k)}}]);