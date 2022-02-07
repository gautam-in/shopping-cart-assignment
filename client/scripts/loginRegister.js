export class Login_Register extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        if(this.hasAttribute('register'))
            this._isRegister = this.getAttribute('register');
        this.innerHTML = 
        `
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