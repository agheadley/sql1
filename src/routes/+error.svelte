<script lang="ts">
    import '$lib/app.css';

	import { page } from '$app/state';
</script>
<div class="container">

<section>
    
<h4>Oops! Something went wrong.</h4>
    
<p class="notice">{page?.status} {page?.error?.message}</p>


</section>


<p>{JSON.stringify(page)}</p>

</div>
