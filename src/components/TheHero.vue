<template>
    <section :class="`hero ${classes}`">
        <div class="container grid hero__container">
            <div class="hero__content">
                <h1 class="hero__heading">Ultra fast and secure websites for your business</h1>
                <p class="hero__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, natus eveniet quas.</p>
            </div>
        </div>
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
        grid-column: repeat(8, 1fr);
    }
}

</style>