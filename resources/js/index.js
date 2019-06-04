const express = require('express');
const router = express.Router();
var request = require("request");

var banners;

var url = "http://localhost:5000/banners";
request({
    url: url,
    json: true
}, function (error, response, result) {
    if (!error && response.statusCode === 200) {
        banners=result;
        console.log(banners);
    }
})

router.get('/', function (req, res, next) {
     res.render('index', {
         banners: banners
    });  
});

module.exports = router;


// function getAjax(url, success) {
//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
//     xhr.open('GET', url);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState>3 && xhr.status==200) 
//             success(xhr.responseText);
//     };
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.send();
//     return xhr;
// }
// (function () {   
//     getAjax('http://localhost:5000/banners', function(data){ 
//         var result={
//             'banners':JSON.parse(data)
//         }        
//         JSON.stringify(result);
//         app.get('/', function (res) {
//             res.render('index', {
//                 slides: JSON.stringify(result)
//             });
          
//         });
//         // for (let i = 0; i < response.length; i++) {
//         //     let elem = document.createElement("img");
//         //     let div = document.createElement("div");
//         //     div.setAttribute("class", "item");
//         //     if (i == 0) {
//         //         div.setAttribute("class", "item active");
//         //     }
//         //     elem.setAttribute("src", response[i].bannerImageUrl);
//         //     elem.setAttribute("alt", response[i].bannerImageAlt);
//         //     div.appendChild(elem);
//         //     document.getElementById("carousel-inner").appendChild(div);
//         // }
//     });
//     getAjax('http://localhost:5000/categories', function(data){ 
        
        
//     });
// })();
