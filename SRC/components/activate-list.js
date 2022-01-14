/* eslint-disable linebreak-style */
import { activate } from "../data";

const ActivateList = {
    runder() {
        return /* html */`
        <h2 class="my-8 font-bold uppercase text-cyan-900 text-2xl"> Hoạt động sinh viên </h2>
        <div class="grid  grid-cols-3 gap-8"> 
        ${activate.map((value) => `
        
        <div class="content-list-item border border-bg-black">
        <div class="p-6">
         <a href="#">
           <img width="100%" src="${value.img}" alt="">
         </a>
         <h3 class="title-tiem my-2 text-lg text-orange-600 font-medium my-8">
           ${value.title}
         </h3>
         <p class="font-normal">${value.desc}</p>
        </div>
       </div>
        `).join("")}
        </div>
        `;
    },
};

export default ActivateList;