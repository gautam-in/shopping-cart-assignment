let count=1;

function AddedToCart() {
    return fetch("../server/addToCart/index.post.json")
      .then((result) => {
        return result.json();
      })
      .catch((err) => console.log(error));
  }
async function DisplayAddedToCart()
{
  let Response = await  AddedToCart();
  document.getElementById("count").innerText=`${count++} Items`;
  console.log(Response);
alert(Response.responseMessage);

}
export{DisplayAddedToCart}