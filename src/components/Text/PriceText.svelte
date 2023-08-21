<script lang="ts">
	import type { Price } from '$interfaces/data.interfaces';

	export let price: Price;
</script>

<div class="flex items-end">
	<p class="">IDR.</p>
	<p class="text-5xl font-bold">{price.price ? price.price / 1000 : 0}</p>
	<p class="">K</p>
	<p class="">/</p>
	<p class="">{price.amountName}</p>
</div>
