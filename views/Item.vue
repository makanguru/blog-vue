<template>
  <div class="item-page">
    <div class="banner">
      <div class="container" v-if="item">
        <h1>{{ item.title }}</h1>
        <div class="item-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: item.author.username}}"
          >
            <img :src="item.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: item.author.username}
              }"
            >
              {{ item.author.username }}
            </router-link>
            <span class="date">{{ item.createdAt }}</span>
          </div>
          <span v-if="isAuthor">
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{name: 'edititem', params: {slug: item.slug}}"
            >
              <i class="ion-edit" />
              Edit item
            </router-link>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="deleteitem"
            >
              <i class="ion-trash-a" />
              Delete item
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <mnv-loading v-if="isLoading" />
      <mnv-error-message v-if="isLoading" :message="error" />
      <div class="row item-content" v-if="item">
        <div class="col-xs-12">
          <div>
            <p>{{ item.body }}</p>
          </div>
          <mnv-drove-list :droves="item.droveList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

import {actionTypes as itemActionTypes} from '@/store/modules/item'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import MnvLoading from '@/components/Loading'
import MnvErrorMessage from '@/components/ErrorMessage'
import MnvdroveList from '@/components/DroveList'

export default {
  name: 'Mnvitem',
  components: {
    MnvLoading,
    MnvErrorMessage,
    MnvDroveList
  },
  computed: {
    ...mapState({
      isLoading: state => state.item.isLoading,
      item: state => state.item.data,
      error: state => state.item.error
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor() {
      if (!this.currentUser || !this.item) {
        return false
      }

      return this.currentUser.username === this.item.author.username
    }
  },
  mounted() {
    this.$store.dispatch(itemActionTypes.getitem, {
      slug: this.$route.params.slug
    })
  },
  methods: {
    deleteitem() {
      this.$store
        .dispatch(itemActionTypes.deleteitem, {
          slug: this.$route.params.slug
        })
        .then(() => {
          this.$router.push({name: 'globalReb'})
        })
    }
  }
}
</script>
