<script lang="ts">
	import ShopCard from '$components/Card/ShopCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/shop/$houdini';

	export let data: PageData;

	$: ({ Shops } = data);
</script>

<Title title="Shops" subtitle="Explore the local shop!" />
<PageTitle title="Shops" />
{#if $Shops.data}
	<GridContainer>
		{#each $Shops.data.shops as shop}
			<ShopCard {shop} />
		{/each}
	</GridContainer>
{/if}
