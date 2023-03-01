<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  let fields = { question: '', answerA: '', answerB: '' }
  const submitPoll = () => {
    dispatch('addPoll', fields)
  }
</script>
<form on:submit|preventDefault={submitPoll}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" bind:value={fields.question}>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" bind:value={fields.answerA}>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" bind:value={fields.answerB}>
  </div>
  <button>Add Poll</button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 10px auto;
  }
  .form-field {
    margin: 18px 0px;
  }
  label {
    margin: 8px 0;
  }
  input {
    width: 100%;
    border-radius: 4px;
  }
  button {
    width: 100%;
  }
</style>