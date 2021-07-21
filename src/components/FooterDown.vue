<template>
    <div class="footer-down">
        <div class="media-icon">
            <div class="icon-first"><img src="@/assets/images/icons/vkontakte.svg"></div>
            <div class="icon"><img src="@/assets/images/icons/facebook.svg"></div>
            <div class="icon"><img src="@/assets/images/icons/instagram.svg"></div>
        </div>
        <div class="down-text">
            <span>© 2010 - 2020 ООО “Торговый Дом ЦСК”. Все права защищены</span>
            <span style="margin-top: 15px;">Политика конфиденциальности.</span>
            <span style="margin-top: 15px;">Условия пользования</span>
            <span style="margin-top: 15px; font-weight: bold;">Design by ArakelovGroup</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterDown"
    }
</script>

<style scoped>
.footer-down {
    width: 100%;
    height: 260px;
    background-color: #F6F6F6;
    display: inline-block;
    justify-content: center;
}
.media-icon {
    display: flex;
    justify-content: center;
    margin-top: 36px;
}
.icon {
    margin: 0 0 0 40px;
}
.down-text {
    display: grid;
    text-align: center;
    margin-top: 36px;
}
</style>