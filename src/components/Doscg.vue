<template>
    <div>
      <div class="container">
        <h2 class="text-center">แสดงข้อมูล</h2>
        <table class="table table-bordered">
          <tr>
            <th>รหัส</th>
            <th>ชื่อ</th>
            <th>อีเมลล์</th>
          </tr>
          <tr v-bind:key="user.id" v-for="user in users">
            <td>{{ user._id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
const request = require("superagent");
let api_url = 'http://localhost:3000/api/v1/doscgs/'
export default {
    mounted(){
        if (localStorage.getItem('doscgs')) {
            this.users = JSON.parse(localStorage.getItem('doscgs'));
        } else {
            this.getDoscgs();
        }
      },
    methods:{
        getDoscgs(){
            request.get(`${api_url}`).end((err, res) => {
                console.log(res.body.data);
                this.users = res.body.data;
                localStorage.setItem('doscgs', JSON.stringify(this.users));
            });
        }
    },
    data(){
        return {
            users:[]
        }
    }
}
</script>
