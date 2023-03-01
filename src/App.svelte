<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./global/Tabs.svelte";

	let items = ['Current Polls', "Add New Poll"]
	let activeItem = 'Current Polls'
	const tabChange = (e)=> {
		activeItem = e.detail
	}
</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<p>Current Polls component</p>
		{:else if activeItem === 'Add New Poll'}
			<p>Add New Poll Form Component</p>
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto
	}
</style>