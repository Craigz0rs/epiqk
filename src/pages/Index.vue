<template>
  <Layout>
    <TheHero/>
    <section>
    <!-- <div class="hero__overlay hero__overlay--1"><Wave /></div> -->
      <div class="container grid">
        
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
      <div class="container grid">
        <h2 class="heading__section">JAMstack</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit expedita, recusandae possimus ex voluptate voluptatum placeat delectus sapiente perspiciatis officia fuga velit perferendis. Quod numquam hic quaerat quibusdam repellendus incidunt ab temporibus, quam dolore debitis quo eius id fugiat, dolorem molestias alias maiores assumenda dolores? Laboriosam iusto asperiores repellendus?</p>
      </div>
    </section>
    <section>
      <div class="container grid">
        <h2 class="heading__section">why JAMstack?</h2>
        <div class="grid jamstack">
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
          description: "Description goes here",
          classes: ['feature__tile', 'tile']
        },
        {
          id: 1,
          title: "Web Development",
          description: "Description goes here"
        }
      ]
    }
  }
}
</script>

<style>

</style>
