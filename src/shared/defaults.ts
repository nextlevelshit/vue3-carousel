import { type PropType } from 'vue'

import { BreakpointMode, CarouselConfig, Dir, SnapAlign } from './'

export const SNAP_ALIGN_OPTIONS = [
  'center',
  'start',
  'end',
  'center-even',
  'center-odd',
] as const
export const BREAKPOINT_MODE_OPTIONS = ['viewport', 'carousel'] as const

export const DIR_MAP = {
  'left-to-right': 'ltr',
  'right-to-left': 'rtl',
  'top-to-bottom': 'ttb',
  'bottom-to-top': 'btt',
} as const

export const NORMALIZED_DIR_OPTIONS = Object.values(DIR_MAP)

export const DIR_OPTIONS = [
  ...NORMALIZED_DIR_OPTIONS,
  ...(Object.keys(DIR_MAP) as Array<keyof typeof DIR_MAP>),
] as const

export const I18N_DEFAULT_CONFIG = {
  ariaNextSlide: 'Navigate to next slide',
  ariaPreviousSlide: 'Navigate to previous slide',
  ariaNavigateToSlide: 'Navigate to slide {slideNumber}',
  ariaGallery: 'Gallery',
  itemXofY: 'Item {currentSlide} of {slidesCount}',
  iconArrowUp: 'Arrow pointing upwards',
  iconArrowDown: 'Arrow pointing downwards',
  iconArrowRight: 'Arrow pointing to the right',
  iconArrowLeft: 'Arrow pointing to the left',
}

export const DEFAULT_CONFIG: CarouselConfig = {
  enabled: true,
  itemsToShow: 1,
  itemsToScroll: 1,
  modelValue: 0,
  transition: 300,
  autoplay: 0,
  gap: 0,
  height: 'auto',
  wrapAround: false,
  pauseAutoplayOnHover: false,
  mouseDrag: true,
  touchDrag: true,
  snapAlign: 'center',
  dir: 'ltr',
  breakpointMode: 'viewport',
  breakpoints: undefined,
  i18n: I18N_DEFAULT_CONFIG,
}

export const carouselProps = {
  // enable/disable the carousel component
  enabled: {
    default: DEFAULT_CONFIG.enabled,
    type: Boolean,
  },
  // count of items to showed per view
  itemsToShow: {
    default: DEFAULT_CONFIG.itemsToShow,
    type: Number,
  },
  // count of items to be scrolled
  itemsToScroll: {
    default: DEFAULT_CONFIG.itemsToScroll,
    type: Number,
  },
  // control infinite scrolling mode
  wrapAround: {
    default: DEFAULT_CONFIG.wrapAround,
    type: Boolean,
  },
  // control the gap between slides
  gap: {
    default: DEFAULT_CONFIG.gap,
    type: Number,
  },
  // control the gap between slides
  height: {
    default: DEFAULT_CONFIG.height,
    type: [Number, String],
  },
  // control snap position alignment
  snapAlign: {
    default: DEFAULT_CONFIG.snapAlign,
    validator(value: SnapAlign) {
      return SNAP_ALIGN_OPTIONS.includes(value)
    },
  },
  // sliding transition time in ms
  transition: {
    default: DEFAULT_CONFIG.transition,
    type: Number,
  },
  // controls the breakpoint mode relative to the carousel container or the viewport
  breakpointMode: {
    default: DEFAULT_CONFIG.breakpointMode,
    validator(value: BreakpointMode) {
      return BREAKPOINT_MODE_OPTIONS.includes(value)
    },
  },
  // an object to store breakpoints
  breakpoints: {
    default: DEFAULT_CONFIG.breakpoints,
    type: Object,
  },
  // time to auto advance slides in ms
  autoplay: {
    default: DEFAULT_CONFIG.autoplay,
    type: Number,
  },
  // pause autoplay when mouse hover over the carousel
  pauseAutoplayOnHover: {
    default: DEFAULT_CONFIG.pauseAutoplayOnHover,
    type: Boolean,
  },
  // slide number number of initial slide
  modelValue: {
    default: undefined,
    type: Number,
  },
  // toggle mouse dragging.
  mouseDrag: {
    default: DEFAULT_CONFIG.mouseDrag,
    type: Boolean,
  },
  // toggle mouse dragging.
  touchDrag: {
    default: DEFAULT_CONFIG.touchDrag,
    type: Boolean,
  },
  // control snap position alignment
  dir: {
    type: String as PropType<Dir>,
    default: DEFAULT_CONFIG.dir,
    validator(value: Dir) {
      // The value must match one of these strings
      return DIR_OPTIONS.includes(value)
    },
  },
  // aria-labels and additional text labels
  i18n: {
    default: DEFAULT_CONFIG.i18n,
    type: Object as PropType<typeof DEFAULT_CONFIG.i18n>,
  },
}
