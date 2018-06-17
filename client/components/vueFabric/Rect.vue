<template>
    <div></div>
</template>


<script>
export default {
    name: 'fabricRect',
    props: ['left', 'top', 'fill', 'width', 'height'],
    mounted: function(){
      var rect = new this.$vueFabric.fabricInstance.Rect({
  left: this.left,
  top: this.right,
  fill: this.fill,
  width: this.width,
  height: this.height
});


    this.$vueFabric.canvas.add(rect);
    }
}
</script>

