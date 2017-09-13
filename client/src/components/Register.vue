<template>
  <div class="main">
    <h1 class="header">Lia Rose - Patreon Signup</h1>

    <div class="wrapper">
      <div class="grid-layout">

        <b-card>

          <b-form class="signupForm" name="signupForm" novalidate>
            <b-form-group id="nameInputGroup"
                          label="Your Name:" label-for="nameInput">
              <b-form-input id="nameInput"
                            type="text" v-model="name" required
                            placeholder="Enter name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="emailInputGroup"
                          label="Email address:" label-for="emailInput"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="emailInput"
                            type="email" v-model="email" required
                            placeholder="example@gmail.com"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="pledgeSelectGroup"
                          label="Food:" label-for="pledgeSelect">
              <b-form-select id="pledgeSelect"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            required
                            :options="options"
                            v-model="selected">
              </b-form-select>
            </b-form-group>
            <b-button @click="register" type="submit" variant="primary">Submit</b-button>
            <div v-html="error" class="error"></div>
          </b-form>
          <div class="instructions card-block">
                <h3>Instructions:</h3>
                <ol>
                  <li>Fill out name and email address</li>
                  <li>Select pledge level from drop down menu</li>
                  <li>You will receive an email with further instructions on how to officially sign up as a patron!</li>
                </ol>
            </div>
        </b-card>
        <!--
        <b-form class="signupForm card-block" name="signupForm" novalidate>
          <b-form-group>
              <label class="label" for="nameInput">Name:</label>
              <input v-model="name" type="name" name="name" class="form-control" placeholder="Jane Smith" required>
            </b-form-group>
          <b-form-group>
              <label class="label" for="exampleInputEmail1">Email address:</label>
              <input v-model="email" type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="example@gmail.com" required>
              <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </b-form-group>
              <label class="label mr-sm-2" for="inlineFormCustomSelect">Pledge:</label>
              <select v-model="selected" class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect" required>
                  <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <div v-html="error" class="error"></div>
              <input @click="register" class="btn" type="button" value="Submit" />
            </b-form>
            <div class="instructions card-block">
                  <h3>Instructions:</h3>
                  <ol>
                    <li>Fill out name and email address</li>
                    <li>Select pledge level from drop down menu</li>
                    <li>You will receive an email with further instructions on how to officially sign up as a patron!</li>
                  </ol>
              </div>
            </b-card>
          -->

            <div class="reward-package">
              <b-card class="card"
                      img-src="images/placeholder_1.png"
                      img-alt="Card image"
                      img-top>
                <div class="card-block">
                  <h4 class="card-title">{{ pledgeLevels[selected].name }}</h4>
                  <p class="card-text">{{ pledgeLevels[selected].description }}</p>
                </div>
              </b-card>
            </div>

          </div>
      </div>
    </div>
</template>

<script>
import SignupService from '@/services/SignupService'

export default {
  data () {
    return {
      name: '',
      email: '',
      selected: 1,
      options: [
        {text: '$1 per month', value: 0},
        {text: '$3 per month', value: 1},
        {text: '$5 per month', value: 2},
        {text: '$10 per month', value: 3},
        {text: '$20+ per month', value: 4}
      ],
      pledgeLevels: [{
        name: 'The Bird Is The Word - $1',
        description: 'Thank you for being my base camp!  You will be the first to see new content and youll have access to my *Patron Only* stream here.  Ill post new content at least a day early, plus cool exclusive stuff, tell you things, and we can write comments to each other in our own little bird world.',
        image: 'images/placeholder_1.png'
      }, {
        name: 'Night Skies & Northern Lights - $3',
        description: 'Your name in lights!  Your name (or a moniker you decide on) will be included in the thank you section of my future Patreon Videos.  And this will keep happening for as long as youre a supporter at the $3 level or above.  You can choose to include your first and last name or a moniker, byname, pet name, etc -- just as long as it is 3 words or less ... and kid friendly ;)',
        image: 'images/placeholder_2.png'
      }, {
        name: 'Piscasso Mainframe - $5',
        description: 'I will create for you a custom digital thank you card with unique artwork that I make just for you!  This is a one time thing and I will send via email so you can print it out or keep it in your archive folder.  If you prefer to use a different name, just let me know :)',
        image: 'images/placeholder_3.png'
      }, {
        name: 'The Big Friendly Giants - $10',
        description: 'I will send you a big friendly personalized thank you VIDEO.  Just for YOU.  This is a one time thing and I will send via email.  You can keep it forever... or not ;)',
        image: 'images/placeholder_4.png'
      }, {
        name: 'Spectacular Magical Unicorn Angel Patron of Awesomeness - $20+',
        description: 'Wow - thank you!!!!  This will officially make you a Spectacular Magical Unicorn Angel Patron of Awesomeness!!  Upon signing up to this exclusive group, I will send you a one-of-a-kind art piece made by moi with a handwritten thank you note :) And I will continue to send you unique handmade things in the mail a few times a year.',
        image: 'images/placeholder_5.png'
      }],
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await SignupService.register({
          name: this.name,
          email: this.email,
          pledge: this.selected
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<style scoped>
.main {
  background-color: #339999;
}

.wrapper {
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
}

.header {
  margin-top: -4rem;
  padding: 2rem 2rem 2rem 2rem;
  text-align: center;
  font-size: 4em;
  background-color: #f0f0f0;
  font-family: "viktor-script";
  box-shadow: 0px 0px 25px #575757;
}

.card {
  background-color: #ccc;
  box-shadow: 5px 5px 25px #575757;
  text-align: left;
  margin-bottom: 3rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: 5% 90% 5%;
  padding-top: 1.5rem;
}

.signupForm {
  grid-column-start: 1;
  grid-column-end: 2;
  font-family: "mr-eaves-xl-modern";
}

.label {
  font-size: 1.5em;
}

.btn {
  background-color: #339999;
  color: white;
}

.instructions {
  font-family: "mr-eaves-xl-modern";
  line-height: 2em;
  padding-top: 1rem;
}

.reward-package {
  grid-column-start: 3;
  grid-column-end: 4;
  font-family: "mr-eaves-xl-modern";
}

.error {
  color: red;
}
</style>
