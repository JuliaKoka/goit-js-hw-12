import{a as p,i as l,S as h}from"./assets/vendor-f144e563.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery-list");function y({webformatURL:r,largeImageURL:s,tags:n,likes:o,views:e,comments:t,downloads:i}){const g=n.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href='${s}'>
  <img class="gallery-image" src='${r}' data-source=${s} alt='${g}'>
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
  <span class="normal">${i}</span>
  </div>

  </div>

  </li>`}function b(r){return r.map(y).join("")}p.defaults.baseURL="https://pixabay.com/api/";const v="44934541-86fe3f4b652536370b4b9d239";async function L(r,s){try{const o=(await p.get("",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:s}})).data;if(o.hits.length===0)throw new Error("No images found");s===1&&(c.innerHTML="");const e=b(o.hits);c.insertAdjacentHTML("beforeend",e),o.totalHits>s*15?document.querySelector(".load-more-btn").hidden=!1:(document.querySelector(".load-more-btn").hidden=!0,l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(n){document.querySelector(".load-more-btn").hidden=!0,l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",n.message)}}const f=document.querySelector("form"),S=document.querySelector(".load-more-btn"),u=document.querySelector(".loader");let d="",a=1;f.addEventListener("submit",q);S.addEventListener("click",w);function q(r){if(r.preventDefault(),d=r.target.elements["user-input"].value,d===""){l.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}c.innerHTML="",a=1,m(),f.reset()}function w(){a+=1,m()}function m(){u.classList.remove("is-hidden"),L(d,a).finally(()=>{u.classList.add("is-hidden"),new h(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh(),M()})}function M(){if(a>1){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
