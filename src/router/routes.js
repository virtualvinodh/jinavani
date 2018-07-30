
export default [
  {
    path: '/',
    redirect: '/editor'
  },

  {
    path: '/learn-brahmi',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/learn-brahmi') }
    ]
  },

  {
    path: '/memory-cards',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/memory-cards') }
    ]
  },

  {
    path: '/flipcards-shuffle',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/flipcards-shuffle') }
    ]
  },

  {
    path: '/learn-vatteluttu',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/learn-vatteluttu') }
    ]
  },

  {
    path: '/practice-brahmi',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/practice-brahmi') }
    ]
  },

  {
    path: '/practice-vatteluttu',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/practice-vatteluttu') }
    ]
  },

  {
    path: '/match-letter',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/match-letter') }
    ]
  },

  {
    path: '/thirukkural',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/thirukkural') }
    ]
  },

  {
    path: '/tholkaappiyam',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/tholkaappiyam') }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/about') }
    ]
  },

  {
    path: '/editor',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/download',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/download') }
    ]
  },

  {
    path: '/adinatha-manual',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/adinatha-manual') }
    ]
  },

  {
    path: '/e-brahmi-manual',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/e-brahmi-manual') }
    ]
  },

  {
    path: '/e-velvi-manual',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/e-velvi-manual') }
    ]
  },

  {
    path: '/adinatha-manual',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/adinatha-manual') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
