const log = (val) => console.log(val)
const fetchBanners = async () => {
    const  response = await fetch("http://localhost:3000/banners")
    var data = await response.json()

    let slides = document.querySelector(".slideshow-container")


    for(let i=data.length-1;i>=0;i--){
        
        var slideElement = `<div class="mySlides fade">
        <img src="${data[i].bannerImageUrl}" style="width:100%" alt="${data[i].bannerImageAlt}">
      </div>`;

           slides.innerHTML+=slideElement

         }
    }

    const categories = async () => {
      const  response = await fetch("http://localhost:3000/categories")
      var data = await response.json()
  
      let categoryContainer = document.querySelector(".category-container")
  
      for(let i=0;i<data.length;i++){

        if(data[i].enabled){
          var categoryElement = `<div class="category">
          <div class="image"><img src="${data[i].imageUrl}" alt="${data[i].key}"></img></div>
          <div class="other">
          <p class="category-title">${data[i].name}</p>
          <p class="category-description">${data[i].description}</p>
          <button class="category-btn" id = "${data[i].id}">Explore ${data[i].key.replaceAll("-","   ")}</button>

          </div>
          
        </div>`;
             categoryContainer.innerHTML+=categoryElement
          }  

  
       }
       let x  = document.querySelectorAll('.category-btn')

       for(let a = 0; a<x.length;a++){
        x[a].addEventListener("click", async (e) => {
            window.open(`${window.location.origin}/pages/products.html?${e.target.id}`,"_self"  );
            
           })
         }

      }
    fetchBanners()
    categories()

    // new comment added




