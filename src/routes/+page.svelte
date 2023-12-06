<script>
	export let data;
	let { todos } = data;
</script>

<main>
	<header class="text-center lg:px-8 lg:py-20">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Home Page</span
			>
		</h1>
	</header>
	<section>
		<header>
			<h2 class="h2">Show All Todos</h2>
		</header>
		<div>
			<ul class="list-type-disc">
				{#each todos as { title, description }}
					<li class="ml-8 my-4">
						<h3 class="h3 font-bold">{title}</h3>
						<p class="p">{description}</p>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>
