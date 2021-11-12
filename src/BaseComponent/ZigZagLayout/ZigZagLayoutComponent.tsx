import { ICategories } from "../../Interfaces/ICategories";
import { setSelectedAccordion } from "../../Model/Model";
import { ROUTE_URL } from "../../Utility/RouteUrlConstant";
import { LinkButtonComponent } from "../LinkButton/LinkButtonComponent";
import "./ZigZagLayoutComponent.scss";

interface IZigZagLayoutComponentProps {
    categoriesList: Array<ICategories>;
}

export const ZigZagLayoutComponent: React.FC<IZigZagLayoutComponentProps> = (
    props: IZigZagLayoutComponentProps
) => {
    const { categoriesList } = props;
    const BASE_CLASSNAME: string = "zig-zag";
    const SECTION_CLASSNAME: string = `${BASE_CLASSNAME}_section`;
    const SUB_LEFT_CLASSNAME: string = `${SECTION_CLASSNAME}_sub-left`;
    const SUB_LEFT_IMAGE_CLASSNAME: string = `${SUB_LEFT_CLASSNAME}_image`;
    const SUB_RIGHT_CLASSNAME: string = `${SECTION_CLASSNAME}_sub-right`;
    const SUB_RIGHT_HEADER_CLASSNAME: string = `${SUB_RIGHT_CLASSNAME}_header`;
    const SUB_RIGHT_DESCRIPTION_CLASSNAME: string = `${SUB_RIGHT_CLASSNAME}_description`;
    const SUB_RIGHT_BUTTON_CLASSNAME: string = `${SUB_RIGHT_CLASSNAME}_button`;

    return (
        <div className={BASE_CLASSNAME}>
            {categoriesList.map((categorie) => {
                if (categorie.enabled) {
                    return (
                        <div className={SECTION_CLASSNAME}>
                            <div className={SUB_LEFT_CLASSNAME}>
                                <img
                                    className={SUB_LEFT_IMAGE_CLASSNAME}
                                    src={categorie.imageUrl}
                                    alt={categorie.key}
                                />
                            </div>
                            <div className={SUB_RIGHT_CLASSNAME}>
                                <h2 className={SUB_RIGHT_HEADER_CLASSNAME}>
                                    {categorie.name}
                                </h2>
                                <p className={SUB_RIGHT_DESCRIPTION_CLASSNAME}>
                                    {categorie.description}
                                </p>
                                <LinkButtonComponent
                                    id={categorie.key}
                                    buttonName={`Explore ${categorie.key}`}
                                    to={ROUTE_URL.PRODUCT_PAGE}
                                    externalClassName={
                                        SUB_RIGHT_BUTTON_CLASSNAME
                                    }
                                    onClick={() =>
                                        setSelectedAccordion(categorie.id)
                                    }
                                />
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};
