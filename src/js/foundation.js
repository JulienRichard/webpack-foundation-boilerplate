// Foundation
// - - - - - - - - - - - -
// Core
var Foundation = require('foundation')
import { foundation } from 'foundation-sites/dist/plugins/foundation.core'

// Utils
import 'foundation-sites/dist/plugins/foundation.util.keyboard'
import 'foundation-sites/dist/plugins/foundation.util.box'
import 'foundation-sites/dist/plugins/foundation.util.triggers'
import 'foundation-sites/dist/plugins/foundation.util.mediaQuery'
import 'foundation-sites/dist/plugins/foundation.util.motion'
import 'foundation-sites/dist/plugins/foundation.util.nest'
import 'foundation-sites/dist/plugins/foundation.util.timerAndImageLoader'
import 'foundation-sites/dist/plugins/foundation.util.touch'

// Components
import 'foundation-sites/dist/plugins/foundation.dropdown.js'
import 'foundation-sites/dist/plugins/foundation.toggler'
import 'foundation-sites/dist/plugins/foundation.interchange'
import 'foundation-sites/dist/plugins/foundation.responsiveToggle'
import 'foundation-sites/dist/plugins/foundation.responsiveMenu'
import 'foundation-sites/dist/plugins/foundation.dropdownMenu'
import 'foundation-sites/dist/plugins/foundation.accordionMenu'
import 'foundation-sites/dist/plugins/foundation.drilldown'
import 'foundation-sites/dist/plugins/foundation.tooltip'
import 'foundation-sites/dist/plugins/foundation.tabs'
import 'foundation-sites/dist/plugins/foundation.accordion'
import 'foundation-sites/dist/plugins/foundation.slider'
import 'foundation-sites/dist/plugins/foundation.sticky'
import 'foundation-sites/dist/plugins/foundation.orbit'
import 'foundation-sites/dist/plugins/foundation.abide'
import 'foundation-sites/dist/plugins/foundation.offcanvas'
import 'foundation-sites/dist/plugins/foundation.magellan'
import 'foundation-sites/dist/plugins/foundation.reveal'
import 'foundation-sites/dist/plugins/foundation.equalizer'

// Config
// - - - - - - - - - - - -
Foundation.Reveal.defaults.animationIn = 'slide-in-down'
Foundation.Reveal.defaults.animationOut = 'fade-out'

// Foundation.Accordion.defaults.slideSpeed = 500
// Foundation.Accordion.defaults.multiExpand = true

// Foundation.Tooltip.defaults.hoverDelay = 200

// Init
// - - - - - - - - - - - -
import $ from 'jquery'
$.fn.foundation = foundation

$(document).ready(function () {
    $(document).foundation()
})
