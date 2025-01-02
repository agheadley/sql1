<script lang="ts">
import '$lib/app.css';
import { supabase } from "$lib/supabaseClient";
import { goto } from '$app/navigation';
   
let { children } = $props();


let authCheck=async()=>{
    console.log('callback...');
    const { data:{user} } = await supabase.auth.getUser();
    console.log('authCheck',user);
    if(user?.role==='authenticated' && user?.is_anonymous===false) goto('/');
    else goto('/login');

    
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