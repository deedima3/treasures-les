<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { Map } from 'leaflet';
	import type { Location } from '$interfaces/data.interfaces';

	let mapElement: HTMLDivElement;
	let map: Map;

	export let locationMarker: Location;
	export let viewCoordinate: Location;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');
			const icons = await import('$constant/leaflet');

			map = leaflet
				.map(mapElement)
				.setView(new leaflet.LatLng(viewCoordinate.latitude, viewCoordinate.longitude), 13);

			map.scrollWheelZoom.disable();

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet
				.marker(new leaflet.LatLng(locationMarker.latitude, locationMarker.longitude), {
					icon: icons.roundedIcon
				})
				.addTo(map);
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
