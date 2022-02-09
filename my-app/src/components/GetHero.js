import axios from "axios";

function GetHero(){
    return axios.get("http://localhost:5000/banners");
}
export default GetHero;