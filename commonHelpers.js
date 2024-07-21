import{a as p,i,S as g}from"./assets/vendor-f144e563.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery-list");function h({webformatURL:s,largeImageURL:r,tags:a,likes:o,views:e,comments:t,downloads:n}){const y=a.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href='${r}'>
  <img class="gallery-image" src='${s}' data-source=${r} alt='${y}'>
  </a>
  </div>

  <div class="img-data">
  
  <div class="description">
  <span class="bold">Likes: </span>
  <span class="normal">${o}</span>
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
  <span class="normal">${n}</span>
  </div>

  </div>

  </li>`}function b(s){return s.map(h).join("")}p.defaults.baseURL="https://pixabay.com/api/";const v="44934541-86fe3f4b652536370b4b9d239";async function L(s,r){try{const o=(await p.get("",{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:r}})).data;if(o.hits.length===0)throw new Error("No images found");r===1&&(l.innerHTML="");const e=b(o.hits);l.insertAdjacentHTML("beforeend",e),o.totalHits>r*15?document.querySelector(".load-more-btn").hidden=!1:(document.querySelector(".load-more-btn").hidden=!0,i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(a){document.querySelector(".load-more-btn").hidden=!0,i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",a.message)}}const f=document.querySelector("form"),S=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");let c="",d=1;f.addEventListener("submit",q);S.addEventListener("click",M);function q(s){if(s.preventDefault(),c=s.target.elements["user-input"].value,c===""){i.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}l.innerHTML="",d=1,m()}function M(){d+=1,m()}function m(){u.hidden=!1,L(c,d).finally(()=>{u.hidden=!0,new g(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}),f.reset()}
//# sourceMappingURL=commonHelpers.js.map
