<template>
  <div id="app">
    <mnv-navtop />
    <router-view></router-view>
  </div>
</template>

<script>
import MnvNavtop from '@/components/Navtop.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'App',
  components: {
    MnvNavtop
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>

