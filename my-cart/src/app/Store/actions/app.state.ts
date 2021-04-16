import { AuthState } from "./auth.state";
import { CartState, CategoryState } from "./product.state";

export interface AppState {
    cart: CartState,
    categories: CategoryState,
    auth: AuthState
}