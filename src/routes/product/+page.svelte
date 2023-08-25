<script lang="ts">
	import BlogCard from '$components/Card/BlogCard.svelte';
	import DestinationCard from '$components/Card/DestinationCard.svelte';
	import ProductCard from '$components/Card/ProductCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/product/$houdini';

	export let data: PageData;

	$: ({ Products } = data);
</script>

<Title title="Products" subtitle="Find something to buy!" />
<PageTitle title="Products" />
{#if $Products.data}
	<GridContainer>
		{#each $Products.data.products as product}
			<ProductCard {product} />
		{/each}
	</GridContainer>
{/if}
<!-- <pre>
	{JSON.stringify($Destinations.data, null, 4)}
</pre> -->
