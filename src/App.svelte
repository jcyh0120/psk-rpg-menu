<script lang="ts">
  import Tab from "./components/Tab.svelte";

  let select = 1;

  function selectHandler(menu) {
    select = menu;
  }
</script>

<main class="wrapper">
  <div class="info-board">
    <Tab {select} />
  </div>

  <div class="nav-bar">
    <div>
      <button
        type="button"
        class:active={select === 1}
        class="nav-button nes-btn is-normal select"
        on:click={() => selectHandler(1)}>狀態</button
      >
    </div>

    <div>
      <button
        type="button"
        class:active={select === 2}
        class="nav-button nes-btn is-normal"
        on:click={() => selectHandler(2)}>任務</button
      >
    </div>

    <div>
      <button
        type="button"
        class:active={select === 3}
        class="nav-button nes-btn is-normal"
        on:click={() => selectHandler(3)}>技能</button
      >
    </div>

    <div>
      <button
        type="button"
        class:active={select === 4}
        class="nav-button nes-btn is-normal"
        on:click={() => selectHandler(4)}>成就</button
      >
    </div>
  </div>
</main>

<style>
  main {
    /* debug use */
    /* border-style: solid;
    border-color: red; */

    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 10px;

    max-width: 800px;
    height: 100vh;
    max-height: -webkit-fill-available;

    margin: 0 auto;
    padding-bottom: 0.3rem;
    
    background-color: white;
    border-radius: 5px;

  }

  .info-board {
    padding: 0.5rem;
    overflow: hidden;
    overflow-y: scroll;
  }

  .nav-bar {
    display: grid;
    margin: 0 0.5rem;
    padding-right: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  .nav-button {
    font-size: larger;
    width: 100%;
  }

  .active {
    background-color: black;
    color: white;
  }
</style>
