import Vue from 'vue';
import fabricObject from '../Mixins/fabricObject';

export default Vue.component('Rectangle', {
  mixins: [fabricObject],
  render: function (h) {
    return h()
  },
  mounted: function () {
    this.$nextTick().then(() => {
      this.$vueFabric.getCanvasByID(this.$parent.$el.id).then(canvas => {
        var rect = new this.$vueFabric.fabricInstance.Rect(this._props);
        canvas.add(rect)
      })
    })
  }
})
