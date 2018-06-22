import { fabric } from 'fabric'

const vueFabric = {
  install: (Vue, options) => {
    Vue.canvasStore = []
    Vue.prototype.$vueFabric = {
      fabric: fabric,
      canvasStore: [],
      getCanvasByID: function (id) {
        return new Promise((resolve, reject) => {
          const a = this.canvasStore.filter(item => {
            return item.cid === id
          })[0]
          resolve(a)
        })
       
      },
      createCanvasInstance: function (canvasId) {
        const fabricCanvas = new fabric.Canvas(canvasId)
        this.canvasStore.push(Object.assign(fabricCanvas, { cid: canvasId }))
        return fabricCanvas
      }
    }
  }
}

export default vueFabric
