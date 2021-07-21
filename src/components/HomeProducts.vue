<template>
    <div>
        <div class="delimiter">Популярные товары:</div>
        <div class="home-products">
            <div v-for="product in products" :key="product.name" class="item-product">
                <div class="heart"><img src="@/assets/images/icons/heart.png"></div>
                <div class="image-product">
                    <img :src="product.imageURL">
                </div>
                <div class="text-product">
                    <span>{{product.name}}</span>
                </div>
                <div class="sale-text">
                    <span class="sale-text-red">клубная: {{product.clubCost}}</span>
                </div>
                <div class="sale-text">
                    <span class="sale-text-black">розница: {{product.retailCost}}</span>
                </div>
                <div class="article">
                    <p class="text-article">Артикул: <span class="text-bold">{{product.article}}</span></p>
                </div>
                <div class="amount">
                    <button class="decrease" type="button">-</button>
                    <input class="number" type="number" name="field" value="0" min="0" />
                    <button class="increase" type="button">+</button>
                </div>
                <div class="add-button">В корзину</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeProducts",
        data() {
            return {
                products: [
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                    {
                        name: 'Металлочерепица ГрандЛайн Modern PE(0,45)',
                        url: 'http://yandex.ru',
                        imageURL: 'https://www.materik-m.ru/upload/iblock/1a4/1a4a53a82208ea4107785976df6989d7.jpg',
                        clubCost: '303,00₽ за м2',
                        retailCost: '305,00₽ за м2',
                        article: '62966',
                    },
                ]
            }
        },
        methods: {
            changeCountClick(e) {
                if (e.target.classList.contains("increase")) {
                    ++e.target.parentElement.querySelector("input").value;
                } else if (e.target.classList.contains("decrease")) {
                    let count = e.target.parentElement.querySelector("input").value;
                    count = count - 1 < 0 ? 0 : count - 1;
                    e.target.parentElement.querySelector("input").value = count;
                }
            }
        },
        mounted() {
            this.$el.addEventListener('click', this.changeCountClick);
        },
        beforeDestroy() {
            this.$el.removeEventListener('click', this.changeCountClick);
        }
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
.home-products {
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-auto-rows: auto;
    grid-gap: 1em;
    margin-left: 50px;
    margin-right: 50px;
}
.item-product {
    background: #FFFFFF;
    border: 2px solid #CDCDCD;
    box-sizing: border-box;
    position: relative;
}
.heart {
    position: absolute;
    right: 0;
    margin: 8px;
    cursor: pointer;
    z-index: 1;
}
.image-product {
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.image-product img {
    object-fit: cover;
    width: 100%;
}
.text-product {
    margin: 0 20px 25px 20px;
    padding: 15px 30px 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    border-top: 1px solid black;
}
.text-product span {
    text-align: center;
    font-size: 15px;
    font-weight: normal;
}
.sale-text {
    margin: 0px 20px 0 20px;
    padding: 0px 15px 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    white-space: nowrap;
}
.sale-text-red {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: red;
}
.sale-text-black {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: black;
}
.article {
    margin: 10px 20px 0 20px;
    padding: 0px 15px 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    background-color: yellow;
}
.text-article {
    text-align: center;
    font-size: 13px;
    font-weight: normal;
    color: black;
}
.text-bold {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: black;
}
.amount {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.amount input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.increase {
    background-color: white;
    border: 2px solid #FFE600;
    cursor: pointer;
}
.decrease {
    background-color: white;
    border: 2px solid #FFE600;
    width: 25px;
    cursor: pointer;
}
.number {
    width: 60px;
    background-color: white;
    border: 2px solid #FFE600;
    text-align: center;
}
.amount *:focus {
    border: 2px solid #FFE600;
    outline: none;
}
.add-button {
    margin: 15px 40px 15px 40px;
    padding: 0px 15px 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    background-color: #FFE600;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
}
</style>