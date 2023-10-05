import {
  createRouter,
  createWebHistory
} from "vue-router";
import Main from '../components/Main.vue';
import UserLogin from '../views/UserLogin.vue';



const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: "/UserLogin",
      name: "UserLogin",
      component: UserLogin,

    },

    {
      path: "/",
      name: "Main",
      component: Main,

    },

  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {
      left: 0,
      top: 0
    };
  },
});

router.beforeEach(async (to, from, next) => {
  let username = "";
  let password = "";
  try {
    username = window.atob(localStorage.getItem("usr"))
    password = window.atob(localStorage.getItem("pw"))
  } catch (error) {}
  const data = await fetch('config.json')
  const userInfo = await data.json()
  console.log(username);
  console.log(password);

  if ((!username || !password) && to.name !== "UserLogin") {
    next({
      name: "UserLogin",
    });
  } else if (to.name !== "UserLogin") {
    const checkStatus = (userInfo.username === username && userInfo.password === password) ? true : false
    console.log(checkStatus);
    console.log(to.name);
    if (checkStatus) {
      next();
    } else {
      next({
        name: "UserLogin",
      });
    }
    // next()
  } else {
    next()
  }
});



export default router;