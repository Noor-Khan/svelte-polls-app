<script>
export let type = "primary";
export let flat = false;
export let inverse = false;
</script>
<button class={type} class:flat={flat} class:inverse={inverse}>
  <slot></slot>
</button>
<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: 600;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  }
  .primary {
    background-color: crimson;
    color: #fff;
  }
  .secondary {
    background-color: #45c590;
    color: #fff;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: crimson;
    border: 2px solid crimson;
    background-color: #fff;
  }
  .secondary.inverse {
    color: #45c590;
    border: 2px solid #45c590;
    background-color: #fff;
  }
</style>