<template>
    <div style="display: inline-flex; align-items: center;">
        <div class="logo">
            <img src="@/assets/images/logo.png">
        </div>
        <span class="logo-text">Центр<br>строительной<br>комплектации</span>
    </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>
.logo {
    margin: 0 0 0 30px;
    align-items: center;
    display: inline-flex;
}
.logo-text {
    margin-left: 4px;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
    display: inline-block;
}
</style>