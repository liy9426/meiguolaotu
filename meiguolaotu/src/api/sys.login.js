import fetch from '@/plugin/axios'

export function AccountLogin (data) {
  return fetch({
    url: '/login',
    method: 'post',
    data
  })
}
