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

<Title 
	title="Products" 
	subtitle="Find something to buy!" 
	balineseScript="&#x1B27;&#x1B36;&#x1B13;&#x1B40;&#x1B2E;&#x1B36;&#x1B04;&#x1B24;&#x1B3E;&#x1B30;&#x1B5F;"
/>
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
