<template>
  <div v-if="loginorsignup">
     <Signup @switchlogin="switchlogin"></Signup>
  </div>
  <div v-if="!loginorsignup">
    <Login @switchsignup="switchsignup"></Login>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login.vue'
import Signup from "../components/Signup.vue"

export default {
  name: 'Home',
  components: {
    Signup,
    Login
  },
  setup(){
    let loginorsignup = ref(true)
    let switchlogin = ()=>{
      loginorsignup.value = !loginorsignup.value
    }
    let switchsignup = ()=>{
      loginorsignup.value = !loginorsignup.value
    }

    return{loginorsignup,switchlogin,switchsignup}
  }
}
</script>
