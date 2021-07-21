import { BaseComponent } from "../base/base.component";
import { handlebarPartials } from "../constants";
import { FormControlPartial } from "../shared/form-control/form-control.partial";
import loginTemplate from "./login.hbs";
import "./styles.scss";

export class LoginPartial extends BaseComponent {

    constructor(args, props) {
        super(args, props);
        // this.preRender();
    }

    preRender() {
        this.formBuilder = [{
            type: "email",
            id: "email",
            name: "email",
            label: "Email"
        }, {
            type: "password",
            id: "password",
            name: "password",
            label: "Password"
        }];
        this.formControls = this.formBuilder.map(fb => new FormControlPartial(this.handleBars, fb));
    }


    render() {
        return loginTemplate({
            form: this.formControls.map(fc => fc.render()).join('')
        });
    }
}