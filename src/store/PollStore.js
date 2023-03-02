import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id: 1, 
    question: "What's your favourite Python or Javascript?",
    answerA: 'Javascript',
    answerB: 'Python',
    votesA: 9,
    votesB: 22,
  }
])

export default PollStore