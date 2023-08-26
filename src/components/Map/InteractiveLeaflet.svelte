<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { Map } from 'leaflet';
	import type { DestinationLocation, Location, ProductLocation } from '$interfaces/data.interfaces';
	import Icon from './Marker.svelte';
	import MapPopupCard from '$components/Card/MapPopupCard.svelte';
	import PopupMap from '$components/Card/PopupMap.svelte';

	let mapElement: HTMLDivElement;
	let map: Map;

	export let locationDestination: DestinationLocation[];
	export let locationProduct: ProductLocation[];
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

			locationDestination.map(({ location, title, shortDescription, headerImage, slug }) => {
				let marker = new leaflet.Marker(new leaflet.LatLng(location.latitude, location.longitude), {
					icon: icons.roundedIcon
				});
				let popupComponent: any;
				marker.bindPopup(() => {
					let container = leaflet.DomUtil.create('div');
					let c = new PopupMap({
						target: container,
						props: {
							service: {
								headerImage: headerImage,
								title: title,
								shortDescription: shortDescription,
								slug: slug
							},
							href: `/destination/${slug}`
						}
					});
					popupComponent = c;
					return container;
				});

				marker.on('popupclose', () => {
					if (popupComponent) {
						let old = popupComponent;
						popupComponent = null;
						// Wait to destroy until after the fadeout completes.
						setTimeout(() => {
							old.$destroy();
						}, 500);
					}
				});
				marker.addTo(map);
			});

			locationProduct.map(({ location, title, shortDescription, headerImage, slug }) => {
				let marker = new leaflet.Marker(new leaflet.LatLng(location.latitude, location.longitude), {
					icon: icons.roundedIcon
				});
				let popupComponent: any;
				marker.bindPopup(
					() => {
						let container = leaflet.DomUtil.create('div');
						popupComponent = () => {
							let c = new PopupMap({
								target: container,
								props: {
									service: {
										headerImage: headerImage,
										title: title,
										shortDescription: shortDescription,
										slug: slug
									},
									href: `/product/${slug}`
								}
							});

							return c;
						};
						return container;
					},
					{
						autoClose: true
					}
				);

				marker.on('popupclose', () => {
					if (popupComponent) {
						let old = popupComponent;
						popupComponent = null;
						// Wait to destroy until after the fadeout completes.
						setTimeout(() => {
							old.$destroy();
						}, 500);
					}
				});
				marker.addTo(map);
			});
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
		height: 800px;
		z-index: 1;
	}
</style>
