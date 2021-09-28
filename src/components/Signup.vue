<template>
  <form @submit.prevent="Signup">
    <div class="form-group">
        <label>Display Name</label>
        <input type="text" class="form-control" placeholder="Display Name" v-model="displayName">
    </div>
    <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" v-model="email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">
    </div>
    <div class="form-group">
        <label>Comfirm Password</label>
        <input type="password" class="form-control" placeholder="Comfirm Password" v-model="comfirmpassword">
    </div>
    <p class="errstyle" v-if="err">{{err}}</p>
    <button type="submit" class="btn btn-primary">Signup</button>
    <p>Have already account? <span @click="switchlogin" class="swtbtn">Login</span></p>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
import {useRouter} from 'vue-router'
export default {
    setup(props,{emit}){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let comfirmpassword = ref("")
        let err = ref("")
        let router = useRouter()

        let {error,userSignup} = useSignup()


        let Signup = async()=>{
            if(password.value==comfirmpassword.value){
                let res = await userSignup(email.value,password.value,displayName.value)
                if(res){
                    router.push({name:"Chatroom"})
                }else {
                    err.value = error
                }
            }else {
                err.value = "passwords not match"
            }
        }
        let switchlogin = ()=>{
            emit('switchlogin')
        }
        return{displayName,email,password,comfirmpassword,Signup,switchlogin,err}
    }
}
</script>

<style>

</style>