import { memo } from "react";
import { Link } from "react-router-dom";
import "./LinkButtonComponent.scss";

export interface ILinkButtonComponentProps {
    id: string;
    to: string;
    buttonName: string | JSX.Element;
    externalClassName?: string;
    onClick?: () => void;
}

export const LinkButtonComponent: React.FC<ILinkButtonComponentProps> = memo(
    (
        props
    ) => {
        const { id, to, buttonName, externalClassName, onClick} = props;
        const BASE_CLASSNAME: string = "link-button";
        return (
            <div className={externalClassName}>
                <Link
                    id={id}
                    to={to}
                    className={BASE_CLASSNAME}
                    onClick={onClick}
                >
                    {buttonName}
                </Link>
            </div>
        );
    }
) 
