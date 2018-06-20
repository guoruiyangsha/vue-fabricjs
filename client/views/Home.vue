<template>
  <div class="page">
     <Canvas>
    
        <Rectangle v-bind:top="100" v-bind:width="10" v-bind:left="100"  v-bind:fill="'red'" v-bind:height="10" />
<Rectangle v-bind:top="100" v-bind:width="10" v-bind:left="100"  v-bind:fill="'red'" v-bind:height="10" />
     </Canvas>
    
 
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

  mounted: function() {
       
  }
};
</script>
