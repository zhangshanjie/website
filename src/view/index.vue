<template>
  <div id="index">
  <Header></Header>
  <Banner></Banner>
  <div class="contOne">
    
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

</style>