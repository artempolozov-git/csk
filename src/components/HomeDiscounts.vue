<template>
    <div class="home-discount">
        <div class="block-container">
            <div class="block-image">
                <div class="yellow-line">Скидка</div>
                <div class="red-line">Акция Knauf: “Открывай Россию вместе с KNAUF</div>
            </div>
            <div class="block-image2">
                <div class="yellow-line">Акция</div>
                <div class="red-line">-6% на OSB при покупке кровли!</div>
            </div>
            <div class="block-image3">
                <div class="yellow-line">Акция</div>
                <div class="red-line">На теплоизоляционные плиты</div>
            </div>
            <div class="block-image4">
                <div class="yellow-line">Акция</div>
                <div class="red-line">На черепицу ШИНГЛАС</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSlider"
    }
</script>

<style scoped>
.home-discount {
    display: inline-block;
    width: calc(50% - 10px);
    height: 405px;
    float: right;
}
.block-container {
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
.block-image {
    overflow: hidden;
    background: url(../assets/images/discount-image1.jpg);
    background-size: cover;
    background-position: center;
}
.block-image2 {
    overflow: hidden;
    background: url(../assets/images/discount-image2.jpg);
    background-size: cover;
    background-position: center;
}
.block-image3 {
    overflow: hidden;
    background: url(../assets/images/discount-image3.jpg);
    background-size: cover;
    background-position: center;
}
.block-image4 {
    overflow: hidden;
    background: url(../assets/images/discount-image4.jpg);
    background-size: cover;
    background-position: center;
}
.yellow-line {
    display: flex;
    position: relative;
    width: 125px;
    height: 30px;
    background-color: yellow;
    transform: rotate(-45deg);
    top: 17px;
    right: 30px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
}
.red-line {
    display: flex;
    align-items: center;
    position: relative;
    top: 100px;
    width: 100%;
    height: 30px;
    background-color: #DD0101;
    font-size: 12px;
    text-transform: none;
}
</style>