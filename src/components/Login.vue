<template>
    <form @submit.prevent="Login">
        <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <p class="errstyle" v-if="err">{{err}}</p>
        <button type="submit" class="btn btn-primary">Login</button>
        <p>Create account? <span @click="switchsignup" class="swtbtn">Signup</span></p>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from "../composables/useLogin"
import { useRouter } from "vue-router"
export default {
    setup(props,{emit}){
        let email = ref("");
        let password = ref("");
        let err = ref("");
        let router = useRouter();
        let {error,userLogin} = useLogin()

        let Login = async()=>{
            let res = await userLogin(email.value,password.value)
            if(res){
                router.push({name:"Chatroom"})

            }else {
                err.value = error
            }
        }

        let switchsignup =()=>{
            emit('switchsignup')
        }
        return{switchsignup,email,password,Login,err}
    }
}
</script>

<style>

</style>