<script lang="ts">
	export let onClick: () => void = () => {};
</script>

<button
	class={`font-bold rounded-2xl text-white  bg-brand-dark px-6 py-3 shadow-sm`}
	on:click={onClick}
	{...$$restProps}
>
	<slot />
</button>
