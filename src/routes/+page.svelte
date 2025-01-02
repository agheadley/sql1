<script lang="ts">

import {supabase} from '$lib/supabaseClient';

let d: any[] | null =$state([]);
    
    let testReadSupabaseClient = async () => {
        let t1 = Date.now();
        const {data}  = await supabase.from('test_person_table').select('id,name,age,test_location_table(country_code)');
        let t = Date.now() - t1;
    
        console.log('testReadSupabaseClient()', data);
        console.log(`${t} ms`);
        d=data;
    
       };
    
      

</script>


<svelte:head>
        <title>Home</title>
        <meta name="" content="Supabase demo..." />
</svelte:head>
    
    <p class="notice">
        Testing supabase edge js client ...
    </p>
    
    <article>
        <h4>Test supabaseClent vs Edge/DataAPI</h4>
        <p>
            <button onclick={testReadSupabaseClient}>Test api/read</button>
            <!--<button onclick={testReadDataAPI}>Test edge/read</button>-->
        </p>
        <table class="small">
            {#if d?.[0]}
            <thead>
                <tr>
                    {#each Object.keys(d[0]) as col,colIndex}
                            <th>{col}</th>
                    {/each}
                </tr>
            </thead>
            {/if}
            <tbody>
                {#if d?.[0]}
                {#each d as row:any,rowIndex}
                    <tr>
                        {#each Object.keys(d[0]) as col,colIndex}
                            <td>{row[col]}</td>
                        {/each}
                    </tr>
    
                {/each}
                {/if}
            </tbody>
        </table>
    </article>
    
    
<style>

</style>