import Transfer from '../../pages/transfer/Index.vue';
import notFound from '../../pages/common/not-found.vue';
import Comment from '../../pages/comment/Index.vue'
const routes = [
  {
    path: '/transfer',
    meta: {
      title: 'transfer',
      notAuth: true
    },
    component: Transfer
  },
  {
    path: '/comment',
    meta: {
      title: 'comment',
      notAuth: true
    },
    component: Comment
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
