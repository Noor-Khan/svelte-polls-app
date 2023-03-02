<script>
  import Card from "../global/Card.svelte";
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher()
  export let poll;
  let totalPolls;
  let percentA;
  let percentB;
  $: totalPolls = poll.votesA + poll.votesB;
  $: percentA = poll.votesA / totalPolls * 100
  $: percentB = poll.votesB / totalPolls * 100

  let upvote = (option, id) => {
    dispatch('upvote', {option, id})
  }
</script>
<Card>
  <div>
    <h3>{poll.question}</h3>
    <div class="total">Total Polls: {totalPolls}</div>
    <p class="total-polls"></p>
    <div class="answer" on:click={()=> upvote('a', poll.id)}>
      <div class="percent percent-a" style="width: {percentA}%; background: {percentA < percentB ? '#ddd' : '#b5b5b5'}"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <i>{Math.round(percentA)}%</i>
    <div class="answer" on:click={()=> upvote('b', poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%; background: {percentB < percentA ? '#ddd' : '#b5b5b5'}"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <i>{Math.round(percentB)}%</i>
  </div>
</Card>


<style>
h3 {
  color: crimson;
  font-size: 16px;
}
.answer {
  box-shadow: 1px 1px 2px #eee;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
}
.answer:hover {
  opacity: 0.6;
}
.percent {
  position: absolute;
  height: 100%;
}
span {
  display: inline-block;
  position: relative;
  padding: 15px 10px;
  font-size: 14px;

}
i {
  font-size: 12px;
}
</style>