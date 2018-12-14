/**
 * The examples provided by Oculus are for non-commercial testing and
 * evaluation purposes only.
 *
 * Oculus reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * OCULUS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import React from 'react'
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  View
} from 'react-vr'

import { LiveTour } from 'live-tour-lab'
import Quiz from './components/Quiz'
import EnvironmentSound from './components/EnvironmentSound'
import ButtonSound from './components/ButtonSound'
import SpeechButton from './components/SpeechButton'

export default class Dentour extends React.Component {

  render() {
    NativeModules.DomOverlayModule.renderHelpButton();

    return (
      <View style={styles.rootView}>
        <LiveTour tourURI='live-tour.json'>
          <EnvironmentSound entries="environment-sound" />
          <ButtonSound entries="button-sound" />
          <SpeechButton entries="speech-button" />
          <Quiz entries='quiz' />
        </LiveTour>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootView: {
    layoutOrigin: [0.5, 0.5],
    position: 'absolute'
  },
  triggerContainer: {
    transform: [{rotateY: 0}, {translateZ: -3}]
  },
  triggerButton: {
    borderRadius: 0.05,
    height: 1,
    width: 1,
    backgroundColor: '#F00',
    justifyContent: 'center'
  },
  triggerText: {
    alignSelf: 'center',
    fontSize: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

AppRegistry.registerComponent('Dentour', () => Dentour)
