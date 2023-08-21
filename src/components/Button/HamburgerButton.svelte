<script lang="ts">
	export let isOpenState: boolean;
	export let onClick: () => void;
</script>

<button on:click={() => onClick()} class="bg-transparent w-max h-max">
	<div class={`flex flex-col relative w-10 ${isOpenState ? '' : 'gap-2'}`}>
		<div
			class={`h-0.5 w-8 bg-brand-dark transition-all duration-200 ease-in-out ${
				isOpenState ? 'rotate-45 absolute' : ''
			}`}
		/>
		<div
			class={`h-0.5 w-8 bg-brand-dark transition-all duration-200 ease-in-out ${
				isOpenState ? '-rotate-45 absolute' : ''
			}`}
		/>
		<div
			class={`h-0.5 w-8 bg-brand-dark transition-all duration-200 ease-in-out ${
				isOpenState ? 'hidden' : ''
			}`}
		/>
	</div>
</button>
