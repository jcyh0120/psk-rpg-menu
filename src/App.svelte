<script lang="ts">
  let select = 1;

  function selectHandler(menu) {
    select = menu;
  }
</script>

<main class="wrapper">
  <div class="nes-container with-title is-centered">
    <p>{select}</p>
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
    border-style: solid;
    border-color: red;

    margin: 0 auto;
    max-width: 800px;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr 4rem;
    grid-gap: 10px;
    width: 100vw;
    height: 100vh;
  }

  .nav-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    padding-right: 0.5rem;
  }

  .nav-button {
    font-size: larger;
    grid-column: 1 / -1;
    width: 100%;
  }

  .active {
    background-color: black;
    color: white;
  }
</style>
