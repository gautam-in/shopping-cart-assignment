import { ILoggedUser } from "./loggedUser";

export interface IState {
  loggedUser: ILoggedUser;
  products: any[];
  categories: any[];
  catalog: any[];
}
