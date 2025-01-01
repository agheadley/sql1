<script lang="ts">

import '$lib/app.css';

let { children } = $props();

let email:string=$state('');
    let generateMagicLink = async () => {
        console.log('EMAIL',email);
        let response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: { 'content-type': 'application/json' }
        });
        let res = await response.json();
        console.log('generateMagicLink()', res);
       
};

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
        <p>
            <label for="email">User email address</label>
            <input type=text id="email" placeholder="email" bind:value={email}/>
        </p>
        <p>
            <button onclick={generateMagicLink}>Login</button>
        </p>
    </article>
   

    <footer>
		<p>Sveltekit, Supabase (Postgres SQL) , Typescript, Anthony Headley</p>
	</footer>
	
</div>

<style>
    
</style>