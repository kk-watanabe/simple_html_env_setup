<script>
  import { createEventDispatcher } from "svelte";
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor;
  /**
   * How large should the button be?
   */
  export let size = "medium";
  /**
   * Button contents
   */
  export let label = "";

  let mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  let style = backgroundColor ? `background-color: ${backgroundColor}` : "";

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<button
  type="button"
  class={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
  {style}
  on:click={onClick}
>
  {label}
</button>

<style>
  .storybook-button {
    display: inline-block;
    border: 0;
    border-radius: 3em;
    font-weight: 700;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1;
    cursor: pointer;
  }
  .storybook-button--primary {
    background-color: #1ea7fd;
    color: white;
  }
  .storybook-button--secondary {
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    color: #333;
  }
  .storybook-button--small {
    padding: 10px 16px;
    font-size: 12px;
  }
  .storybook-button--medium {
    padding: 11px 20px;
    font-size: 14px;
  }
  .storybook-button--large {
    padding: 12px 24px;
    font-size: 16px;
  }
</style>
