<template>
    <section :class="`hero ${classes}`">
        <div class="container grid hero__container">
            <div class="hero__content">
                <h1 class="hero__heading">Ultra fast and secure websites for your business</h1>
                <p class="hero__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, natus eveniet quas.</p>
            </div>
            <div class="hero__image">

            </div>
        </div>
        <div class="hero__overlay--1"></div>
    </section>
</template>
<script>
export default {
    name: "TheHero",
    props: {
        classes: {
            type: Array,
            default: []
        },

    }
}
</script>
<style lang="scss">
.hero {
    height: 100vh;
    padding-top: $header-height;
    background-image: linear-gradient(180deg,#013087 0%,#00b3ff 100%); 

    &__container {
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        height: 100%;
    }

    &__content {
        grid-column: 1/4;
        grid-row: 3/5;
        color: $font__color--highlight;
    }
}

</style>