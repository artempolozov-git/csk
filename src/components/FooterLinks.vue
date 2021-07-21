<template>
    <div class="footer-links">
        <div class="border-link"></div>
        <div class="nav-links">

            <div class="icon-link"><img src="@/assets/images/icons/info.svg"></div>
            <div class="text-link">О компании</div>

            <div class="next-link"><img src="@/assets/images/icons/vakansii.svg"></div>
            <div class="text-link">Вакансии</div>

            <div class="next-link"><img src="@/assets/images/icons/certificate.svg"></div>
            <div class="text-link">Сертификаты</div>

            <div class="next-link"><img src="@/assets/images/icons/truck.svg"></div>
            <div class="text-link">Доставка</div>

            <div class="next-link"><img src="@/assets/images/icons/oplata.svg"></div>
            <div class="text-link">Оплата</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterLinks"
    }
</script>

<style scoped>
.border-link {
    border-top: 1px solid #000000;
    width: 80%;
    position: absolute;
}
.footer-links {
    width: 100%;
    height: 100px;
    justify-content: center;
    display: flex;
}
.nav-links {
    display: flex;
    align-items: center;
}
.icon-link {
    display: flex;
    height: 100%;
}
.next-link {
    display: flex;
    height: 100%;
    margin-left: 40px;
}
.text-link {
    font-weight: bold;
    font-size: 18px;
    color: black;
    margin-left: 8px;
    text-transform: uppercase;
}
</style>