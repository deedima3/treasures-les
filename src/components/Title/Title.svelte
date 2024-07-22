<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let isCentered = true;
	export let balineseScript: string = '';
</script>

<div class={`w-full flex flex-col mt-5 ${isCentered ? 'items-center text-center' : ''}`}>
	{#if balineseScript}
		<h1 class="text-xl font-semibold text-brand-dark font-natya">
			<span class="font-natya font-light">{balineseScript}</span>
		</h1>
	{/if}
	<h1 class="text-5xl font-bold md:text-6xl text-brand-black">
		{title}
	</h1>
	{#if subtitle}
		<h3
			class={`mt-5 text-base md:text-lg text-brand-black font-mont ${
				isCentered ? 'text-center' : 'text-left'
			}`}
		>
			{subtitle}
		</h3>
	{/if}
</div>
