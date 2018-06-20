    <template>
        
    <canvas :id="this.canvasId" >
        
          <slot></slot>
    </canvas>
    </template>
    
    
    <script>
    import uuid from './helpers/uuid.js';

    export default {
        name: 'Canvas',
        data: function(){
            return{
                canvasId: uuid(),
                vueFabric: true
            }
        },
        create: function(){
    
        },
        mounted: function(){

           
        },
        beforeUpdate: function(){
            this.$vueFabric.fabricInstance.renderAll();
        },

    }
    </script>

