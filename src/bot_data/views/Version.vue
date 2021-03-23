<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Version
            </th>
            <th class="text-left">
              Update Log
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in version_info" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.version }}</td>
            <td>按钮</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import axios from 'axios'
import urls from '../../common/urls'
  export default {
    data: () => ({
      version_info: []
    }),
    mounted: function(){
      this.get_version_info()
    },
    methods: {
      get_version_info(){
        axios.get(urls.bot_data.version_info.get).then((res) => {
          if(res.data.code){
            this.version_info = res.data.version_info
          }else{
            alert(res.data.info)
          }
        }).catch((error) => {
          alert("请求失败！\n"+error)
        })
      }
    }
  }
</script>