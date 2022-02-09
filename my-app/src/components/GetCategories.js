import axios from "axios";

function GetCategories(){
    return axios.get("http://localhost:5000/categories");
}
export default GetCategories;