import { memo, useState } from "react";
import classNames from "classnames";
import "./AccordionComponent.scss";
import { ICategories } from "../../Interfaces/ICategories";
import { setSelectedAccordion } from "../../Model/Model";

export interface IAccordionComponentProps {
    categoriesList: Array<ICategories>;
    selectedCategorieID: string | null;
    externalClassName?: string;
}

export const AccordionComponent: React.FC<IAccordionComponentProps> = memo(
    (props: IAccordionComponentProps) => {
        const { categoriesList, selectedCategorieID, externalClassName } =
            props;
        const [isOpen, setOpen] = useState(selectedCategorieID !== null);
        const BASE_CLASSNAME: string = "accordion";
        const getClassName = (id: string) => {
            const ACCORDION_CLASSNAME: string = classNames({
                accordion_menu: true,
                "accordion_menu--hide": isOpen && selectedCategorieID === id,
            });

            return ACCORDION_CLASSNAME;
        };

        const onClickHandle = (categorie: ICategories) => {
            if (window.screen.width < 530) {
                if (!isOpen) {
                    setSelectedAccordion(categorie.id);
                    setOpen(true);
                } else {
                    setSelectedAccordion(null);
                    setOpen(false);
                }
            } else {
                setSelectedAccordion(categorie.id);
            }
        };

        return (
            <div className={`${BASE_CLASSNAME} ${externalClassName}`}>
                {categoriesList.map((categorie) => {
                    if (categorie.enabled) {
                        return (
                            <div
                                key={categorie.id}
                                id={categorie.name}
                                className={getClassName(categorie.id)}
                                onClick={() => onClickHandle(categorie)}
                            >
                                {categorie.name}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    }
);