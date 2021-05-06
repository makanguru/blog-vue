<template>
  <mnv-item-form
    :initialValues="initialValues"
    :errors="validationErrors"
    :isSubmitting="isSubmitting"
    @ItemSubmit="onSubmit"
  >
  </mnv-item-form>
</template>

<script>
import {mapState} from 'vuex'

import MnvItemForm from '@/components/ItemForm'
import {actionTypes} from '@/store/modules/createItem'

export default {
  name: 'MnvCreateItem',
  components: {
    MnvItemForm
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        droveList: []
      }
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.createItem.isSubmitting,
      validationErrors: state => state.createItem.validationErrors
    })
  },
  methods: {
    onSubmit(ItemInput) {
      this.$store
        .dispatch(actionTypes.createItem, {ItemInput})
        .then(Item => {
          this.$router.push({name: 'Item', params: {slug: Item.slug}})
        })
    }
  }
}
</script>
