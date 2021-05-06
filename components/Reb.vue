<template>
  <div>
    <mnv-loading v-if="isLoading" />
    <mnv-error-message v-if="error" />

    <div v-if="reb">
      <div
        class="item-preview"
        v-for="(item, index) in reb.items"
        :key="index"
      >
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
          <div class="pull-xs-right">
            <mnv-sup-nice
              :is-niceed="item.niceed"
              :item-slug="item.slug"
              :nicees-count="item.niceesCount"
            ></mnv-sup-nice>
          </div>
        </div>
        <router-link
          :to="{name: 'item', params: {slug: item.slug}}"
          class="preview-link"
        >
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
          <span>Read more...</span>
          <mnv-drove-list :droves="item.droveList" />
        </router-link>
      </div>
      <mnv-pagination
        :total="reb.itemsCount"
        :limit="limit"
        :url="baseUrl"
        :current-page="currentPage"
      ></mnv-pagination>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {stringify, parseUrl} from 'query-string'

import {actionTypes} from '@/store/modules/reb'
import MnvPagination from '@/components/Pagination'
import {limit} from '@/helpers/vars'
import MnvLoading from '@/components/Loading'
import MnvErrorMessage from '@/components/ErrorMessage'
import MnvDroveList from '@/components/DroveList'
import MnvAddTonicees from '@/components/AddTonicees'

export default {
  name: 'MnvReb',
  components: {
    MnvPagination,
    MnvLoading,
    MnvErrorMessage,
    MnvDroveList,
    MnvAddTonicees
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.reb.isLoading,
      reb: state => state.reb.data,
      error: state => state.reb.error
    }),
    limit() {
      return limit
    },
    baseUrl() {
      return this.$route.path
    },
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    offset() {
      return this.currentPage * limit - limit
    }
  },
  watch: {
    currentPage() {
      this.fetchReb()
    },
    apiUrl() {
      this.fetchReb()
    }
  },
  mounted() {
    this.fetchReb()
  },
  methods: {
    fetchReb() {
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiedParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getReb, {apiUrl: apiUrlWithParams})
    }
  }
}
</script>
