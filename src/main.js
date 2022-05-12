import { createApp } from 'vue'
import App from "./App.vue";
import router from './routes'

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




//import 'bootstrap'
//import "bootstrap/dist/css/bootstrap.min.css"
//import 'jquery/src/jquery.js'

//import "bootstrap/dist/js/bootstrap.js"





createApp(App).use(router).mount('#app')