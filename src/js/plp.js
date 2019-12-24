fetch('http://localhost:5000/categories')
  .then(
    function(response) {
      if (response.status !== 200) {
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      	createCategoriesHTML(data);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
 function createCategoriesHTML(categories) {
    Handlebars.registerHelper('ifEven', function (index, options) {
     if(index%2 == 0){
              return options.fn(this);
         } else {
              return options.inverse(this);
           }
   
  });
  createHTML(categories,"categories-container","categoriesTemplate");
  }

   function createHTML(data,ctrId,templateId) {
    // body...
    var rawTemplate = document.getElementById(templateId).innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(data);

    var container = document.getElementById(ctrId);
    container.innerHTML = ourGeneratedHTML;
  }