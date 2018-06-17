    <template>
    <div>
    
 
        <canvas id='element'>
              
        </canvas>
              <slot></slot>
           </div>   
    </template>



    <script>

    export default {
        name: 'Canvas',
        mounted: function(){
            this.$vueFabric.initCanvas();
            console.log(this.$vueFabric.canvas)
          
        }
    }
    </script>

