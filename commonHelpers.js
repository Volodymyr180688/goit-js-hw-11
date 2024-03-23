import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function f(s){const o=document.querySelector("ul.gallery");o.innerHTML="";const n=s.hits.map(t=>`<li class="img-blok">
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
        </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",n),w()}async function h(s){const e=`https://pixabay.com/api/?${new URLSearchParams({key:"43032026-51d5efc66afaddf8a06e125fe",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`,r=await fetch(e);if(!r.ok)throw new Error(r.status);return r.json()}const l=document.querySelector("form"),m=document.querySelector("ul.gallery"),c=document.querySelector(".flower-spinner"),p=()=>{c.style.display="flex"},y=()=>{c.style.display="none"},d=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=d;const g=async s=>{s.preventDefault();const o=s.currentTarget.querySelector("input").value.trim();if(!o){a.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),m.innerHTML="";return}p();try{const n=await h(o);f(n)}catch{a.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{y(),d(),l.reset()}};l.addEventListener("submit",g);const L=new u(".gallery a",{captionsData:"alt"}),w=()=>{L.refresh()};
//# sourceMappingURL=commonHelpers.js.map
