<template>
    <div class="contacts">
        <div>+7 (495) 132-74-00</div>
        <div class="indent">+7 (495) 134-28-06</div>
        <div>Москва и Московская область</div>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
.contacts {
    margin: 0 0 0 50px;
    display: inline-flex;
    font-weight: bold;
    font-size: 16px;
    width: 260px;
    flex-wrap: wrap;
    align-items: center;
    white-space: nowrap;
}
.indent {
    margin: 5px 0 5px 0;
}
</style>