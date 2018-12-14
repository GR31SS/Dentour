import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr';

export default class Quiz extends React.Component {
    static defaultProps = {
      // Quiz Defaults
      question: "", // Question Default
      true: "", // Option Default
      false: "", // Option Default
      correctAnswer: "", // Option Default
      answerExplanation: "", // answer explanation
      correctOutput: "Correct", // default output if it is correct
      incorrectOutput: "Incorrect", // default output if it is incorrect

      // View defaults
      rotateY: 0, // Default rotateY for View
      rotateX: 0, // Default rotateY for View
      width: 1.1, // Default width for View
      height: 0.78, // Default height for View
      translateZ: -3, // Default translateZ for View
      borderRadius: 0 // Default borderRadius for View
    };

    constructor(props) {
      super();
      // This is the inital state for the output and the answered state of the question
      this.state = {
        answered: false,
        output: false
      };
      // text styling 
      this.fontStyle = {
        fontWeight: 'bold',
        color: '#000000',
        margin: 0.01
      };
      // text styling for when correct answer is selected
      this.correct = {
        fontWeight: 'bold',
        color: '#008000',
        margin: 0.01
      };
      // text styling for when wrong answer is selected
      this.wrong = {
        fontWeight: 'bold',
        color: '#d91e18',
        margin: 0.01
      };
      // binds the handleClick function
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
    }

    // this checks that the answer is correct and will output the message that is rendered
    handleClick(answer) {
      if (answer == this.props.correctAnswer) {
        this.setState({ answered: true, output: true })
      } else {
        this.setState({ answered: true, output: false})
      }
    }

    render() {
      return (
        // styling for the main view using some of the variables above
        <View style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0.5],
          width: this.props.width,
          height: this.props.height,
          backgroundColor: '#b2cce5ee',
          transform: [
            { rotateY: this.props.rotateY }, 
            { rotateX: this.props.rotateX }, 
            { translate: [0, 0, this.props.translateZ] }
          ],
          opacity: 0.9,
          borderRadius: this.props.borderRadius,
          padding: 0.04
          }} 
        >
          {/* This is the code that handles the quiz question and the options */}
          <Text style={this.fontStyle}>{this.props.question}</Text>
          <VrButton onClick={() => this.handleClick(this.props.true)}>
            <Text style={this.fontStyle}>{this.props.true}</Text>
          </VrButton>
          <VrButton onClick={() => this.handleClick(this.props.false)}>
            <Text style={this.fontStyle}>{this.props.false}</Text>
          </VrButton>
          {/* Checks the answer using the handleclick method and outputs the message depending on the answer specified */}
          { this.state.answered &&
            <Text style={ this.state.output ? this.correct : this.wrong }>
              { this.state.output ? this.props.correctOutput : this.props.incorrectOutput }
            </Text>
          }
          {/* This displays a view with text the explanation of the answer and only appears if the question has been answered */}
          { this.state.answered &&
            <View style={{
              position:'flexs',
              layoutOrigin: [0.15, -0.3, 0.5],
              width: 2,
              height: 0.78,
              backgroundColor: '#b2cce5',
              borderRadius: this.props.borderRadius,
              padding: 0.04
              }} 
            >
              <Text style={ this.fontStyle }>
                { this.props.answerExplanation }
              </Text>
            </View>  
          }
        </View>
      )
    }
}
