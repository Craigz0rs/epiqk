<template>
  <Layout>
    <TheHero/>
    <section>
    <!-- <div class="hero__overlay hero__overlay--1"><Wave /></div> -->
      <div class="container grid home-services">
        <h2 class="heading__section">what we do</h2>
        <div class="grid services">
          <FeatureTile 
            v-for="feature in features"
            :key="feature.id"
            :title="feature.title"
            :description="feature.description"
            :classes="feature.classes"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container grid home-about">
        <h2 class="heading__section">Why Epiqk?</h2>
        <div class="home-about__image"></div>
        <div class="home-about__info">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit expedita, recusandae possimus ex voluptate voluptatum placeat delectus sapiente perspiciatis officia fuga velit perferendis. Quod numquam hic quaerat quibusdam repellendus incidunt ab temporibus, quam dolore debitis quo eius id fugiat, dolorem molestias alias maiores assumenda dolores? Laboriosam iusto asperiores repellendus?</p>
        </div>
      </div>
    </section>
    <section>
      <div class="container grid">
        <h2 class="heading__section">why JAMstack?</h2>
        <div class="grid jamstack">
          <FeatureTile
            v-for="feature in JamFeatures"
            :key="feature.id"
            :title="feature.title"
            :description="feature.description"
            :classes="feature.classes"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import TheHero from "~/components/TheHero.vue";
import FeatureTile from "~/components/FeatureTile";
import Wave from '~/assets/images/wave.svg'
export default {
  metaInfo: {
    title: 'EpiqK | Ultra Fast and Secure Custom JAMstack Website Design and Development Agency'
  },
  components: {
    TheHero,
    FeatureTile,
    Wave
  },
  data() {
    return {
      features: [
        {
          id: 0,
          title: "Web Design",
          description: "Description goes here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit expedita, recusandae possimus ex voluptate ",
          classes: ['feature__tile', 'tile']
        },
        {
          id: 1,
          title: "Web Development",
          description: "Description goes here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit expedita, recusandae possimus ex voluptate ",
          classes: ['feature__tile', 'tile']
        },
        {
          id: 2,
          title: "Branding",
          description: "Description goes here",
          classes: ['feature__tile', 'tile']
        },
        {
          id: 3,
          title: "Item 4",
          description: "Description goes here",
          classes: ['feature__tile', 'tile']
        }
      ],
      JamFeatures: [
        {
          id: 0,
          title: "Web Design",
          description: "Description goes here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit expedita, recusandae possimus ex voluptate ",
          classes: ['jam__tile', 'tile']
        },
        {
          id: 1,
          title: "Web Development",
          description: "Description goes here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit expedita, recusandae possimus ex voluptate ",
          classes: ['jam__tile', 'tile']
        },
        {
          id: 2,
          title: "Branding",
          description: "Description goes here",
          classes: ['jam__tile', 'tile']
        },
        {
          id: 3,
          title: "Item 4",
          description: "Description goes here",
          classes: ['jam__tile', 'tile']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.heading__section {
  grid-column: span 8;
  text-align: center;
}

.services {
  grid-column: span 8;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: $gutter;
}

.home-about {
grid-column-gap: $gutter;

  &__image {
    grid-column: span 4;
  }

  &__info {
    grid-column: 6/9;
  }
}

.jamstack {
  display: grid;
  grid-column: span 4;
  grid-template-columns: auto;
}

.jam__tile {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: $gutter;
  grid-template-rows: auto auto;

  .services__icon {
    grid-row: span 2;
  }

  h3 {
    text-align: left;
    grid-column: 2/3;
  }

  p {
    grid-column: 2/3;
  }
}
</style>
