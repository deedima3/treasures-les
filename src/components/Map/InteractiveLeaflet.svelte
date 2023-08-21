<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { Map } from 'leaflet';
	import type { Location } from '$interfaces/data.interfaces';
	import Icon from './Marker.svelte';

	let mapElement: HTMLDivElement;
	let map: Map;

	export let locationMarker: Location;
	export let viewCoordinate: Location;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet
				.map(mapElement)
				.setView(new leaflet.LatLng(viewCoordinate.latitude, viewCoordinate.longitude), 13);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			new leaflet.Marker(new leaflet.LatLng(locationMarker.latitude, locationMarker.longitude), {
				icon: new leaflet.DivIcon({
					html: `${Icon}`
				})
			}).addTo(map);
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<main class="z-0 w-full mt-5">
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: 500px;
		z-index: 1;
	}
</style>
