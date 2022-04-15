<template>
<div class="wrapper">
  <app-header />
  <router-view/>
</div>
  
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  components:{
    AppHeader
  },
  setup() {
    
  },
}
</script>

<style lang="scss">

</style>
