<script lang="ts">

import {supabase} from '$lib/supabaseClient';
import * as util from '$lib/util';

let d: any[] | null =$state([]);
    
    let testReadSupabaseClient = async () => {
        let t1 = Date.now();
        const {data}  = await supabase.from('test_person_table').select('id,name,age,test_location_table(country_code)');
        let t = Date.now() - t1;
    
        console.log('testReadSupabaseClient()', data);
        console.log(`${t} ms`);
        d=data;
    
       };
    
    const truth=()=>{
        let x:boolean = true;
        console.log(x ? 'true' : 'false');
    };

    const distinct=()=>{
        const x = [
            {c:"1st",f:10.50,a:true},
            {c:"1st",f:9.70,a:false},
            {c:"2nd",f:8.20,a:true},
            {c:"3rd",f:5.49,a:false},
            {c:"roof",f:2.25,a:true}
        ];

        let o:{c:string,f:number,a:boolean}[]= util.unique(x,['c']);
        for(const item of o) {
            //console.log(`c:${item.c} f:${item.f} a:${item.a}`);
            console.log(item);
        }

        console.log('*********************');
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
    
    <article>
        <h4>Testing...</h4>
        <p><button onclick={truth}>Check truth</button></p>
        <p><button onclick={distinct}>Distinct</button></p>
       

    </article>
<style>

</style>