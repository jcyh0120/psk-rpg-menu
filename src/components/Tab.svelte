<script lang="ts">
    export let select = 1;
</script>

<div class="info-card nes-container with-title">
    <h2 class="title">{select} 基本資料</h2>

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
    <h2 class="title">職業</h2>

    <div class="info-job">
        <div class="guild">
            <p><b>公會：</b></p>
            <p>Aeon Matrix</p>
        </div>

        <div class="position">
            <p><b>職位：</b></p>

            <p class="is-dark">
                <i class="nes-icon is-small star" />
                <span>Fullstack Developer</span>
            </p>

            <p class="is-dark">
                <i class="nes-icon is-small star is-half" />
                <span>Fullstack Developer</span>
            </p>
            <p class="is-dark">
                <i class="nes-icon is-small star is-empty" />
                <span>Fullstack Developer</span>
            </p>
        </div>
    </div>
</div>

<div class="info-card nes-container with-title">
    <h2 class="title">故事</h2>

    <p>
        這是這個人的冒險故事 這是這個人的冒險故事 這是這個人的冒險故事
        這是這個人的冒險故事 這是這個人的冒險故事 這是這個人的冒險故事
        這是這個人的冒險故事 這是這個人的冒險故事 這是這個人的冒險故事
    </p>
</div>

<style>
    .info-card {
        margin: 0.5rem auto;
        padding: 1.5rem;
        /* border-bottom: 0;
        border-left: 0;
        border-right: 0; */
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

    .info-job-grid {
        display: grid;
        grid-template-columns: minmax(6rem, 10rem) auto;
        grid-template-rows: auto;
        grid-template-areas: "guild position";
        grid-gap: 10px;
    }

    .info-job {
        /* display: flex; */
        justify-content: space;
    }

    .guild {
        /* flex: 0 1 auto; */
        /* border: solid 1px; */
        /* padding: 0.5rem; */
    }

    .position {
        /* border: solid 1px; */
        margin-bottom: 0.5rem;
    }
</style>
