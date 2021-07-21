<template>
    <div>
        <div class="delimiter">Каталог строительных материалов</div>
        <div class="home-category">
            <div v-for="category in categories" :key="category.name" class="item-category">
                <div class="line-name">
                    <span class="name">{{category.name}}</span>
                </div>
                <div class="image-category">
                    <img :src="category.imageURL">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeGrid",
        data() {
            return {
                categories: [
                    { name: 'Профильная труба:', url: 'http://yandex.ru', imageURL: 'https://metalobaza.su/upload/thumbs/catalog/categoryicon/pryamougolnaya-truba_5b0e5d.png' },
                    { name: 'Древесно-плитные материалы:', url: 'http://yandex.ru', imageURL: 'https://stroysnab.com/upload/medialibrary/8e2/8e265156c68eea9e8adfd7c10dc7f9ed.png' },
                    { name: 'Саморезы:', url: 'http://yandex.ru', imageURL: 'https://kmktradeco.ru/upload/iblock/053/053a3683eba3c78f05f85a38e3880519.png' },
                    { name: 'Кровельная мастика:', url: 'http://yandex.ru', imageURL: 'https://ecomast.com/wp-content/uploads/2020/04/mastika-krov.png' },
                    { name: 'Водосточная система:', url: 'http://yandex.ru', imageURL: 'https://sp-profil.ru/data/userfiles/image/vodostochnye-sistemy-plastikovye.png' },
                    { name: 'Уплотнители:', url: 'http://yandex.ru', imageURL: 'https://krovlyaikrysha.ru/images/uplotniteldlyaprofnastilasvoystvaprimene_EA39D70A.png' },
                    { name: 'Все для кровли:', url: 'http://yandex.ru', imageURL: 'https://s0.rbk.ru/v6_top_pics/resized/1400x700_crop/media/img/3/76/755590531220763.jpg' },
                    { name: 'Все для кровли:', url: 'http://yandex.ru', imageURL: 'https://s0.rbk.ru/v6_top_pics/resized/1400x700_crop/media/img/3/76/755590531220763.jpg' },
                    { name: 'Все для кровли:', url: 'http://yandex.ru', imageURL: 'https://s0.rbk.ru/v6_top_pics/resized/1400x700_crop/media/img/3/76/755590531220763.jpg' },
                    { name: 'Все для кровли:', url: 'http://yandex.ru', imageURL: 'https://s0.rbk.ru/v6_top_pics/resized/1400x700_crop/media/img/3/76/755590531220763.jpg' },
                    { name: 'Все для кровли:', url: 'http://yandex.ru', imageURL: 'https://s0.rbk.ru/v6_top_pics/resized/1400x700_crop/media/img/3/76/755590531220763.jpg' },
                    { name: 'Все для кровли:', url: 'http://yandex.ru', imageURL: 'https://s0.rbk.ru/v6_top_pics/resized/1400x700_crop/media/img/3/76/755590531220763.jpg' },
                ]
            }
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
    background: url(../assets/images/delimiter.png);
    background-size: cover;
    background-position: center;
}
.home-category {
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-auto-rows: 210px;
    grid-gap: 1em;
}
.item-category {
    background: #FFFFFF;
    border: 2px solid #CDCDCD;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
}
.item-category:hover{
    cursor: pointer;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.line-name {
    position:relative;
    top:20px;
    width: 100%;
    height: 30px;
    background: #F6F6F6;
    border-top: 2px solid #CDCDCD;
    border-bottom: 2px solid #CDCDCD;
    display: flex;
    justify-content: center;
    align-items: center;
}
.name {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    margin: 0 15px 0 15px;
    text-transform: uppercase;
}
.image-category {
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.image-category img {
    object-fit: cover;
    height: 130px;
    width: 100%;
}
</style>