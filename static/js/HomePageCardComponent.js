class HomePageCard extends HTMLElement {
    constructor() {
        super();
        this.name = "";
        this.imgURL = "";
        this.description = "";
        this.key = "";
        this.uniqueID = "";
        this.order = 0;
        this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.name = this.hasAttribute("name") ? this.getAttribute("name") : ""
        this.imgURL = this.hasAttribute("imgURL") ? this.getAttribute("imgURL") : ""
        this.description = this.hasAttribute("description") ? this.getAttribute("description") : ""
        this.key = this.hasAttribute("key") ? this.getAttribute("key") : ""
        this.id = this.hasAttribute("id") ? this.getAttribute("id") : ""
        this.order = this.hasAttribute("order") ? this.getAttribute("order") : ""
        this.render();
    }

    render() {
        const content = document.createElement("div")
        content.style.width = "60%";
        const imgDiv = document.createElement("div")
        const img = document.createElement("img")
        img.src = this.imgURL
        img.alt = this.name
        img.width = 150
        img.height = 100
        imgDiv.appendChild(img)
        imgDiv.style.width = "40%"
        imgDiv.style.display = "flex"
        imgDiv.style.justifyContent = "center"
        imgDiv.style.alignItems = "center"
        const headerSpan = document.createElement("span")
        headerSpan.innerHTML = `<h3
        style="text-align: center;margin-top:4rem"
        >${this.name}</h4>`
        const descriptionSpan = document.createElement("div")
        descriptionSpan.innerHTML = this.description
        descriptionSpan.style.marginBottom = "1rem"
        descriptionSpan.style.textAlign = "center"
        descriptionSpan.style.fontSize = "1rem"
        descriptionSpan.style.fontWeight = "400"
        const buttonSpan = document.createElement('span')
        buttonSpan.style.display = "flex"
        buttonSpan.style.justifyContent = "center"
        buttonSpan.innerHTML = `
        <style>
        button {
          background: #c21350;
          color: white;
          padding: 1rem;
          border: 0;
          font-size: 0.8rem;
        }
        </style>
        <button onclick='renderProduct("${this.id}")'> Explore ${this.key}</button>`
        content.appendChild(headerSpan)
        content.appendChild(descriptionSpan)
        content.appendChild(buttonSpan)
        if (this.order > 0 && this.order % 2 !== 0) {

            this.shadowRoot.append(imgDiv, content)

        } else if (this.order > 0 && this.order % 2 == 0) {

            this.shadowRoot.append(content, imgDiv)

        } else {
            return
        }

    }



}
customElements.define("home-page-card", HomePageCard);