<script lang="ts">
	export let title: string;
	export let description = `Discover the enchanting secrets of Les Village. Explore breathtaking destinations, unique local products, and unforgettable tour experiences. Plan your perfect getaway today!`;
	export let image = 'https://visitles.id/les_village.jpg';

	let url = 'https://visitles.id';
	if (typeof window !== 'undefined') {
		url = window.location.href;
	}
</script>

<svelte:head>
	<title>Les | {title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="Visit, Les, Village, Bali, KKN, ADWI" />
	<meta name="author" content="KKN Desa Les" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={url} />
</svelte:head>
