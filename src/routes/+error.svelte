<script>
	import { page } from '$app/stores';
</script>

<main class="flex flex-col items-center justify-center h-screen pb-24 p-4">
	<div class="text-center">
		<h1 class="text-2xl md:text-4xl font-bold text-brand-dark mb-4">Oops, something went wrong!</h1>
		<h2 class="text-lg md:text-xl text-brand-dark mb-6">
			{$page.status} - {$page.error?.message}
		</h2>
		<a href="/">
			<button
				class="px-6 py-3 bg-brand-gray text-white font-semibold rounded-lg shadow-md transition ease-in-out duration-300"
			>
				Back to Home
			</button>
		</a>
	</div>
</main>
