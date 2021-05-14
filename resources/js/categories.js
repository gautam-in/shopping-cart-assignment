var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'db.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();


function createHTML(categoriesData) {
  var categoriesTemplate = document.getElementById("categoriesTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(categoriesTemplate);
  var ourGeneratedHTML = compiledTemplate(categoriesData);

  var categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = ourGeneratedHTML;
}