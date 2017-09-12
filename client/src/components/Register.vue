<template>
  <div>
    <h1>Register</h1>

    <div class="card">
    <form class="signupForm card-block" name="signupForm" novalidate>
      <div class="form-group">
          <label class="label" for="nameInput">Name:</label>
          <input v-model="name" type="name" name="name" class="form-control" placeholder="Jane Smith" required>
        </div>
      <div class="form-group">
          <label class="label" for="exampleInputEmail1">Email address:</label>
          <input v-model="email" type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="example@gmail.com" required>
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
          <label class="label mr-sm-2" for="inlineFormCustomSelect">Pledge:</label>
          <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect" required>
              <option value="0">$1 per month</option>
              <option value="1" selected>$3 per month</option>
              <option value="2">$5 per month</option>
              <option value="3">$10 per month</option>
              <option value="4">$20+ per month</option>
            </select>
          <input @click="register" class="btn" type="button" value="Submit" />
        </form>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        name: this.name,
        email: this.email
      })
    }
  }
}
</script>

<style scoped>
</style>
