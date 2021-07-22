import axios from "axios";
import { deserialize } from "mappers/apiResMapper";
import { Login } from "models/login";

class LoginRepository {
  // postLoginDetails = async (data: Login): Promise<Login> => {
  //   // For trial used mock api for login
  //   // let res = await ApiClient.post(profileEndPoints.userPhoneNumber(), data);
  //   // this is for new user
    
  // };
}

const loginRepository = new LoginRepository();
export { loginRepository as LoginRepository };
