<script lang="ts">
	import MapPopupCard from '$components/Card/MapPopupCard.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
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
			<h1 class="text-4xl font-bold md:pl-5 text-center md:text-left px-5">{$TourDetail.data.tour.title}</h1>
			<h2 class="text-base md:pl-5 px-5 text-center md:text-left my-3">
				{$TourDetail.data.tour.subtitle}
			</h2>
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
			<div class="w-full mt-10 md:w-2/3 flex justify-start text-justify">
				<MarkdownDisplayer content={$TourDetail.data.tour.description.markdown} />
			</div>
		{/if}
		<div class="w-full mt-5 md:pl-5">
			<h1 class="font-bold px-5 md:px-0 text-2xl">Included Services</h1>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					{#each $TourDetail.data.tour.destination as destination}
						<MapPopupCard service={destination} endpoint="destination" />
					{/each}
					{#each $TourDetail.data.tour.product as product}
						<MapPopupCard service={product} endpoint="product" />
					{/each}
			</div>
		</div>
	</main>
{/if}
