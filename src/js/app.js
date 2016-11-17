import 'script!jquery'
import 'script!motion-ui'
import 'script!what-input'

// Modernizr config
// - - - - - - - - - - - -
import './modernizr.js'

// Foundation
// - - - - - - - - - - - -
import './foundation.js'

// FontAwesome
// - - - - - - - - - - - -
import 'font-awesome/scss/font-awesome.scss'

// HMR init
// - - - - - - - - - - - -
if (module.hot) {
    module.hot.accept()
}
