<script lang="ts">
import '$lib/app.css';
//import {page} from '$app/stores';
import { supabase } from "$lib/supabaseClient";

let { children } = $props();


let authCheck=async()=>{
    const { data:{user} } = await supabase.auth.getUser();
    console.log('authCheck',user);

};
    

$effect(() => {

    authCheck();  
});


</script>


<svelte:head>
        <title>Login</title>
        <meta name="" content="Supabase demo..." />
</svelte:head>

<div class="container">
    <header>
        <p>Testing Edge / SupabaseClient</p>
           
        <h4>Application Login</h4>
        <nav>
            <a href="/">Home</a>
            
            
        </nav>
    </header>
    <article>
        <h4>Callback</h4>
    </article>
   
   
    <footer>
		<p>Sveltekit, Supabase (Postgres SQL) , Typescript, Anthony Headley</p>
	</footer>
	
</div>

<style>
    
</style>