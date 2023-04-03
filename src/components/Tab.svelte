<script lang="ts">
    import { userStore } from "../store";
    import { get } from "svelte/store";
    export let select = 1;
    export let editMode = false;

    let user = get(userStore);

    export const save = function () {
        userStore.set(user);
    };

    export const cancel = function () {
        user = get(userStore);
    };
</script>

<div class="info-card nes-container with-title">
    <h2 class="title">{select} 基本資料</h2>
    <div class="info-basic">
        <div class="info-person">
            <p>
                <b>名稱：</b>
                {#if editMode}
                    <input
                        class="nes-input"
                        type="text"
                        bind:value={user.name}
                        autofocus
                    />
                {:else}
                    <span>{user.name}</span>
                {/if}
            </p>
            <p>
                <b>等級：</b>
                {#if editMode}
                    <input
                        class="nes-input"
                        type="text"
                        bind:value={user.level}
                    />
                {:else}
                    <span>{user.level}</span>
                {/if}
            </p>
            <p>
                <b>性別：</b>
                {#if editMode}
                    <input
                        class="nes-input"
                        type="text"
                        bind:value={user.gender}
                    />
                {:else}
                    <span>{user.gender}</span>
                {/if}
            </p>
            <p>
                <b>星座：</b>
                {#if editMode}
                    <input
                        class="nes-input"
                        type="text"
                        bind:value={user.sign}
                    />
                {:else}
                    <span>{user.sign}</span>
                {/if}
            </p>
            <p>
                <b>心情：</b>
                {#if editMode}
                    <input
                        class="nes-input"
                        type="text"
                        bind:value={user.sign}
                    />
                {:else}
                    <span>{user.sign}</span>
                {/if}
            </p>
        </div>

        <div class="photo">
            <i class="nes-bcrikko" />
        </div>
    </div>
</div>

<div class="info-card nes-container with-title">
    <h2 class="title">職業</h2>

    <div>
        <p>
            <b>公會：</b>
            {#if editMode}
                <input
                    class="nes-input"
                    type="text"
                    bind:value={user.company}
                />
            {:else}
                <span>{user.company}</span>
            {/if}
        </p>
    </div>

    {#if editMode}
        <div>
            <p><b>職位：</b></p>

            <div>
                <label>
                    <input
                        type="radio"
                        class="nes-radio"
                        name="answer"
                        value={"star"}
                        bind:group={user.career}
                    />
                    <span><i class="nes-icon is-small star" /></span>
                </label>

                <label>
                    <input
                        type="radio"
                        class="nes-radio"
                        name="answer"
                        value={"is-half star"}
                        bind:group={user.career}
                    />
                    <span><i class="nes-icon is-small star is-half" /></span>
                </label>

                <label>
                    <input
                        type="radio"
                        class="nes-radio"
                        name="answer"
                        value={"is-empty star"}
                        bind:group={user.career}
                    />
                    <span><i class="nes-icon is-small star is-empty" /></span>
                </label>
            </div>

            <input class="nes-input" type="text" bind:value={user.position} />
        </div>
    {:else}
        <div class="info-basic">
            <p><b>職位：</b></p>
            <p>
                <i class="nes-icon is-small {user.career}" />
                <span>{user.position}</span>
            </p>

            <!-- <p class="is-dark">
                <i class="nes-icon is-small star is-half" />
                <span>Fullstack Developer</span>
                </p>
            
                <p class="is-dark">
                    <i class="nes-icon is-small star is-empty" />
                    <span>Project Manager</span>
                </p> -->
        </div>
    {/if}
</div>

<div class="info-card nes-container with-title">
    <h2 class="title">故事</h2>

    {#if editMode}
        <textarea
            class="nes-input"
            style="width:100%"
            bind:value={user.story}
        />
    {:else}
        <p>{user.story}</p>
    {/if}
</div>

<style>
    .info-card {
        margin: 0.8rem auto;
        padding: 1.5rem;
    }

    .info-basic {
        display: flex;
    }

    .photo {
        flex: 1;
        text-align: end;
    }

    .nes-icon.is-small.star {
        top: 0.15rem;
    }
</style>
