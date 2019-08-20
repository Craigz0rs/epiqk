<template>
  <div class="site-wrapper">
    <header class="header" role="banner">
      <div class="container grid header__container">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: $header-height;
  width: 100%;

  &__container {
    // position: relative;
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
