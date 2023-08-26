<script lang="ts">
	import MapPopupCard from '$components/Card/MapPopupCard.svelte';
	import ProductCard from '$components/Card/ProductCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/tour/[id]/$houdini';

	export let data: PageData;

	$: ({ TourDetail } = data);
</script>

{#if $TourDetail.data && $TourDetail.data.tour && $TourDetail.data.tour.title}
	<PageTitle title={$TourDetail.data.tour.title} />
	<main class="flex flex-col items-center">
		<div class="text-center">
			<h1 class="text-5xl font-bold">{$TourDetail.data.tour.title}</h1>
			<h4 class="mt-2 text-base">{$TourDetail.data.tour.subtitle}</h4>
		</div>
		{#if $TourDetail.data.tour.headerImage}
			<div class="w-full h-[600px] overflow-clip flex flex-col justify-center items-center mt-10">
				<img src={$TourDetail.data.tour.headerImage.url} alt="" class="object-cover w-full" />
			</div>
		{/if}
		{#if $TourDetail.data.tour.description}
			<div class="py-10">
				<MarkdownDisplayer content={$TourDetail.data.tour.description.markdown} />
			</div>
		{/if}
		<div class="w-full max-w-screen-xl mt-5">
			<Title
				title="Included Services"
				subtitle="Included Services in the tour"
				isCentered={false}
			/>
			<div class="flex flex-col w-full gap-5 md:flex-row">
				<div class="flex flex-col gap-2">
					{#each $TourDetail.data.tour.destination as destination}
						<MapPopupCard service={destination} />
					{/each}
				</div>
				<div class="flex flex-col gap-2">
					{#each $TourDetail.data.tour.product as product}
						<MapPopupCard service={product} />
					{/each}
				</div>
			</div>
		</div>
	</main>
{/if}
