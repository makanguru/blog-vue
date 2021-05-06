<template>
  <div class="home-page">
    <mnv-banner></mnv-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mnv-reb-toggler></mnv-reb-toggler>
          <mnv-reb :api-url="apiUrl"></mnv-reb>
        </div>
        <div class="col-md-3">
          <mnv-popular-droves></mnv-popular-droves>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MnvReb from '@/components/Reb.vue'
import MnvPopularDroves from '@/components/PopularDroves.vue'
import MnvBanner from '@/components/Banner.vue'
import MnvRebToggler from '@/components/RebToggler'

export default {
  name: 'MnvYourReb',
  components: {
    MnvReb,
    MnvPopularDroves,
    MnvBanner,
    MnvRebToggler
  },
  data() {
    return {
      apiUrl: '/items/reb'
    }
  }
}
</script>
