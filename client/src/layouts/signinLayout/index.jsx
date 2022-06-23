import {Typography} from "@mui/material";
import "./styles.scss";

const SignInLayout = ({heading, subHeading, component}) => {
  return ( 
    <section className="signinlayout-wrapper" >
      <section className="signinlayout-container-one">
        <Typography variant="h3" component="h3">{heading}</Typography>
        <Typography variant="body2" component="body2">{subHeading}</Typography>
      </section>
      <section>
       {component}
      </section>


    </section>
   );
}
 
export default SignInLayout;