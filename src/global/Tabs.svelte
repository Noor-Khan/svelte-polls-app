<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher()
  export let items;
  export let activeItem;
</script>
<div class="tabs">
  <ul>
    {#each items as item}
      <li class:active={activeItem === item} on:click={() => dispatch('tabChange', item)}>
        {item}
      </li>  
    {/each}
  </ul>
</div>
<style>
  .tabs {
    padding: 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
  }
  li {
    margin: 10px;
    padding-bottom: 10px;
    cursor: pointer;
  }
  .active {
    color: crimson;
    border-bottom: 2px solid crimson;
  }
</style>