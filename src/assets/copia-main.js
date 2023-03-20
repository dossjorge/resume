const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzY1-NKVNDA4UpE4MmTq0eg&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19293325aamshaa0f4bd79cc0d5ep1a6d95jsnc6ecb0e964a8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(product => `
        <div class="group relative">
          <div
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
             <img src="${product.products.images}" alt="${product.products.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
             <span aria-hidden="true" class="absolute inset-0"></span>
             ${product.products.title}
          </h3>
          </div>    
        </div>
       `), slice(0,4).join('')}
      `;
      content.innerHTML = view;
    }catch (error){
      console.log(error)
    }
  })();

  //Esto es una funcion que se llama asi misma, no tenemos que invocar mas 
  //adelante la funcion, encuanto la lee la ejecuta

  ( () => {

  })()
  
  (async () => {

  })();