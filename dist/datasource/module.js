/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/runtime","@grafana/data","lodash"],(function(e,t,n,r,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=33)}({0:function(t,n){t.exports=e},1:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"e",(function(){return f}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function d(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e}function f(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}},2:function(e,n){e.exports=t},23:function(e,t){e.exports=o},33:function(e,t,n){"use strict";n.r(t);var r,o=n(5),a=n(1);!function(e){e.Probes="probes",e.Checks="checks"}(r||(r={}));var i={queryType:r.Probes},c=n(4),u=function(e){function t(t){var n=e.call(this,t)||this;return n.instanceSettings=t,n}return Object(a.c)(t,e),t.prototype.getMetricsDS=function(){return c.config.datasources[this.instanceSettings.jsonData.metrics.grafanaName]},t.prototype.query=function(e){return Object(a.b)(this,void 0,Promise,(function(){var t,n,i,c,u,s,l,d,f,p,h;return Object(a.d)(this,(function(b){switch(b.label){case 0:t=[],b.label=1;case 1:b.trys.push([1,8,9,10]),n=Object(a.i)(e.targets),i=n.next(),b.label=2;case 2:return i.done?[3,7]:(c=i.value).queryType!==r.Probes?[3,4]:[4,this.listProbes()];case 3:return u=b.sent(),(l=new o.ArrayDataFrame(u)).setFieldType("onelineChange",o.FieldType.time,(function(e){return 1e3*e})),l.setFieldType("created",o.FieldType.time,(function(e){return 1e3*e})),l.setFieldType("modified",o.FieldType.time,(function(e){return 1e3*e})),l.refId=c.refId,t.push(l),[3,6];case 4:return c.queryType!==r.Checks?[3,6]:[4,this.listChecks()];case 5:s=b.sent(),(l=new o.ArrayDataFrame(s)).setFieldType("created",o.FieldType.time,(function(e){return 1e3*e})),l.setFieldType("modified",o.FieldType.time,(function(e){return 1e3*e})),l.refId=c.refId,d=Object(a.a)(Object(a.a)({},l),{fields:l.fields,length:s.length}),console.log("FRAME",l.length),t.push(d),b.label=6;case 6:return i=n.next(),[3,2];case 7:return[3,10];case 8:return f=b.sent(),p={error:f},[3,10];case 9:try{i&&!i.done&&(h=n.return)&&h.call(n)}finally{if(p)throw p.error}return[7];case 10:return[2,{data:t}]}}))}))},t.prototype.listProbes=function(){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(e){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"GET",url:this.instanceSettings.url+"/sm/probe/list"}).then((function(e){return e.data}))]}))}))},t.prototype.addProbe=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/probe/add",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.deleteProbe=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"DELETE",url:this.instanceSettings.url+"/sm/probe/delete/"+e}).then((function(e){return e.data}))]}))}))},t.prototype.updateProbe=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return console.log("updating probe.",e),[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/probe/update",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.resetProbeToken=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return console.log("updating probe.",e),[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/probe/update?reset-token=true",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.listChecks=function(){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(e){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"GET",url:this.instanceSettings.url+"/sm/check/list"}).then((function(e){return e.data}))]}))}))},t.prototype.addCheck=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/check/add",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.deleteCheck=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"DELETE",url:this.instanceSettings.url+"/sm/check/delete/"+e}).then((function(e){return e.data}))]}))}))},t.prototype.updateCheck=function(e){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(t){return console.log("updating check.",e),[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/check/update",data:e}).then((function(e){return e.data}))]}))}))},t.prototype.normalizeURL=function(e){return e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e},t.prototype.registerInit=function(e,t){return Object(a.b)(this,void 0,Promise,(function(){var n,r;return Object(a.d)(this,(function(o){switch(o.label){case 0:return n=Object(c.getBackendSrv)(),r=Object(a.a)(Object(a.a)({},this.instanceSettings),{jsonData:{apiHost:this.normalizeURL(e)},access:"proxy"}),[4,n.put("api/datasources/"+this.instanceSettings.id,r)];case 1:return o.sent(),[2,n.datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/register/init",data:{apiToken:t},headers:{"X-Grafana-NoCache":"true"}}).then((function(e){return e.data}))]}}))}))},t.prototype.onOptionsChange=function(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n;return Object(a.d)(this,(function(r){switch(r.label){case 0:return t=Object(a.a)(Object(a.a)({},this.instanceSettings),{jsonData:e,access:"proxy"}),[4,Object(c.getBackendSrv)().put("api/datasources/"+this.instanceSettings.id,t)];case 1:return n=r.sent(),console.log("updated datasource config",n),[2]}}))}))},t.prototype.registerSave=function(e,t,n){return Object(a.b)(this,void 0,Promise,(function(){var r,o;return Object(a.d)(this,(function(i){switch(i.label){case 0:return r=Object(a.a)(Object(a.a)({},this.instanceSettings),{jsonData:t,secureJsonData:{accessToken:n},access:"proxy"}),[4,Object(c.getBackendSrv)().put("api/datasources/"+this.instanceSettings.id,r)];case 1:return o=i.sent(),console.log("Saved accessToken, now update our configs",o),[4,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/register/save",headers:{"X-Grafana-NoCache":"true"},data:{apiToken:e,metricsInstanceId:t.metrics.hostedId,logsInstanceId:t.logs.hostedId}})];case 2:return[2,i.sent()]}}))}))},t.prototype.getViewerToken=function(e,t){return Object(a.b)(this,void 0,Promise,(function(){return Object(a.d)(this,(function(n){return[2,Object(c.getBackendSrv)().datasourceRequest({method:"POST",url:this.instanceSettings.url+"/sm/register/viewer-token",data:{apiToken:e,id:t.id,type:t.type}}).then((function(e){var t;return null===(t=e.data)||void 0===t?void 0:t.token}))]}))}))},t.prototype.testDatasource=function(){return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(t){switch(t.label){case 0:return[4,this.listProbes()];case 1:return(e=t.sent()).length?[2,{status:"OK",mesage:"Found "+e.length+" probes"}]:[2,{status:"Error",mesage:"unable to connect"}]}}))}))},t}(o.DataSourceApi),s=n(9),l=n(0),d=n.n(l),f=n(23),p=n(2),h=[{label:"Probes",value:r.Probes},{label:"Checks",value:r.Checks}],b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onQueryTypeChanged=function(e){var n=t.props,r=n.onChange,o=n.onRunQuery,i=n.query;r(Object(a.a)(Object(a.a)({},i),{queryType:e.value})),o()},t}return Object(a.c)(t,e),t.prototype.onComponentDidMount=function(){},t.prototype.render=function(){var e=Object(f.defaults)(this.props.query,i);return d.a.createElement("div",{className:"gf-form"},d.a.createElement(p.Select,{options:h,value:h.find((function(t){return t.value===e.queryType})),onChange:this.onQueryTypeChanged}))},t}(l.PureComponent);n.d(t,"plugin",(function(){return m}));var m=new o.DataSourcePlugin(u).setConfigEditor(s.a).setQueryEditor(b)},4:function(e,t){e.exports=n},5:function(e,t){e.exports=r},6:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(2),c=n(4),u=function(e){var t=e.info,n=c.config.datasources[t.grafanaName];return n?a.a.createElement("div",{className:"add-data-source-item",onClick:function(){"synthetic-monitoring-datasource"===(null==n?void 0:n.type)?Object(c.getLocationSrv)().update({partial:!1,path:"a/grafana-synthetic-monitoring-app/"}):Object(c.getLocationSrv)().update({partial:!1,path:"datasources/edit/"+(null==n?void 0:n.id)+"/"})}},a.a.createElement("img",{className:"add-data-source-item-logo",src:n.meta.info.logos.small}),a.a.createElement("div",{className:"add-data-source-item-text-wrapper"},a.a.createElement("span",{className:"add-data-source-item-text"},n.name),a.a.createElement("span",{className:"add-data-source-item-desc"},n.type)),a.a.createElement("div",{className:"add-data-source-item-actions"},a.a.createElement(i.Button,null,"Edit"))):a.a.createElement("div",null,"Loading...")},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props.settings;return e?a.a.createElement("div",null,a.a.createElement("h2",null,"Linked Data Sources"),a.a.createElement(i.Container,{margin:"sm"},a.a.createElement(u,{info:e.metrics}),a.a.createElement(u,{info:e.logs}))):a.a.createElement("div",null,"Loading...")},t}(o.PureComponent);n.d(t,"a",(function(){return s}))},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(1),o=n(0),a=n.n(o),i=n(2),c=n(6),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onAccessTokenChange=function(e){var n=t.props,o=n.onOptionsChange,a=n.options;o(Object(r.a)(Object(r.a)({},a),{secureJsonData:{accessToken:e.target.value}}))},t.onResetAccessToken=function(){var e=t.props,n=e.onOptionsChange,o=e.options;n(Object(r.a)(Object(r.a)({},o),{secureJsonFields:Object(r.a)(Object(r.a)({},o.secureJsonFields),{accessToken:!1}),secureJsonData:Object(r.a)(Object(r.a)({},o.secureJsonData),{accessToken:""})}))},t}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props.options,t=e.secureJsonFields,n=e.secureJsonData||{};function r(){return t&&t.accessToken}return a.a.createElement("div",null,s(e.jsonData)&&r()&&a.a.createElement(c.a,{settings:e.jsonData}),a.a.createElement("br",null),a.a.createElement("div",{className:"gf-form-group"},a.a.createElement("div",{className:"gf-form-inline"},a.a.createElement("div",{className:"gf-form"},a.a.createElement(i.LegacyForms.SecretFormField,{isConfigured:r(),value:n.accessToken||"",label:"Access Token",placeholder:"access token saved on the server",labelWidth:10,inputWidth:20,onReset:this.onResetAccessToken,onChange:this.onAccessTokenChange})))))},t}(o.PureComponent);function s(e){if(!e)return!1;var t=e.apiHost,n=e.metrics,r=e.logs;return!!(t&&n&&n.grafanaName&&n.hostedId)&&!!(r&&r.grafanaName&&r.hostedId)}}})}));
//# sourceMappingURL=module.js.map