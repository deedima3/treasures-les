<script lang="ts">
	import TourCard from '$components/Card/TourCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/tour/$houdini';

	export let data: PageData;

	$: ({ Tours } = data);
</script>

<Title title="Tours" subtitle="Your packed enjoyable tours!" />
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
