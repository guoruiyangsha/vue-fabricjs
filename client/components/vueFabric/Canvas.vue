    <template>
        
    <canvas v-bind:id="cid" >
        
          <slot></slot>
    </canvas>

    </template>
    
    
    <script>
    import uuid from './helpers/uuid.js';

    export default {
        name: 'Canvas',
        props: ['height, width'],
        data: function(){
            return{
                cid: uuid()
            }
        },
        mounted: function() {
             this.$vueFabric.createCanvasInstance(this.cid)
        }
    }
    </script>

