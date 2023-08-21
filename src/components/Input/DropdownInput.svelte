<script lang="ts">
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import Label from './Label.svelte';
	import type { ZodValidation } from 'sveltekit-superforms';
	import type { AnyZodObject } from 'zod';
	import Error from './Error.svelte';
	import type { CustomOption } from '$interfaces/ui.interfaces';

	export let name: string;
	export let label: string = '';
	export let form: SuperForm<ZodValidation<AnyZodObject>, unknown>;
	export let placeholder = '';
	export let options: CustomOption[] = [];

	const { value, errors, constraints } = formFieldProxy(form, name);
</script>

<div class="flex flex-col">
	{#if label}
		<Label {name} {label} />
	{/if}
	<select
		class="border-[1px] border-gray-400 w-[250px] h-[30px] rounded-md px-3 py-5 focus:border-brand-dark"
		{name}
		{placeholder}
		bind:value={$value}
		{...$constraints}
	>
		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
	{#if $errors}
		<Error errors={$errors} />
	{/if}
</div>
