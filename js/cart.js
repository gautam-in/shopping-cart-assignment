class AddtoCart {
    items = items;
    async addItems(id) {
        let newItem = {"itemId":id, "count":1}
        let res = await addToCartPost(newItem); //always return success;
        console.log(res)
        let exitsIndex = this.items.findIndex(el => el.itemId==id)
        
        if(exitsIndex >= 0)
            this.items[exitsIndex].count = this.items[exitsIndex].count + 1;
        else
            this.items.push(newItem);
    }
    showItems() {
        let itemLength = this.items.length;
        let modelContent = 
        document.querySelector(".modal-content > main");

        let promoh5 = document.querySelector( ".modal-content > footer > h5")
        let buttonContent = document.getElementById("cartButtonText")
        let price = document.getElementById("finalPrice");
        let cheapAside = document.querySelector(".modal-content > aside")
        if(itemLength == 0) {
            modelContent.innerHTML = `<h3><strong> No items in the cart. </strong></h3> <br> 
                                        <h5> Your favourite items are just a click away </h5>`;
            promoh5.style.display = "none";
            cheapAside.style.display = "none";
            buttonContent.innerHTML = "Start Shopping";  
            price.style.display = "none";  
        }
        else {
            promoh5.style.display = "block";
            cheapAside.style.display = "flex";
            modelContent.innerHTML = "";
            this.formCartUI(modelContent);
            buttonContent.innerHTML = "Proceed to checkout";
            price.style.display = "block";
        }
    }
    minusCounter(clickedItem) {
        debugger;
        clickedItem.children[1].innerText = parseInt(clickedItem.children[1].innerText) - 1;
        this.updatePrice(clickedItem);
    }
    plusCounter(clickedItem) {
        clickedItem.children[1].innerText = parseInt(clickedItem.children[1].innerText) + 1;
        this.updatePrice(clickedItem);
    }

    updatePrice(clickedItem) {
        debugger
        let newP = parseInt(clickedItem.children[1].innerText) * parseInt(
            clickedItem.children[4].innerText.split(" ")[1]
        );
        clickedItem.parentNode.parentNode.children[2].innerText = "Rs " + newP;
        this.updateAmount();
    }

    updateAmount() {
        let finalPrice = 0;
        let allPrices = document.querySelectorAll(".individualPrice");

        for (let index = 0; index < allPrices.length; index++) {
            finalPrice += parseInt(allPrices[index].innerText.split(" ")[1]);
        }
        document.getElementById("finalPrice").innerHTML = "Rs " + finalPrice + ">";
    }
    
    formCounterElement(prod,count1) {
        let itemDiv = document.createElement("div");
        itemDiv.className = "counterCartItem";

        let minus = document.createElement("button");
        minus.innerHTML = "-";
        minus.id = "minus";
        minus.addEventListener("click",() => this.minusCounter(itemDiv))
        itemDiv.appendChild(minus)

        let count = document.createElement("div");
        count.innerHTML = count1;
        count.id = "count"
        itemDiv.appendChild(count)

        let plus = document.createElement("button");
        plus.innerHTML = "+";
        plus.id = "plus";

        plus.addEventListener("click",() => this.plusCounter(itemDiv))
        itemDiv.appendChild(plus)

        let into = document.createElement("div");
        into.innerHTML = "X";
        itemDiv.appendChild(into)

        let price = document.createElement("div");
        price.innerHTML = "Rs " + prod.price;
        price.id = "price";
        itemDiv.appendChild(price)

        return itemDiv;
    }

    formCartUI(modelContent) {
        for (let index = 0; index < this.items.length; index++) {
            let divEl = document.createElement("div");
            divEl.className = "cartCard";
            
            let prodDetail = this.getProductDetails(this.items[index].itemId)[0];
            console.log(prodDetail);
            let imgEl = document.createElement("img");
            imgEl.src = imgEl.alt = prodDetail.url;
            
            let nameCounter = document.createElement("div");
            nameCounter.className = "nameCounter"

            let nameEl = document.createElement("div");
            nameEl.innerHTML = prodDetail.name;
            nameCounter.appendChild(nameEl);

            let counterEle = this.formCounterElement(prodDetail,this.items[index].count);
            console.log(counterEle);
            nameCounter.appendChild(counterEle);

            let priceEl = document.createElement("div");
            priceEl.className = "individualPrice";
            priceEl.innerHTML = "Rs " + this.items[index].count * prodDetail.price;

            divEl.appendChild(imgEl);
            divEl.appendChild(nameCounter);
            divEl.appendChild(priceEl);
            modelContent.appendChild(divEl);
        }
        this.updateAmount();
    }

    getProductDetails(prodId) {
        let local1 = JSON.parse(localStorage['products']);
        const new1 = local1.filter(el => el.id === prodId);
        return new1;       
    }


}