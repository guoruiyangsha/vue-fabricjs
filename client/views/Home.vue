<template>
  <div class="page">
     <Canvas v-bind:width="300" v-bind:height="500">
        <fabricCircle :width="100" :height="100"/>

     </Canvas>
  </div>
</template>


<script>

import {  Canvas, fabricCircle } from '../../vue-fabricjs'
export default {
  components: {
    Canvas,
    fabricCircle
  },
};
</script>
