import React  from 'react'

class WelcomeComponent extends React.Component{
    render(){
        return <h1>“{this.props.school} is awesome, react works!!!!”</h1>
    }
}

export default WelcomeComponent