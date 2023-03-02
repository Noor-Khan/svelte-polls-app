<script>
	import PollStore from "./store/PollStore";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollForm from "./components/PollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./global/Tabs.svelte";

	let items = ['Current Polls', "Add New Poll"]
	let activeItem = 'Current Polls'

	const addPoll = (e) => {
		activeItem = 'Current Polls'
	}
	const tabChange = (e)=> {
		activeItem = e.detail
	}
</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		{#if $PollStore.length > 0}
			<PollList />
			{:else}
				<p>There is no poll.</p>
		{/if}
		{:else if activeItem === 'Add New Poll'}
			<PollForm on:addNewPoll={addPoll} />
	{/if}
</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto
	}
	p {
		text-align: center;
	}
</style>