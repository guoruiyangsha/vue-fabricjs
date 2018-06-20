<template>
  <div class="page">
     <Canvas v-bind:width="300" v-bind:height="500">
    
        <Rectangle v-bind:left="100"  v-bind:fill="'red'" v-bind:height="10" />
 <Rectangle v-bind:left="100"  v-bind:fill="'green'" v-bind:height="100" v-bind:width="100" />

     </Canvas>
    
  
  </div>
</template>


<script>
import Canvas from '../components/vueFabric/Canvas';
import { Rectangle } from '../components/vueFabric/';
export default {
  data: function(){
    return{
      range: 20
    }
  },
  components: {
    Counter,
    Canvas,
    Rectangle
  },
};
</script>
