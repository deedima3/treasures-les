<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import { generateWhatsappLink } from '$utils/utils';
</script>

<a
	href={generateWhatsappLink('+6281238392010', 'Hi, I want to know more about Les Village')}
	target="_blank"
	class="fixed bottom-4 right-4 bg-white rounded-full shadow-lg flex items-center justify-center z-[4]"
>
	<SocialIcons network="whatsapp" />
</a>
