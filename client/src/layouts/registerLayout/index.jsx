import {Typography} from "@mui/material";
import SigninForm from "../../components/signinForm";
import "./styles.scss";

const RegisterLayout = () => {
  return ( 
    <section className="signinlayout-wrapper" >
      <section className="signinlayout-container-one">
        <Typography variant="h3" component="h3">Login</Typography>
        <Typography variant="body2" component="h6">Get access to your Orders, Wishlists and Recommendations</Typography>
      </section>
      <section>
        <SigninForm/>
      </section>
    </section>
   );
}
 
export default RegisterLayout;