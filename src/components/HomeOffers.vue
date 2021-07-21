<template>
    <div>
        <div class="delimiter">Почему Торговый Дом “ЦСК”</div>
        <div class="home-offers">
            <div class="nav-offer">

                <div class="icon-offer"><img src="@/assets/images/icons/home.svg"></div>
                <div class="first-text">Большой ассортимент
                    <div class="second-text">товаров</div>
                </div>

                <div class="next-offer"><img src="@/assets/images/icons/sale.svg"></div>
                <div class="first-text">Лучшие <span class="second-text">цены</span>
                    <div class="first-text">на рынке</div>
                </div>

                <div class="card-offer"><img src="@/assets/images/icons/card.svg"></div>
                <div class="first-text">Клубные <span class="second-text">карты</span>
                    <div class="first-text">для покупателей</div>
                </div>

                <div class="next-offer"><img src="@/assets/images/icons/logistic.svg"></div>
                <div class="first-text">Развитая
                    <div class="second-text">логистика</div>
                </div>

                <div class="next-offer"><img src="@/assets/images/icons/pig.svg"></div>
                <div class="first-text">Бонусные
                    <div class="second-text">рубли</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeOffers"
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
    color: white;
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    background: url(../assets/images/delimiter.png);
    background-size: cover;
    background-position: center;
}
.home-offers {
    width: 100%;
    height: 70px;
    justify-content: center;
    display: flex;
}
.nav-offer {
    display: flex;
    align-items: center;
}
.icon-offer {
    display: flex;
    height: 50px;
}
.next-offer {
    display: flex;
    height: 50px;
    margin-left: 20px;
    margin-right: 8px;
}
.card-offer {
    display: flex;
    height: 35px;
    margin-left: 30px;
    margin-right: 8px;
}
.first-text {
    font-weight: normal;
    font-size: 17px;
    letter-spacing: 0.07em;
    color: black;
    text-align: center;
}
.second-text {
    text-align: center;
    font-weight: bold;
    margin: 0;
    font-size: 17px;
    letter-spacing: 0.07em;
    color: #FF2C06;
    text-transform: uppercase;
}
</style>