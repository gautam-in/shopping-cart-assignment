// import { Footer, Navbar, BackToTop } from './components';
import { BackToTop } from "./components";
import {
  Fragment,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import { Header, Footer, MainContent } from "./layouts";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <Header />
    <MainContent>{children}</MainContent>
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;
