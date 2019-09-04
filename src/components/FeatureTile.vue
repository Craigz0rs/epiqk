<template>
    <div :class="classes">
        <div class="services__icon"></div>
        <h3 class="services__title" v-html="title"></h3>
        <p class="services__description" v-html="description"></p>
    </div>
</template>
<script>
export default {
    name: "FeatureTile",
    props: {
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        icon: {
            type: String,
            default: ""
        },
        classes: {
            type: Array
        }
    }
}
</script>
<style lang="scss">
.feature {
    &__tile {
        grid-column: span 2;
        // justify-self: center;
    }
}

.services {
    &__title {
        text-align: center;
    }
}
</style>