<template>
    <div class="container">
        <p class="text-center">The best way to go to Central World from SCG Bangsue is <b>{{ bestway }}</b></p>
    </div>
</template>
<script>
const request = require("superagent");
let api_url = 'http://localhost:3000/api/v1/doscgs/'
export default {
    mounted(){
        if (localStorage.getItem('bestway')) {
            this.bestway = JSON.parse(localStorage.getItem('bestway'));
        } else {
            this.getBestway();
        }
      },
    methods:{
        getBestway(){
            request.get(`${api_url}bestway`).end((err, res) => {
                console.log(res.body.data);
                this.bestway = res.body.data;
                localStorage.setItem('bestway', JSON.stringify(this.bestway));
            });
        }
    },
    data(){
        return {
            bestway:''
        }
    }
}
</script>
