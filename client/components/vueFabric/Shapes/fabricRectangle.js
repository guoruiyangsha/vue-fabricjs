import Vue from 'vue'
import fabricObject from '../Mixins/fabricObject'

export default Vue.component('Rectangle', {
  mixins: [fabricObject],
  render: function (h) {
    return h()
  },
  data: function () {
    return {
      shape: new this.$vueFabric.fabric.Rect(this._props),
    }
  }
})
