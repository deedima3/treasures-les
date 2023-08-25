<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let isCentered = true;
</script>

<div class={`w-full flex flex-col mt-5 ${isCentered ? 'items-center' : ''}`}>
	<h1 class="text-5xl font-bold md:text-6xl text-brand-black">
		{title}
	</h1>
	{#if subtitle}
		<h3 class="mt-5 text-base text-center md:text-lg text-brand-black font-mont">
			{subtitle}
		</h3>
	{/if}
</div>
