/*! Copyright Novix S.A. 2019. All rights reserved. */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{752:function(e,f,r){(function(e){var r;
/** echo  * @license echo  * while read i do echo  *  done echo
*/(function(){var n,t,a,u,c,l,o,i,d,s,b,h,g,p,m,v,y,w,k,M,_,N,x,P,A,G,q,B,R,L,j,O,S;o=function(e,f,r,t){return new n(e,f,r,t)},void 0!==e&&null!==e&&null!=e.exports&&(e.exports=o),void 0===(r=function(){return o}.apply(f,[]))||(e.exports=r),o.color=function(e,f,r,t){return new n(e,f,r,t)},o.hsl=function(e,f,r,t){return new n(e,f,r,t,"hsl")},o.hsv=function(e,f,r,t){return new n(e,f,r,t,"hsv")},o.rgb=function(e,f,r,t){return new n(e,f,r,t,"rgb")},o.hex=function(e){return new n(e)},o.css=function(e){return new n(e)},o.lab=function(e,f,r){return new n(e,f,r,"lab")},o.lch=function(e,f,r){return new n(e,f,r,"lch")},o.hsi=function(e,f,r){return new n(e,f,r,"hsi")},o.gl=function(e,f,r,t){return new n(255*e,255*f,255*r,t,"gl")},o.mix=o.interpolate=function(e,f,r,t){return null==e||null==f?"#000":("string"===L(e)&&(e=new n(e)),"string"===L(f)&&(f=new n(f)),e.interpolate(r,f,t))},o.contrast=function(e,f){var r,t;return"string"===L(e)&&(e=new n(e)),"string"===L(f)&&(f=new n(f)),(r=e.luminance())>(t=f.luminance())?(r+.05)/(t+.05):(t+.05)/(r+.05)},o.luminance=function(e){return o(e).luminance()},o._Color=n,n=function(){function e(){var e,f,r,n,t,a,u,c,l,o,d,s,m,y;for(t=this,r=[],l=0,o=arguments.length;l<o;l++)null!=(f=arguments[l])&&r.push(f);if(0===r.length)a=(d=[255,0,255,1,"rgb"])[0],u=d[1],c=d[2],e=d[3],n=d[4];else if("array"===L(r[0])){if(3===r[0].length)a=(s=r[0])[0],u=s[1],c=s[2],e=1;else{if(4!==r[0].length)throw"unknown input argument";a=(m=r[0])[0],u=m[1],c=m[2],e=m[3]}n=r[1]}else"string"===L(r[0])?(a=r[0],n="hex"):"object"===L(r[0])?(a=(y=r[0]._rgb)[0],u=y[1],c=y[2],e=y[3],n="rgb"):r.length>=3&&(a=r[0],u=r[1],c=r[2]);3===r.length?(n="rgb",e=1):4===r.length?"string"===L(r[3])?(n=r[3],e=1):"number"===L(r[3])&&(n="rgb",e=r[3]):5===r.length&&(e=r[3],n=r[4]),null==e&&(e=1),"rgb"===n?t._rgb=[a,u,c,e]:"gl"===n?t._rgb=[255*a,255*u,255*c,e]:"hsl"===n?(t._rgb=g(a,u,c),t._rgb[3]=e):"hsv"===n?(t._rgb=p(a,u,c),t._rgb[3]=e):"hex"===n?t._rgb=b(a):"lab"===n?(t._rgb=v(a,u,c),t._rgb[3]=e):"lch"===n?(t._rgb=k(a,u,c),t._rgb[3]=e):"hsi"===n&&(t._rgb=h(a,u,c),t._rgb[3]=e),i(t._rgb)}return e.prototype.rgb=function(){return this._rgb.slice(0,3)},e.prototype.rgba=function(){return this._rgb},e.prototype.hex=function(){return x(this._rgb)},e.prototype.toString=function(){return this.name()},e.prototype.hsl=function(){return A(this._rgb)},e.prototype.hsv=function(){return G(this._rgb)},e.prototype.lab=function(){return q(this._rgb)},e.prototype.lch=function(){return B(this._rgb)},e.prototype.hsi=function(){return P(this._rgb)},e.prototype.gl=function(){return[this._rgb[0]/255,this._rgb[1]/255,this._rgb[2]/255,this._rgb[3]]},e.prototype.luminance=function(){return _(this._rgb)},e.prototype.name=function(){var e,f;for(f in e=this.hex(),o.colors)if(e===o.colors[f])return f;return e},e.prototype.alpha=function(e){return arguments.length?(this._rgb[3]=e,this):this._rgb[3]},e.prototype.css=function(e){var f,r,n;return null==e&&(e="rgb"),this,r=this._rgb,3===e.length&&r[3]<1&&(e+="a"),"rgb"===e?e+"("+r.slice(0,3).join(",")+")":"rgba"===e?e+"("+r.join(",")+")":"hsl"===e||"hsla"===e?(n=function(e){return Math.round(100*e)/100},(f=this.hsl())[0]=n(f[0]),f[1]=n(100*f[1])+"%",f[2]=n(100*f[2])+"%",4===e.length&&(f[3]=r[3]),e+"("+f.join(",")+")"):void 0},e.prototype.interpolate=function(f,r,n){var t,a,u,c,l,o,i,d,s,b,h,g,p;if(i=this,null==n&&(n="rgb"),"string"===L(r)&&(r=new e(r)),"hsl"===n||"hsv"===n||"lch"===n||"hsi"===n)"hsl"===n?(g=i.hsl(),p=r.hsl()):"hsv"===n?(g=i.hsv(),p=r.hsv()):"hsi"===n?(g=i.hsi(),p=r.hsi()):"lch"===n&&(g=i.lch(),p=r.lch()),"h"===n.substr(0,1)?(a=g[0],b=g[1],l=g[2],u=p[0],h=p[1],o=p[2]):(l=g[0],b=g[1],a=g[2],o=p[0],h=p[1],u=p[2]),isNaN(a)||isNaN(u)?isNaN(a)?isNaN(u)?t=Number.NaN:(t=u,1!==l&&0!==l||(s=h)):(t=a,1!==o&&0!==o||(s=b)):t=a+f*(u>a&&u-a>180?u-(a+360):u<a&&a-u>180?u+360-a:u-a),null==s&&(s=b+f*(h-b)),c=l+f*(o-l),d="h"===n.substr(0,1)?new e(t,s,c,n):new e(c,s,t,n);else if("rgb"===n)g=i._rgb,p=r._rgb,d=new e(g[0]+f*(p[0]-g[0]),g[1]+f*(p[1]-g[1]),g[2]+f*(p[2]-g[2]),n);else{if("lab"!==n)throw"color mode "+n+" is not supported";g=i.lab(),p=r.lab(),d=new e(g[0]+f*(p[0]-g[0]),g[1]+f*(p[1]-g[1]),g[2]+f*(p[2]-g[2]),n)}return d.alpha(i.alpha()+f*(r.alpha()-i.alpha())),d},e.prototype.premultiply=function(){var e,f;return f=this.rgb(),e=this.alpha(),o(f[0]*e,f[1]*e,f[2]*e,e)},e.prototype.darken=function(e){var f;return null==e&&(e=20),this,(f=this.lch())[0]-=e,o.lch(f).alpha(this.alpha())},e.prototype.darker=function(e){return this.darken(e)},e.prototype.brighten=function(e){return null==e&&(e=20),this.darken(-e)},e.prototype.brighter=function(e){return this.brighten(e)},e.prototype.saturate=function(e){var f;return null==e&&(e=20),this,(f=this.lch())[1]+=e,o.lch(f).alpha(this.alpha())},e.prototype.desaturate=function(e){return null==e&&(e=20),this.saturate(-e)},e}(),i=function(e){var f;for(f in e)f<3?(e[f]<0&&(e[f]=0),e[f]>255&&(e[f]=255)):3===f&&(e[f]<0&&(e[f]=0),e[f]>1&&(e[f]=1));return e},s=function(e){var f,r,n,t,a,u,c,l;if(e=e.toLowerCase(),null!=o.colors&&o.colors[e])return b(o.colors[e]);if(n=e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){for(t=n.slice(1,4),r=a=0;a<=2;r=++a)t[r]=+t[r];t[3]=1}else if(n=e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))for(t=n.slice(1,5),r=u=0;u<=3;r=++u)t[r]=+t[r];else if(n=e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)){for(t=n.slice(1,4),r=c=0;c<=2;r=++c)t[r]=Math.round(2.55*t[r]);t[3]=1}else if(n=e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)){for(t=n.slice(1,5),r=l=0;l<=2;r=++l)t[r]=Math.round(2.55*t[r]);t[3]=+t[3]}else(n=e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))?((f=n.slice(1,4))[1]*=.01,f[2]*=.01,(t=g(f))[3]=1):(n=e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/))&&((f=n.slice(1,4))[1]*=.01,f[2]*=.01,(t=g(f))[3]=+n[4]);return t},b=function(e){var f,r;if(e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))return 4!==e.length&&7!==e.length||(e=e.substr(1)),3===e.length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[(r=parseInt(e,16))>>16,r>>8&255,255&r,1];if(e.match(/^#?([A-Fa-f0-9]{8})$/))return 9===e.length&&(e=e.substr(1)),[(r=parseInt(e,16))>>24&255,r>>16&255,r>>8&255,255&r];if(f=s(e))return f;throw"unknown color: "+e},h=function(e,f,r){var n,u,c,l;return e=(l=j(arguments))[0],f=l[1],r=l[2],(e/=360)<1/3?u=1-((n=(1-f)/3)+(c=(1+f*d(a*e)/d(t-a*e))/3)):e<2/3?n=1-((c=(1-f)/3)+(u=(1+f*d(a*(e-=1/3))/d(t-a*e))/3)):c=1-((u=(1-f)/3)+(n=(1+f*d(a*(e-=2/3))/d(t-a*e))/3)),[255*(c=M(r*c*3)),255*(u=M(r*u*3)),255*(n=M(r*n*3))]},g=function(){var e,f,r,n,t,a,u,c,l,o,i,d,s,b;if(n=(s=j(arguments))[0],c=s[1],a=s[2],0===c)u=r=e=255*a;else{for(i=[0,0,0],f=[0,0,0],l=2*a-(o=a<.5?a*(1+c):a+c-a*c),n/=360,i[0]=n+1/3,i[1]=n,i[2]=n-1/3,t=d=0;d<=2;t=++d)i[t]<0&&(i[t]+=1),i[t]>1&&(i[t]-=1),6*i[t]<1?f[t]=l+6*(o-l)*i[t]:2*i[t]<1?f[t]=o:3*i[t]<2?f[t]=l+(o-l)*(2/3-i[t])*6:f[t]=l;u=(b=[Math.round(255*f[0]),Math.round(255*f[1]),Math.round(255*f[2])])[0],r=b[1],e=b[2]}return[u,r,e]},p=function(){var e,f,r,n,t,a,u,c,l,o,i,d,s,b,h,g,p,m;if(n=(d=j(arguments))[0],l=d[1],i=d[2],i*=255,0===l)c=r=e=i;else switch(360===n&&(n=0),n>360&&(n-=360),n<0&&(n+=360),a=i*(1-l),u=i*(1-l*(f=(n/=60)-(t=Math.floor(n)))),o=i*(1-l*(1-f)),t){case 0:c=(s=[i,o,a])[0],r=s[1],e=s[2];break;case 1:c=(b=[u,i,a])[0],r=b[1],e=b[2];break;case 2:c=(h=[a,i,o])[0],r=h[1],e=h[2];break;case 3:c=(g=[a,u,i])[0],r=g[1],e=g[2];break;case 4:c=(p=[o,a,i])[0],r=p[1],e=p[2];break;case 5:c=(m=[i,a,u])[0],r=m[1],e=m[2]}return[c=Math.round(c),r=Math.round(r),e=Math.round(e)]},u=.95047,c=1.08883,m=function(){var e,f,r,n;return r=(n=j(arguments))[0],e=n[1],f=n[2],[r,Math.sqrt(e*e+f*f),Math.atan2(f,e)/Math.PI*180]},v=function(e,f,r){var n,t,a,l,o,i,d;return void 0!==e&&3===e.length&&(e=(i=e)[0],f=i[1],r=i[2]),void 0!==e&&3===e.length&&(e=(d=e)[0],f=d[1],r=d[2]),o=(l=(e+16)/116)-r/200,a=y(a=l+f/500)*u,l=1*y(l),o=y(o)*c,t=S(3.2404542*a-1.5371385*l-.4985314*o),n=S(-.969266*a+1.8760108*l+.041556*o),r=S(.0556434*a-.2040259*l+1.0572252*o),[M(t,0,255),M(n,0,255),M(r,0,255),1]},y=function(e){return e>.206893034?e*e*e:(e-4/29)/7.787037},S=function(e){return Math.round(255*(e<=.00304?12.92*e:1.055*Math.pow(e,1/2.4)-.055))},w=function(){var e,f,r,n;return r=(n=j(arguments))[0],e=n[1],f=(f=n[2])*Math.PI/180,[r,Math.cos(f)*e,Math.sin(f)*e]},k=function(e,f,r){var n,t,a,u,c,l,o;return n=(l=w(e,f,r))[0],t=l[1],a=l[2],c=(o=v(n,t,a))[0],u=o[1],a=o[2],[M(c,0,255),M(u,0,255),M(a,0,255)]},_=function(e,f,r){var n;return e=(n=j(arguments))[0],f=n[1],r=n[2],.2126*(e=N(e))+.7152*(f=N(f))+.0722*(r=N(r))},N=function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)},x=function(){var e,f;return"#"+(e="000000"+((f=j(arguments))[0]<<16|f[1]<<8|f[2]).toString(16)).substr(e.length-6)},P=function(){var e,f,r,n,t,a,u,c;return a=(c=j(arguments))[0],r=c[1],f=c[2],e=2*Math.PI,a/=255,r/=255,f/=255,0===(u=1-Math.min(a,r,f)/(t=(a+r+f)/3))?n=0:(n=(a-r+(a-f))/2,n/=Math.sqrt((a-r)*(a-r)+(a-f)*(r-f)),n=Math.acos(n),f>r&&(n=e-n),n/=e),[360*n,u,t]},A=function(e,f,r){var n,t,a,u,c,l;return void 0!==e&&e.length>=3&&(e=(l=e)[0],f=l[1],r=l[2]),e/=255,f/=255,r/=255,u=Math.min(e,f,r),t=((a=Math.max(e,f,r))+u)/2,a===u?(c=0,n=Number.NaN):c=t<.5?(a-u)/(a+u):(a-u)/(2-a-u),e===a?n=(f-r)/(a-u):f===a?n=2+(r-e)/(a-u):r===a&&(n=4+(e-f)/(a-u)),(n*=60)<0&&(n+=360),[n,c,t]},G=function(){var e,f,r,n,t,a,u,c,l,o;return u=(o=j(arguments))[0],r=o[1],e=o[2],a=Math.min(u,r,e),f=(t=Math.max(u,r,e))-a,l=t/255,0===t?(n=Number.NaN,c=0):(c=f/t,u===t&&(n=(r-e)/f),r===t&&(n=2+(e-u)/f),e===t&&(n=4+(u-r)/f),(n*=60)<0&&(n+=360)),[n,c,l]},q=function(){var e,f,r,n,t,a;return r=(a=j(arguments))[0],f=a[1],e=a[2],r=R(r),f=R(f),e=R(e),n=O((.4124564*r+.3575761*f+.1804375*e)/u),[116*(t=O((.2126729*r+.7151522*f+.072175*e)/1))-16,500*(n-t),200*(t-O((.0193339*r+.119192*f+.9503041*e)/c))]},R=function(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},O=function(e){return e>.008856?Math.pow(e,1/3):7.787037*e+4/29},B=function(){var e,f,r,n,t,a,u;return t=(a=j(arguments))[0],r=a[1],f=a[2],n=(u=q(t,r,f))[0],e=u[1],f=u[2],m(n,e,f)},o.scale=function(e,f){var r,n,t,a,u,c,l,i,d,s,b,h,g,p,m,v,y,w,k;return p="rgb",m=o("#ccc"),k=0,!1,b=[0,1],d=[],y=!1,w=[],g=0,h=1,s=!1,v=0,i={},u=function(e,f){var r,n,t,u,c,l,i;if(null==e&&(e=["#ddd","#222"]),null!=e&&"string"===L(e)&&null!=(null!=(c=o.brewer)?c[e]:void 0)&&(e=o.brewer[e]),"array"===L(e)){for(r=t=0,l=(e=e.slice(0)).length-1;0<=l?t<=l:t>=l;r=0<=l?++t:--t)n=e[r],"string"===L(n)&&(e[r]=o(n));if(null!=f)w=f;else for(w=[],r=u=0,i=e.length-1;0<=i?u<=i:u>=i;r=0<=i?++u:--u)w.push(r/(e.length-1))}return a(),d=e},c=function(e){return null==e&&(e=[]),b=e,g=e[0],h=e[e.length-1],a(),v=2===e.length?0:e.length-1},n=function(e){var f,r;if(null!=b){for(r=b.length-1,f=0;f<r&&e>=b[f];)f++;return f-1}return 0},l=function(e){return e},function(e){var f,r,t,a,u;return u=e,b.length>2&&(a=b.length-1,f=n(e),t=b[0]+(b[1]-b[0])*(0+.5*k),r=b[a-1]+(b[a]-b[a-1])*(1-.5*k),u=g+(b[f]+.5*(b[f+1]-b[f])-t)/(r-t)*(h-g)),u},t=function(e,f){var r,t,a,u,c,s,y;if(null==f&&(f=!1),isNaN(e))return m;if(f?c=e:b.length>2?c=n(e)/(v-1):(c=(e-g)/(h-g),c=Math.min(1,Math.max(0,c))),f||(c=l(c)),a=Math.floor(1e4*c),i[a])r=i[a];else{if("array"===L(d))for(t=s=0,y=w.length-1;0<=y?s<=y:s>=y;t=0<=y?++s:--s){if(c<=(u=w[t])){r=d[t];break}if(c>=u&&t===w.length-1){r=d[t];break}if(c>u&&c<w[t+1]){c=(c-u)/(w[t+1]-u),r=o.interpolate(d[t],d[t+1],c,p);break}}else"function"===L(d)&&(r=d(c));i[a]=r}return r},a=function(){return i={}},u(e,f),(r=function(e){var f;return f=t(e),y&&f[y]?f[y]():f}).domain=function(e,f,n,t){var a;return null==n&&(n="e"),arguments.length?(null!=f&&(a=o.analyze(e,t),e=0===f?[a.min,a.max]:o.limits(a,n,f)),c(e),r):b},r.mode=function(e){return arguments.length?(p=e,a(),r):p},r.range=function(e,f){return u(e,f),r},r.out=function(e){return y=e,r},r.spread=function(e){return arguments.length?(k=e,r):k},r.correctLightness=function(e){return arguments.length?(s=e,a(),l=s?function(e){var f,r,n,a,u,c,l,o,i;for(f=t(0,!0).lab()[0],r=t(1,!0).lab()[0],l=f>r,n=t(e,!0).lab()[0],a=n-(u=f+(r-f)*e),o=0,i=1,c=20;Math.abs(a)>.01&&c-- >0;)l&&(a*=-1),a<0?(o=e,e+=.5*(i-e)):(i=e,e+=.5*(o-e)),n=t(e,!0).lab()[0],a=n-u;return e}:function(e){return e},r):s},r.colors=function(f){var n,t,a,u,c,l;if(null==f&&(f="hex"),e=[],t=[],b.length>2)for(n=a=1,l=b.length;1<=l?a<l:a>l;n=1<=l?++a:--a)t.push(.5*(b[n-1]+b[n]));else t=b;for(u=0,c=t.length;u<c;u++)n=t[u],e.push(r(n)[f]());return e},r},null==o.scales&&(o.scales={}),o.scales.cool=function(){return o.scale([o.hsl(180,1,.9),o.hsl(250,.7,.4)])},o.scales.hot=function(){return o.scale(["#000","#f00","#ff0","#fff"],[0,.25,.75,1]).mode("rgb")},o.analyze=function(e,f,r){var n,t,a,u,c,l;if(a={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},null==r&&(r=function(){return!0}),n=function(e){null==e||isNaN(e)||(a.values.push(e),a.sum+=e,e<a.min&&(a.min=e),e>a.max&&(a.max=e),a.count+=1)},u=function(e,t){if(r(e,t))return null!=f&&"function"===L(f)?n(f(e)):null!=f&&"string"===L(f)||"number"===L(f)?n(e[f]):n(e)},"array"===L(e))for(c=0,l=e.length;c<l;c++)u(e[c]);else for(t in e)u(e[t],t);return a.domain=[a.min,a.max],a.limits=function(e,f){return o.limits(a,e,f)},a},o.limits=function(e,f,r){var n,t,a,u,c,l,i,d,s,b,h,g,p,m,v,y,w,k,M,_,N,x,P,A,G,q,B,R,L,j,O,S,I,Y,E,z,F,U,C,V,X,D,J,$,H,K,Q,T,W,Z,ee,fe,re,ne,te;if(null==f&&(f="equal"),null==r&&(r=7),null==e.values&&(e=o.analyze(e)),p=e.min,h=e.max,e.sum,G=e.values.sort(function(e,f){return e-f}),b=[],"c"===f.substr(0,1)&&(b.push(p),b.push(h)),"e"===f.substr(0,1)){for(b.push(p),i=q=1,z=r-1;1<=z?q<=z:q>=z;i=1<=z?++q:--q)b.push(p+i/r*(h-p));b.push(h)}else if("l"===f.substr(0,1)){if(p<=0)throw"Logarithmic scales are only possible for values > 0";for(m=Math.LOG10E*Math.log(p),g=Math.LOG10E*Math.log(h),b.push(p),i=B=1,J=r-1;1<=J?B<=J:B>=J;i=1<=J?++B:--B)b.push(Math.pow(10,m+i/r*(g-m)));b.push(h)}else if("q"===f.substr(0,1)){for(b.push(p),i=R=1,$=r-1;1<=$?R<=$:R>=$;i=1<=$?++R:--R)M=G.length*i/r,(_=Math.floor(M))===M?b.push(G[_]):(N=M-_,b.push(G[_]*N+G[_+1]*(1-N)));b.push(h)}else if("k"===f.substr(0,1)){for(y=G.length,n=new Array(y),c=new Array(r),x=!0,w=0,a=null,(a=[]).push(p),i=L=1,H=r-1;1<=H?L<=H:L>=H;i=1<=H?++L:--L)a.push(p+i/r*(h-p));for(a.push(h);x;){for(d=j=0,K=r-1;0<=K?j<=K:j>=K;d=0<=K?++j:--j)c[d]=0;for(i=O=0,Q=y-1;0<=Q?O<=Q:O>=Q;i=0<=Q?++O:--O){for(A=G[i],v=Number.MAX_VALUE,d=S=0,T=r-1;0<=T?S<=T:S>=T;d=0<=T?++S:--S)(l=Math.abs(a[d]-A))<v&&(v=l,t=d);c[t]++,n[i]=t}for(k=new Array(r),d=I=0,W=r-1;0<=W?I<=W:I>=W;d=0<=W?++I:--I)k[d]=null;for(i=Y=0,Z=y-1;0<=Z?Y<=Z:Y>=Z;i=0<=Z?++Y:--Y)null===k[u=n[i]]?k[u]=G[i]:k[u]+=G[i];for(d=E=0,F=r-1;0<=F?E<=F:E>=F;d=0<=F?++E:--E)k[d]*=1/c[d];for(x=!1,d=ee=0,U=r-1;0<=U?ee<=U:ee>=U;d=0<=U?++ee:--ee)if(k[d]!==a[i]){x=!0;break}a=k,++w>200&&(x=!1)}for(s={},d=fe=0,C=r-1;0<=C?fe<=C:fe>=C;d=0<=C?++fe:--fe)s[d]=[];for(i=re=0,V=y-1;0<=V?re<=V:re>=V;i=0<=V?++re:--re)s[u=n[i]].push(G[i]);for(P=[],d=ne=0,X=r-1;0<=X?ne<=X:ne>=X;d=0<=X?++ne:--ne)P.push(s[d][0]),P.push(s[d][s[d].length-1]);for(P=P.sort(function(e,f){return e-f}),b.push(P[0]),i=te=1,D=P.length-1;te<=D;i=te+=2)isNaN(P[i])||b.push(P[i])}return b},
/**
  	ColorBrewer colors for chroma.js
  
  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
  	Pennsylvania State University.
  
  	Licensed under the Apache License, Version 2.0 (the "License"); 
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at	
  	http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software distributed
  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
  	specific language governing permissions and limitations under the License.
  
      @preserve
  */
o.brewer={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},o.colors={indigo:"#4b0082",gold:"#ffd700",hotpink:"#ff69b4",firebrick:"#b22222",indianred:"#cd5c5c",yellow:"#ffff00",mistyrose:"#ffe4e1",darkolivegreen:"#556b2f",olive:"#808000",darkseagreen:"#8fbc8f",pink:"#ffc0cb",tomato:"#ff6347",lightcoral:"#f08080",orangered:"#ff4500",navajowhite:"#ffdead",lime:"#00ff00",palegreen:"#98fb98",darkslategrey:"#2f4f4f",greenyellow:"#adff2f",burlywood:"#deb887",seashell:"#fff5ee",mediumspringgreen:"#00fa9a",fuchsia:"#ff00ff",papayawhip:"#ffefd5",blanchedalmond:"#ffebcd",chartreuse:"#7fff00",dimgray:"#696969",black:"#000000",peachpuff:"#ffdab9",springgreen:"#00ff7f",aquamarine:"#7fffd4",white:"#ffffff",orange:"#ffa500",lightsalmon:"#ffa07a",darkslategray:"#2f4f4f",brown:"#a52a2a",ivory:"#fffff0",dodgerblue:"#1e90ff",peru:"#cd853f",lawngreen:"#7cfc00",chocolate:"#d2691e",crimson:"#dc143c",forestgreen:"#228b22",darkgrey:"#a9a9a9",lightseagreen:"#20b2aa",cyan:"#00ffff",mintcream:"#f5fffa",silver:"#c0c0c0",antiquewhite:"#faebd7",mediumorchid:"#ba55d3",skyblue:"#87ceeb",gray:"#808080",darkturquoise:"#00ced1",goldenrod:"#daa520",darkgreen:"#006400",floralwhite:"#fffaf0",darkviolet:"#9400d3",darkgray:"#a9a9a9",moccasin:"#ffe4b5",saddlebrown:"#8b4513",grey:"#808080",darkslateblue:"#483d8b",lightskyblue:"#87cefa",lightpink:"#ffb6c1",mediumvioletred:"#c71585",slategrey:"#708090",red:"#ff0000",deeppink:"#ff1493",limegreen:"#32cd32",darkmagenta:"#8b008b",palegoldenrod:"#eee8aa",plum:"#dda0dd",turquoise:"#40e0d0",lightgrey:"#d3d3d3",lightgoldenrodyellow:"#fafad2",darkgoldenrod:"#b8860b",lavender:"#e6e6fa",maroon:"#800000",yellowgreen:"#9acd32",sandybrown:"#f4a460",thistle:"#d8bfd8",violet:"#ee82ee",navy:"#000080",magenta:"#ff00ff",dimgrey:"#696969",tan:"#d2b48c",rosybrown:"#bc8f8f",olivedrab:"#6b8e23",blue:"#0000ff",lightblue:"#add8e6",ghostwhite:"#f8f8ff",honeydew:"#f0fff0",cornflowerblue:"#6495ed",slateblue:"#6a5acd",linen:"#faf0e6",darkblue:"#00008b",powderblue:"#b0e0e6",seagreen:"#2e8b57",darkkhaki:"#bdb76b",snow:"#fffafa",sienna:"#a0522d",mediumblue:"#0000cd",royalblue:"#4169e1",lightcyan:"#e0ffff",green:"#008000",mediumpurple:"#9370db",midnightblue:"#191970",cornsilk:"#fff8dc",paleturquoise:"#afeeee",bisque:"#ffe4c4",slategray:"#708090",darkcyan:"#008b8b",khaki:"#f0e68c",wheat:"#f5deb3",teal:"#008080",darkorchid:"#9932cc",deepskyblue:"#00bfff",salmon:"#fa8072",darkred:"#8b0000",steelblue:"#4682b4",palevioletred:"#db7093",lightslategray:"#778899",aliceblue:"#f0f8ff",lightslategrey:"#778899",lightgreen:"#90ee90",orchid:"#da70d6",gainsboro:"#dcdcdc",mediumseagreen:"#3cb371",lightgray:"#d3d3d3",mediumturquoise:"#48d1cc",lemonchiffon:"#fffacd",cadetblue:"#5f9ea0",lightyellow:"#ffffe0",lavenderblush:"#fff0f5",coral:"#ff7f50",purple:"#800080",aqua:"#00ffff",whitesmoke:"#f5f5f5",mediumslateblue:"#7b68ee",darkorange:"#ff8c00",mediumaquamarine:"#66cdaa",darksalmon:"#e9967a",beige:"#f5f5dc",blueviolet:"#8a2be2",azure:"#f0ffff",lightsteelblue:"#b0c4de",oldlace:"#fdf5e6"},L=function(){var e,f,r,n,t;for(e={},r=0,n=(t="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length;r<n;r++)f=t[r],e["[object "+f+"]"]=f.toLowerCase();return function(f){var r;return r=Object.prototype.toString.call(f),e[r]||"object"}}(),M=function(e,f,r){return null==f&&(f=0),null==r&&(r=1),e<f&&(e=f),e>r&&(e=r),e},j=function(e){return e.length>=3?e:e[0]},a=2*Math.PI,t=Math.PI/3,d=Math.cos,l=function(e){var f,r,n,t,a,u,c,i,d,s,b;return 2===(e=function(){var f,r,n;for(n=[],f=0,r=e.length;f<r;f++)t=e[f],n.push(o(t));return n}()).length?(d=function(){var f,r,n;for(n=[],f=0,r=e.length;f<r;f++)t=e[f],n.push(t.lab());return n}(),a=d[0],u=d[1],f=function(e){var f,r;return r=function(){var r,n;for(n=[],f=r=0;r<=2;f=++r)n.push(a[f]+e*(u[f]-a[f]));return n}(),o.lab.apply(o,r)}):3===e.length?(s=function(){var f,r,n;for(n=[],f=0,r=e.length;f<r;f++)t=e[f],n.push(t.lab());return n}(),a=s[0],u=s[1],c=s[2],f=function(e){var f,r;return r=function(){var r,n;for(n=[],f=r=0;r<=2;f=++r)n.push((1-e)*(1-e)*a[f]+2*(1-e)*e*u[f]+e*e*c[f]);return n}(),o.lab.apply(o,r)}):4===e.length?(b=function(){var f,r,n;for(n=[],f=0,r=e.length;f<r;f++)t=e[f],n.push(t.lab());return n}(),a=b[0],u=b[1],c=b[2],i=b[3],f=function(e){var f,r;return r=function(){var r,n;for(n=[],f=r=0;r<=2;f=++r)n.push((1-e)*(1-e)*(1-e)*a[f]+3*(1-e)*(1-e)*e*u[f]+3*(1-e)*e*e*c[f]+e*e*e*i[f]);return n}(),o.lab.apply(o,r)}):5===e.length&&(r=l(e.slice(0,3)),n=l(e.slice(2,5)),f=function(e){return e<.5?r(2*e):n(2*(e-.5))}),f},o.interpolate.bezier=l}).call(this)}).call(this,r(64)(e))}}]);