import Vue from 'vue'
import baseObject from '../base/baseObject'

export default Vue.component('Rectangle', {
  mixins: [baseObject],
  render: function (h) {
    return h()
  },
  data: function () {
    return {
      shape: new this.$vueFabric.fabric.Rect(this._props),
    }
  }
})
