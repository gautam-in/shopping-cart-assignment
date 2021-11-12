import { useState } from "react";
import "./PlusMinusButtonComponent.scss";

interface IPlusMinusButtonComponentProps {
    initialCount: number;
    onPlusClick: () => void;
    onMinusClick: () => void;
}

export const PlusMinusButtonComponent: React.FC<IPlusMinusButtonComponentProps> =
    (props: IPlusMinusButtonComponentProps) => {
        const { initialCount, onPlusClick, onMinusClick } = props;
        const BASE_CLASSNAME: string = "plus-minus-button";
        const MINUS_BUTTON_CLASSNAME: string = "minus-button";
        const PLUS_BUTTON_CLASSNAME: string = "plus-button";
        const COUNT_CLASSNAME: string = "count-button";

        return (
            <div className={BASE_CLASSNAME}>
                <span className={MINUS_BUTTON_CLASSNAME} onClick={onMinusClick}>
                    -
                </span>
                <span className={COUNT_CLASSNAME}>{initialCount}</span>
                <span className={PLUS_BUTTON_CLASSNAME} onClick={onPlusClick}>
                    +
                </span>
            </div>
        );
    };
