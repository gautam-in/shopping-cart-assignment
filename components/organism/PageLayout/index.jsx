import { Component } from "react";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";


class PageLayout extends Component {
   render() {
      return (
         <>
            <PageHeader />
            <main className="main" >
               <div className="container">
                  {this.props.children}
               </div>
            </main>
            <PageFooter />
         </>

      )

   }
}

export default PageLayout;