<script lang="ts">
    export let select = 1;
</script>

<div class="info-card nes-container with-title">
    <h2 class="title">{select} 基本資料</h2>

    <div class="info-basic">
        <div class="info-person">
            <p><b>名稱：</b><span>Jeffrey</span></p>
            <p><b>等級：</b><span>LV34</span></p>
            <p><b>性別：</b><span>男</span></p>
            <p><b>星座：</b><span>摩羯</span></p>
            <p><b>心情：</b><span>不錯</span></p>
        </div>

        <div class="photo">
            <i class="nes-bcrikko" />
        </div>
    </div>
</div>

<div class="info-card nes-container with-title">
    <h2 class="title">職業</h2>

    <div>
        <div>
            <p><b>公會：</b>Aeon Matrix</p>
        </div>

        <div class="info-basic">
            <p><b>職位：</b></p>

            <div>
                <p class="is-dark">
                    <i class="nes-icon is-small star" />
                    <span>Software Developer</span>
                </p>

                <p class="is-dark">
                    <i class="nes-icon is-small star is-half" />
                    <span>Fullstack Developer</span>
                </p>
                <p class="is-dark">
                    <i class="nes-icon is-small star is-empty" />
                    <span>Project Manager</span>
                </p>
            </div>
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
</style>
