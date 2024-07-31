<script lang="ts">
	import AccommodationCard from '$components/Card/AccommodationCard.svelte';
    import AccommodationPriceCard from '$components/Card/AccommodationPriceCard.svelte';
    import Carousel from '$components/Carousel/Carousel.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import type { PageData } from '$houdini/types/src/routes/accommodation/[id]/$houdini';
	export let data: PageData;

	$: ({ AccommodationDetail } = data);
</script>

{#if $AccommodationDetail.data?.accommodation}
	{#if $AccommodationDetail.data.accommodation.title}
		<PageTitle title={$AccommodationDetail.data.accommodation.title} />
	{/if}
	<div class="flex flex-col w-full mx-auto max-w-screen-2xl">
		<h1 class="text-4xl font-bold md:pl-5">{$AccommodationDetail.data.accommodation.title}</h1>
		<h2 class="text-base md:pl-5">
			{$AccommodationDetail.data.accommodation.subtitle}
		</h2>
		<div class="flex flex-col w-full gap-5 md:flex-row">
			<div class="w-full md:w-2/3">
				<Carousel imageArray={$AccommodationDetail.data.accommodation.image} />
			</div>
			{#if $AccommodationDetail.data.accommodation.title}
				<div class="w-full md:w-1/4">
					<AccommodationPriceCard
						title={$AccommodationDetail.data.accommodation.title}
						shortLocation={$AccommodationDetail.data.accommodation.shortLocation ?? ''}
						prices={$AccommodationDetail.data.accommodation.price ?? ''}
                        otaLink={$AccommodationDetail.data.accommodation.otaLink ?? ''} 
					/>
				</div>
			{/if}
		</div>
		<div class="w-full mt-10 md:w-2/3">
			{#if $AccommodationDetail.data.accommodation.description?.markdown}
				<MarkdownDisplayer content={$AccommodationDetail.data.accommodation.description?.markdown} />
			{/if}
		</div>
	</div>
{/if}
