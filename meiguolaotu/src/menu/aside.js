// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '金融',
    icon: 'folder-o',
    children: [
      { path: '/finance/chinaStock', title: '国内行情', icon: 'cny' },
      { path: '/finance/usStock', title: '美国行情', icon: 'dollar' },
      { path: '/finance/bitcoin', title: '加密货币', icon: 'bitcoin' }
    ]
  },
  {
    title: '生活',
    icon: 'folder-o',
    children: [
      { path: '/service/food', title: '点餐服务', icon: 'cutlery' },
      { path: '/service/movie', title: '电影频道', icon: 'film' }
    ]
  }
]
