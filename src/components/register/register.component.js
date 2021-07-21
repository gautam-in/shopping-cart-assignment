import { BaseComponent } from "../base/base.component";
import { handlebarPartials } from "../constants";
import { FormControlPartial } from "../shared/form-control/form-control.partial";
import registerTemplate from "./register.hbs";
import "./styles.scss";

export class RegisterPartial extends BaseComponent {

    constructor(args, props) {
        super(args, props);
        // this.preRender();
    }

    preRender() {
        his.formBuilder = [{
            type: "text",
            id: "firstname",
            name: "firstname",
            label: "First Name"
        }, {
            type: "text",
            id: "lastname",
            name: "lastname",
            label: "Last Name"
        }, {
            type: "email",
            id: "email",
            name: "email",
            label: "Email"
        }, {
            type: "password",
            id: "password",
            name: "password",
            label: "Password"
        }, {
            type: "text",
            id: "confirm-password",
            name: "confirm-password",
            label: "Confirm Password"
        },];
        this.formControls = this.formBuilder.map(fb => new FormControlPartial(this.handleBars, fb));
    }


    render() {
        return registerTemplate({
            form: this.formControls.map(fc => fc.render()).join('')
        })
    }
}