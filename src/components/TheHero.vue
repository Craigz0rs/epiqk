<template>
    <section :class="`hero`">
        <div class="container grid hero__container">
            <div class="hero__content">
                <div class="hero__slide">
                    <transition name="slide-fade" mode="out-in">
                        <h1 :key="currentSlide.heading" class="hero__heading">{{ currentSlide.heading }}</h1>
                    </transition>
                    <transition name="slide-up" mode="out-in">
                    <p :key="currentSlide.text" class="hero__text">{{ currentSlide.text }}</p>
                    </transition>
                </div>
            </div>
            <div class="hero__image">

            </div>
        </div>
        <div class="hero__overlay hero__overlay--1"><Wave1 /></div>
        <div class="hero__overlay hero__overlay--2"><Wave2 /></div>
        <!-- <div class="hero__overlay hero__overlay--3"><Wave3 /></div> -->
    </section>
</template>
<script>
import Wave from '~/assets/images/wave.svg'
import Wave2 from '~/assets/images/wave2.svg'
import Wave1 from '~/assets/images/wave1.svg'
export default {
    name: "TheHero",
    components: {
        Wave,
        Wave2,
        Wave1
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
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, natus eveniet fd cquas."
                },
                {
                    id: 2,
                    heading: "Third slide",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae sapiente qui, f natus eveniet quas."
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
    // background-image: linear-gradient(180deg,#7602c9 0%,#ff32f1 100%); 
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

    &__overlay {
        position: absolute;
        bottom: -2px;
        left: 0;
        width:100%;

        > svg {
            position: absolute;
            bottom: 0;
        }

        &--1 {
            fill: white;
            // transform: scaleY(2.5);
            z-index: 10;
        }
        &--2 {
            // fill: rgba(1, 122, 203, 0.2);
            fill: rgba(0, 60, 148, 0.2);
            transform: scaleY(1.5);
            z-index: 9;
        }

        &--3 {
            fill: rgba(0, 60, 148, 0.5);
            z-index: 8;
        }
    }
}

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-up-enter-active {
    animation: slide-up 0.4s ease;
}

.slide-up-leave-active {
    animation: slide-up 0.8s reverse cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>