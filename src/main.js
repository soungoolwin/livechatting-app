import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/global.css"
import { auth } from './firebase/config'

let app;

auth.onAuthStateChanged(()=>{
    if(!app){
     app =  createApp(App).use(router).mount('#app')
    }
})


