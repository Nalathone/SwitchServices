import { createRouter, createWebHistory } from "vue-router";
import Main from '../components/Main.vue';
import UserLogin from '../views/UserLogin.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
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
    return savedPosition || { left: 0, top: 0 };
  },
});

 

export default router;
