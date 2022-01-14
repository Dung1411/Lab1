/* eslint-disable linebreak-style */
import { data } from "../data";

const NewListHome = {
    runder() {
        return /* html */`
        
        <h2 class="my-8 font-bold uppercase text-cyan-900 text-2xl"> tin tức học tập </h2>
        <div class="grid  grid-cols-3 gap-8"> 
        ${data.map((post) => `
        
        <div class="content-list-item border border-bg-black">
        <div class="p-6">
         <a href="/detail/${post.id}">
           <img width="100%" src="${post.img}" alt="">
         </a>
         <h3 class="title-tiem my-2 text-lg text-orange-600 font-medium my-8">
           ${post.title}
         </h3>
         <p class="font-normal">${post.desc}</p>
        </div>
       </div>
        `).join("")}
        </div>
        
        `;
    },
};

export default NewListHome;