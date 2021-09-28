import { db } from "../firebase/config"
import { ref } from '@vue/reactivity'
let sendmestodb = (collection)=>{
    let error = ref("")
    let send = async(chat)=>{
        try{
            let res = await db.collection(collection).add(chat)
            if(!res){
                throw new Error
            }  
            return res
        }catch(err){
            error.value = err.message
        }

    }
    return {error,send}
}
export default sendmestodb;