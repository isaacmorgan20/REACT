import React from 'react'

const Button = (props) => {
    console.log(props);
  return (
    <div>
        <button style={{color: props.color, backgroundColor: props.bg}}>{props.title}</button>
    </div>
  )
}

export default Button