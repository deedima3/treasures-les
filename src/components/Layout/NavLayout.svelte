<script lang="ts">
	import Footer from '$components/Footer/Footer.svelte';
	import Navbar from '$components/Navbar/Navbar.svelte';
</script>

<Navbar />
<div class="flex flex-col w-full min-h-screen mt-10">
	<slot />
</div>
<Footer />
