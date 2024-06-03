import App from '@/App.vue';
import notFound from '@/pages/common/not-found.vue';

const routes = [
  {
    path: '/',
    meta: {
      title: 'Home',
      notAuth: true
    },
    component: App
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      title: '404',
      notAuth: true
    },
    component: notFound
  }
];

export default routes;
