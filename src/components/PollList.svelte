<script>
  // import { onMount, onDestroy} from 'svelte';
  // import { subscribe } from 'svelte/internal';
  import { fade, slide, scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import PollStore from '../store/PollStore.js'
  import PollDetails from "./PollDetails.svelte";
  // let polls = []

  // const unsub = PollStore.subscribe((data)=>{
  //   polls = data
  // })

  // onMount(()=> {
  //   console.log('mounted')
  // })

  // onDestroy(()=> {
  //   unsub()
  //   console.log('destroyed')
  // })
</script>
<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
  <div in:fade out:scale|local animate:flip={{duration: 500}}>
    <PollDetails {poll} />
  </div>
  {/each}
</div>
<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>