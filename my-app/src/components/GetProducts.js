import axios from "axios";

function GetProducts(){
    return axios.get("http://localhost:5000/products");
}
export default GetProducts;