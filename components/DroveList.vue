<template>
  <ul class="drove-list">
    <li v-for="drove in droves" :key="drove" class="drove-default drove-pill drove-outline">
      {{ drove }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MnvDroveList',
  props: {
    droves: {
      type: Array,
      required: true
    }
  }
}
</script>
