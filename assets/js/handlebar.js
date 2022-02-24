
window.onload = function() {
    //Grab the inline template
    var template = document.getElementById('my-template').innerHTML;
  
    //Compile the template
    var compiled_template = Handlebars.compile(template);
  
    //Render the data into the template
    var rendered = compiled_template(
       productsPage = {
      sectionOne: [ {
            image: "./assets/images/images/category/fruits.png", 
            heading: "Fruits & Vegetables",
            desc:"A variety of fresh fruits and vegetables",
            buttonText:"Explore fruit-and-veg"
        }],
        sectionTwo:[{
            image: "./assets/images/images/category/bakery.png", 
            heading: "Bakery Cakes and Dairy",
            desc:"The best cupcakes, cookies, cakes, fresh bread",
            buttonText:"Explore bakery-cakes-dairy"
        }],
        sectionThree:[{
            image: "./assets/images/images/category/beverages.png", 
            heading: "Beverages",
            desc:" A variety of fresh fruits and vegetables",
            buttonText:"Explore beverages"
        }],
        sectionFour:[{
            image: "./assets/images/images/category/beauty.png", 
            heading: "Beauty and Hygiene",
            desc:" Buy beauty products at best prices in India",
            buttonText:"Explore beauty-hygiene"
        }],
        sectionFive:[{
            image: "./assets/images/images/category/baby.png", 
            heading: "Baby Care",
            desc:" A variety of fresh fruits and vegetables",
            buttonText:" Explore baby"
        }]
    }
    );
    
    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('homeProducts').innerHTML = rendered;
  }