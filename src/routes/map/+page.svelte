<script lang="ts">
	import type { PageData } from '$houdini/types/src/routes/map/$houdini';

	export let data: PageData;

	$: ({ MapsLocation } = data);
</script>
