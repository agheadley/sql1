<script lang="ts">

    let email:string='';
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
        <meta name="" content="login..." />
    </svelte:head>
    
    
    <article>
        <h4>Test supabaseClent vs Edge/DataAPI</h4>
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
    