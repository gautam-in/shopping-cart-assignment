// function ProductContent() {
//     return fetch("../server/categories/index.get.json")
//       .then((result) => {
//         return result.json();
//       })
//       .catch((err) => console.log(error));
//   }async function CartDisplay() {
//     let Response = await  ProductContent();
  
//     console.log(Response);
     
//     console.log(Response);
//     for (let res of Response) {
//     console.log(res);
//     }
//   }
import{CartContent} from "./product.js"
var response;
function CartDisplay()
{
   response=CartContent();
   console.log(response);

}
CartDisplay();