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
        <h4>Logged in user ...</h4>
       
    </article>
    
    
    <style>
    
    </style>
    