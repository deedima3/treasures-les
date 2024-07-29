<script lang="ts">
	import '../app.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/900.css';

	import { Toaster } from 'svelte-french-toast';
	import NavLayout from '../components/Layout/NavLayout.svelte';
	import Favicon from '$components/SEO/Favicon.svelte';
	import ChatButton from '$components/Button/ChatButton.svelte';
</script>

<Favicon />
<NavLayout>
	<ChatButton />
	<slot />
</NavLayout>
<Toaster />

<style>
	body {
		font-family: 'Poppins', 'sans-serif';
	}
</style>
