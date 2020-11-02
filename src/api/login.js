import { request } from '@/utils/request.js'


export const commonApi = {
  login: (body) => {
    return request.post('/api/user/login', body)
  },
  register: (body) => {
    return request.post('/api/user/register', body)
  },
};