<template>
    <div class="header-search">
        <div class="catalog-button"><img src="@/assets/images/icons/menu.svg"></div>
            <div class="catalog">Каталог товаров</div>
            <div class="search-form">
                <input type="search" name="q" placeholder="Введите наименование товара или артикул" class="input-search">
                <div class="srch-icon"><img src="@/assets/images/icons/lupa.png"></div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderSearch"
    }
</script>

<style scoped>
.header-search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 92px;
    border-bottom: 2px solid #eaeaea;
    background: #F6F6F6;
}
.catalog-button {
    display: flex;
    margin: 0 0 0px 100px;
}
.catalog {
    font-weight: bold;
    font-size: 18px;
    color: black;
    margin-left: 8px;
}
.input-search {
    padding: 0 15px;
    width: 748px;
    height: 42px;
    background-color: white;
    border: none;
    font-size: 15px;
    margin-left: 79px;
}
.input-search:focus {
    outline-style: solid;
    outline-color: #ff2c06;
    outline-width: 2px;
}
.input-search::-ms-clear {
    display: none;
}
.input-search::-webkit-search-cancel-button {
    display: none;
}
.search-form {
    position: relative;
}
.srch-icon {
    width: 22px;
    height: 22px;
    position: absolute;
    right: 15px;
    top: 10px;
}
</style>