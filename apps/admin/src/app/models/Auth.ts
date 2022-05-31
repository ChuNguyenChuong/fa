export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  full_name: string;
  email: string;
  password: string;
  confim_password: string;
}
