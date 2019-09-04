<template>
  <div class="site-wrapper">
    <header class="header" role="banner">
      <div class="container grid header__container">
          <g-link class="header__branding" to="/"><Logo class="header__logo"/></g-link>        
        <nav class="nav" role="navigation">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/contact">Contact Us</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <TheFooter />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
import Logo from '~/assets/images/epiqk-logo-02.svg'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    Logo,
    TheFooter
  }
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: $header-height;
  width: 100%;

  .grid {
    grid-template-columns: auto auto;
  }

  &__container {
    height: 100%;
    align-self: center;
  }

  &__branding {
    display: block;
    color: $font__color--highlight;
    align-self: center;
    font-family: $font__logo;
    line-height: 0;
  }

  &__logo {
    fill: $font__color--highlight;
    height: 2.5rem;

    .logo__cursor-bar {
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0% {
        fill: $font__color--highlight;
      }

      45% {
        fill: $font__color--highlight;
      }

      55% {
        fill: transparent;
      }

      90% {
        fill: transparent;
      }

      100% {
        fill: $font__color--highlight;
      }
    }
  }
}

.nav {
  justify-self: end;
  align-self: center;

  &__link {
    color: $font__color--highlight;
    margin-left: 20px;
  }
}
</style>
