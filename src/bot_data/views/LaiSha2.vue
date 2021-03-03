<template>
  <v-container>
    <v-row>
      <v-textarea v-model="text"></v-textarea>
    </v-row>
    <v-row>
      <v-btn @click="post_data">提交</v-btn>
    </v-row>
  </v-container>
</template>
<script>
import Axios from 'axios'
import urls from '../../common/urls'
export default {
  data: () => ({
    text: '',
  }),
  mounted: function(){},
  methods: {
    post_data(){
      let data = {
        text: this.text
      }
      Axios.post(urls.bot_data.laisha2.material, data).then((res)=>{
        if(res.data.code){
          alert("成功！")
        }else{
          alert(res.data.info)
        }
      })
    }
  }
}
</script>