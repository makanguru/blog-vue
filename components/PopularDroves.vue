<template>
  <div>
    <mnv-loading v-if="isLoading" />
    <mnv-error-message v-if="error" />

    <div class="sidebar" v-if="popularDroves">
      <p>Popular Droves</p>
      <div class="drove-list">
        <router-link
          v-for="popularDrove in popularDroves"
          :key="popularDrove"
          :to="{name: 'drove', params: {slug: popularDrove}}"
          class="drove-default drove-pill"
        >
          {{ popularDrove }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import {actionTypes} from '@/store/modules/popularDroves'
import MnvLoading from '@/components/Loading'
import MnvErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'MnvPopularDroves',
  components: {
    MnvLoading,
    MnvErrorMessage
  },
  computed: {
    ...mapState({
      isLoading: state => state.popularDroves.isLoading,
      popularDroves: state => state.popularDroves.data,
      error: state => state.popularDroves.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularDroves)
  }
}
</script>
