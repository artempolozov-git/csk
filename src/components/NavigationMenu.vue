<template>
    <div class="nav-button">
        <div class="icon-button"><img style="width: 25px;" src="@/assets/images/icons/mail.svg"></div>
        <div class="text-button">Заявка на расчет</div>

        <div class="next-icon"><img style="width: 25px;" src="@/assets/images/icons/info.svg"></div>
        <div class="text-button">О нас</div>

        <div class="next-icon"><img style="width: 25px;" src="@/assets/images/icons/certificate.svg"></div>
        <div class="text-button">Сертификаты</div>

        <div class="next-link"><img style="width: 25px; margin-left: 30px" src="@/assets/images/icons/oplata.svg"></div>
        <div class="text-link">Оплата</div>
    </div>
</template>

<script>
    export default {
        name: "NavigationMenu"
    }
</script>

<style scoped>
.nav-button {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
}
.icon-button {
    display: flex;
    height: 100%;
    margin-left: 10px;
}
.next-icon {
    display: flex;
    height: 100%;
    margin-left: 40px;
}
.text-button {
    font-weight: normal;
    font-size: 18px;
    color: black;
    margin-left: 8px;
}
</style>