    <template>
        
    <canvas v-bind:id="cid" >
        
          <slot></slot>
    </canvas>

    </template>
    
    
    <script>
    import { randomID } from './utils.js';

    export default {
        name: 'Canvas',
        props: ['height, width'],
        data: function(){
            return{
                cid: randomID()
            }
        },
        mounted: function() {
             this.$vueFabric.createCanvasInstance(this.cid)
        }
    }
    </script>

