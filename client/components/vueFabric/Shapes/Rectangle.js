import Vue from 'vue';
import fabricObject from '../Mixins/fabricObject'
export default Vue.component('Rectangle', {
  mixins: [fabricObject],
  render: function (h) {
    return h()
  },
  mounted: function () {
    var rect = new this.$vueFabric.fabricInstance.Rect(this._props);
    this.$vueFabric.canvas.add(rect)
  }
});
