<template>
  <div class="reb-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" v-if="isLoggedIn">
        <router-link
          :to="{name: 'yourReb'}"
          class="nav-link"
          :class="{active: routeName === 'yourReb'}"
        >
          Your type record
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          :to="{name: 'globalReb'}"
          class="nav-link"
          :class="{active: routeName === 'globalReb'}"
        >
          Global record
        </router-link>
      </li>

      <li class="nav-item" v-if="droveName">
        <router-link
          :to="{name: 'drove'}"
          class="nav-link"
          :class="{active: routeName === 'drove'}"
        >
          <i class="ion-pound" />
          {{ droveName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import {getterTypes} from '@/store/modules/auth'

export default {
  name: 'MnvRebToggler',
  props: {
    droveName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn
    }),
    routeName() {
      return this.$route.name
    }
  }
}
</script>
