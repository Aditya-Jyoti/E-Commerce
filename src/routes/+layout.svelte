<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-light min-h-[100vh] flex flex-col">
	<Navbar />
	<slot />
	{#if $page.url.pathname !== '/'}
		<Footer />
	{/if}
</div>
