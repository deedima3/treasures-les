<script lang="ts">
	import MapPopupCard from '$components/Card/MapPopupCard.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import TourPriceCard from '$components/Card/TourPriceCard.svelte';
	import ShopProfileCard from '$components/Card/ShopProfileCard.svelte';
	import type { PageData } from '$houdini/types/src/routes/tour/[id]/$houdini';
	export let data: PageData;

	$: ({ TourDetail } = data);
</script>

{#if $TourDetail.data && $TourDetail.data.tour && $TourDetail.data.tour.title}
	<PageTitle title={$TourDetail.data.tour.title} />
	<main class="flex flex-col w-full mx-auto max-w-screen-2xl">
		<div class="text-center">
			<h1 class="text-5xl font-bold">{$TourDetail.data.tour.title}</h1>
			<h4 class="mt-2 text-base">{$TourDetail.data.tour.subtitle}</h4>
		</div>
		<div class="flex flex-col w-full gap-5 md:flex-row">
			<div class="w-full md:w-2/3">
				<Carousel imageArray={$TourDetail.data.tour.image} />
			</div>
			{#if $TourDetail.data.tour.title}
				<div class="w-full md:w-1/4">
					<TourPriceCard
						title={$TourDetail.data.tour.title}
						shortLocation="Les Village"
						prices={$TourDetail.data.tour.price}
						phoneNumber={$TourDetail.data.tour.shop?.waNumber ?? ''}
					/>
					{#if $TourDetail.data.tour.shop}
						<ShopProfileCard shop={$TourDetail.data.tour.shop} />
					{/if}
				</div>
			{/if}
			
		</div>
		{#if $TourDetail.data.tour.description}
			<div class="w-full mt-10 md:w-2/3 flex justify-start">
				<MarkdownDisplayer content={$TourDetail.data.tour.description.markdown} />
			</div>
		{/if}
		<div class="w-full mt-5 md:pl-5">
			<Title
				title="Included Services"
				subtitle="Included Services in the tour"
				isCentered={false}
			/>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					{#each $TourDetail.data.tour.destination as destination}
						<MapPopupCard service={destination} />
					{/each}
					{#each $TourDetail.data.tour.product as product}
						<MapPopupCard service={product} />
					{/each}
			</div>
		</div>
	</main>
{/if}
