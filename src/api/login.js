import { request } from '@/utils/request.js'


export const commonApi = {
  getInfo:()=> request.get('/api/common/info'),
  test:()=> request.get('/api/common/test'),
  login: (body) => {
    return request.post('/api/user/login', body)
  },
  register: (body) => {
    return request.post('/api/user/register', body)
  },
};