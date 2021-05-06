<template>
  <div class="profile-page" v-if="userProfile">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img class="user-img" :src="userProfile.image" />
            <h4>{{ userProfile.username }}</h4>
            <p>{{ userProfile.bio }}</p>
            <div>
              <router-link
                v-if="isCurrentUserProfile"
                class="btn btn-sm btn-outline-secondary action-btn"
                :to="{name: 'settings'}"
              >
                Edit Profile Settings
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="item-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                  :to="{
                    name: 'userProfile',
                    params: {slug: userProfile.username}
                  }"
                  class="nav-link"
                  :class="{active: routeName === 'userProfile'}"
                >
                  My Posts
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{
                    name: 'userProfileNice',
                    params: {slug: userProfile.username}
                  }"
                  class="nav-link"
                  :class="{active: routeName === 'userProfileNice'}"
                >
                  Nicies Posts
                </router-link>
              </li>
            </ul>
          </div>
          <mnv-reb :api-url="apiUrl"></mnv-reb>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

import {actionTypes as userProfileActionTypes} from '@/store/modules/userProfile'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import MnvReb from '@/components/Reb'

export default {
  name: 'MnvUserProfile',
  components: {
    MnvReb
  },
  computed: {
    ...mapState({
      isLoading: state => state.userProfile.isLoading,
      userProfile: state => state.userProfile.data,
      error: state => state.userProfile.error
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isCurrentUserProfile() {
      if (!this.currentUser || !this.userProfile) {
        return false
      }

      return this.currentUser.username === this.userProfile.username
    },
    userProfileSlug() {
      return this.$route.params.slug
    },
    apiUrl() {
      const isNices = this.$route.path.includes('Nices')
      return isNices
        ? `/items?Niced=${this.userProfileSlug}`
        : `/articles?author=${this.userProfileSlug}`
    },
    routeName() {
      return this.$route.name
    }
  },
  watch: {
    userProfileSlug() {
      this.getUserProfile()
    }
  },
  mounted() {
    this.getUserProfile()
  },
  methods: {
    getUserProfile() {
      this.$store.dispatch(userProfileActionTypes.getUserProfile, {
        slug: this.userProfileSlug
      })
    }
  }
}
</script>
