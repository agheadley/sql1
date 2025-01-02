<script lang="ts">
    import '$lib/app.css';
    import { goto } from '$app/navigation';
    import { supabase } from "$lib/supabaseClient";
    
    let usr=$state({email:''});

    let { children } = $props();

    let logout=async()=>{
        const { error } = await supabase.auth.signOut();
        if(error) {
            console.log('LOGOUT ERROR',error);
            usr.email='';
        }
        else goto('/login');
    };


    $effect(() => {
        (async () => {
            
            console.log('layout.svelte $effect()');
            const { data:{user} } = await supabase.auth.getUser();
            console.log('authCheck',user);
            if(user===null) {
                usr.email='';
                goto('/login');
            }
            else {
                usr.email=user?.email ? user.email : '';
                 goto('/');
            }
			 
            
		})()

        
    });

   

   
</script>


<div class="app">
	<div class="container">

        <header>
            <div class="row">
                <div class="col"><p>Testing Edge / SupabaseClient</p></div>
                <div class="col">{usr.email} {#if usr.email!==''}<a href={`javascript:void(0)`} onclick={logout}>Logout</a> {/if}</div>
            </div>
            <nav>
                <a href="/" >Home</a>
                <a target="_blank" href="https://simplecss.org/demo">Simple CSS</a>
                <a href="/login" >Login</a>
                
            </nav>
            
           
        </header>
        
	
	<main>
		{@render children()}
	</main>

	<footer>
		<p>Sveltekit, Supabase (Postgres SQL) , Typescript, Anthony Headley</p>
	</footer>
	
</div>
</div>
