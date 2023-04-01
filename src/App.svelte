<script lang="ts">
  import Tab from "./components/Tab.svelte";

  let select = 1;
  let subMenu = false;

  function selectHandler(menu) {
    if (menu === 1 && select === 1) {
    } else {
      select = menu;
    }
  }
</script>

<main class="wrapper">
  <div class="info-board">
    <Tab {select} />
  </div>

  <div class="nav-bar2">
    <div>
      <button
        type="button"
        class="nav-button nes-btn is-primary select"
        on:click={() => selectHandler(1)}>編輯/儲存/取消</button
      >

      <button
        type="button"
        class="nav-button nes-btn is-primary select"
        on:click={() => selectHandler(1)}>儲存</button
      >
      <button
        type="button"
        class="nav-button nes-btn is-primary select"
        on:click={() => selectHandler(1)}>儲存/取消</button
      >
      <button
        type="button"
        class="nav-button nes-btn is-primary select"
        on:click={() => selectHandler(1)}>編輯/儲存/取消</button
      >
    </div>

    
  </div>

  <div class="nav-bar">
    <div>
      <button
        type="button"
        class:active={select === 1}
        class="nav-button nes-btn is-normal select"
        on:click={() => selectHandler(1)}>返回/完成</button
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

    max-width: 650px;
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

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
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

  .nav-bar2 {
    bottom: 4.5rem;
    position: absolute;
    display: grid;
    margin: 0 0.8rem;
    /* padding-right: 0.5rem; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
</style>
