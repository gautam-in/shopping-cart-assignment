const url = "http://localhost:5000/banners";
console.log('run=-=-=-');
const $ = document;

export async function getBanners()
{ 
    try {
        console.log(url);
        const response = await fetch('http://localhost:5000/banners');
        const result = await response.json();
        console.log(result);    
        let image = document.getElementsByClassName('carousel-inner'); 
        console.log(image);
        for (let i = 0; i< result.length; i++) {
            let div =document.createElement('div');
            div.className = "carousel-item";
            let imageTag = document.createElement('img');
            imageTag.className = "d-block w-100";
            imageTag.setAttribute('src', result[i].bannerImageUrl);
            div.appendChild(imageTag); 
            //let carouselImage =`<div class="col-md-2 col-sm-6 col-12"><a href="#"><img src=${result[i].bannerImageUrl} alt="" /></a></div >`; 
            image[0].appendChild(div);
        }
        let defaultCarousel = document.getElementsByClassName('carousel-item')[0];
        defaultCarousel.classList.add('active');
    } catch (e) {
        console.log(e);
    }

}

export async function getCategories() {
    try {
        console.log(url);
        const response = await fetch('http://localhost:5000/categories');
        const result = await response.json();
        console.log(result);
        let categoryDiv = document.getElementsByClassName('categories');
        for (let i = 0; i< result.length; i++) {
            //category-desc
            let categoryDesc = $.createElement('div');
            categoryDesc.className = 'category-desc';
            //catergory-image
            let categoryImageDiv = $.createElement('div');
            let cardBodyDiv = $.createElement('div');
            //category-body
            cardBodyDiv.className = 'card-body';
            let cardTitle = $.createElement('h2');
            let cardDesc = $.createElement('p');
            let cardButtonDiv = $.createElement('div');
            cardButtonDiv.className = 'card-btn';
            let cardButton = $.createElement('button');
            cardButton.className = 'btn btn-danger card-button';
            cardButton.innerHTML = `Explore ${result[i].key}`;


            cardDesc.className = 'description';
            cardDesc.innerHTML = result[i].description;
            cardTitle.classList = 'card-title';
            cardTitle.innerHTML = result[i].name;
            cardButtonDiv.appendChild(cardButton);
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardDesc);
            cardBodyDiv.appendChild(cardButtonDiv);
            categoryImageDiv.className = 'category-image';
            let categoryImage = $.createElement('img');
            categoryImage.setAttribute('src', result[i].imageUrl);
            categoryImageDiv.appendChild(categoryImage);
            let container = $.createElement('div');
            container.className = 'container-fluid';
            let row = $.createElement('div');
            row.className = 'row';
            let column1 = $.createElement('div');
            column1.className = 'col-md-5';
            let column2 = $.createElement('div');
            column2.className = 'col-md-7';
            column2.appendChild(cardBodyDiv);
            column1.appendChild(categoryImageDiv);
            row.appendChild(column1);
            row.appendChild(column2);
            container.appendChild(row);

            
            //categoryDesc.appendChild(categoryImageDiv);
            categoryDesc.appendChild(container);
            categoryDiv[0].appendChild(categoryDesc);

            //!!!!!!!!!!!!!!!
            
            



            //categoryDiv[0].appendChild(cardBodyDiv);
        }
            
    } catch (e) {
        console.log(e);
    }
}
