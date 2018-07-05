
export default [
  {
    path: '/',
    component: () => import('pages/shop')
  },
  {
    path: '/camera',
    component: () => import('pages/camera')
  },
  {
    path: '/settings',
    component: () => import('pages/settings')
  },
  {
    path: '/face/diamond',
    component: () => import('pages/kacamata/bentuk_wajah/wajahBerlian')
  },
  {
    path: '/face/round',
    component: () => import('pages/kacamata/bentuk_wajah/wajahBulat')
  },
  {
    path: '/face/oval',
    component: () => import('pages/kacamata/bentuk_wajah/wajahOval')
  },
  {
    path: '/face/square',
    component: () => import('pages/kacamata/bentuk_wajah/wajahPersegi')
  },
  {
    path: '/face/heart',
    component: () => import('pages/kacamata/bentuk_wajah/wajahHati')
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
