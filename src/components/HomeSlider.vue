<template>
    <div class="slider-container">
        <slick ref="slick" :options="slickOptions">
            <div class="slider-image">
                <div class="red-line">Прекрасный внешний вид и защита вашего дома</div>
                <div class="grey-line"><img src="@/assets/images/logo-grey.png">Кровля</div>
            </div>
            <div class="slider-image2">
                <div class="red-line">Монтаж перегородок и перекрытий: быстро, легко и надежно</div>
                <div class="grey-line"><img src="@/assets/images/logo-grey.png">Гипсокартон</div>
            </div>
            <div class="slider-image3">
                <div class="red-line">Обшивка стен, настил полов, строительство помещений</div>
                <div class="grey-line"><img src="@/assets/images/logo-grey.png">ДСП, ОСБ, ГСП, МДФ</div>
            </div>
            <div class="slider-image4">
                <div class="red-line">Асбестоцементные изделия, гидроизоляция, кирпич</div>
                <div class="grey-line"><img src="@/assets/images/logo-grey.png">Стройматериалы</div>
            </div>
        </slick>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Slider",
        components: { Slick },
        data() {
            return {
                slickOptions: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    dotsClass: "my-dots",
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    // Any other options that can be got from plugin documentation
                },
            };
        },
        mounted() {
            // let $slider = this.$el.querySelector('.slider');
        },
        methods: {

        },
    }
</script>

<style src='../../node_modules/slick-carousel/slick/slick.css'></style>
<style src='../../node_modules/slick-carousel/slick/slick-theme.css'></style>
<style>
.slider-container {
    width: calc(50% - 10px);
    height: 100%;
    display: inline-block;
}
.slider-container img {
    height: 406px;
    width: 100%;
    object-fit: cover;
}
.red-line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 36px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    background-color: #FF2C06;
    text-align: center;
}
.red-line pre {
    text-transform: none;
    font-family: Roboto;
}
.grey-line {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
    height: 65px;
    background-color: rgba(239, 239, 239, 0.7);
    font-weight: bold;
    font-size: 42px;
    text-transform: uppercase;
    color: black;
    white-space: nowrap;
}
.grey-line > img {
    width: 45px;
    height: 43px;
    margin: 0 15px 0 25px;
}
.slider-image {
     position: relative;
     height: 406px;
     width: 100%;
     object-fit: cover;
     background: url(../assets/images/slider_image1.jpg);
     background-size: cover;
     background-position: center;
}
.slider-image2 {
    position: relative;
    height: 406px;
    width: 100%;
    object-fit: cover;
    background: url(../assets/images/slider_image2.jpg);
    background-size: cover;
    background-position: center;
}
.slider-image3 {
    position: relative;
    height: 406px;
    width: 100%;
    object-fit: cover;
    background: url(../assets/images/slider_image3.jpg);
    background-size: cover;
    background-position: center;
}
.slider-image4 {
    position: relative;
    height: 406px;
    width: 100%;
    object-fit: cover;
    background: url(../assets/images/slider_image4.jpg);
    background-size: cover;
    background-position: center;
}
.slick-slider > div {
    height: 100%;
}
.slick-dotted.slick-slider {
    height: 100%;
    margin-bottom: 0;
}
.slick-prev {
    display: none;
}
.slick-next {
    display: none;
}
.my-dots {
    position: absolute;
    bottom: 0;
    margin: 0;
    display: block;
    width: 100%;
    padding: 0;
    list-style: none;
    text-align: center;
}
.my-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    padding: 0;
    cursor: pointer;
}
.my-dots li button {
    font-size: 0;
    display: block;
    width: 20px;
    height: 5px;
    padding: 0px;
    cursor: pointer;
    border: 0;
    outline: none;
    background: white;
}
.my-dots li.slick-active button {
    background: black;
}
</style>