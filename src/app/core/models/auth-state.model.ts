import { User } from './user.model';
type UserType = User | null;
export interface AuthState {
  user: UserType;
  authError: string;
  loading: boolean;
}
