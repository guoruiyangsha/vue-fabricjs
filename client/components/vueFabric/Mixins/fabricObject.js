import Vue from 'Vue'

export default {
  props: {
    angle: {
      value: this.angle,
      type: Number,
      default: 0
    },
    backgroundColor: {
      value: this.backgroundColor,
      type: String,
      default: ''
    },
    borderColor: {
      value: this.borderColor,
      type: String,
      default: 'rgba(102, 153, 255, 0.75)'
    },
    borderOpacityWhenMoving: {
      value: this.borderOpacityWhenMoving,
      type: Number,
      default: 0.4
    },
    borderScaleFactor: {
      value: this.borderScaleFactor,
      type: Number,
      default: 1
    },
    centeredRotation: {
      value: this.centeredRotation,
      type: Boolean,
      default: true
    },
    centeredScaling: {
      value: this.centeredScaling,
      type: Boolean,
      default: false
    },
    clipTo: {
      value: this.clipTo,
      type: Object,
      default: null
    },
    cornerColor: {
      value: this.cornerColor,
      type: String,
      default: 'rgba(102, 153, 255, 0.5)'
    },
    cornerSize: {
      value: this.cornerSize,
      type: Number,
      default: 12
    },
    evented: {
      value: this.evented,
      type: Boolean,
      default: true
    },
    fill: {
      value: this.fill,
      type: String,
      default: 'rgb(0,0,0)'
    },
    fillRule: {
      value: this.fillRule,
      type: String,
      default: 'nonzero'
    },
    flipX: {
      value: this.flipX,
      type: Boolean,
      default: false
    },
    flipY: {
      value: this.flipY,
      type: Boolean,
      default: false
    },
    globalCompositeOperation: {
      value: this.globalCompositeOperation,
      type: String,
      default: 'source-over'
    },
    hasBorders: {
      value: this.hasBorders,
      type: Boolean,
      default: true
    },
    hasControls: {
      value: this.hasControls,
      type: Boolean,
      default: true
    },
    hasRotatingPoint: {
      value: this.hasRotatingPoint,
      type: Boolean,
      default: true
    },
    height: {
      value: this.height,
      type: Number,
      default: 100
    },
    hoverCursor: {
      value: this.hoverCursor,
      type: Object,
      default: null
    },
    includeDefaultValues: {
      value: this.includeDefaultValues,
      type: Boolean,
      default: true
    },
    left: {
      value: this.left,
      type: Number,
      default: 0
    },
    lockMovementX: {
      value: this.lockMovementX,
      type: Boolean,
      default: false
    },
    lockMovementY: {
      value: this.lockMovementY,
      type: Boolean,
      default: false
    },
    lockRotation: {
      value: this.lockRotation,
      type: Boolean,
      default: false
    },
    lockScalingFlip: {
      value: this.lockScalingFlip,
      type: Boolean,
      default: false
    },
    lockScalingX: {
      value: this.lockScalingX,
      type: Boolean,
      default: false
    },
    lockScalingY: {
      value: this.lockScalingY,
      type: Boolean,
      default: false
    },
    lockUniScaling: {
      value: this.lockUniScaling,
      type: Boolean,
      default: false
    },
    minScaleLimit: {
      value: this.minScaleLimit,
      type: Number,
      default: 0.01
    },
    oCoords: {
      value: this.oCoords,
      type: String,
      default: 'rgb(0,0,0)'
    },
    opacity: {
      value: this.opacity,
      type: Number,
      default: 1
    },
    originX: {
      value: this.originX,
      type: String,
      default: 'left'
    },
    originY: {
      value: this.originY,
      type: String,
      default: 'top'
    },
    padding: {
      value: this.padding,
      type: Number,
      default: 0
    },
    perPixelTargetFind: {
      value: this.perPixelTargetFind,
      type: Boolean,
      default: false
    },
    rotatingPointOffset: {
      value: this.rotatingPointOffset,
      type: Number,
      default: 40
    },
    scaleX: {
      value: this.scaleX,
    
      default: 1
    },
    scaleY: {
      value: this.scaleY,
      type: Number,
      default: 1
    },
    selectable: {
      value: this.selectable,
      type: Boolean,
      default: true
    },
    shadow: {
      value: this.shadow,
      type: Object,
      default: null
    },
    stroke: {
      value: this.stroke,
      type: Object,
      default: null
    },
    strokeDashArray: {
      value: this.strokeDashArray,
      type: Object,
      default: null
    },
    strokeLineCap: {
      value: this.strokeLineCap,
      type: String,
      default: 'butt'
    },
    strokeLineJoin: {
      value: this.strokeLineJoin,
      default: 'miter',
      type: String
    },
    strokeMiterLimit: {
      value: this.strokeMiterLimit,
      default: 10,
      type: Number
    },
    strokeWidth: {
      value: this.strokeWidth,
      default: 1,
      type: Number
    },
    top: {
      value: this.top,
      default: 0,
      type: Number
    },
    transformMatrix: {
      value: this.transformMatrix,
      default: null,
      type: Number
    },

    transparentCorners: {
      value: this.transparentCorners,
      type: Boolean,
      default: true
    },
    type: {
      value: this.type,
      type: String,
      default: 'object'
    },
    visible: {
      value: this.visible,
      type: Boolean,
      default: true
    },

    width: {
      value: this.width,
      type: Number,
      default: 100
    }
  }

}
