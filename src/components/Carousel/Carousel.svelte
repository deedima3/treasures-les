<script lang="ts">
	import type { Image } from '$interfaces/data.interfaces';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let imageArray: Image[] = [];

	let length = imageArray.length;
	let selectedNumber = 0;
	$: selectedCarousel = imageArray[selectedNumber];

	const setTimeOutChange = () => {
		setTimeout(() => {
			if (selectedNumber == length - 1) {
				selectedNumber = 0;
			} else {
				selectedNumber++;
			}
			setTimeOutChange();
		}, 5000);
	};

	onMount(() => {
		setTimeOutChange();
	});
</script>

<svelte:head>
	{#each imageArray as image}
		<link rel="preload" as="image" href={image.url} />
	{/each}
</svelte:head>

<div class="relative rounded-md">
	{#key selectedCarousel}
		<div
			class="w-[1000px] h-[500px]"
			in:fly={{
				delay: 250,
				duration: 300,
				x: 20,
				opacity: 0.5,
				easing: quintOut
			}}
		>
			<img
				src={selectedCarousel.url}
				alt="Carousel"
				class="object-cover w-full h-full rounded-xl"
			/>
		</div>
	{/key}
	<div class="absolute flex justify-center w-full gap-5 bottom-5">
		{#each imageArray as image}
			<button
				class={`${
					image == selectedCarousel ? 'bg-white' : 'bg-slate-600'
				} rounded-full w-5 h-5 transition-all shadow-md`}
				on:click={() => {
					selectedCarousel = image;
					console.log('Clicked', image);
				}}
			/>
		{/each}
	</div>
</div>
