(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=document.querySelector(".cuadrado"),c=document.querySelector("h2");anime({targets:s,width:"600px",height:"600px",duration:2e3,easing:"easeInOutQuad",loop:!0});anime({targets:c,fontSize:"48px",duration:2e3,easing:"easeInOutQuad",loop:!0});anime({targets:circle,rotate:"360deg",duration:3e3,loop:!0,easing:"linear",backgroundColor:"#FFC0CB"});
