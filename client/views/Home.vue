<template>
  <div class="page">
     <Canvas>
                
 
     </Canvas>

      <fabricRect v-bind:top="100" v-bind:left="100"  v-bind:fill="'red'" v-bind:height="100" v-bind:width="50" />

  </div>
</template>

<script>

import { fabric } from 'fabric'
import Canvas from '../components/vueFabric/Canvas'
import fabricRect from '../components/vueFabric/Rect'
export default {
  components: {
    Counter,
    Canvas,
    fabricRect
  },
 
}
</script>
