<script lang="ts">
	import { navbarData } from '$data/navbar.data';
	import NavbarItem from './NavbarItem.svelte';
	import OutlinedButton from '$components/Button/OutlinedButton.svelte';
	import HamburgerButton from '$components/Button/HamburgerButton.svelte';
	import MobileNav from './MobileNav.svelte';
	import { goto } from '$app/navigation';
	import { generateWhatsappLink } from '$utils/utils';

	let isOpen = false;
	let y: number = 0;

	const onToggle = () => {
		isOpen = !isOpen;
	};
</script>

<nav
	class={`z-[50] bg-white sticky top-0 w-full flex justify-between h-16 px-5 py-2 ${
		y > 50 ? ' shadow-md' : ''
	} ${isOpen ? 'overflow-clip' : ''}`}
>
	<a href="/">
		<img src="/LogoKKN.png" alt="Logo KKN" class="h-full" />
	</a>
	<div class="items-center justify-around hidden w-1/3 md:flex">
		{#each navbarData as navItem}
			<NavbarItem {navItem} onClick={onToggle} />
		{/each}
	</div>
	<div class="items-center hidden w-max md:flex">
		<OutlinedButton
			onClick={() => {
				goto(
					generateWhatsappLink('+6281238392010', 'Hi, i would like to know more about the website!')
				);
			}}>Contact Us</OutlinedButton
		>
	</div>
	<div class="block w-8 h-8 md:hidden">
		<HamburgerButton isOpenState={isOpen} onClick={onToggle} />
	</div>
	<MobileNav {isOpen} on:closeNav={onToggle} />
</nav>

<svelte:window bind:scrollY={y} />
