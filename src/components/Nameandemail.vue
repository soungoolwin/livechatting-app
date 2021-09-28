<template>
  <div id="main">
    <div v-if="user">
      <p class="currentname">{{ user.displayName }}</p>
      <p>You are login as {{ user.email }}</p>
    </div>
    <div>
            <button class="btn btn-primary" @click="Signout">Signout</button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
import {useRouter} from "vue-router"
export default {
  setup() {
    let user = ref("");
    let router = useRouter()
    auth.onAuthStateChanged((_user) => {
            if(_user){
                     user.value = _user
            }else{
                    user.value = null;
                    router.push("/")
            }
    });
    let Signout = async()=>{
           await auth.signOut();
           if(user.value==null){
                   
           }
    }
    return {user, Signout};
  },
};
</script>

<style>
</style>