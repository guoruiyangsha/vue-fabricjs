import Vue from 'vue';
import fabricObject from '../Mixins/fabricObject'

export default Vue.component('fabricCircle', {
  mixins: [fabricObject],
  props: {
    endAngle: {
      value: this.endAngle,
      type: Number,
      default: 2 * 3.14
    },
    radius: {
      value: this.radius,
      type: Number,
      default: 10
    },
    startAngle: {
      value: this.startAngle,
      type: Number,
      default: 0
    },
    type: {
      value: this.type,
      type: String,
      default: 'circle'
    }

  },
  render: function (h) {
    return h()
  },
  data: function () {
    return {
      shape: new this.$vueFabric.fabric.Circle(
        Object.assign({}, this._props, {
          endAngle: 2 * 3.14,
          radius: 10,
          startAngle: 0,
          type: 'circle'
        })
      )
    };
  },
  mounted: function () {
    console.log(this.shape)
  }
});
