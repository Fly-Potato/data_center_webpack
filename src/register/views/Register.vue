<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-form>
          <v-card elevation="0">
            <h1 class="text-center">注册账号</h1>
            <v-row>
              <v-col>
                <v-text-field v-model="username" label="账号"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="nickname" label="昵称"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="email" label="邮箱"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="password1" label="密码" type="password"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="password2" label="确认密码" type="password"></v-text-field>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="recaptcha">submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios'
import urls from '../../common/urls'
  export default {
    data: () => ({
      nickname: null,  // 昵称
      username: null,  // 账号
      email: null,  // 邮箱
      password1: null,  // 密码1
      password2: null,  // 密码2
    }),
    methods: {
      async recaptcha() {
        if(this.nickname && this.username && this.email && this.password1 && this.password2){
          if(this.password1 == this.password2){
            await this.$recaptchaLoaded()
            const token = await this.$recaptcha('register')
            this.register(token)
          }else{
            alert("输入的密码不一致！")
          }
        }else{
          alert("参数不能为空！")
        }
        
      },
      register(token) {
        let data = {
          username: this.username,
          nickname: this.nickname,
          email: this.email,
          password1: this.password1,
          password2: this.password2,
          token: token
        }
        axios.post(urls.accounts.register, data).then((res) => {
          console.log(res.data)
        })
        console.log(token)
      }
    },
  }
</script>