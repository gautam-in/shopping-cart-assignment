let cart;

// First Check Cart items in Localstorage
const currentCartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];

if (currentCartItems.length > 0) {
    cart = {
        allItems: currentCartItems
    }
} else {
    cart = {
        allItems: []
    }
}

export const updateLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}


export class FormValidator {

    constructor(form, formType, formFields) {
        this.form = form;
        this.formType = formType;
        this.formFields = formFields;
    }

    initialize = () => {
        // Highlight the inputs when they're focused and have value
        this.formFields.forEach((input) => {
            const inputElem = document.querySelector(`#${input}`)
            inputElem.addEventListener('input', () => this.highlightInput(inputElem));
        })

        this.validateOnSubmit();
        this.validateOnInput();
    }

    highlightInput = (input) => {
        input.value.length > 0 ? input.classList.add("highlight") : input.classList.remove("highlight")
    }

    validateOnSubmit = () => {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.formFields.forEach((field) => {
                this.validateField(this.formType, document.querySelector(`#${field}`));
            })

            const formHasError = document.querySelectorAll('form .form_group.has_error').length > 0;
            if (!formHasError) {
                this.form.submit();
            }
        });
    }

    validateOnInput = () => {
        this.formFields.forEach((field) => {
            const inputElem = document.querySelector(`#${field}`);
            inputElem.addEventListener('input', (event) => {
                this.validateField(this.formType, inputElem)
            })
        })
    }

    // Validate Field on input or submit
    validateField = (formType, field) => {
        this.checkRequired(field);
        this.checkEmail(field);
        this.checkPassword(field);
        if (formType === 'register') {
            this.checkName(field);
        }
    }

    // Required Field Validation
    checkRequired = (field) => {
        if (field.value.trim() === '') {
            // For Dynamically getting field name to display error. E.G: "Email" can't be empty
            // const fieldID = field.id[0].toUpperCase() + field.id.substring(1); 
            const errors = "Required"
            this.showErrorMessages(field, errors);
        } else {
            this.fieldValid(field);
        }
    }

    // Name Validation
    checkName = (field) => {
        if (field.id.includes('name') && field.value.trim().length > 0) {
            const nameRegex = /[0-9]/;
            if (nameRegex.test(field.value)) {
                const errors = "Name can't have number"
                this.showErrorMessages(field, errors);
            }
        }
    }

    // Email Validation
    checkEmail = (field) => {
        if (field.type === 'email') {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const isEmailValid = emailRegex.test(field.value.trim());

            if (!isEmailValid) {
                const errors = "Please enter a valid email address"
                this.showErrorMessages(field, errors);
            } else {
                this.fieldValid(field);
            }
        }

    }

    // Password Validation
    checkPassword = (field) => {
        // For login page, only required field validation is done for password field.
        // Complete Password Type validation is done for Signup page.

        if (field.type === 'password' && this.formType !== 'login') {
            const password = document.querySelector('form #password').value.trim();
            const isPasswordEmpty = password.length === 0;

            if (field.id.includes('confirm')) {
                // Check for Confirm Password Field
                const confrmPwd = field.value.trim();

                if (!isPasswordEmpty && confrmPwd !== password) {
                    const errors = "Password and confirmation password do not match.";
                    this.showErrorMessages(field, errors);
                } else if (confrmPwd === '') {
                    const errors = "Required";
                    this.showErrorMessages(field, errors);
                } else {
                    this.fieldValid(field);
                }

            } else {
                const pwdLength = 6;
                const numbers = /[0-9]/;
                const alphabet = /[a-zA-Z]/;
                const spaces = /\s/;
                const errors = [];

                if (!alphabet.test(field.value)) {
                    errors.push('Password must contain an alphabet');
                }

                if (!numbers.test(field.value)) {
                    errors.push('Password must contain a number');
                }

                if (spaces.test(field.value)) {
                    errors.push('Password cannnot have white spaces');
                }

                if (field.value.length < pwdLength) {
                    errors.push('Password must be of minimum 6 characters');
                }

                errors.length > 0 ? this.showErrorMessages(field, errors) : this.fieldValid(field);
            }
        }
    }


    // Field Valid
    fieldValid = (field) => {
        field.closest('.form_group').classList.remove('has_error');
        const errorParent = field.closest('.form_group').querySelector('.error_msg');
        errorParent.innerHTML = "";
    }

    // Show Errors if field is Invalid
    showErrorMessages = (field, errors) => {
        field.closest('.form_group').classList.add('has_error');
        const errorParent = field.closest('.form_group').querySelector('.error_msg');
        errorParent.innerHTML = "";

        if (Array.isArray(errors)) {
            errors.forEach(error => {
                const errorElem = document.createElement("p");
                errorElem.appendChild(document.createTextNode(error));
                errorParent.appendChild(errorElem);
            })

        } else {
            const errorElem = document.createElement("p");
            errorElem.appendChild(document.createTextNode(errors));
            errorParent.appendChild(errorElem);
        }

        // Focus on 1st Invalid input on form Submit
        if (event.type === 'submit') {
            document.querySelector('form .form_group.has_error input').focus();
        }
    }

}


export const callApi = async (reqType, endpoint) => {
    const baseUrl = `http://localhost:3000`;
    try {
        let response;
        if (reqType === 'GET') {
            response = await fetch(`${baseUrl}/${endpoint}`);

        } else {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
            };
            response = await fetch(`${baseUrl}/${endpoint}`, options);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

// Toggle Side Cart Overlay on Click in Header
export const toggleCartVisibility = async() => {
    const cartBtn = document.querySelector('#site_header .cart_btn');
    const cartClose = document.querySelector('.sidecart .close');
    const shopBtn = document.querySelector('.sidecart .footer_btns button#shop_btn');
    const checkoutBtn = document.querySelector('.sidecart .footer_btns button#checkout_btn');

    if (shopBtn) {
        shopBtn.onclick = () => {
            document.body.classList.remove('show_sidecart');
        }
    }

    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            document.body.classList.remove('show_sidecart');
        }
    }
    
    cartBtn.onclick = () => {
        document.body.classList.toggle('show_sidecart');
    }

    // Close Cart on close icon click
    cartClose.onclick = () => {
        document.body.classList.remove('show_sidecart');
    }

    updateCart();

}

export const calculateTotalCartPrice = () => {
    const cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
    const totalCartPrice = cartStorageItems.map(product => product.price).reduce((total, amount) => total + amount);
    const totalPriceElem = document.querySelector('.sidecart .footer_btns #checkout_btn .totalCartAmount .amount');
    totalPriceElem.innerHTML = `${totalCartPrice}`;
    return totalCartPrice;
}

export const updateCartQuantity = () => {
    const type = event.target.textContent;
    const productID = event.target.closest('.qty_div').getAttribute('data-id');
    const cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
    if(type === '+'){
        const matchedProduct = cartStorageItems.find(product => product.id === productID);
        cart.allItems = [...cart.allItems, matchedProduct];
        
    } else {
        const isSingleProduct = cartStorageItems.filter(product => product.id === productID).length === 1;
        if(isSingleProduct) {
            const newCartItems = cart.allItems.filter(product => product.id !== productID);
            cart.allItems = [...newCartItems];

        } else {
            const matchedItems = cartStorageItems.filter(product => {
                if (product.id === productID) {
                    return product;
                }
            });
            matchedItems.pop();
            const restItems = cartStorageItems.filter(product => product.id !== productID);
            cart.allItems = [...restItems, ...matchedItems];
        }
    }

    updateLocalStorage();
    updateCart();
}

export const updateCart = () => {
    const cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
    const isCartEmpty = cartStorageItems.length === 0;
    const emptyNote = document.querySelector('.sidecart .cart_note');
    const cartItemList = document.querySelector('.sidecart .cart_item_list');
    const cartItemListUl = document.querySelector('.sidecart .cart_item_list ul');
    const lowestPriceElem = document.querySelector('.sidecart .lowest_price');
    const promoText = document.querySelector('.sidecart .footer_btns .note');
    const shopBtn = document.querySelector('.sidecart .footer_btns #shop_btn');
    const checkoutBtn = document.querySelector('.sidecart .footer_btns #checkout_btn');

    cartItemListUl.innerHTML = "";

    if (!isCartEmpty) {
        emptyNote.classList.add('hide');
        cartItemList.classList.remove('hide');
        lowestPriceElem.classList.remove('hide');
        shopBtn.classList.add('hide');
        checkoutBtn.classList.remove('hide');
        promoText.classList.remove('hide');
        
        const cartItemsToDisplay = [];
        let itemFound;

        cartStorageItems.forEach((cartItem) => {
            itemFound = cartItemsToDisplay.find(item => item.id === cartItem.id);
            if (!itemFound) {
                cartItemsToDisplay.push(cartItem);
            }
        })

        cartItemsToDisplay.forEach(item => {
            const getCurrentQuantity = cart.allItems.filter(storageItem => storageItem.id === item.id).length;
            const documentFragment = document.createRange().createContextualFragment(`
                <li class="cart_item flex_view_xs end space-between">
                    <div class="item_info flex_view_xs middle">
                        <div class="cart_img">
                            <img src="../..${item.imageURL}" alt="${item.name}">
                        </div>

                        <div class="info">
                            <h3 class="title">${item.name}</h3>
                            <div class="qty_div flex_view_xs middle" data-id="${item.id}">
                                <button class="btn decrease_qty">-</button>
                                <span class="qty_count">${getCurrentQuantity}</span>
                                <button class="btn increase_qty">+</button>
                                <span class="multiply">x</span>
                                <span class="item_price">Rs. <span class="price">${item.price}</span></span>
                            </div>
                        </div>
                    </div>

                    <div class="item_total_price">Rs. ${item.price*getCurrentQuantity}</div>
                </li>
            `);

            cartItemListUl.appendChild(documentFragment);


        })

        calculateTotalCartPrice();


    } else {
        emptyNote.classList.remove('hide');
        cartItemList.classList.add('hide');
        lowestPriceElem.classList.add('hide');
        shopBtn.classList.remove('hide');
        checkoutBtn.classList.add('hide');
        promoText.classList.add('hide');
        
    }

    const qtyDecreaseBtns = Array.from(document.querySelectorAll('.sidecart .item_info .btn')) ;

    qtyDecreaseBtns.forEach(qtyBtn => {
        qtyBtn.addEventListener('click', updateCartQuantity)
    })

    updateLocalStorage();
    updateCartCounts();
}

export const updateCartCounts = () => {
    const headerCartCount = document.querySelector('header .cart_btn .cart_count');
    const sideCartCount = document.querySelector('.sidecart .count');
    const cartStorageItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).allItems : [];
    headerCartCount.innerHTML = cartStorageItems.length;
    sideCartCount.innerHTML = cartStorageItems.length;
}

export const addToCart = (product, event) => {
    // check if product already exists in cart
    const matchedProductFromCart = cart.allItems.filter((item) => item.id === product.id); 
    const productAlreadyExist = matchedProductFromCart.length > 0;

    productAlreadyExist ? matchedProductFromCart[0].quantity += 1 : product.quantity = 1;

    cart.allItems = [...cart.allItems, product];

    updateCartCounts();
    updateLocalStorage();
    alert(`${product.name} added to cart successfully`);
    updateCart();
}

toggleCartVisibility();