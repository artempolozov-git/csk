<template>
    <div class="category-container">
        <div v-for="category in categories" :key="category.name" class="category">
            <span class="category-title">{{category.name}}</span>
            <a href="#" class="category-name" v-for="child in category.childs" :key="child.name">{{child.name}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterCategory",
        data() {
            return {
                categories: [
                    { name: 'Все для кровли:', childs: [
                        { name: 'Гибкая черепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Керамическая черепица', url: 'http://yandex.ru' },
                        { name: 'Керамическая черепица', url: 'http://yandex.ru' },
                        { name: 'Керамическая черепица', url: 'http://yandex.ru' },
                        ]
                    },
                    { name: 'Древесно-плитные материалы:', childs: [
                        { name: 'OSB', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        ]
                    },{ name: 'Древесно-плитные материалы:', childs: [
                        { name: 'OSB', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        ]
                    },{ name: 'Древесно-плитные материалы:', childs: [
                        { name: 'OSB', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        { name: 'Металлочерепица', url: 'http://yandex.ru' },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.category-container {
    width: 100%;
    margin: 40px 0 40px 0;
    display: flex;
}
.category {
    height: 100%;
    display: inline-block;
    margin-left: 30px;
}
.category-title {
    display: block;
    color: #FF2C06;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
}
.category-name {
    display: block;
    font-weight: normal;
    font-size: 14px;
    text-decoration: none;
    color: #000000;
}
.category-name:hover {
    text-decoration: underline;
}
</style>