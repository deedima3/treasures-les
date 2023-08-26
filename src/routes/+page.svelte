<script lang="ts">
	import ProductCard from '$components/Card/ProductCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import FeaturedServiceSection from '$components/Section/FeaturedServiceSection.svelte';
	import VideoHeader from '$components/Section/VideoHeader.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/$houdini';

	export let data: PageData;

	$: ({ Featured } = data);
</script>

<PageTitle title="Pariwisata Les" />
<VideoHeader />
{#if $Featured.data}
	<FeaturedServiceSection destinations={$Featured.data?.destinations} />
	<div class="mt-10">
		<Title title="Featured Product" subtitle="Best products from desa les!" />
		<GridContainer>
			{#each $Featured.data.products as product}
				<ProductCard {product} />
			{/each}
		</GridContainer>
	</div>
{/if}
