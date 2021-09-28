<template>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Type Text and Click Send" v-model="usermessage">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" @click="savemestodb">Send</button>
  </div>
</div>
<p v-if="err">{{err}}</p>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '../firebase/config';
import sendmestodb from '../composables/sendmestodb'
import { timestamp } from "../firebase/config"

export default {
  setup(){
    let usermessage = ref("");
    let displayName = ref("");
    let email = ref("");
    let err = ref("")
    let {error,send} = sendmestodb("messages")

    auth.onAuthStateChanged((_user)=>{
      if(_user){
              displayName.value = _user.displayName;
              email.value = _user.email;
      }
    })

    let savemestodb = async()=>{
        let chat = {
              name: displayName.value,
              email:email.value,
              messages:usermessage.value,
              created_at:timestamp()
    }
     let res = await send(chat);
        if(res){
          usermessage.value = ""
        }else {
          err.value = error
        }
    }

    return {usermessage,savemestodb,err}
  }
}
</script>

<style>

</style>