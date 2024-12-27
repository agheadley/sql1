<script lang="ts">
    import type {Test_person_table} from '$lib/db';
    
    let data: any[] = [];

    let insertData : Test_person_table[] = [{name:"Anthony",age:30,location_id:6}];
    
    let testInsertSupabaseClient = async () => {
        let t1 = Date.now();
        let response = await fetch('/api/insert', {
            method: 'POST',
            body: JSON.stringify({ table: "test_person_table" ,data:insertData}),
            headers: { 'content-type': 'application/json' }
        });
        data = await response.json();
        let t = Date.now() - t1;
    
        console.log('testInsertSupabaseClient()', data);
        console.log(`${t} ms`);
    
       };
    
    let testReadDataAPI = async () => {
        let t1 = Date.now();
        let response = await fetch('/edge/read', {
            method: 'POST',
            body: JSON.stringify({ table: "test_person_table", select: `id,name,age,test_location_table(country_code)` }),
            headers: { 'content-type': 'application/json' }
        });
        data = await response.json();
        let t = Date.now() - t1;
    
        console.log('testReadDataAPI()', data);
        console.log(`${t} ms`);
    
    };
    
    </script>
    
    <svelte:head>
        <title>Insert</title>
        <meta name="" content="Supabase demo..." />
    </svelte:head>
    
    <p class="notice">
        Testing supabase edge js client ...
    </p>
    
    <article>
        <h4>Test supabaseClent vs Edge/DataAPI</h4>
        <p>
            <button onclick={testInsertSupabaseClient}>Test api/insert</button>
            <!--<button onclick={testReadDataAPI}>Test edge/read</button>-->
        </p>
       </article>
    
    
    <style>
    
    </style>
    