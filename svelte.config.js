import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			out: 'build',
		}),
		alias: {
			$hoody: './$houdini',
			$houdini: './$houdini',
			$components: "src/components",
			$utils: "src/utils",
			$stores: "src/stores",
			$lib: "src/lib",
			$interfaces: "src/interfaces",
			$data : "src/data",
			$constant: "src/constant"
		}
	}
};

export default config;
