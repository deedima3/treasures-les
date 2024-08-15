<script lang="ts">
	import AccommodationCard from '$components/Card/AccommodationCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/accommodation/$houdini';

	export let data: PageData;

	$: ({ Accommodations } = data);
</script>

<Title 
	title="Accommodations" 
	subtitle="Stay with us!" 
	balineseScript="&#x1B15;&#x1B42;&#x1B26;&#x1B04;&#x1B2B;&#x1B32;&#x1B26;&#x1B44;&#x1B24;&#x1B42;&#x1B13;&#x1B26;&#x1B44;&#x1B5F;"
/>
<PageTitle title="Accommodations" />
{#if $Accommodations.data}
	<GridContainer>
		{#each $Accommodations.data.accommodations as accommodation}
			<AccommodationCard {accommodation} />
		{/each}
	</GridContainer>
{/if}
<!-- <pre>
	{JSON.stringify($Accommodations.data, null, 4)}
</pre> -->
