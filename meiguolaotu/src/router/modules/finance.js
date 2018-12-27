import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/finance',
  name: 'finance',
  meta,
  redirect: { name: 'finance-chinaStock' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'bitcoin', name: `${pre}bitcoin`, component: () => import('@/pages/finance/bitcoin'), meta: { meta, title: '加密货币' } },
    { path: 'chinaStock', name: `${pre}chinaStock`, component: () => import('@/pages/finance/chinaStock'), meta: { meta, title: '国内行情' } },
    { path: 'usStock', name: `${pre}usStock`, component: () => import('@/pages/finance/usStock'), meta: { meta, title: '美国行情' } }
  ])('finance-')
}
