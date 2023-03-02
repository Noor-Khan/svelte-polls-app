<script>
  export let polls = []
</script>
<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div class="list-item">{ poll.question }</div>
  {/each}
</div>
<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .list-item {
    padding: 10px;
    border: 1px solid #eee;
  }
</style>