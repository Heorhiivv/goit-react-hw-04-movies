(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{31:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},32:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return c}))},33:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(c,arguments,i)}else e=c.apply(this,arguments);return o(this,e)}}e.d(n,"a",(function(){return i}))},34:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return c}))},35:function(t,n,e){"use strict";var r="https://api.themoviedb.org/3",c="c19c5b12e1a277621ccd20a2c2d3142a";n.a={fetchMovieDetails:function(t){return fetch("".concat(r,"/movie/").concat(t,"?api_key=").concat(c)).then((function(t){return t.json()}))},fetchMovieWithQuery:function(t){return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.json()})).then((function(t){return t.results}))},fetchPerson:function(t){return fetch("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.json()})).then((function(t){return t.cast}))},fetchReviews:function(t){return fetch("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.json()})).then((function(t){return t.results}))},fetchTrandingMovies:function(){return fetch("".concat(r,"/trending/movie/week?api_key=").concat(c)).then((function(t){return t.json()}))}}},74:function(t,n,e){"use strict";e.r(n);var r=e(31),c=e(32),o=e(34),i=e(33),u=e(1),a=e(0),f=e(10),s=e(35),l=function(t){Object(o.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(r.a)(this,e);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))).state={trend:[]},t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;s.a.fetchTrandingMovies().then((function(n){return t.setState({trend:n.results})}))}},{key:"render",value:function(){var t=this.state.trend;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:" Trending today"}),t.length>0&&Object(u.jsx)("ul",{children:t.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}}]),e}(a.Component);n.default=l}}]);
//# sourceMappingURL=HomePage.e6e74204.chunk.js.map