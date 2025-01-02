<script lang="ts">
    import '$lib/app.css';
    import { goto } from '$app/navigation';
    import { supabase } from "$lib/supabaseClient";
    import { page } from '$app/stores';
    import { navigating } from '$app/stores';

    let usr=$state({email:''});

    let { children } = $props();

    let authCheck=async()=>{
        console.log('callback...');
        const { data:{user} } = await supabase.auth.getUser();
        console.log('authCheck',user);
        if(user?.role==='authenticated' && user?.is_anonymous===false) usr.email=user?.email ? user.email : '';
        else goto('/login');

    };

    $effect(() => {
        console.log('layout...');
        if($navigating) authCheck();
    });
</script>


<div class="app">
	<div class="container">

        <header>
            <div class="row">
                <div class="col"><p>Testing Edge / SupabaseClient</p></div>
                <div class="col">{usr.email}</div>
            </div>
            <nav>
                <a href="/">Home</a>
                <a target="_blank" href="https://simplecss.org/demo">Simple CSS</a>
                <a href="/login">Login</a>
                
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
