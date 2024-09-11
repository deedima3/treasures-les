<script lang="ts">
	import SolidButton from '$components/Button/SolidButton.svelte';
</script>

<div class="relative -mt-[100px] flex h-full max-h-screen w-full z-[5]">
	<div class="absolute z-[1] h-full w-full bg-black opacity-60" />
	<div class="absolute z-[2] flex h-full w-full flex-col items-center justify-center gap-5">
		<h1
			class="flex flex-col text-5xl font-semibold text-center text-white font-italiana md:text-7xl"
		>
			<span class="font-natya text-3xl font-light pb-4">
				&#x1B27;&#x1B36;&#x1B32;&#x1B36;&#x1B22;&#x1B44;&#x1B2E;&#x1B42;&#x1B32;&#x1B44;&#x1B5F;
			</span>
			Visit Les
		</h1>
		<h3 class="text-base font-thin text-center text-white md:text-2xl">
			Discover the enchanting secrets of Les Village
		</h3>
		<a href="/destination">
			<SolidButton>Let's Explore</SolidButton>
		</a>
	</div>
	<div class="object-cover w-full h-full min-h-screen overflow-clip">
		<video
			loop
			autoplay
			playsinline
			muted
			class="z-0 object-cover w-full h-full max-h-screen min-h-screen aspect-auto"
		>
			<source src="/vid/drone.mov" type="video/mp4" />
		</video>
	</div>
</div>
