import { data } from "../../data";
import NavAdmin from "./NavAdmin";

/* eslint-disable linebreak-style */
const NewsList = {
    runder() {
        return /* html */`
        <div> ${NavAdmin.runder()} </div>
        <table class="min-w-full divide-y divide-gray-200 my-8 ">
          <thead class="bg-slate-200 w-24 ">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                id product
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                images 
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              description
              </th>
              
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((value) => `
          <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
              ${value.id}
               
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">   ${value.title}</div>
            
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
           
             
              <img class="w-24" src=" ${value.img}" alt="">
           
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${value.desc}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="/admin/edit/${value.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        
        </tr>
          
          `).join("")}
           
            <!-- More people... -->
          </tbody>
          
        </table>
        
        <a href="/admin/add" class="sm:ml-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <!-- Heroicon name: solid/check -->
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Thêm Mới
        </button>
      </a>
     
        `;
    },
};
export default NewsList;