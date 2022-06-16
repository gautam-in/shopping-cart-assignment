import ProductsPage from "../components/productComponet/Products";
import { useParams } from "react-router-dom";
import SideBarNavigation from "../components/sideBarNavigation/SideBarNavigation";

const ProductPage = () => {
  const { action } = useParams();
  const obj = {
    action: action,
  };

  return (
    <>
      <div className="flex md:flex-row sm:flex-row flex-col min-h-screen">
        <nav className=" lg:w-64 md:w-40 pb-10 sm:bg-light">
          <SideBarNavigation id={action}></SideBarNavigation>
        </nav>
        <main className="grow">
          <ProductsPage action={obj}></ProductsPage>
        </main>
      </div>
      <p className="text-center w-full h-10 mt-2 pt-2 bg-gray-200 text-black ">
        Copyright@ 2018-2018 Sabka Bazaar Supplies Pvt Ltd
      </p>
    </>
  );
};
export default ProductPage;
