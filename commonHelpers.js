import{a as p,i as l,S as h}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery-list");function y({webformatURL:r,largeImageURL:o,tags:n,likes:s,views:e,comments:t,downloads:a}){const g=n.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href='${o}'>
  <img class="gallery-image" src='${r}' data-source=${o} alt='${g}'>
  </a>
  </div>

  <div class="img-data">
  
  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${s}</span>
  </div>


   <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${e}</span>
  </div>


  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${t}</span>
  </div>

  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${a}</span>
  </div>

  </div>

  </li>`}function b(r){return r.map(y).join("")}p.defaults.baseURL="https://pixabay.com/api/";const v="44934541-86fe3f4b652536370b4b9d239";async function L(r,o){try{const s=(await p.get("",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:o}})).data;if(s.hits.length===0)throw new Error("No images found");o===1&&(c.innerHTML="");const e=b(s.hits);c.insertAdjacentHTML("beforeend",e),s.totalHits>o*15?document.querySelector(".load-more-btn").hidden=!1:(document.querySelector(".load-more-btn").hidden=!0,l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(n){document.querySelector(".load-more-btn").hidden=!0,l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",n.message)}}const f=document.querySelector("form"),S=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");let d="",i=1;f.addEventListener("submit",q);S.addEventListener("click",w);function q(r){if(r.preventDefault(),d=r.target.elements["user-input"].value,d===""){l.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}c.innerHTML="",i=1,m(),f.reset()}function w(){i+=1,m()}function m(){u.hidden=!1,L(d,i).finally(()=>{u.hidden=!0,new h(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh(),M()})}function M(){if(i>1){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*4,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
