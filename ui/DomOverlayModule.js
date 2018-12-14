import React from 'react'
import ReactDOM from 'react-dom'
import {Module} from 'react-vr-web'

import HelpButton from './HelpButton'
import HelpOverlay from './HelpOverlay'

/*
    REF: https://github.com/facebook/react-360/tree/master/Examples/DomOverlaySample

    The key in this module is having a dom element (created in client.js) where our overlay will be rendered.
    You could render as many different overlays as you want from a single module,
    or have multiple native modules, each taking care of a single overlay.
*/

export default class DomOverlayModule extends Module {
  constructor (overlayContainer) {
    super('DomOverlayModule')

    this._closeOverlay = this.closeOverlay.bind(this)
    this._openOverlay = this.openOverlay.bind(this)
    this._overlayContainer = overlayContainer
  }

  renderHelpButton () {
    ReactDOM.render(
      <HelpButton openOverlay={this._openOverlay} />,
      this._overlayContainer
    )
  }

  openOverlay () {
    ReactDOM.render(
      <HelpOverlay closeOverlay={this._closeOverlay} />,
      this._overlayContainer
    )
  }

  closeOverlay () {
    // Need to change container as right now the container holds the entire DOM, including help button,
    // Ideally use multiple modules to each generate a single overlay as stated above
    ReactDOM.unmountComponentAtNode(this._overlayContainer)
    this.renderHelpButton()
  }
}