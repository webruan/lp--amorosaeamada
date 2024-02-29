const isImageResponsive=!0,imagePath="./src/assets/images/desktop/",imageExtension=["webp"];function generateImage(e,t,s){let i=!1;for(var n=0;n<imageExtension.length;n++){let a=imageExtension[n],o=`./src/assets/images/desktop/${e}.${a}`,c="./src/assets/images",l=`${e}.${a}`;fileExists(o,function(e){if(e&&!i){i=!0;let n;s(n=t?`
            <picture>
              <source media="(min-width: 1200px)" srcset="${c}/desktop/${l}">
              <source media="(min-width: 768px)" srcset="${c}/tablet/${l}">
              <source media="(min-width: 320px)" srcset="${c}/mobile/${l}">
              <img loading="lazy" src="${c}/desktop/${l}">
            </picture>
          `:`
            <img loading="lazy" src="${c}/desktop/${l}">
          `)}})}}function fileExists(e,t){let s=new XMLHttpRequest;s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&t(200===s.status)},s.open("HEAD",e,!0),s.send()}function isSectionVisible(e){let{top:t,bottom:s,left:i,right:n}=e.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return t<=a&&s>=0&&i<=o&&n>=0}function getDocumentElements(){let e=document.getElementsByTagName("body")[0].querySelectorAll("section"),t=[],s=[];return e.forEach(e=>{t.push(e)}),t.forEach(e=>{let t={sectionTag:e,sectionId:e.id,images:[]};imgDiv=e.getElementsByClassName("img-load");for(var i=0;i<imgDiv.length;i++){let n=imgDiv[i];t.images.push(n)}s.push(t)}),s}function loadImages(e){e.forEach(e=>{isSectionVisible(e.sectionTag)&&!e.sectionTag.classList.contains("processed")&&(e.images.forEach(e=>{let t=e.attributes.id.nodeValue,s=document.getElementById(t);s&&generateImage(t,!0,function(e){s.innerHTML=e})}),e.sectionTag.classList.add("processed"))})}window.addEventListener("scroll",()=>{loadImages(getDocumentElements())});