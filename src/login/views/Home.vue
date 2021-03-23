<template>
  <div>
    <v-btn @click="recaptcha">submit</v-btn>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    methods: {
      async recaptcha() {
        // (optional) Wait until recaptcha has been loaded.
        await this.$recaptchaLoaded()

        // Execute reCAPTCHA with action "login".
        const token = await this.$recaptcha('login')
        console.log(token)

        // Do stuff with the received token.
      }
    },
  }
</script>