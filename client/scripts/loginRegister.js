class Login_Register extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        if(this.hasAttribute('register'))
            this._isRegister = this.getAttribute('register');
        this.innerHTML = 
        `<style>
        #main-container {
            display : grid;
            max-width : 1000px;
            margin : 0 auto;
            grid-template-columns : 1fr 1fr;
            grid-column-gap : 3rem;
            background-color : white;
            margin-top : 5rem;
        }
        #form-container {
            justify-self : start;
        }
        #title-container {
            justify-self : center;
        }
        form {
            width : 25vw;
        }
        input {
            border-width : 0;
            border-bottom-width : 1.5px;
            padding-top : 1rem;
            width : 100%;
        }
        input:focus {
            outline : 0;
            border-color : #2FB9C6;
        }
        label {
            display : block;
            padding-top : 1rem;
        }
        #submit-button {
            width : 100%; 
            margin-top : 2rem; 
            padding : 10px 60px; 
            background-color : #BF2957; 
            color : white; 
            border-width : 0;
            cursor : pointer;
        }
        @media only screen and (max-width: 600px) {
            #main-container {
                margin-top : 0;
                grid-template-columns : 1fr;
                grid-template-rows : 0.1fr 1fr;
            }
            #form-container {
                justify-self : center;
            }
            form {
                width : 50vw;
            }
            #title-container h2, p{
                text-align : center;
            }
        }
        </style>
        <main id='main-container'>
        <section id='title-container'>` 
        + 
        (this._isRegister === 'true' ? `<h2>SignUp</h2>` : `<h2>Login</h2>`)
        +
        (this._isRegister === 'true' ? `<p>We do not share your personal details with anyone</p>` : `<p>Get access to your Orders, Wishlists and Recommendations</p>`)
        +
        `</section>
        <aside id="form-container">
        <form action = "#" method = "post">`
        +
        (this._isRegister === 'true' ? `
            <label id="label" for = "firstname">First Name</label>
            <input type = "text" id = "firstname"><br />
            <label id="label" for = "lastname">Last Name</label> 
            <input type = "text" id = "lastname"><br />` : '')
        +
        `<label for = "email">Email</label>
        <input type = "email" id = "email"><br> 
    
        <label for = "password">Password</label> 
        <input type = "password" id = "password"><br>` 
        +
        (this._isRegister === 'true' ? 
            `<label for = "confirm_password">Confirm Password</label>
            <input type = "password" id = "confirm_password"><br>` : '')
        +   
        `<button type="submit" id="submit-button">`
        +
        (this._isRegister === 'true' ? `SignUp` : `Login`)
        +
        `
        </button>
        </aside>
        </main>
    </form> `;
    };

    attributeChangedCallback(name, oldVal, newVal){
        if(oldVal === newVal)
            return;
        if(name === 'register'){
            this._isRegister =  newVal;
        }
    }

    static get observedAttributes(){
        return ['register']
    }
}

customElements.define('custom-login-register', Login_Register)