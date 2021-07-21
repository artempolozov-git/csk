<template>
    <div>
        <div class="delimiter">Бренды с которыми мы работаем:</div>
        <div class="home-brands">
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>

            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand">
                    <img src="@/assets/images/nlmk.png">
                </div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
            <div class="item-brand">
                <div class="image-brand"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeBrands"
    }
</script>

<style scoped>
.delimiter {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: white;
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    background: url(../assets/images/delimiter2.png);
    background-size: cover;
    background-position: center;
}
.home-brands {
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(160px,1fr));
    grid-auto-rows: 160px;
    grid-gap: 1em;
}
.item-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid #CDCDCD;
    box-sizing: border-box;
}
.image-brand {
    margin: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.image-brand img {
    object-fit: cover;
    height: auto;
    width: 100%;
}
</style>