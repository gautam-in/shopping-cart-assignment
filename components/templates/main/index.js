import Footer from "../../organisms/footer/index";
import Header from "../../organisms/header/index";
import ContainerStyles from "./index.style";
import GlobalStyles from "../../styles/globalStyles";

function Main(props) {
    return (
        <div>
            <GlobalStyles/>
                <Header />
                <ContainerStyles>
                    {props.children}
                </ContainerStyles>
                <Footer />
        </div>
    );
}
export default Main;