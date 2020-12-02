<template>
  <div id="information">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
    </div>
  <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
export default {
    name: 'information',
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

