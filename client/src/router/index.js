import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';

const frontComponent = component => () =>
  import(`../components/${component}.vue`);
const dashboardComponent = component => () =>
  import(`../components/dashboard/${component}.vue`);

Vue.use(VueRouter);
const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: '',
        name: 'Index',
        component: frontComponent('index'),
      },
      {
        path: 'detail/:wordId',
        name: 'detail',
        component: frontComponent('detail'),
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [{
        path: '*',
        redirect: {
          name: 'Login'
        },
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'login',
        name: 'Login',
        component: dashboardComponent('login'),
      },
      {
        path: 'categories',
        name: 'Categories',
        component: dashboardComponent('categories'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'archives',
        name: 'Archives',
        component: dashboardComponent('archives'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'article/:articleId',
        name: 'Article',
        component: dashboardComponent('article'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // console.log('To:', to, "From:", from, ",Next:", next);
  // console.log('\n', to.meta.requiresAuth);
  let token = Vue.prototype.$session.get('jwt');
  if (to.meta.requiresAuth) {
    console.log("需要驗證");
    const api = `/api/auth/check`;
    Vue.prototype.axios.post(api, {
      token: token
    }).then((response) => {
      console.log('驗證資訊:', response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          name: 'Login'
        });
      }
    }).catch(error => {
      console.log(error);
    });
  } else {
    next();
  }
});

export default router;