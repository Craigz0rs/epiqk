<template>
  <div class="site-wrapper">
    <header class="header" role="banner">
      <div class="container grid header__container">
        
          <g-link class="header__branding" to="/">{{ $static.metaData.siteName }}</g-link>
        <nav class="nav" role="navigation">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/contact">Contact Us</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

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
    color: $font__color--highlight;
    align-self: center;
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
