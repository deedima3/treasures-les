<script lang="ts">
	import { page } from '$app/stores';
	import type { NavbarData } from '$interfaces/api.interfaces';

	export let navItem: NavbarData;
	export let onClick: () => void;
</script>

<a
	class={`text-brand-dark text-md ${$page.url.pathname.includes(navItem.route) ? 'font-bold' : ''}`}
	href={navItem.route}
	on:click={onClick}
>
	{navItem.title}
</a>
