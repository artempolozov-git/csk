<template>
    <div>
        <div id="block-1">
            <home-slider></home-slider>
            <home-discounts></home-discounts>
            <home-category></home-category>
            <home-products></home-products>
            <home-offers></home-offers>
            <home-attachment></home-attachment>
            <home-brands></home-brands>
        </div>
    </div>
</template>

<script>
    import HomeDiscounts from "@/components/HomeDiscounts";
    import HomeSlider from "@/components/HomeSlider";
    import HomeCategory from "@/components/HomeCategory";
    import HomeProducts from "@/components/HomeProducts";
    import HomeOffers from "@/components/HomeOffers";
    import HomeAttachment from "@/components/HomeAttachment";
    import HomeBrands from "@/components/HomeBrands";
    export default {
        name: "Home",
        components: {HomeBrands, HomeAttachment, HomeOffers, HomeProducts, HomeCategory, HomeSlider, HomeDiscounts}
    }
</script>

<style scoped>
div#block-1 {
    height: 100%;
    margin: 0px 20px 20px 20px;
}
</style>