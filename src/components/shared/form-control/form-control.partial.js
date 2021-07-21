import { handlebarPartials } from "../../constants";
import { BaseComponent } from "./../../base/base.component";
import formControlTemplate from "./form-control.hbs";
import "./styles.scss";

export class FormControlPartial extends BaseComponent {
    constructor(args, props) {
        super(args, props)
    }

    render() {
        return formControlTemplate({
            ...this.props
        });
    }
}