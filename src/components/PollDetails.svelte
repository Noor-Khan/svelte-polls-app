<script>
  import PollStore from "../store/PollStore";
  import Card from "../global/Card.svelte";
  import Button from "../global/Button.svelte";
  import { tweened } from 'svelte/motion'
  export let poll;
  let totalPolls;
  let percentA;
  let percentB;
  $: totalPolls = poll.votesA + poll.votesB;
  $: percentA = Math.round(poll.votesA / totalPolls * 100) || 0
  $: percentB = Math.round(poll.votesB / totalPolls * 100) || 0

  // Tweened animations for bars
  const tweenedA = tweened(0)
  const tweenedB = tweened(0)
  
  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)

  let upvote = (option, id) => {
    PollStore.update(currentPolls => {
      let upvotedPoll = currentPolls.find((poll) => poll.id === id)
      if(option === 'a') {
        upvotedPoll.votesA++
      }
      if(option === 'b') {
        upvotedPoll.votesB++
      }
      return currentPolls
    })
		
  }
  let deletePoll = (id)=> {
    PollStore.update(currentPolls =>{
      return currentPolls.filter(poll => poll.id != id)
    })
  }
</script>
<Card>
  <div>
    <h3>{poll.question}</h3>
    <div class="total">Total Polls: {totalPolls}</div>
    <p class="total-polls"></p>
    <div class="answer" on:click={() => upvote('a', poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%; background: {percentA < percentB ? 'rgba(86, 220, 91, 0.6)' : 'rgb(86,220, 91)'}"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <i>{ percentA || 0 }%</i>
    <div class="answer" on:click={() => upvote('b', poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%; background: {percentB < percentA ? 'rgba(86, 220, 91, 0.6)' : 'rgb(86, 220, 91)'}"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <i>{ percentB || 0 }%</i>
  </div>
  <div class="delete">
    <Button flat on:click={() => deletePoll(poll.id)}>
      delete
    </Button>
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
.delete {
  margin-top: 30px;
  text-align: center;
}
</style>