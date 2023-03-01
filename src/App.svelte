<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  // import "nes.css/css/nes.min.css";
</script>

<main>
  <div class="nes-container with-title is-centered">
    <button type="button" class="nes-btn is-primary">Primary</button>
    <button type="button" class="nes-btn is-success">Success</button>
    <button type="button" class="nes-btn is-warning">Warning</button>
    <button type="button" class="nes-btn is-error">Error</button>
    <button type="button" class="nes-btn is-disabled">Disabled</button>  
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
