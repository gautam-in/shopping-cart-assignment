import Carousal from "./carousal.js";
import { Category } from "./categories.js";
import { Login_Register } from "./loginRegister.js";
import { Modal } from "./modal.js";
import { Header } from "./header.js";

customElements.define('categories-view', Category);
customElements.define('custom-login-register', Login_Register);
customElements.define('custom-carousal', Carousal);
customElements.define('custom-header', Header);
customElements.define('custom-modal', Modal);