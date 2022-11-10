;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="482466548281c759f484ec33bd6a5675";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["EOiY8aI7VLSv"]={appId:"Ek_0U0d0YWhZ",scope:{}};;CloudflareApps.installs["EOiY8aI7VLSv"].options={};;CloudflareApps.installs["pl2Kluek0o5N"]={appId:"0VJ1mCYqPTh4",scope:{}};;CloudflareApps.installs["pl2Kluek0o5N"].options={"color":{"custom":"#666666","strategy":"automatic"},"position":{"value":"bottom-right"},"shape":{"icon":"line","radius":0.16,"showBackground":false}};;CloudflareApps.installs["4nGgUxS7TcvN"]={appId:"jubd8_KdFoQk",scope:{}};;CloudflareApps.installs["4nGgUxS7TcvN"].options={"location":{"method":"append","selector":"body"},"tag":"\u003cscript src=\"https://c3ps174fd9m2.statuspage.io/embed/script.js\"\u003e\u003c/script\u003e"};;CloudflareApps.installs["4nGgUxS7TcvN"].selectors={"location.selector":"body"};;if(CloudflareApps.matchPage(CloudflareApps.installs['EOiY8aI7VLSv'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1);},function(module,exports,__webpack_require__){var cssPath=__webpack_require__(2);var asConstants=__webpack_require__(3);var storageAvailable=__webpack_require__(4);var lStorage=__webpack_require__(5);var getLocationParam=function(){return window.location.pathname;}
var shouldBackup=function(formElement){if(asConstants.excludedTypes.indexOf(formElement.type)!==-1){return false;}
for(var i=0;i<asConstants.regExps.length;i++){if(asConstants.regExps[i].test(formElement.name)){return false;}}
return true;}
var formBackedUp=[];var FormBackup=function(formElement){this.backupObject={};this.formElement=formElement;this.formPath=cssPath(formElement);formBackedUp.push(this.formPath);};FormBackup.prototype.setElemValue=function(elem,value){if(!elem.name){return false;}
this.backupObject[elem.name]=value;this.save();};FormBackup.prototype.save=function(){lStorage.setJSON(getLocationParam()+this.formPath,this.backupObject);}
FormBackup.prototype.restore=function(){var formParams=lStorage.getJSON(getLocationParam()+this.formPath);this.backupObject=formParams;for(var fieldName in formParams){var formValue=formParams[fieldName];var elem=document.getElementsByName(fieldName)[0];if(!elem.value){elem.value=formParams[fieldName];}}}
FormBackup.prototype.attachSubmitListener=function(){var me=this;this.formElement.addEventListener("submit",function(e){lStorage.clear(getLocationParam()+me.formPath);})}
FormBackup.prototype.attachInputListeners=function(){var formFields=document.querySelectorAll(this.formPath+' input,textarea');var formFieldsArr=[].slice.call(formFields);var me=this;formFieldsArr.forEach(function(field){if(!shouldBackup(field)){return;}
field.addEventListener("input",function(e){me.setElemValue(this,e.target.value);});});}
var bootstrap=function(){if(!storageAvailable("localStorage")){return false;}
var timerLength=100;var setFormBackup=function(){setTimeout(function(){for(var i=0;i<document.forms.length;i++){if(formBackedUp.indexOf(cssPath(document.forms[i]))!==-1){return false;};var formBackup=new FormBackup(document.forms[i]);formBackup.restore();formBackup.attachSubmitListener();formBackup.attachInputListeners();};timerLength*=2;setFormBackup();},timerLength);}
setFormBackup();};document.addEventListener("DOMContentLoaded",function(event){bootstrap();});if(document.readyState==="complete"){bootstrap();}},function(module,exports){var UTILS={};UTILS.cssPath=function(node,optimized)
{if(node.nodeType!==Node.ELEMENT_NODE)
return"";var steps=[];var contextNode=node;while(contextNode){var step=UTILS._cssPathStep(contextNode,!!optimized,contextNode===node);if(!step)
break;steps.push(step);if(step.optimized)
break;contextNode=contextNode.parentNode;}
steps.reverse();return steps.join(" > ");}
UTILS._cssPathStep=function(node,optimized,isTargetNode)
{if(node.nodeType!==Node.ELEMENT_NODE)
return null;var id=node.getAttribute("id");if(optimized){if(id)
return new UTILS.DOMNodePathStep(idSelector(id),true);var nodeNameLower=node.nodeName.toLowerCase();if(nodeNameLower==="body"||nodeNameLower==="head"||nodeNameLower==="html")
return new UTILS.DOMNodePathStep(node.nodeName.toLowerCase(),true);}
var nodeName=node.nodeName.toLowerCase();if(id)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase()+idSelector(id),true);var parent=node.parentNode;if(!parent||parent.nodeType===Node.DOCUMENT_NODE)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase(),true);function prefixedElementClassNames(node)
{var classAttribute=node.getAttribute("class");if(!classAttribute)
return[];return classAttribute.split(/\s+/g).filter(Boolean).map(function(name){return"$"+name;});}
function idSelector(id)
{return"#"+escapeIdentifierIfNeeded(id);}
function escapeIdentifierIfNeeded(ident)
{if(isCSSIdentifier(ident))
return ident;var shouldEscapeFirst=/^(?:[0-9]|-[0-9-]?)/.test(ident);var lastIndex=ident.length-1;return ident.replace(/./g,function(c,i){return((shouldEscapeFirst&&i===0)||!isCSSIdentChar(c))?escapeAsciiChar(c,i===lastIndex):c;});}
function escapeAsciiChar(c,isLast)
{return"\\"+toHexByte(c)+(isLast?"":" ");}
function toHexByte(c)
{var hexByte=c.charCodeAt(0).toString(16);if(hexByte.length===1)
hexByte="0"+hexByte;return hexByte;}
function isCSSIdentChar(c)
{if(/[a-zA-Z0-9_-]/.test(c))
return true;return c.charCodeAt(0)>=0xA0;}
function isCSSIdentifier(value)
{return/^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(value);}
var prefixedOwnClassNamesArray=prefixedElementClassNames(node);var needsClassNames=false;var needsNthChild=false;var ownIndex=-1;var siblings=parent.children;for(var i=0;(ownIndex===-1||!needsNthChild)&&i<siblings.length;++i){var sibling=siblings[i];if(sibling===node){ownIndex=i;continue;}
if(needsNthChild)
continue;if(sibling.nodeName.toLowerCase()!==nodeName.toLowerCase())
continue;needsClassNames=true;var ownClassNames=prefixedOwnClassNamesArray;var ownClassNameCount=0;for(var name in ownClassNames)
++ownClassNameCount;if(ownClassNameCount===0){needsNthChild=true;continue;}
var siblingClassNamesArray=prefixedElementClassNames(sibling);for(var j=0;j<siblingClassNamesArray.length;++j){var siblingClass=siblingClassNamesArray[j];if(ownClassNames.indexOf(siblingClass))
continue;delete ownClassNames[siblingClass];if(!--ownClassNameCount){needsNthChild=true;break;}}}
var result=nodeName.toLowerCase();if(isTargetNode&&nodeName.toLowerCase()==="input"&&node.getAttribute("type")&&!node.getAttribute("id")&&!node.getAttribute("class"))
result+="[type=\""+node.getAttribute("type")+"\"]";if(needsNthChild){result+=":nth-child("+(ownIndex+1)+")";}else if(needsClassNames){for(var prefixedName in prefixedOwnClassNamesArray)
result+="."+escapeIdentifierIfNeeded(prefixedOwnClassNamesArray[prefixedName].substr(1));}
return new UTILS.DOMNodePathStep(result,false);}
UTILS.DOMNodePathStep=function(value,optimized)
{this.value=value;this.optimized=optimized||false;}
UTILS.DOMNodePathStep.prototype={toString:function()
{return this.value;}}
module.exports=UTILS.cssPath;},function(module,exports){var CC_NUM=/^((card|cc|acct).?(number|#|no|num)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드)$/;var CC_CVV=/^(verification|card identification|security code|card code|cvn|cvv|cvc|csc|cvd|cid|ccv)$/;var CC_MON=/^(expir|exp.*mo|exp.*date|ccmonth|cardmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月)$/;var CC_YEAR=/^(exp.?year|ablaufdatum|gueltig|gültig|yahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期)$/;var regExps=[CC_NUM,CC_CVV,CC_MON,CC_YEAR];var excludedTypes=["hidden","password","file","submit","reset","button","checkbox","radio"];module.exports={regExps,excludedTypes}},function(module,exports){module.exports=function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return false;}}},function(module,exports){var lStorage={getJSON:function(key,placeholder){var value=localStorage.getItem(key);if(value){try{return JSON.parse(value);}catch(e){}}
return placeholder||{};},setJSON:function(key,value){localStorage.setItem(key,JSON.stringify(value))},clear:function(key){localStorage.removeItem(key);}}
module.exports=lStorage;}]);}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/WDyDYY5kLS_10H1M0nVb2klf5aQ.js';document.head.appendChild(script);})();