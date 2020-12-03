<template>
  <div id="Brigade">
    <Header></Header>
    <Banner></Banner>
    <div>
      <img class="images" src="../assets/img/expectation.png" alt="">
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'Brigade',
    components: { Banner },
    data(){
        return{

        }
    },
    mounted(){
       
    }
}
</script>
<style scoped>
@media (min-width: 1400px) {
  .images{
    width: 100%;
    margin: 0 auto;
  }
}
/** */
@media screen and (max-width: 997px) {
  .images{
    width: 100%;
    margin: 0 auto;
  }
}
</style>

