import axiosClient from './axiosClient';

class AuthAPI {
  HandleAuthentication = async (
    url: string,
    data?: any,
    method?: 'get' | 'post' | 'put' | 'delete' | 'path',
  ) => {
    return await axiosClient(`/auth${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}
const authApi = new AuthAPI();
export default authApi;
