import { fabric } from 'fabric'

const vueFabric = {
  install: (Vue, options) => {
    Vue.canvasStore = []
    Vue.createCanvasInstance = function (canvasId) {
      return new Promise((resolve, reject) => {
        const fabricCanvas = new fabric.Canvas(canvasId)
        Vue.canvasStore.push(Object.assign(fabricCanvas, { cid: canvasId }));
        resolve(fabricCanvas)
      })
    }
    Vue.mixin({
      mounted: function () {
        if (this.$el.localName === 'canvas') {
          Vue.createCanvasInstance(this.$el.id)
        }
      }
    })

    Vue.prototype.$vueFabric = {
      fabricInstance: fabric,
      canvasStore: [],
      getCanvasByID (id) {
        return new Promise((resolve, reject) => {
          const a = Vue.canvasStore.filter(item => {
            return item.cid === id
          })[0]
          resolve(a)
        })
      }
    }
  }
}

export default vueFabric
