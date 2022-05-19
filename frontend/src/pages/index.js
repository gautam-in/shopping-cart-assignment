let url='http://localhost:5000/'

let sectionForBanners = document.getElementById("section-for-banners") 
let sectionForCategories = document.getElementById("section-for-categories")

let loadedBanners=[]
let loadedCategories = []

let slideIndex=0
let node;

const bannerLoader = async ()=>{
    try {
        const response = await fetch(`${url}banners`);
        loadedBanners = await response.json();
        // console.log(responseData)

        // console.log(responseData)
        printBanners(loadedBanners)
    }

    catch(error){
        console.log(error)
    }
} 

const printBanners = data=>{
    console.log("Calling")

    for (let i = 0; i < data.length; i++) {
        console.log("For")
        let banner = document.createElement('div')
        banner.setAttribute('class','banner')
        banner.setAttribute('id',data[i].order)

        let imageOfBanner = document.createElement('img')
        imageOfBanner.setAttribute('class','myBannerImage')
        imageOfBanner.src = data[i].bannerImageUrl
        imageOfBanner.alt = data[i].bannerImageAlt

        banner.hidden = true

        // let nextButton = document.createElement('button')
        // let prevButton = document.createElement('button')
    
        // nextButton.classList.add('w3-button', 'w3-display-right')
        // prevButton.classList.add('w3-button', 'w3-display-left')
        // nextButton.innerText = ">"
        // prevButton.innerText = "<"
    
        // nextButton.addEventListener('click',plusDivs(+1))
        // prevButton.addEventListener('click',plusDivs(-1))

        banner.appendChild(imageOfBanner)
        
        sectionForBanners.appendChild(banner)
        // sectionForBanners.appendChild(nextButton)
        // sectionForBanners.appendChild(prevButton)

    }
    // showNextImage();
    bannerImageDisplay(slideIndex)
}


// const showNextImage= ()=> {
//   bannerImageSelection(slideIndex);
// }



 const bannerImageDisplay = index => {
  if (node) {
    node.hidden = true;
  }
  if (index >= loadedBanners.length) {
    slideIndex = 0;
  }
  
  let newImg = document.getElementById(slideIndex + 1);
  if (newImg) {
    newImg.hidden = false;
    node = newImg;
  }
  slideIndex++;

  setTimeout(() => {
    // showNextImage();
    bannerImageDisplay(slideIndex)
  }, 5000);
}

const categoriesLoader = async ()=>{
    try {
            const response = await fetch(`${url}categories`);
            loadedCategories = await response.json();
            console.log("Loading Categories ",loadedCategories)

            printCategories(loadedCategories)
    }
    catch(error){
        console.log(error)
    }
}

const printCategories = data =>{
    for(let i=0; i< data.length;i++){
        let category = document.createElement('div')
        category.setAttribute('class','category')

        let categoryContent = document.createElement('div')

        const h1 = document.createElement("h1")
        h1.innerText = data[i].name

        const p = document.createElement("p")
        p.innerText = data[i].description

        const button = document.createElement("a")
        button.setAttribute('href','./products.html')
        button.innerText = `Explore ${data[i].name}`

        categoryContent.appendChild(h1)
        categoryContent.appendChild(p)
        categoryContent.appendChild(button)

        const image = document.createElement("div")
        const img = document.createElement("img")
        img.src = data[i].imageUrl
        img.alt = data[i].name
        image.appendChild(img)

        category.appendChild(image)
        category.appendChild(categoryContent)

        sectionForCategories.appendChild(category)
    }
}


bannerLoader()
categoriesLoader()