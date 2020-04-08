<template>
    <div>
      <div class="container">
        <h2 class="text-center">แสดงข้อมูล</h2>
        <table class="table table-bordered">
          <tr>
            <th>เลข</th>
          </tr>
          <tr v-bind:key="index" v-for="(progression, index) in progressions">
            <td>{{ progression }}</td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
const request = require("superagent");
let api_url = 'http://localhost:3000/api/v1/doscgs/progression'
export default {
    mounted(){
        if (localStorage.getItem('progression')) {
            this.progressions = JSON.parse(localStorage.getItem('progression'));
        } else {
            this.getProgression();
        }
      },
    methods:{
        getProgression(){
            request.get(`${api_url}`).end((err, res) => {
                console.log(res.body.data);
                this.progressions = res.body.data;
                localStorage.setItem('progression', JSON.stringify(this.progressions));
            });
        }
    },
    data(){
        return {
            progressions:[]
        }
    }
}
</script>
