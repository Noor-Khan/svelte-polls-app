<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollForm from "./components/PollForm.svelte";
	import Tabs from "./global/Tabs.svelte";

	let items = ['Current Polls', "Add New Poll"]
	let activeItem = 'Current Polls'
	const addPoll = (e) => {
		console.log(e.detail, 'detail')
	}
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
			<PollForm on:addPoll={addPoll} />
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto
	}
</style>