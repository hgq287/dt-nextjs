export interface SignInPayload {
  email: string;
  password: string;
} 

export interface SignInResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}