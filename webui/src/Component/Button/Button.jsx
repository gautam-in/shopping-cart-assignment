import { fn } from '../../Utils';
import css from './Button.module.css';
function Button(props){
    let {children,disabled=false,type="button",className="",onClick=fn,block=false,small=false}=props;
    let cls=[css.Button,className];
    if(small){
        cls.push(css.Small)
    }else{
        cls.push(css.Default)
    }

    if(block){
        cls.push(css.Block)
    }

    return <button disabled={disabled} type={type} onClick={onClick} className={cls.join(" ")}>{children}</button>
}
export default Button;