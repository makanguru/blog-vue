<template>
  <button
    @click="handleLike"
    :class="{
      btn: true,
      'btn-sm': true,
      'btn-primary': isNicedOptimistic,
      'btn-outline-primary': !isNicedOptimistic
    }"
  >
    <i class="ion-heart" />
    <span>&nbsp; {{ NicesCountOptimistic }}</span>
  </button>
</template>

<script>
import {actionTypes} from '@/store/modules/supNice'
export default {
  name: 'MnvsupNice',
  props: {
    isNiced: {
      type: Boolean,
      required: true
    },
    itemSlug: {
      type: String,
      required: true
    },
    NicesCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isNicedOptimistic: this.isNiced,
      NicesCountOptimistic: this.NicesCount
    }
  },
  methods: {
    handleLike() {
      this.$store.dispatch(actionTypes.supNice, {
        slug: this.itemSlug,
        isNiced: this.isNicedOptimistic
      })
      if (this.isNicedOptimistic) {
        this.NicesCountOptimistic = this.NicesCountOptimistic - 1
      } else {
        this.NicesCountOptimistic = this.NicesCountOptimistic + 1
      }
      this.isNicedOptimistic = !this.isNicedOptimistic
    }
  }
}
</script>
