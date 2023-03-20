/* import fetch from "node-fetch";  */
const API = 'https://api.escuelajs.co/api/v1';

const content = null || document.getElementById('content');

async function fetchData (urlApi){
    const response = await fetch(urlApi); //options
    const data = await response.json();
    return data;
}

(async () => {
  try{
    const productos = await fetchData(`${API}/products`);
    console.log(productos);
    let view = `
    ${productos.map(product => `
      <div class="group relative">
        <div
           class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
           <img src="${product.category.image}" alt="${product.title}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
           <span aria-hidden="true" class="absolute inset-0"></span>
           ${product.title}
        </h3>
        </div>    
      </div>
     `).slice(0, 10).join('')} 
    `;  
    content.innerHTML = view; 
  }catch (error){
    console.log(error)
  }
})();