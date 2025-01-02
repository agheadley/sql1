<script lang="ts">
import '$lib/app.css';
import {supabase} from '$lib/supabaseClient';
import {PUBLIC_REDIRECT_URL} from '$env/static/public';

let { children } = $props();

let email:string=$state('');

let generateMagicLink = async () => {
    console.log('EMAIL',email);
    
   

    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: PUBLIC_REDIRECT_URL,
          shouldCreateUser:false
        }
      
    });

    if(error) console.log('MAGIC LINK ERROR',error);
    else console.log('MAGIC LINK RESPONSE',data);
    
    

    

    
};

$effect(() => {
    
});


</script>


<svelte:head>
        <title>Login</title>
        <meta name="" content="Supabase demo..." />
</svelte:head>

    <article>
        <p>
            <label for="email">User email address</label>
            <input type=text id="email" placeholder="email" bind:value={email}/>
        </p>
        <p>
            <button onclick={generateMagicLink}>Login</button>
        </p>
    </article>
   
    
   



<style>
    
</style>