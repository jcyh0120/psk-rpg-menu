<script lang="ts">
    export let select = 1;
</script>

<div class="info-board nes-container with-title">
    <div class="info-card nes-container with-title">
        <p class="title">{select} 基本資料</p>

        <div class="info-basic">
            <div class="name">
                <p><b>名稱：</b><span>Jeffrey</span></p>
            </div>
            <div class="level">
                <p><b>等級：</b><span>LV34</span></p>
            </div>
            <div class="photo">
                <i class="nes-bcrikko" />
            </div>

            <div class="sign">
                <p><b>星座：</b><span>摩羯</span></p>
            </div>

            <div class="sex">
                <p><b>性別：</b><span>男</span></p>
            </div>
        </div>
    </div>

    <div class="info-card nes-container with-title">
        <p class="title">職業</p>
    </div>

    <div class="info-card nes-container with-title">
        <p class="title">故事</p>
    </div>
</div>

<style>
    .info-board {
        padding: 0rem;
    }

    .info-card {
        margin: 1rem;
        padding: 1rem;
    }

    .info-basic {
        display: grid;
        grid-template-columns: 7rem 8rem 8rem auto;
        grid-template-rows: auto;
        grid-template-areas:
            "photo name level ."
            "photo sign sex .";
        grid-gap: 10px;
    }

    .name {
        grid-area: name;
        align-self: center;
    }

    .level {
        grid-area: level;
        align-self: center;
    }

    .sign {
        grid-area: sign;
        align-self: center;
    }

    .sex {
        grid-area: sex;
        align-self: center;
    }

    .photo {
        grid-area: photo;
    }
</style>
