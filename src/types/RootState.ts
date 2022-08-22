import { SignUpState } from 'app/pages/SignUp/types';
import { HomePageState } from 'app/pages/HomePage/types';
import { SignInState } from 'app/pages/SignIn/types';
import { ProductListingState } from 'app/pages/ProductListing/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  signUp?: SignUpState;
  homePage?: HomePageState;
  signIn?: SignInState;
  productListing?: ProductListingState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
