    function request_server() {
        var url = window.location.origin + "/cart/allitem";
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                let data = myJson;
                let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
                document.getElementById("item_counter").innerHTML = data.item_counter;
                let totalCheckoutPrice = 0;
                data.cartItems.forEach(function(element) {
                    totalCheckoutPrice = totalCheckoutPrice + element.total_price;
                });
                totalCheckoutSpan.innerHTML = "Rs. "+totalCheckoutPrice;
            });
    }
    
    function updateCart(item_counter, cartItems) {
        document.getElementsByClassName("cart-count")[0].innerHTML = item_counter;
        if (window.location.pathname == "/product") {
            window.location.href = "/cart";
        }
        updateCheckoutAmount();
    }
    
    function updateCheckoutAmount() {
        var checkoutAccumulation = document.getElementsByClassName("total");
        let totalCheckoutSpan = document.getElementById("totalCheckoutAmount");
        let totalCheckoutPrice = 0;
        for (let i = 0; i < checkoutAccumulation.length; i++) {
            totalCheckoutPrice = totalCheckoutPrice + parseInt(checkoutAccumulation[i].innerHTML);
        }
        totalCheckoutSpan.innerHTML = "Rs. "+totalCheckoutPrice;
    }
    
    if (window.location.pathname === "/cart") {
        request_server();
        updateCheckoutAmount();
    }
    
    
    function buy(id, operation) {
        var url = window.location.origin + `/cart/${id}/${operation}`;
        console.log(url);
        let xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", url, true);
        xmlHttpReq.onload = function () {
            if (xmlHttpReq.status == 200) {
                let data = JSON.parse(xmlHttpReq.responseText);
                console.log(data)
                updateCart(data.item_counter, data.cartItems);
            } else { }
        };
        xmlHttpReq.onerror = function () { };
        xmlHttpReq.send();
    }
    
    function addRemoveItem(id, index, price, task) {
        var input = document.getElementById("prod" + index);
        var totalCost;
        if (task == 'minus') {
            if (input.value > 0) {
                input.value = input.value - 1;
                totalCost = input.value * price;
                document.getElementById("totalp" + index).innerHTML = "Rs."+totalCost;
                buy(id, 'remove');
                request_server();
            } else { }
        } else if (task == 'plus') {
            input.value++;
            totalCost = input.value * price;
            document.getElementById("totalp" + index).innerHTML = "Rs."+totalCost;
            buy(id, 'add');
            request_server();
        } else { }
    }
    var slideIndex = 1;
    if (window.location.pathname == "/") {
        showSlides(slideIndex);
    }
    
    function plusSlides(n) {
        console.log("fsfashfasjk")
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    var carousal = document.getElementById("next");
    setInterval(() => {
        if(carousal){
            carousal.click();
        }
    }, 5000); 
    
    if (window.location.pathname == "/products/") {
        if($(window).width() <= 768){
            var element = document.getElementsByClassName("display-none");
            console.log(element[0]);
            element[0].classList.add("display-block");
            element[0].classList.remove("display-none");
        }
        else{
            var element = document.getElementsByClassName("display-none");
            element[0].classList.add("display-none");
            element[0].classList.remove("display-block");
        }
    }