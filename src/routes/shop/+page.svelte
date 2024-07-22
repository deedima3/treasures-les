<script lang="ts">
	import ShopCard from '$components/Card/ShopCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/shop/$houdini';

	export let data: PageData;

	$: ({ Shops } = data);
</script>

<Title 
	title="Shops" 
	subtitle="Explore the local shop!" 
	balineseScript="&#x1B15;&#x1B42;&#x1B26;&#x1B04;&#x1B2B;&#x1B24;&#x1B40;&#x1B2E;&#x1B26;&#x1B44;&#x1B5F;"
/>
<PageTitle title="Shops" />
{#if $Shops.data}
	<GridContainer>
		{#each $Shops.data.shops as shop}
			<ShopCard {shop} />
		{/each}
	</GridContainer>
{/if}
