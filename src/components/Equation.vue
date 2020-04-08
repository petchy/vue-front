<template>
    <div>
      <div class="container">
        <h2 class="text-center">แสดงข้อมูล</h2>
        <table class="table table-bordered">
          <tr>
            <th>ตัวแปร</th>
            <th>ผลลัพธ์</th>
          </tr>
          <tr>
            <td>a</td>
            <td>{{ a }}</td>
          </tr>
          <tr>
            <td>b</td>
            <td>{{ b }}</td>
          </tr>
          <tr>
            <td>c</td>
            <td>{{ c }}</td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
const request = require("superagent");
let api_url = 'http://localhost:3000/api/v1/doscgs/equation'
export default {
    mounted(){
        if (localStorage.getItem('equation')) {
            let data = JSON.parse(localStorage.getItem('equation'));
            this.a = data.a;
            this.b = data.b;
            this.c = data.c;
        } else {
            this.getEquaton();
        }
      },
    methods:{
        getEquaton(){
            request.get(`${api_url}`).end((err, res) => {
                console.log(res.body.data);
                this.a = res.body.data.a;
                this.b = res.body.data.b;
                this.c = res.body.data.c;
                localStorage.setItem('equation', JSON.stringify(res.body.data));
            });
        }
    },
    data(){
        return {
            a: '',
            b: '',
            c: '',
        }
    }
}
</script>
