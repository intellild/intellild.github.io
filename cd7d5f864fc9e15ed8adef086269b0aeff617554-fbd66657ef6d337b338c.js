(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6Gk8":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("9eSz"),d=a.n(s);t.a=function(){var e,t,a,s,l=Object(n.useStaticQuery)("916993862"),o=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,u=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social,c=null==l||null===(a=l.avatar)||void 0===a||null===(s=a.childImageSharp)||void 0===s?void 0:s.fixed;return Object(i.useEffect)((function(){var e=document.createElement("script");return e.async=!0,e.src="https://platform.twitter.com/widgets.js",document.head.appendChild(e),function(){document.head.removeChild(e)}})),r.a.createElement("div",{className:"bio"},c&&r.a.createElement(d.a,{fixed:c,alt:(null==o?void 0:o.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==o?void 0:o.name)&&r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,o.name)," ",(null==o?void 0:o.summary)||null," ",(null==u?void 0:u.twitter)&&r.a.createElement("a",{href:"https://twitter.com/"+((null==u?void 0:u.twitter)||""),className:"twitter-follow-button","data-show-count":"false"},"Follow @",null==u?void 0:u.twitter)))}},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),l=i(a("pVnL")),o=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=g(t||a||[]);return i&&i.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},i&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&o.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+s+d+a+i+t+n+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=o.default.createElement(V,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?o.default.createElement("picture",null,r(i),d):d})),V=o.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,I=e.draggable,O=h||m;if(!O)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:C?1:0,transition:H?"opacity "+v+"ms":"none"},d),k="boolean"==typeof b?"lightgray":b,N={transitionDelay:v+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},H&&N,d,f),j={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:S},P=this.state.isHydrated?g(O):O[0];if(h)return o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&N)}),P.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:O,generateSources:R}),P.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:O,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,w(O),o.default.createElement(V,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:E},P,{imageVariants:O}))}}));if(m){var q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete q.display,o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},k&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},H&&N)}),P.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:O,generateSources:R}),P.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:O,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,w(O),o.default.createElement(V,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:E},P,{imageVariants:O}))}}))}return null},t}(o.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function k(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}C.propTypes={resolutions:H,sizes:T,fixed:k(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:k(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=C;t.default=N}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-fbd66657ef6d337b338c.js.map