<template>
    <div class="bread-line">
        <div v-for="link in links" :key="link.name">
            <div>{{ link.name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumbs",
        data() {
            return {
                links: [
                    { name: 'Главная', url: 'http://yandex.ru' },
                    { name: 'Каталог', url: 'http://yandex.ru' },
                ]
            }
        }
    }
</script>

<style scoped>
.bread-line {
    width: 100%;
    height: 34px;
    background: #F6F6F6;
}
</style>