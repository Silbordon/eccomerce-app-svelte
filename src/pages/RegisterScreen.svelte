<script lang="ts">
import { log } from "console";


    import {onMount} from "svelte";
    import { link, replace } from "svelte-spa-router";
    import{firebase} from "../firebase/config";
import { user } from "../stores/authStore";
    

    let email: string= "";
    let pass: string= "";
    let pass2: string= "";
    

    //sabe si estoy logueado el usuario, con el onAuthStateChanged
    onMount(() =>{
        firebase.auth().onAuthStateChanged(userLog =>{
            if(userLog){
                replace("/");
            }
        })
    })
    
    const handleRegister= async() =>{
        if(pass.length < 6){
            return
        }

        if(pass !== pass2){
            return 
        }
        const data = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        console.log(data);
        
        await user.set(data.user)
        replace("/");
    }

</script>
    
    <div class="container">
        <form on:submit|preventDefault={handleRegister} class="mt-3">
            <h1>Register</h1>
            <hr>
            <div class="mb-3">
                <label class="form-label w-100">Email Adress: 
                    <input 
                        bind:value={email}
                        type="email" 
                        class="form-control" 
                        placeholder="Example@mail.com"
                ></label>
            </div>
            <div class="mb-3">
                <label class="form-label w-100">Password: 
                    <input 
                        bind:value={pass}
                        type="password" 
                        class="form-control" 
                        placeholder="Insert a secure password"
                ></label>
            </div>
            <div class="mb-3">
                <label class="form-label w-100">Confirm Password:  
                    <input 
                        bind:value={pass2}
                        type="password" 
                        class="form-control" 
                        placeholder="Confirm your password"
                ></label>
            </div>
            <button type="submit" class="btn btn-primary w-100">
               Register
            </button>
            <div class="text-center mt-3">
                <a use:link class="text-dark fs-5" href="/login">Or Login</a>
            </div>
        </form>
    </div>