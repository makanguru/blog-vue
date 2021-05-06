<template>
  <div>
    <mnv-loading v-if="isLoading" />
    <mnv-item-form
      v-if="initialValues"
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @ItemSubmit="onSubmit"
    >
    </mnv-item-form>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import MnvItemForm from '@/components/ItemForm'
import MnvLoading from '@/components/Loading'
import {actionTypes} from '@/store/modules/editItem'

export default {
  name: 'MnvEditItem',
  components: {
    MnvItemForm,
    MnvLoading
  },
  computed: {
    ...mapState({
      isLoading: state => state.editItem.isLoading,
      Item: state => state.editItem.Item,
      isSubmitting: state => state.editItem.isSubmitting,
      validationErrors: state => state.editItem.validationErrors
    }),
    initialValues() {
      if (!this.Item) {
        return null
      }
      return {
        title: this.Item.title,
        description: this.Item.description,
        body: this.Item.body,
        droveList: this.Item.droveList
      }
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getItem, {
      slug: this.$route.params.slug
    })
  },
  methods: {
    onSubmit(ItemInput) {
      const slug = this.$route.params.slug
      this.$store
        .dispatch(actionTypes.updateItem, {ItemInput, slug})
        .then(Item => {
          this.$router.push({name: 'Item', params: {slug: Item.slug}})
        })
    }
  }
}
</script>
