import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from './App.vue'
import router from "./router";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import numeral from "numeral";
import { LoadingPlugin } from "vue-loading-overlay";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import './index.css'
import "./assets/fonts/style.css"
import "vue-loading-overlay/dist/css/index.css";



const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(numeral);
app.use(LoadingPlugin);
pinia.use(piniaPluginPersistedstate);
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
