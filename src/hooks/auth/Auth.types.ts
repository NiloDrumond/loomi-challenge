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
  token?: string;
}

export interface UseAuthenticatedData extends AuthContextData {
  token: string;
}
