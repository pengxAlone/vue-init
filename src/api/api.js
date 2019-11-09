import request from '@/utils/request'

// 注意get 和 post的传参区别

export function test(params) {
  return request({
    url: 'user/app/init',
    method: 'get',
    params: params
  })
}

// export function test1(data) {
//   return request({
//     url: 'user/app/init',
//     method: 'post',
//     data
//   })
// }