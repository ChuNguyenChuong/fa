import { IRegisterRequest, ILoginRequest } from './../models/Auth';
import axiosClient from './axiosClient';

const userApi = {
  register(data: IRegisterRequest) {
    const url = '/auth/signup';
    return axiosClient.post(url, data);
  },
  login(data: ILoginRequest) {
    const url = 'auth/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;
