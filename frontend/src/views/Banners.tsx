import Axios from "axios";
import { useEffect } from "react";

type Props = {};

const Banners = (props: Props) => {
  useEffect(() => {
    Axios.get("/banners");
  });

  return <div>Banners</div>;
};

export default Banners;
