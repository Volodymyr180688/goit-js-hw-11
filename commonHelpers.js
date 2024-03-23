import{S as h,i as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(s){a.innerHTML="";const o=c.map(t=>`<li class="img-blok">
        <a href="${t.largeImageURL}">     
    <img  src="${t.webformatURL}"
    data-source="${t.largeImageURL}"
    alt="${t.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${t.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${t.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${t.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${t.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");a.insertAdjacentHTML("beforeend",o),new h(".gallery a",{captionsData:"alt"}).refresh()}function p(){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"43032026-51d5efc66afaddf8a06e125fe",q:d,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const a=document.querySelector("ul.gallery");let c,d;const y=document.querySelector("input"),g=document.querySelector("button"),L=document.querySelector("form"),u=document.querySelector(".preloader"),w=()=>{u.style.display="flex"},b=()=>{u.style.display="none"},f=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=f;g.addEventListener("click",async s=>{s.preventDefault(),d=y.value.trim(),d.length||(l.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),a.innerHTML=""),w();try{const o=await p();c=o.hits,c.length||l.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(o)}catch{l.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{b(),f(),L.reset()}});
//# sourceMappingURL=commonHelpers.js.map
