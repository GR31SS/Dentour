import React from 'react';
import {
  asset,
  Image,
  View,
  Text,
  VrButton
} from 'react-vr';

export default class ButtonSound extends React.Component {
  static defaultProps = {

    // Sound props

    srcSound: null, // Sound file source,
    volume: 1, // Volume where 0 is silent, 1 is 100%, 2 is 200% of original etc.

    // Button style 

    srcIcon: "icons/play-button.png", // Icon file source,
    width: 0.1,
    height: 0.1,
    label: null, // Button text content
    rotateY: 0, // Position of button [degrees around Y axis]
    rotateX: 0, // Position of button [degrees around X axis]
    translateZ: -4, // Z distance of icon [VR units] 
    color: "#000", // Button text color
    backgroundColor: null // Text background color
  };

  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {    
    return (
      <View
      style={{
        backgroundColor: this.props.backgroundColor,
        borderWidth: this.props.borderWidth,
        borderColor: this.props.borderColor,
        borderRadius: this.props.borderRadius,
        transform: [ 
          {rotateY: this.props.rotateY}, 
          {rotateX: this.props.rotateX}, 
          {translate: [0, 0, this.props.translateZ]}
        ]
      }}>
          <VrButton
            onClickSound={{ wav: asset(this.props.srcSound) }}
            style={{
              position:'absolute',
              flexDirection: 'column',
              flex: 1,
              alignItems: 'center',
              layoutOrigin: [0.5, 0, 0],  
            }}
          >
           <Image 
            style={{
              width: this.props.width,
              height: this.props.height
            }}
            source={asset(this.props.srcIcon)}
          />

          <Text style={{
              color: this.props.color,
              textAlign: "center",
              backgroundColor: this.props.backgroundColor,
              paddingLeft: 0.01,
              paddingRight: 0.01,
              marginTop: 0.02
            }}>
            {this.props.label}
           </Text>
          </VrButton>


      </View>
    );
  }
}