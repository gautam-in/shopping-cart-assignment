import { Component } from "react";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";


class PageLayout extends Component {
   render() {
      return (
         <div className="container">
            <PageHeader />
            <main className="main" >
               {this.props.children}
            </main>
            <PageFooter />
         </div>
      )

   }
}

export default PageLayout;