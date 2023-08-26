<script lang="ts">
	import InteractiveLeaflet from '$components/Map/InteractiveLeaflet.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import type { PageData } from '$houdini/types/src/routes/map/$houdini';

	export let data: PageData;

	$: ({ MapsLocation } = data);
</script>

<PageTitle title="Map" />
{#if $MapsLocation.data}
	<InteractiveLeaflet
		locationDestination={$MapsLocation.data.destinations}
		locationProduct={$MapsLocation.data.products}
		viewCoordinate={{
			latitude: -8.150214901485818,
			longitude: 115.36421298980713
		}}
	/>
{/if}
<!-- <pre>
	{JSON.stringify($MapsLocation, null, 4)}
</pre> -->
