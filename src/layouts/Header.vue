<template>
    <div class="layouts--header">
        <div class="header-content">
            <logo></logo>
            <contacts></contacts>
            <navigation-menu></navigation-menu>
            <order-button></order-button>
        </div>
        <header-search></header-search>
    </div>
</template>

<script>
import HeaderSearch from '@/components/HeaderSearch';
import Contacts from '@/components/Contacts';
import Logo from "@/components/Logo";
import OrderButton from "@/components/OrderButton";
import NavigationMenu from "@/components/NavigationMenu";
export default {
    components: {
        Logo, Contacts, HeaderSearch, OrderButton, NavigationMenu
    },
    name: "Header"
}
</script>

<style scoped>
.layouts--header {
    width: 100%;
    height: 96px;
    background: white;
}
.header-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
</style>