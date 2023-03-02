<script>
  import { createEventDispatcher } from "svelte";
  import Button from '../global/Button.svelte'
  let dispatch = createEventDispatcher();
  let fields = { question: '', answerA: '', answerB: '' }
  let errors = { question: '', answerA: '', answerB: '' }
  let valid = true
  const submitPoll = () => {
    // for question
    if(fields.question.trim().length < 5) {
      errors.question = "Question must be at least 5 characters"
      valid = false
    } else {
      errors.question = ""
      valid = true
    }

    // for answer A
    if(fields.answerA.trim().length < 1) {
      errors.answerA = "answer A can't be empty"
      valid = false
    } else {
      errors.answerA = ""
      valid = true
    }

    // for answer B
    if(fields.answerB.trim().length < 1) {
      errors.answerB = "answer B can't be empty"
      valid = false
    } else {
      errors.answerB = ""
      valid = true
    }
    if(valid) {
      const poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
      dispatch('addNewPoll', poll)
    }
  }
</script>
<form on:submit|preventDefault={submitPoll}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" bind:value={fields.question}>
    <p class="error">{errors.question}</p>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" bind:value={fields.answerA}>
    <p class="error">{errors.answerA}</p>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" bind:value={fields.answerB}>
    <p class="error">{errors.answerB}</p>
  </div>
  <Button type="secondary" flat={true} inverse={true}>
    Add Poll
  </Button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 10px auto;
    text-align: center;
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
  .error {
    font-size: 12px;
    font-weight: 600;
    color: red;
    margin-top: 0;
  }
</style>