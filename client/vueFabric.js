import { fabric } from 'fabric';

const vueFabric = {
  install: (Vue, options) => {
    Vue.prototype.$fabric = fabric
    Vue.prototype.$canvas = {}
    Vue.prototype.$vueFabric = {
      fabricInstance: fabric,
      canvas: '',
      initCanvas () {
        this.canvas = new fabric.Canvas('element')
        Vue.prototype.$canvas = this.canvas
      }
    }
  }
}

export default vueFabric
