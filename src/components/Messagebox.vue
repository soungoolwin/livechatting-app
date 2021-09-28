<template>
  <div class="msgbox" ref="messagebox">
    <div v-for="message in final" :key="message.id">
      <div class="single" v-if="message.created_at">
        <span class="createdat">{{message.created_at}}</span>
        <span class="name">{{message.name}}: </span>
        <span class="message">{{message.messages}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { db } from '../firebase/config'
import { onUpdated } from '@vue/runtime-core'
import { formatDistanceToNow } from 'date-fns'
export default {
 setup(){
let messages = ref([]);
let messagebox = ref(null)
onUpdated(()=>{
  messagebox.value.scrollTop = messagebox.value.scrollHeight
})

   db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
     let result = [];
     snap.docs.forEach((doc)=>{
       let document = {...doc.data(),id:doc.id};
      doc.data().created_at && result.push(document)
     })
     messages.value = result;
   })
  let final = computed(()=>{
    return messages.value.map((msg)=>{
      let formattime = formatDistanceToNow(msg.created_at.toDate())
      return {...msg,created_at:formattime}
    })

  })
   return { messages, messagebox, final }
 }
}
</script>

<style>

</style>