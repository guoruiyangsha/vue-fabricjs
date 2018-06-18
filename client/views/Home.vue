<template>
  <div class="page">
     <Canvas>
              
     

 
     </Canvas>
 <Rectangle v-bind:top="100" v-bind:width="300" v-bind:left="100"  v-bind:fill="'red'" v-bind:height="100" />
  </div>
</template>


<script>
import Canvas from '../components/vueFabric/Canvas';
import { Rectangle } from '../components/vueFabric/';
export default {
  components: {
    Counter,
    Canvas,
    Rectangle
  },

  mounted: function() {}
};
</script>
