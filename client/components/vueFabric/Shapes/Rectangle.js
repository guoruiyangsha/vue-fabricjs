import Vue from 'vue'
import fabricObject from '../Mixins/fabricObject'

export default Vue.component('Rectangle', {
  mixins: [fabricObject],
  render: function (h) {
    return h()
  },
  data: function () {
    return {
      name: 'Rect',
      shape: new this.$vueFabric.fabricInstance.Rect(this._props)
    }
  },
  mounted: function () {
    this.$nextTick().then(() => {
      this.$vueFabric.getCanvasByID(this.$parent.$el.id).then(canvas => {
        canvas.add(this.shape)
      })
    })
  }

})
