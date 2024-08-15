<script lang="ts">
	import { footerData } from '$data/footer.data';

	let form: HTMLFormElement;
	function handleSubmit(event: Event): void {
		event.preventDefault();

		const newFormData = new FormData(form);

		fetch('/', {
			method: 'POST',
			body: newFormData
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

<div>
	<div
		class="flex flex-col justify-around md:justify-evenly w-full px-5 py-10 mt-10 text-white md:flex-row bg-brand-eigengrau"
	>
		<div class="flex flex-row justify-between md:gap-x-24">
			{#each footerData as footerItem}
				<div class="flex flex-col">
					<p class="text-xl font-bold pb-3">
						{footerItem.title}
					</p>
					<div class="flex flex-col space-y-2">
						{#each footerItem.link as footerLink}
							<a class="text-sm" href={footerLink.route}>
								{footerLink.title}
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<div class="flex flex-col w-full gap-3 md:w-1/4 pt-3 md:pt-0 md:px-5 justify-start">
			<div class="flex flex-col gap-2">
				<p class="text-xl font-bold md:text-xl">Stay Updated</p>
			</div>
			<form action="" method="post" bind:this={form} on:submit={handleSubmit}>
				<label for="email" class="block pb-2 text-sm text-gray-900 dark:text-white"
					>Join our email list to receive updates and promotions about travel in Les Village
					</label
				>
				<div class="flex flex-col md:flex-row">
					<input
						type="email"
						name="email"
						id="email"
						aria-describedby="email-text-explanation"
						class="md:mr-2 mb-2 md:mb-0 md:max-w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Your email address..."
						required
					/>
					<button
						type="submit"
						class="h-full text-white p-2.5 bg-brand-dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-brand-gray dark:hover:bg-brand-gray dark:focus:ring-brand-gray"
						>Subscribe</button
					>
				</div>
			</form>
		</div>
		<div class="md:mr-16 mt-4 md:mt-0">
			<h1 class="text-xl font-bold md:text-xl mb-2">Translate</h1>
			<div id="google_translate_element" />
			<script type="text/javascript">
				function googleTranslateElementInit() {
					new google.translate.TranslateElement(
						{
							pageLanguage: 'en'
						},
						'google_translate_element'
					);
				}
			</script>
			<script
				type="text/javascript"
				src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
			></script>
		</div>
	</div>

	<div class="bg-brand-eigengrau w-full px-4 md:px-16">
		<hr class="sm:mx-auto dark:border-brand-gray pt-4 pb-2 bg-brand-eigengrau maxw" />
	</div>
	<span
		class="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400 pb-8 bg-brand-eigengrau"
		>&copy; 2023-2024 KKN Desa Les</span
	>
</div>
