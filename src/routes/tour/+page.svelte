<script lang="ts">
	import TourCard from '$components/Card/TourCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/tour/$houdini';

	export let data: PageData;

	$: ({ Tours } = data);
</script>

<Title 
	title="Tours" 
	subtitle="Your packed enjoyable tours!" 
	balineseScript="&#x1B17;&#x1B36;&#x1B2D;&#x1B36;&#x1B02;&#x1B2B;&#x1B2E;&#x1B1C;&#x1B44;&#x1B18;&#x1B2D;&#x1B26;&#x1B44;&#x1B5F;"
/>
<PageTitle title="Tours" />
{#if $Tours.data}
	<GridContainer>
		{#each $Tours.data.tours as tour}
			<TourCard {tour} />
		{/each}
	</GridContainer>
{/if}
<!-- <pre>
	{JSON.stringify($Destinations.data, null, 4)}
</pre> -->
