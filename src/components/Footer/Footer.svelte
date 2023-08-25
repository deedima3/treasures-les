<script>
	import { footerData } from '$data/footer.data';
</script>

<div
	class="flex flex-col justify-between w-full px-5 py-5 mt-10 text-white md:flex-row bg-brand-eigengrau"
>
	<div class="flex flex-col w-full gap-3 md:w-1/3">
		<div class="flex flex-col gap-2">
			<p class="text-xl font-bold md:text-4xl">Follow our</p>
			<p class="text-xl font-bold md:text-4xl">email list</p>
		</div>
		<p class="text-sm md:text-xl">
			Feel free to follow our email list to get info and promos about holiday in Desa Les
		</p>
		<form method="POST" class="flex flex-col items-center gap-5" />
	</div>
	<div class="flex justify-start w-full gap-5 md:justify-around md:w-1/2">
		{#each footerData as footerItem}
			<div class="flex flex-col">
				<p class="text-base font-bold">
					{footerItem.title}
				</p>
				<div class="flex flex-col">
					{#each footerItem.link as footerLink}
						<a class="text-sm" href={footerLink.route}>
							{footerLink.title}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
