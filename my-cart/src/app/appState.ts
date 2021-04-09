import { AuthState } from "./auth/AuthState";
import { CartState, CategoryState} from "./products/ProductState";

export interface AppState {
    cart : CartState,
    categories : CategoryState,
    auth : AuthState
}