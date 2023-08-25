<script lang="ts">
	import { navbarData } from '$data/navbar.data';
	import Portal from 'svelte-portal';
	import NavbarItem from './NavbarItem.svelte';
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import HamburgerButton from '$components/Button/HamburgerButton.svelte';

	export let isOpen: boolean;

	const dispatch = createEventDispatcher();

	const closeMobileNav = () => {
		dispatch('closeNav');
	};
</script>

{#if isOpen}
	<Portal target="body">
		<div
			class="fixed top-0 z-[50] flex flex-col items-center w-1/2 min-h-screen gap-5 px-2 py-5 text-center translate-x-full bg-white shadow-sm md:hidden"
			in:fly|local={{ duration: 500, x: 300 }}
			out:fly|local={{ duration: 500, x: 100 }}
		>
			<div class="">
				<HamburgerButton isOpenState={isOpen} onClick={closeMobileNav} />
			</div>
			<div class="flex flex-col gap-3 mt-5">
				{#each navbarData as navItem}
					<NavbarItem {navItem} onClick={closeMobileNav} />
				{/each}
			</div>
		</div>
	</Portal>
{/if}
