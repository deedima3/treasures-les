<script lang="ts">
	import FeaturedServiceCard from '$components/Card/FeaturedServiceCard.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { Destination } from '$interfaces/data.interfaces';

	export let destinations: Destination[];

	let carouselBind: HTMLElement;
	let scrolled = 0;
	let prevScroll = 0;
	let startX = 0;

	const onMouseDown = (event: any) => {
		startX = event.pageX;
	};

	const onMouseMove = (event: any) => {
		if (startX == 0) return;

		const mouseDelta = startX - event.pageX;
		const percentage = (mouseDelta / carouselBind.innerHTML.length) * 100;

		scrolled = percentage + prevScroll;
		scrolled = Math.max(scrolled, -150);
		scrolled = Math.min(scrolled, 0);
		carouselBind.style.transform = `translate(${scrolled}%, 0)`;
	};

	const onMouseUp = (event: any) => {
		startX = 0;
		prevScroll = scrolled;
	};

	$: scrolled, console.log(scrolled);
</script>

<div
	class="w-full max-w-screen-xl px-5 mx-auto mt-16 overflow-hidden"
	on:mouseleave={onMouseUp}
	on:mouseup={onMouseUp}
	aria-roledescription="Featured Service Card"
>
	<Title
		title="Featured Services"
		subtitle="Find your best services with the best price"
		isCentered={false}
	/>
	<div class="relative flex items-center w-full">
		<div
			class="w-full bg-transparent"
			on:mousedown={onMouseDown}
			on:mousemove={onMouseMove}
			on:mouseup={onMouseUp}
			bind:this={carouselBind}
		>
			<div class={`mt-5 flex items-center justify-between gap-5`}>
				{#each destinations as destination}
					<FeaturedServiceCard {destination} />
				{/each}
			</div>
		</div>
	</div>
</div>
