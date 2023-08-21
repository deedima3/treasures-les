<script lang="ts">
	import BlogCard from '$components/Card/BlogCard.svelte';
	import DestinationCard from '$components/Card/DestinationCard.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/destination/$houdini';

	export let data: PageData;

	$: ({ Destinations } = data);
</script>

<Title title="Destinations" subtitle="Find places to enjoy!" />
<PageTitle title="Destinations" />
{#if $Destinations.data}
	<div class="grid grid-cols-3 gap-10 mx-auto mt-16">
		{#each $Destinations.data.destinations as destination}
			<DestinationCard {destination} />
		{/each}
	</div>
{/if}
<!-- <pre>
	{JSON.stringify($Destinations.data, null, 4)}
</pre> -->
