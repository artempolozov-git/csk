<template>
    <div class="home-attachment">
        <div class="background">
            <div class="number-form">
                <div class="form-text">
                    <pre>Скачайте мобильное приложение
ТД-ЦСК на ваш смартфон</pre>
                </div>
                <div class="text-description">и получите 1000<pre> бонусных рублей!</pre></div>
                <div class="text-sentence">Получите по SMS ссылку на скачивание приложения</div>
                <div class="form-phone">
                    <input type="number" placeholder="+7(___) ___-__-__" class="input-phone">
                    <div class="form-button">Получить</div>
                </div>
                <div class="store-image">
                    <div class="app-store"></div>
                    <div class="g-store"></div>
                </div>
            </div>
            <div class="phone-mockup"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeAttachment"
    }
</script>

<style scoped>
.home-attachment {
    display: flex;
}
.background {
    display: flex;
    align-items: center;
    width: 100%;
    height: 415px;
    background: url(../assets/images/background.png);
    background-size: cover;
    background-position: center;
    margin-top: 50px;
    margin-bottom: 35px;
    position: relative;
}
.number-form {
    display: block;
    width: 480px;
    height: auto;
    margin-left: 30px;
    background: #F7F7F7;
}
.phone-mockup {
    width: 253px;
    height: 471px;
    background: url(../assets/images/phone-mockup.png);
    background-size: cover;
    background-position: center;
    position: absolute;
    right: 0;
    margin-right: 100px;
}
.form-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 15px;
    text-align: center;
    letter-spacing: 0.07em;
}
.form-text > pre {
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
}
.text-description {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    letter-spacing: 0.07em;
}
.text-description > pre {
    font-family: Roboto;
    font-weight: bold;
    font-size: 15px;
    color: #FF2C06;
}
.text-sentence {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.07em;
}
.form-phone {
    width: 100%;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.form-phone input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.input-phone {
    padding: 0 25px;
    width: 130px;
    height: 39px;
    background-color: white;
    border: none;
    font-size: 15px;
    margin-left: 45px;
}
.input-phone:focus {
    outline: none;
}
.input-phone::-ms-clear {
    display: none;
}
.input-phone::-webkit-search-cancel-button {
    display: none;
}
.form-button {
    width: 150px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 45px;
    background-color: #FF2C06;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.07em;
    color: white;
    cursor: pointer;
}
.store-image {
    width: 100%;
    margin-top: 27px;
    margin-bottom: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
}
.app-store {
    width: 160px;
    height: 48px;
    background: url(../assets/images/app-store.png);
    background-size: cover;
    background-position: center;
    margin-left: 45px;
}
.g-store {
    width: 148px;
    height: 41px;
    background: url(../assets/images/g-play.png);
    background-size: cover;
    background-position: center;
    margin-right: 45px;
}
</style>