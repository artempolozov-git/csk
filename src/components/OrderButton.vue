<template>
    <div class="order">
        <div>Обратная связь</div>
    </div>
</template>

<script>
    export default {
        name: "OrderButton"
    }
</script>

<style scoped>
.order {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    width: 221px;
    height: 39px;
    background: #FF2C06;
    white-space: nowrap;
}
.order > div {
    font-weight: bold;
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    padding: 0px 15px;
}
.order:hover {
    background: #f60400;
    cursor: pointer;
}
</style>