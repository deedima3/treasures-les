import { sveltekit } from '@sveltejs/kit/vite'
import houdini from 'houdini/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '')
	return {
		// vite config
		define: {
			PUBLIC_BASE_API: JSON.stringify(env.PUBLIC_BASE_API),
			PUBLIC_API_TOKEN: JSON.stringify(env.PUBLIC_API_TOKEN)
		},
		plugins: [houdini(), sveltekit()],
		ssr: {
			noExternal: ["svelte-hero-icons", '@rodneylab/svelte-social-icons'],

		}
	}
})
