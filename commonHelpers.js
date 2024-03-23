import{S as f,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(n){const o=document.querySelector("ul.gallery");o.innerHTML="";const s=n.hits.map(r=>`<li class="img-blok">
        <a href="${r.largeImageURL}">     
          <img  src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}">
          <ul class="image-descript">
            <li>
              <h3>likes</h3>
              <p>${r.likes}</p>
            </li>
            <li>
              <h3>views</h3>
              <p>${r.views}</p>
            </li>
            <li>
              <h3>comments</h3>
              <p>${r.comments}</p>
            </li>
            <li>
              <h3>downloads</h3>
              <p>${r.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",s),L()}async function m(n){const e=`https://pixabay.com/api/?${new URLSearchParams({key:"43032026-51d5efc66afaddf8a06e125fe",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`,t=await fetch(e);if(!t.ok)throw new Error(t.status);const i=await t.json();if(!i.hits||i.hits.length===0)throw new Error("No images found");return i}const c=document.querySelector("form"),l=document.querySelector("ul.gallery"),d=document.querySelector(".flower-spinner"),p=()=>{d.style.display="flex"},y=()=>{d.style.display="none"},u=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=u;const g=async n=>{n.preventDefault();const o=n.currentTarget.querySelector("input").value.trim();if(!o){a.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),l.innerHTML="";return}p();try{const s=await m(o);if(!s.hits||s.hits.length===0)throw new Error("No images found");h(s)}catch{a.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"}),l.innerHTML=""}finally{y(),u(),c.reset()}};c.addEventListener("submit",g);const w=new f(".gallery a",{captionsData:"alt"}),L=()=>{w.refresh()};
//# sourceMappingURL=commonHelpers.js.map
