<script lang="ts">
	import DestinationPriceCard from '$components/Card/DestinationPriceCard.svelte';
	import ShopCard from '$components/Card/ShopCard.svelte';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import Leaflet from '$components/Map/Leaflet.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import type { PageData } from '$houdini/types/src/routes/destination/[id]/$houdini';
	export let data: PageData;

	$: ({ DestinationDetail } = data);
</script>

{#if $DestinationDetail.data?.destination}
	{#if $DestinationDetail.data.destination.title}
		<PageTitle title={$DestinationDetail.data.destination.title} />
	{/if}
	<div class="flex flex-col w-full mx-auto max-w-screen-2xl">
		<h1 class="text-4xl font-bold">{$DestinationDetail.data.destination.title}</h1>
		<h2 class="text-base">
			{$DestinationDetail.data.destination.subtitle}
		</h2>
		<div class="flex w-full gap-5">
			<div class="w-2/3">
				<Carousel imageArray={$DestinationDetail.data.destination.image} />
			</div>
			{#if $DestinationDetail.data.destination.title && $DestinationDetail.data.destination.shortLocation && $DestinationDetail.data.destination.shop}
				<div class="w-1/4">
					<DestinationPriceCard
						title={$DestinationDetail.data.destination.title}
						shortLocation={$DestinationDetail.data.destination.shortLocation}
						prices={$DestinationDetail.data.destination.price}
					/>
					<ShopCard shop={$DestinationDetail.data.destination.shop} />
				</div>
			{/if}
		</div>
		<div class="w-2/3 mt-10">
			{#if $DestinationDetail.data.destination.description?.markdown}
				<MarkdownDisplayer content={$DestinationDetail.data.destination.description?.markdown} />
			{/if}
			{#if $DestinationDetail.data.destination.location}
				<Leaflet
					locationMarker={$DestinationDetail.data.destination.location}
					viewCoordinate={$DestinationDetail.data.destination.location}
				/>
			{/if}
		</div>
	</div>
{/if}

<!-- <pre>
	{JSON.stringify($DestinationDetail, null, 4)}
</pre> -->
