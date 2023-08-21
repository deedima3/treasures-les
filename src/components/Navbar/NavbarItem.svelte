<script lang="ts">
	import { page } from '$app/stores';
	import type { NavbarData } from '$interfaces/api.interfaces';

	export let navItem: NavbarData;
</script>

<a
	class={`text-brand-dark text-md ${$page.url.pathname.includes(navItem.route) ? 'font-bold' : ''}`}
	href={navItem.route}
>
	{navItem.title}
</a>
