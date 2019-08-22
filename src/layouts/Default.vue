<template>
  <div class="site-wrapper">
      <div class="container grid">
        <div class="logo__wrap">
          <Logo class="logo"/>
        </div>
        <p>coming soon</p>
      </div>
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

export default {
  components: {
    Logo
  }
}
</script>
<style lang="scss">
.site-wrapper {
  background-image: linear-gradient(180deg,#013087 0%,#00b3ff 100%); 
  height:100vh;

  .grid {
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;

    p {
      grid-column: 2/5;
      grid-row: 3/4;
      justify-self: center;
      align-self: top;
      margin: 0;
      color: white;
      font-size: 2rem;
      font-family: $font__soon;
    }
  }
}

.logo__wrap {
  grid-column: 2/5;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
}

    .logo {
      fill: white;
      max-height: 150px;
    }

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
</style>
