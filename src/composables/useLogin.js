import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'

let useLogin = ()=>{
    let error = ref("")
    let userLogin = async(email,password)=>{
        try{
            let res = await auth.signInWithEmailAndPassword(email,password)
            if(!res){
                throw new Error
            }
            return res

        }catch(err){
            error.value = err.message
        }
    }
    
    return {error,userLogin}
}

export default useLogin