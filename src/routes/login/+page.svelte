<script lang="ts">
import '$lib/app.css';

let { children } = $props();

let email:string=$state('');

let generateMagicLink = async () => {
    console.log('EMAIL',email);
    
    let response = await fetch('/auth/link', {
        method: 'POST',
        body: JSON.stringify({ email: email }),
        headers: { 'content-type': 'application/json' }
    });
    let res = await response.json();
    console.log('generateMagicLink()', res);
    

    

    
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