<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Register />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Register from './views/Register'
export default {
  data: () => ({
  }),
  components: {
    Register
  }
}
</script>