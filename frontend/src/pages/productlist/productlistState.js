// import APIConfig from "../../api/api";
// import { ProductList } from "./productlist";

// export class ProductListState {
//   constructor(p) {
//     this.API = new APIConfig();
//     this.P = p;
//     console.log("__p", p);
//   }

//   onSelectCat = async (e) => {
//     if (e.target && e.target.matches("li.item")) {
//       const allPath = window.location.hash.split("/");
//       const [, PATH] = allPath;
//       await this.P.loadCat(e.target.id);
//       const URL = `${window.location.origin}/#/${PATH}/${e.target.id}`;
//       window.history.pushState({}, "", URL);
//     }
//   };

//   newCat = () => {
//     return [];
//   };

//   reRender = () => {
//     this.attachListListener();
//     console.log("hi", this);
//   };
// }
