import React from 'react'

const HelpButton = props => {
  return (
    <div className='button button-help' onClick={props.openOverlay} />
  )
}

export default HelpButton