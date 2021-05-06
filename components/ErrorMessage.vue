<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'MnvErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Something fail'
    }
  }
}
</script>
