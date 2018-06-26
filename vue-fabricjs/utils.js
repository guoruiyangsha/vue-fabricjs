const randomID = () => Math.floor((1 + Math.random()) * 0x10100).toString(16).substring(1)



const _getCanvasByID = function (id) {
    return new Promise((resolve, reject) => {
      const a = this.canvasStore.filter(item => {
        return item.cid === id
      })[0]
      resolve(a)
    })
  }
  
  const _createCanvasInstance = function (canvasId) {
    const fabricCanvas = new fabric.Canvas(canvasId)
    this.canvasStore.push(Object.assign(fabricCanvas, { cid: canvasId }))
    return fabricCanvas
  }
  
  var _canvasStore = {
      storage: []
  }
  


export {
    randomID,
    _createCanvasInstance,
    _canvasStore,
    _getCanvasByID
} 


