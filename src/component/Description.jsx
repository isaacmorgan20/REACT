import React from 'react'

class Description extends React.Component{
render(){
     const {text} = this.props
    return (
      <>
        <p className='text-lg p-4 text-white'>{text}</p>
      </>
    )
}
}

export default Description

