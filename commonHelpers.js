import{a as f,i as c,S as y}from"./assets/vendor-f144e563.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector(".gallery-list");function b({webformatURL:r,largeImageURL:s,tags:i,likes:o,views:e,comments:t,downloads:n}){const h=i.split(", ").join(", ");return`<li class="gallery-item">
  <div class="gallery">
  <a class="gallery-link" href='${s}'>
  <img class="gallery-image" src='${r}' data-source=${s} alt='${h}'>
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

  </li>`}function v(r){return r.map(b).join("")}f.defaults.baseURL="https://pixabay.com/api/";const L="44934541-86fe3f4b652536370b4b9d239";async function S(r,s){try{const o=(await f.get("",{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:s}})).data;if(o.hits.length===0)throw new Error("No images found");s===1&&(d.innerHTML="");const e=v(o.hits);d.insertAdjacentHTML("beforeend",e),o.totalHits>s*15?document.querySelector(".load-more-btn").hidden=!1:(document.querySelector(".load-more-btn").hidden=!0,c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(i){document.querySelector(".load-more-btn").hidden=!0,c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),console.error("Error:",i.message)}}const m=document.querySelector("form"),q=document.querySelector(".load-more-btn"),p=document.querySelector(".loader");let u="",a=1,l;m.addEventListener("submit",w);q.addEventListener("click",M);function w(r){if(r.preventDefault(),u=r.target.elements["user-input"].value,u===""){c.warning({title:"Caution",message:"Please fill in the form",position:"topRight",backgroundColor:"#ef4040"});return}d.innerHTML="",a=1,g(),m.reset()}function M(){a+=1,g()}function g(){p.classList.remove("is-hidden"),S(u,a).finally(()=>{p.classList.add("is-hidden"),l&&l.destroy(),l=new y(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh(),$()})}function $(){if(a>1){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
