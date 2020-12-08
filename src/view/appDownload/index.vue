<template>
  <div id="appDownload">
  <Header></Header>
    <img class="bj" src="@/assets/img/downloads.png" alt="">
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'appDownload',
    components: { Header },
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
.bj{
  position: relative;
  top: -63px;
}
@media screen and (max-width: 997px) {
  .bj{
    width: 100%;
    position: relative;
    top: 0;
  }
}
</style>