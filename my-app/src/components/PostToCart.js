import axios from "axios";

function PostToCart(id){
    return axios.get("http://localhost:5000/addToCart",{id:id});
}
export default PostToCart;