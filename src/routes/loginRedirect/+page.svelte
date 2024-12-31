<script lang="ts">

let userData:any;
    
       $effect(() => {
        (async () => {
            let response = await fetch('/api/getUser', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: { 'content-type': 'application/json' }
            });
            let res = await response.json();
            console.log('api/getUser', res);
            let userData=res;



        })();
	});
    

    </script>
    
    <svelte:head>
        <title>Login</title>
        <meta name="" content="login..." />
    </svelte:head>
    
    
    <article>
        <h4>Logged in user ...</h4>
        <p>{JSON.stringify(userData)}</p>
    </article>
    
    
    <style>
    
    </style>
    