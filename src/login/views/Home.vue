<template>
  <div>
    <!-- <v-btn class="g-recaptcha" data-sitekey="" :data-callback='onSubmit' data-action='submit'>提交</v-btn> -->
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