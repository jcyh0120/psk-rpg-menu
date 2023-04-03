<script lang="ts">
  import Tab from "./components/Tab.svelte";
  let tab;

  let select = 1;

  let statusMenu: "default" | "subMenu" | "edit" | "complete" = "default";
  let editMode = false;
  let taskMenu = false;
  let skillMenu = false;
  let achievementMenu = false;

  function selectHandler(menu) {
    if (select === menu && menu === 1) {
      statusMenu = "subMenu";
    }

    select = menu;
  }

  function handleStatusReturnDefault() {
    statusMenu = "default";
    editMode = false;
  }

  function handleStatusEdit() {
    statusMenu = "edit";
    editMode = true;
  }

  function handleStatusComplete() {
    statusMenu = "complete";
  }

  function handleStatusSave() {
    tab.save();
    editMode = false;
    statusMenu = "default";
  }

  function handleStatusCancel() {
    tab.cancel();
    editMode = false;
    statusMenu = "default";
  }
</script>

<main class="wrapper">
  <div class="info-board">
    <Tab bind:this={tab} {select} {editMode} />
  </div>

  <div class="nav-bar">
    <div class="drop-wrapper">
      {#if statusMenu === "default"}
        <button
          type="button"
          class:active={select === 1}
          class="nav-button nes-btn is-normal select"
          on:click={() => selectHandler(1)}>狀態</button
        >
      {:else if statusMenu === "subMenu"}
        <button
          type="button"
          class:active={select === 1}
          class="nav-button nes-btn is-normal select"
          on:click={handleStatusReturnDefault}>返回</button
        >
        <div class="drop-menu dropdown">
          <button
            type="button"
            class="nav-button nes-btn is-primary select"
            on:click={handleStatusEdit}>編輯</button
          >
        </div>
      {:else if statusMenu === "edit"}
        <button
          type="button"
          class:active={select === 1}
          class="nav-button nes-btn is-normal select"
          on:click={handleStatusComplete}>完成</button
        >
      {:else if statusMenu === "complete"}
        <button
          type="button"
          class:active={select === 1}
          class="nav-button nes-btn is-normal select"
          on:click={handleStatusEdit}>返回</button
        >
        <div class="drop-menu dropdown">
          <button
            type="button"
            class="nav-button nes-btn is-primary select"
            on:click={handleStatusSave}>儲存</button
          >
          <button
            type="button"
            class="nav-button nes-btn is-primary select"
            on:click={handleStatusCancel}>取消</button
          >
        </div>
      {/if}
    </div>

    <div class="drop-wrapper">
      <button
        type="button"
        class:active={select === 2}
        class="nav-button nes-btn is-normal"
        on:click={() => selectHandler(2)}>任務</button
      >
      <div class="drop-menu dropdown" class:hide={true}>
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

    <div class="drop-wrapper">
      <button
        type="button"
        class:active={select === 3}
        class="nav-button nes-btn is-normal"
        on:click={() => selectHandler(3)}>技能</button
      >
      <div class="drop-menu dropdown" class:hide={true}>
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

    <div class="drop-wrapper">
      <button
        type="button"
        class:active={select === 4}
        class="nav-button nes-btn is-normal"
        on:click={() => selectHandler(4)}>成就</button
      >
      <div class="drop-menu dropdown" class:hide={true}>
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

  .drop-wrapper {
    position: relative;
  }

  .drop-menu {
    position: absolute;
  }

  .dropdown {
    bottom: 100%;
    padding-right: 0.2rem;
    margin-bottom: 0.1rem;
    width: 100%;
  }

  .hide {
    display: none;
  }
</style>
