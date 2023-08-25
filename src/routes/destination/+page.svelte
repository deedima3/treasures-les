<script lang="ts">
	import BlogCard from '$components/Card/BlogCard.svelte';
	import DestinationCard from '$components/Card/DestinationCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/destination/$houdini';

	export let data: PageData;

	$: ({ Destinations } = data);
</script>

<Title title="Destinations" subtitle="Find places to enjoy!" />
<PageTitle title="Destinations" />
{#if $Destinations.data}
	<GridContainer>
		{#each $Destinations.data.destinations as destination}
			<DestinationCard {destination} />
		{/each}
	</GridContainer>
{/if}
<!-- <pre>
	{JSON.stringify($Destinations.data, null, 4)}
</pre> -->
