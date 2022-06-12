export type UserData = {
  username: string;
  name: string;
  avatar: string;
};

export interface UserContextData {
  userData?: UserData;
}
