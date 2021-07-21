<template>
    <div class="footer-contacts">
        <div class="contacts">
            Есть вопросы? Звоните! <pre class="number"> +7 (495) 132-74-00 </pre> или <pre class="number"> +7 (495) 134-28-06 </pre> Круглосуточно
        </div>
        <div class="socials">
            <div class="socials-icons">
                Или пишите!
                <div class="media-icon"><img src="@/assets/images/icons/whatsup.svg"></div>
                <div class="media-icon"><img src="@/assets/images/icons/viber.svg"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterContacts"
    }
</script>

<style scoped>
.footer-contacts {
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
}
.contacts {
    white-space: nowrap;
    padding-left: 60px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    color: black;
}
.number {
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    color: #FF2C06;
}
.socials {
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
}
.socials-icons {
    float: right;
    display: flex;
    font-weight: bold;
    font-size: 16px;
    color: black;
    margin-right: 160px;
    align-items: center;
}
.media-icon {
    margin-left: 30px;
}
</style>