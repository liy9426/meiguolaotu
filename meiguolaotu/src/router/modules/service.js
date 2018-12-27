import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/service',
  name: 'service',
  meta,
  redirect: { name: 'service-food' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'food', name: `${pre}food`, component: () => import('@/pages/service/food'), meta: { meta, title: '点餐服务' } },
    { path: 'movie', name: `${pre}movie`, component: () => import('@/pages/service/movie'), meta: { meta, title: '电影频道' } }
  ])('service-')
}
