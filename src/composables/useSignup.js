import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
let useSignup = ()=>{
    let error = ref("")
    let userSignup = async(email,password,displayName)=>{
        try{
            let res = await auth.createUserWithEmailAndPassword(email,password)
            
            if(!res){
                throw new Error
            }
            await res.user.updateProfile({displayName})
            return res;
        }catch(err){
            error.value = err.message
        }
    }
    return {error,userSignup}
}
export default useSignup