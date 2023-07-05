<template>
<div class="container">
  <section class="title-box">
    <h1>Менеджер задачь</h1>
  </section>
  <section class="body">
    <button 
      class="v-btn"
      @click="goTo('tasck-list')"
    >
      Список задачь
    </button>
  </section>
  
</div>
</template>

<script>
import helper from "../js/helper.js";

export default {
    name: 'MainSite',
    mixins: [helper],
    data(){
      return{
       
      }
    },
    computed: {
      
    },
    created(){

    },
    /*methods: {
      goTo(name) {
        console.log(name)
        if (name) {
                this.$router.push({
                    name: name,
                });
            }
      }
    },*/
}
</script>

<style>

.litle-margin {
      margin: 15px;
}


.header-page{
  margin: 36px auto;
}
.avatar{
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 60%;
  border: 3px solid;
}
.description{
  width: 45%;
}
.list{
  text-align: start;
}
.work-plase{
  display: flex;
  margin: 20px 0;
}
.work-description{
  text-align: start;
  width: 70%;
}
.work-time{
  width: 250px;
}
@media screen and (max-width: 800px) {
  .title-box{
    display: block;
  }
  .description{
    width: 90%;
    margin: auto;
  }
  .work-time {
    width: 20%;
}
}
</style>