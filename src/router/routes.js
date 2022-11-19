
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'springs' ,component: () => import('pages/springs/Index.vue') }
    ]
  },
  {
    path: '/springs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'springs', component: () => import('pages/springs/Index.vue') },
      { path: 'h2-database', name: "spring-h2database", component: () => import('pages/springs/spring-data/h2-databsae/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
