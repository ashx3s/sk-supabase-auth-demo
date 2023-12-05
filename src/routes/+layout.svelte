<script>
	import '../app.postcss';
	import Icon from '@iconify/svelte';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><Icon icon="fa6-brands:empire" /></svelte:fragment>
			Empire Forms
			<svelte:fragment slot="trail"><button>Login</button><button>Sign up</button></svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="pageFooter"><p>&copy; 2023 Lilyx</p></svelte:fragment>
</AppShell>
