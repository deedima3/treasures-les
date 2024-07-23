<script lang="ts">
	import { footerData } from '$data/footer.data';

	let form: HTMLFormElement;
	function handleSubmit(event: Event): void {
		event.preventDefault();
		
		const newFormData = new FormData(form);

		fetch('/', {
			method: 'POST',
			body: newFormData,
		})
			.then((response) => {
				if (response.ok) {
					alert('Thank you for subscribing!');
				} else {
					alert('Failed to subscribe. Please try again later.');
				}
			})
			.catch((error) => {
				alert('Failed to subscribe. Please try again later.');
			});

		form.reset();
	}
</script>

<div
	class="flex flex-col justify-between w-full px-5 py-5 mt-10 text-white md:flex-row bg-brand-eigengrau"
>
	<div class="flex flex-col w-full gap-3 md:w-1/3">
		<div class="flex flex-col gap-2">
			<p class="text-xl font-bold md:text-4xl">Get more updates!</p>
		</div>
		<form action="" method="post" bind:this={form} on:submit={handleSubmit}>
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Feel free to follow our email list to get info and promos about travel in Desa Les</label
			>
			<div class="flex flex-col md:flex-row md:space-x-2 space-y-2">
				<input
					type="email"
					name="email"
					id="email"
					aria-describedby="email-text-explanation"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Your email address..."
				/>
				<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
			</div>
			<p id="email-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
				We'll never share your details. Read our
				<a href="/" class="font-medium text-blue-600 hover:underline dark:text-blue-500"
					>Privacy Policy</a
				>.
			</p>
		</form>
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
