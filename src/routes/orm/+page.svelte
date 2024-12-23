<script lang="ts">


    let data:any = [];
    
    let testRead=async()=>{
        let response = await fetch('/api/read', {
            method: 'POST',
            body: JSON.stringify({table:"test_table"}),
            headers: {'content-type': 'application/json'}
        });
        data= await response.json();
        console.log('testRead()',data);
    };
    
    </script>
    
    <svelte:head>
        <title>ORM</title>
        <meta name="Drfizzle" content="Supabase demo..." />
    </svelte:head>
    
    <p class="notice">
        Drizzle ORM
    </p>
    
    <article>
        <h4>Test Supabase Select</h4>
        <p>
            <button onclick={testRead}>Test api/read</button>
        </p>
        <table class="small">
            {#if data[0]}
            <thead>
                <tr>
                    {#each Object.keys(data[0]) as col,colIndex}
                            <th>{col}</th>
                    {/each}
                </tr>
            </thead>
            {/if}
            <tbody>
                {#each data as row,rowIndex}
                    <tr>
                        {#each Object.keys(row) as col,colIndex}
                            <td>{row[col]}</td>
                        {/each}
                    </tr>
    
                {/each}
            </tbody>
        </table>
    </article>
    
    
    <style>
    
    </style>
    