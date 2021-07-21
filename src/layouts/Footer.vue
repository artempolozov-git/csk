<template>
    <div class="layouts--footer">
        <footer-category></footer-category>
        <footer-links></footer-links>
        <footer-contacts></footer-contacts>
        <footer-down></footer-down>
    </div>
</template>

<script>
    import FooterCategory from "@/components/FooterCategory";
    import FooterLinks from "@/components/FooterLinks";
    import FooterContacts from "@/components/FooterContacts";
    import FooterDown from "@/components/FooterDown";
    export default {
        name: "Footer",
        components: {FooterDown, FooterContacts, FooterLinks, FooterCategory},
    }
</script>

<style scoped>
.layouts--footer {
    width: 100%;
    background-color: #F6F6F6;
    flex: 0 0 auto;
}
</style>