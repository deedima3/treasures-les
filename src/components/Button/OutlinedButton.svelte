<script lang="ts">
	export let onClick: () => void = () => {};
</script>

<button
	class={`font-bold rounded-2xl border-brand-dark border-[2px] text-brand-dark px-4 py-2`}
	on:click={onClick}
	{...$$restProps}
>
	<slot />
</button>
