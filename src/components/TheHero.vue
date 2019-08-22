<template>
    <section :class="`hero`">
        <div class="container grid hero__container">
            <div class="hero__content">
                <div class="hero__slide">
                    <transition name="slide-fade" mode="out-in">
                        <h1 :key="currentSlide.heading" class="hero__heading">{{ currentSlide.heading }}</h1>
                    </transition>
                    <p class="hero__text">{{ currentSlide.text }}</p>
                </div>
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

    },
    data() {
        return {
            slides: [
                {
                    id: 0,
                    heading: "Ultra fast and secure websites for your business",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, natus eveniet quas."
                },
                {
                    id: 1,
                    heading: "Second slide",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, natus eveniet quas."
                },
                {
                    id: 2,
                    heading: "Third slide",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, natus eveniet quas."
                }
            ],
            currentSlide: null
        }
    },
    methods: {
        startInterval: function() {
            let i = 0;
            this.currentSlide = this.slides[i]
            setInterval(() => {
                i = (i < this.slides.length - 1) ? i+1 : 0 
                this.currentSlide = this.slides[i]
            }, 5000)
        }
    },
    created() {
        this.startInterval()
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

@keyframes hero-heading {

}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>