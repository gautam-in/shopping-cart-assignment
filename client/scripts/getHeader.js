window.addEventListener("DOMContentLoaded", displayHeader);

function displayHeader() {
  const header = document.getElementById("header");

  const content = `<div class='inner_header'>
    <div class='logo_container'>
        <a href='./index.html'><img src='../../static/images/logo.png' class='logo_img' alt='Sabka Bazaar logo'/></a>
    </div>
    <nav class='navigation'>
        <ul class='nav_ul'>
            <li><a class='nav_name' href='./index.html'>Home</a></li>
            <li><a class='nav_name' href='./productList.html'>Products</a></li>
        </ul>
    </nav>
    <div class='cart_container'>
        <nav class='cart_nav'>
            <ul class='nav_ul'>
                <li><a href='login.html'>Sign In</a></li>
                <li><a href='register.html'>Register</a></li>             
            </ul>
        </nav>
        <div class='cart_item'>
            <button style='cursor:pointer; border:none;padding:5px;' onClick="window.location.href = 'cart.html'"><img src = "../../static/images/cart.svg" height='20px' width='20px' alt="Cart icon"/>
            <span id='total_count' class="total-count">0 Items</span></button>    
        </div>    
    </div>
</div>`;

  header.innerHTML += content;
}
