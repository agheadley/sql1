<script lang="ts">

let data: any[] = [];

let testReadSupabaseClient = async () => {
    let t1 = Date.now();
    let response = await fetch('/api/read', {
        method: 'POST',
        body: JSON.stringify({ table: "test_person_table" }),
        headers: { 'content-type': 'application/json' }
    });
    data = await response.json();
    let t = Date.now() - t1;

    console.log('testReadSupabaseClient()', data);
    console.log(`${t} ms`);

   };

let testReadDataAPI = async () => {
    let t1 = Date.now();
    let response = await fetch('/edge/read', {
        method: 'POST',
        body: JSON.stringify({ table: "test_person_table", select: `id,name,age,test_location_table(id,country_code)` }),
        headers: { 'content-type': 'application/json' }
    });
    data = await response.json();
    let t = Date.now() - t1;

    console.log('testReadDataAPI()', data);
    console.log(`${t} ms`);

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
		<button onclick={testReadDataAPI}>Test edge/read</button>
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
			{#each data as row:any,rowIndex}
				<tr>
					{#each Object.keys(data[0]) as col,colIndex}
						<td>{row[col]}</td>
					{/each}
				</tr>

			{/each}
		</tbody>
	</table>
</article>


<style>

</style>
