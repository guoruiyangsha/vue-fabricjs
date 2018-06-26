import { fabric } from 'fabric'
import { _canvasStore, _createCanvasInstance, _getCanvasByID} from './utils'
const vueFabric = {
  install: (Vue) => {
    Vue.canvasStore = []
    Vue.prototype.$vueFabric = {
      fabric,
      canvasStore: _canvasStore.storage,
      getCanvasByID: _getCanvasByID,
      createCanvasInstance: _createCanvasInstance
    }
  }
}

export default vueFabric

import fabricRectangle from './shape/fabricCircle'
import fabricCircle from './shape/fabricCircle'
import Canvas from './Canvas'

export { fabricRectangle, fabricCircle , Canvas, vueFabric }
