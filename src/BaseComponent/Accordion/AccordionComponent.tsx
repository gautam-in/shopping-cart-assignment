import "./AccordionComponent.scss";
import { ICategories } from "../../Interfaces/ICategories";
import { setSelectedAccordion } from "../../Model/Model";

interface IAccordionComponentProps {
    categoriesList: Array<ICategories>;
}

export const AccordionComponent: React.FC<IAccordionComponentProps> = (
    props: IAccordionComponentProps
) => {
    const BASE_CLASSNAME: string = "accordion";
    const ACCORDION_CLASSNAME: string = `${BASE_CLASSNAME}_menu`;

    return (
        <div className={BASE_CLASSNAME}>
            {props.categoriesList.map((categorie) => {
                if (categorie.enabled) {
                    return (
                        <div
                            id={categorie.name}
                            className={ACCORDION_CLASSNAME}
                            onClick={() => setSelectedAccordion(categorie.id)}
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
};
