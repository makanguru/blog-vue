<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">
              Have is account?
            </router-link>
          </p>
          <mnv-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></mnv-validation-errors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import MnvValidationErrors from '@/components/ValidationErrors.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'MnvLogin',
  components: {
    MnvValidationErrors
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.login, {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: 'globalReb'})
        })
    }
  }
}
</script>
