window.addEventListener("DOMContentLoaded", displayHeader);

function displayHeader() {
  const header = document.getElementById("header");

  const content = `<div class='inner_header'>
    <div class='logo_container'>
        <img src='../../static/images/logo.png' class='logo_img' alt='Sabka Bazaar logo'/>
    </div>
    <nav class='navigation'>
        <ul class='nav_ul'>
            <li><a href='./index.html'>Home</a></li>
            <li><a href='./productList.html'>Products</a></li>
        </ul>
    </nav>
    <div class='cart_container'>
        <nav class='cart_nav'>
            <ul class='nav_ul'>
                <li><a>Sign In</a></li>
                <li><a>Register</a></li>             
            </ul>
        </nav>
        <div class='cart_item'>
            <img src = "../../static/images/cart.svg" height='20px' width='20px' alt="Cart icon"/>
            <span>0 Items</span>
        </div>    
    </div>
</div>`;

  header.innerHTML += content;
}
