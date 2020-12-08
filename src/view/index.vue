<template>
  <div id="index">
  <Header></Header>
  <Banner></Banner>
  <div class="container">
    <!--one-->
    <div>
      <div class="Graphic"><img src="../assets/img/index/message.png" alt=""></div>
    </div>
    <!--one 结束-->

    <!--two-->
    <!--two 结束-->

    <!--three-->
    <!--three 结束-->

    <!--four-->
    <!--four 结束-->

    <!--five-->
    <!--five 结束-->
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'index',
    components: { Banner },
    data(){
        return{
           
        }
    },
    mounted(){

    },
    methods:{

    }

}
</script>

<style scoped>
@media (min-width: 1200px){

  
}
/** */
@media (min-width: 993px) and (max-width: 1200px){

 
}
/** */
@media screen and (max-width: 992px){
  
}
</style>