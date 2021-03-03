<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <v-app-bar clipped-left :elevation="0" dense app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>API Test</v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- <div v-if="user.name" class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-chip icon text dark v-bind="attrs" v-on="on">
              <v-avatar left>
                <v-icon>mdi-account-circle</v-icon>
              </v-avatar>
              {{ user.name }}
            </v-chip>
          </template>
          <v-list>
            <v-list-item href="/auth/account/">
              <v-list-item-title>用户中心</v-list-item-title>
            </v-list-item>
            <v-list-item href="/auth/logout/">
              <v-list-item-title>登出</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn v-else href="/auth/login/?next=/api_test/">登录</v-btn> -->
    </v-app-bar>

    <!-- 侧边导航栏 -->
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list>
        <v-list-item to="/laisha2">
          <v-list-item-content>
            laisha2
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 主体页面 -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: true
  })
}
</script>