import { Title } from "@material-ui/icons";
import React from "react";
import BCDPage from "./Container/BCDPage/BCDPage";
import BCPage from "./Container/BCPage/BCPage";
import BevPage from "./Container/BevPage/BevPage";
import BHPage from "./Container/BHPage/BHPage";
import FVPage from "./Container/FVPage/FVPage";

export const routeConfigList = [
  { title: "Fruits & Vegetables", path: "fruit-and-veg" },
  { title: "Bakery Cakes and Dairy", path: "bakery-cakes-dairy" },
  { title: "Beverages", path: "beverages" },
  { title: "Beauty & Hygiene", path: "beauty-hygiene" },
  { title: "Baby Care", path: "baby" },
];

export const routes = [
  {
    path: "fruit-and-veg",
    main: (e, props) => <FVPage {...e} data={props} />,
  },
  {
    path: "bakery-cakes-dairy",
    // main: <BCDPage />,
    main: (e, props) => <BHPage {...e} data={props} />,
  },
  {
    path: "beverages",
    main: (e, props) => <BevPage {...e} data={props} />,
  },
  {
    path: "beauty-hygiene",
    main: (e, props) => <BHPage {...e} data={props} />,
  },
  {
    path: "baby",
    main: (e, props) => <BHPage {...e} data={props} />,
  },
];
