<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import PollForm from "./components/PollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./global/Tabs.svelte";

	let items = ['Current Polls', "Add New Poll"]
	let activeItem = 'Current Polls'
	let polls = [
		{
			id: 1,
			question: 'Do you like Python or Javascript?',
			answerA: 'python',
			answerB: 'javascript',
			votesA: 0,
			votesB: 0,
		}
	]
	const addPoll = (e) => {
		const poll = e.detail
		polls = [poll, ...polls]
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
		<PollList {polls}/>
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
</style>