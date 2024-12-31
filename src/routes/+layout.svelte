<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<div class="container">

	
	<header>
		<p>Testing Edge / SupabaseClient</p>
		<nav>
			<a href="/">Home</a>
			<a href="/login">Login</a>
			
			
		</nav>
	</header>
	<main>
		{@render children()}
	</main>

	<footer>
		<p>Sveltekit, Supabase (Postgres SQL) , Typescript, Anthony Headley</p>
	</footer>
	
</div>
</div>

<style>
</style>
