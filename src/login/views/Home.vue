<template>
  <div>
    <!-- <v-btn class="g-recaptcha" data-sitekey="6LdMUIQaAAAAAB3Bj_aRVji7Ln2StxjKYEC2XYO8" :data-callback='onSubmit' data-action='submit'>提交</v-btn> -->
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    methods: {
      onSubmit(token) {
        console.log(token)
      }
    }
  }
</script>