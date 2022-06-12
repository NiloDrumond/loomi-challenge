export type SignInData = {
  email: string;
  password: string;
};

export type SignInResponse = {
  'access-token'?: string;
};

export interface AuthContextData {
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface AuthenticatedContextData extends AuthContextData {
  token: string;
}
