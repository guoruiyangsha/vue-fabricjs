    <template>
    <div>
        <canvas id='element'>
              <slot></slot>
        </canvas>
 
           </div>   
    </template>



    <script>
    export default {
        name: 'Canvas',
        mounted: function(){
              this.$vueFabric.initCanvas()
           
        },
        beforeUpdate: function(){
            this.$vueFabric.fabricInstance.renderAll();
        }
    }
    </script>

