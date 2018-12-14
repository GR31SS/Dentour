import React from 'react'

const headingStyle = {
  color: '#923FC5'
}

const HelpOverlay = props => {
  return (
    <div className='overlay-container'>
      <div className='overlay-content'>
        <div className='button button-close' onClick={props.closeOverlay} />
        <h2 style={headingStyle}>Help!</h2>
        <p>
          <ul>
            <li>Left click on the mouse and drag to look around the scene.</li><br></br>
            <li>Hover mouse over information icons for more information.</li><br></br>
            <li>Move between rooms by clicking the arrow buttons.</li><br></br>
            </ul>
          </p>
      </div>
    </div>
  )
}

export default HelpOverlay
