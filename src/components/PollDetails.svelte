<script>
  export let poll;
  let totalPolls
  $: totalPolls = poll.votesA + poll.votesB;
</script>
<div>
  <h3>{poll.question}</h3>
  <div class="total">Total Polls: {totalPolls}</div>
  <p class="total-polls"></p>
  <div class="answer">
    <div class="percent percent-a"></div>
    <span>{poll.answerA} ({poll.votesA})</span>
  </div>
  <div class="answer">
    <div class="percent percent-b"></div>
    <span>{poll.answerB} ({poll.votesB})</span>
  </div>
</div>
<style>
h3 {
  color: crimson;
  font-size: 16px;
}
.answer {
  border: 1px solid snow;
  box-shadow: 1px 1px 3px #eee;
  margin: 10px 0;
  cursor: pointer;
}
.answer:hover {
  opacity: 0.6;
}
span {
  display: inline-block;
  padding: 15px 10px;
  font-size: 14px;

}
</style>